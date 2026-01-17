/**
 * Cloudflare Worker - Shadowsocks 服务 (支持多优选IP版 + DoH防泄露)
 * * 功能：
 * - 支持 QX 和小火箭订阅格式
 * - UUID 路径鉴权
 * - 直连失败时，随机从 PROXYIP 列表中选择一个进行回退
 * - [新增] UDP 53 端口流量拦截，走 DoH (1.1.1.1) 防止 DNS 泄露
 * * * 可配置环境变量 (Cloudflare 后台设置):
 * - PASSWORD: 你的 UUID
 * - IP: 订阅链接中显示的伪装 IP (客户端入口)
 * - PROXYIP: 备用代理 IP 列表，使用英文逗号分隔 (Worker 出口)
 * 例如: ProxyIP.CMLiussss.ne, 1.2.3.4
 * - SUB_PATH: 订阅路径
 * * 获取订阅链接：
 * - 访问 https://你的worker域名/sub 即可获取订阅链接
 */

import { connect } from 'cloudflare:sockets';

export default {
  async fetch(req, env) {
    // ================= 配置区域 =================
    const DEFAULT_UUID = '0121c9a2-11e7-49cb-9cf6-1f2e06a3954d';
    const DEFAULT_PROXY_IP = 'ProxyIP.CMLiussss.net'; 
    const DEFAULT_SUBPATH = 'sub';

    // 获取环境变量配置
    const UUID = (env.PASSWORD || DEFAULT_UUID).trim();
    const LINK_IP = env.IP || 'www.visa.cn'; 
    const SUB_PATH = (env.SUB_PATH || DEFAULT_SUBPATH).trim();
    
    // --- 核心修改：处理多个 ProxyIP ---
    // 读取环境变量，按逗号分割，去空格，过滤空值
    const rawProxyIPs = env.PROXYIP || DEFAULT_PROXY_IP;
    const proxyIPList = rawProxyIPs.split(',').map(ip => ip.trim()).filter(Boolean);

    const url = new URL(req.url);
    const cleanPath = url.pathname.replace(/\/+$/, '').trim();
    const host = url.hostname;

    // ================= 订阅输出 =================
    if (cleanPath === `/${SUB_PATH}`) {
      const isQX = (req.headers.get('User-Agent') || '').toLowerCase().includes('quantumult');
      let config = '';
      if (isQX) {
        config = `shadowsocks=${LINK_IP}:443,method=none,password=${UUID},obfs=wss,obfs-host=${host},obfs-uri=/${UUID},fast-open=false,udp-relay=false,tag=CF-${host}`;
      } else {
        config = `ss://${btoa(`none:${UUID}`)}@${LINK_IP}:443?plugin=v2ray-plugin;mode=websocket;tls;host=${host};path=/${UUID};mux=0#CF-${host}`;
      }
      return new Response(btoa(config), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    // ================= WebSocket 连接处理 =================
    if (req.headers.get('Upgrade') === 'websocket') {
      if (cleanPath !== `/${UUID}`) return new Response(null, { status: 403 });

      const [client, ws] = Object.values(new WebSocketPair());
      ws.accept();
      
      let remote = null;
      let buffer = new Uint8Array(0);

      new ReadableStream({
        start(ctrl) {
          ws.onmessage = e => ctrl.enqueue(new Uint8Array(e.data));
          ws.onclose = ws.onerror = () => ctrl.close();
        }
      }).pipeTo(new WritableStream({
        async write(chunk) {
          const temp = new Uint8Array(buffer.length + chunk.length);
          temp.set(buffer); temp.set(chunk, buffer.length);
          buffer = temp;

          if (remote) {
            const w = remote.writable.getWriter();
            await w.write(chunk);
            w.releaseLock();
            return;
          }

          if (buffer.length < 7) return;

          let address = '', port = 0, p = 1;
          const type = buffer[0];

          try {
            if (type === 1) { address = buffer.slice(p, p + 4).join('.'); p += 4; } 
            else if (type === 3) { const len = buffer[p++]; address = new TextDecoder().decode(buffer.slice(p, p + len)); p += len; } 
            else { ws.close(); return; }

            port = (buffer[p++] << 8) + buffer[p++];

            // [新增] 保存头部数据，用于UDP DNS回包
            const header = buffer.slice(0, p);
            
            const payload = buffer.slice(p);
            buffer = new Uint8Array(0);

            // ================= [新增] DNS 拦截逻辑 (DoH) =================
            // 如果目标端口是 53，则拦截并走 DoH
            if (port === 53) {
                try {
                    const resp = await fetch('https://1.1.1.1/dns-query', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/dns-message'
                        },
                        body: payload
                    });

                    if (ws.readyState === 1) {
                        const result = new Uint8Array(await resp.arrayBuffer());
                        // 构造回包：[原Shadowsocks头部] + [DNS查询结果]
                        const wrap = new Uint8Array(header.length + result.length);
                        wrap.set(header);
                        wrap.set(result, header.length);
                        ws.send(wrap);
                    }
                } catch (e) {
                    // console.log('DoH Error:', e);
                }
                return; // 拦截结束，不建立 TCP 连接
            }
            // ================= [结束] DNS 拦截逻辑 =================

            // 连接函数
            const tryConnect = async (h, pt) => {
               const s = connect({ hostname: h, port: pt });
               await s.opened;
               return s;
            };

            try {
              // 1. 尝试直连
              remote = await tryConnect(address, port);
            } catch (err1) {
              try {
                // 2. 直连失败，从列表中【随机】选取一个 ProxyIP
                const randomProxyIP = proxyIPList[Math.floor(Math.random() * proxyIPList.length)];
                
                // console.log(`直连失败，尝试使用 ProxyIP: ${randomProxyIP}`); // 调试用
                remote = await tryConnect(randomProxyIP, 443);
              } catch (err2) {
                ws.close();
                return;
              }
            }

            if (remote) {
                const w = remote.writable.getWriter();
                await w.write(payload);
                w.releaseLock();
                remote.readable.pipeTo(new WritableStream({
                write(c) { ws.send(c); },
                close() { ws.close(); }
                })).catch(() => {});
            }
          } catch (e) { ws.close(); }
        }
      })).catch(() => {});

      return new Response(null, { status: 101, webSocket: client });
    }
    return new Response('Not Found', { status: 404 });
  }
};
