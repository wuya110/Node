/**
 * Cloudflare Worker - Shadowsocks 服务
 * 
 * 功能：
 * - 支持 QX 和小火箭订阅格式
 * - UUID 路径鉴权，只有路径完全匹配 /UUID 才能连接
 * - 直连失败时自动回退到代理池中的代理 IP
 * 
 * 可配置环境变量：
 * - PASSWORD: 你的 UUID (不填则使用代码内默认值)
 * - IP: 优选代理 IP (不填则使用 www.visa.cn 或 mfa.gov.ua)
 * - SUB_PATH: 订阅路径 (不填则默认为 sub)
 * 
 * 默认配置：
 * - 优选代理 IP 默认值为 'www.visa.cn' 和 'mfa.gov.ua'。
 * - 如果设置了环境变量 IP，将会优先使用该代理 IP。
 */

import { connect } from 'cloudflare:sockets';

export default {
  async fetch(req, env) {
    // ================= 配置区域 (默认值) =================
    const DEFAULT_UUID = '0121c9a2-11e7-49cb-9cf6-1f2e06a3954d'; // 默认 UUID
    const DEFAULT_PROXYIPS = ['www.visa.cn', 'mfa.gov.ua']; // 默认优选代理 IP（可以包含多个）
    const DEFAULT_SUBPATH = 'sub'; // 默认订阅路径

    // 获取环境变量配置
    const UUID = (env.PASSWORD || DEFAULT_UUID).trim(); // UUID 读取
    const IP = env.IP || DEFAULT_PROXYIPS[0]; // 优选代理 IP（优先使用环境变量 IP，未设置时使用默认优选 IP）
    const SUB_PATH = (env.SUB_PATH || DEFAULT_SUBPATH).trim(); // 订阅路径

    const url = new URL(req.url);
    const cleanPath = url.pathname.replace(/\/+$/, '').trim();
    const host = url.hostname;

    // ================= 代理池 (备用代理) =================
    const proxyIpAddrs = { 
      EU: 'ProxyIP.DE.CMLiussss.net', 
      AS: 'ProxyIP.SG.CMLiussss.net', 
      JP: 'ProxyIP.JP.CMLiussss.net', 
      US: 'ProxyIP.US.CMLiussss.net'
    }; // 备用代理 IP 池

    // ================= 订阅输出 =================
    if (cleanPath === `/${SUB_PATH}`) {
      const isQX = (req.headers.get('User-Agent') || '').toLowerCase().includes('quantumult');
      let config = '';

      if (isQX) {
        // QX 格式: Shadowsocks
        config = `shadowsocks=${IP}:443,method=none,password=${UUID},obfs=wss,obfs-host=${host},obfs-uri=/${UUID},fast-open=false,udp-relay=false,tag=CF-${host}`;
      } else {
        // 小火箭 / V2Ray 格式: ss://
        config = `ss://${btoa(`none:${UUID}`)}@${IP}:443?plugin=v2ray-plugin;mode=websocket;tls;host=${host};path=/${UUID};mux=0#CF-${host}`;
      }

      return new Response(btoa(config), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    // ================= WebSocket 连接处理 =================
    if (req.headers.get('Upgrade') === 'websocket') {
      // 安全鉴权：路径必须严格匹配 UUID
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
          // 合并缓冲区
          const temp = new Uint8Array(buffer.length + chunk.length);
          temp.set(buffer); temp.set(chunk, buffer.length);
          buffer = temp;

          if (remote) {
            const w = remote.writable.getWriter();
            await w.write(chunk);
            w.releaseLock();
            return;
          }

          // 解析目标地址和端口
          if (buffer.length < 7) return;

          let address = '', port = 0, p = 1;
          const type = buffer[0];

          try {
            if (type === 1) { // IPv4
              address = buffer.slice(p, p + 4).join('.');
              p += 4;
            } else if (type === 3) { // Domain
              const len = buffer[p++];
              address = new TextDecoder().decode(buffer.slice(p, p + len));
              p += len;
            } else { ws.close(); return; } // 不支持的协议

            port = (buffer[p++] << 8) + buffer[p++];
            const payload = buffer.slice(p);
            buffer = new Uint8Array(0); // 释放内存

            // 尝试直连目标，失败则回退到代理池
            const conn = async (h, pt) => {
              const s = connect({ hostname: h, port: pt });
              await s.opened;
              const w = s.writable.getWriter();
              await w.write(payload);
              w.releaseLock();
              return s;
            };

            try {
              remote = await conn(address, port); // 尝试直连
            } catch {
              // 使用代理池回退
              const proxyHost = Object.values(proxyIpAddrs)[Math.floor(Math.random() * Object.keys(proxyIpAddrs).length)];
              remote = await conn(proxyHost, 443); // 默认端口 443
            }

            // 连接成功后建立管道
            remote.readable.pipeTo(new WritableStream({
              write(c) { ws.send(c); },
              close() { ws.close(); }
            })).catch(() => {});

          } catch (e) {
            ws.close(); // 发生错误时关闭连接
          }
        }
      })).catch(() => {});

      return new Response(null, { status: 101, webSocket: client });
    }

    return new Response('Not Found', { status: 404 });
  }
};