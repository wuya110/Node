/**
 * * Cloudflare Workers 极简高速版 (兼容 QX + 小火箭)
 * * * * 核心功能：
 * * 1. 智能分流：QX 自动返回 shadowscoks 原生格式，小火箭返回 ss:// 格式。
 * * 2. 安全鉴权：只有路径完全匹配 /UUID 才能连接，防止被扫。
 * * 3. 自动回退：直连失败自动走 ProxyIP。
 * *
 * * 可配置的环境变量 (Variables):
 * * - PASSWORD: 你的 UUID (不填则使用代码内默认值)
 * * - PROXY_IP: 备用代理 IP/域名 (不填则使用代码内默认值)
 * * - SUB_PATH: 订阅路径 (不填则默认为 sub)
 */

import { connect } from 'cloudflare:sockets';

export default {
  async fetch(req, env) {
    /* ================= 配置区域 (默认值) ================= */
    // 如果环境变量里没填，就会用这里的值
    const DEFAULT_UUID = '0121c9a2-11e7-49cb-9cf6-1f2e06a3954d';
    const DEFAULT_PROXYIP = 'ProxyIP.CMLiussss.net';
    const DEFAULT_SUBPATH = 'sub';
    const DEFAULT_SERVER = 'www.visa.cn'; // 优选域名/IP

    /* ================= 逻辑处理 ================= */
    const UUID = (env.PASSWORD || DEFAULT_UUID).trim();
    const PROXY_IP = (env.PROXY_IP || DEFAULT_PROXYIP).trim();
    const SUB_PATH = (env.SUB_PATH || DEFAULT_SUBPATH).trim();

    const url = new URL(req.url);
    const cleanPath = url.pathname.replace(/\/+$/, '').trim();
    const host = url.hostname;

    // 1. 订阅输出 (智能识别客户端)
    if (cleanPath === `/${SUB_PATH}`) {
      const isQX = (req.headers.get('User-Agent') || '').toLowerCase().includes('quantumult');
      let config = '';

      if (isQX) {
        // QX 专用原生格式 (解决 obfs 路径识别问题)
        config = `shadowsocks=${DEFAULT_SERVER}:443,method=none,password=${UUID},obfs=wss,obfs-host=${host},obfs-uri=/${UUID},fast-open=false,udp-relay=false,tag=CF-${host}`;
      } else {
        // 小火箭/V2Ray 标准格式
        config = `ss://${btoa(`none:${UUID}`)}@${DEFAULT_SERVER}:443?plugin=v2ray-plugin%3Bmode%3Dwebsocket%3Btls%3Bhost%3D${host}%3Bpath%3D%2F${UUID}%3Bmux%3D0#CF-${host}`;
      }
      
      return new Response(btoa(config), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    // 2. WebSocket 代理逻辑
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
          // 合并缓冲
          const temp = new Uint8Array(buffer.length + chunk.length);
          temp.set(buffer); temp.set(chunk, buffer.length);
          buffer = temp;

          if (remote) {
            const w = remote.writable.getWriter();
            await w.write(chunk);
            w.releaseLock();
            return;
          }

          // 头部数据长度检查
          if (buffer.length < 7) return;

          // 解析目标地址 (不为了拦截，只为了连接)
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

            // 连接封装函数
            const conn = async (h, pt) => {
              const s = connect({ hostname: h, port: pt });
              await s.opened;
              const w = s.writable.getWriter();
              await w.write(payload);
              w.releaseLock();
              return s;
            };

            // 核心：直连失败 -> 自动切换 ProxyIP
            try {
              remote = await conn(address, port);
            } catch {
              // 简单的 ProxyIP 解析 (支持 ip 或 ip:port)
              const parts = PROXY_IP.split(':');
              const pHost = parts[0];
              const pPort = +(parts[1] || 443);
              remote = await conn(pHost, pPort);
            }

            // 建立管道
            remote.readable.pipeTo(new WritableStream({
              write(c) { ws.send(c); },
              close() { ws.close(); }
            })).catch(() => {});

          } catch (e) {
            ws.close();
          }
        }
      })).catch(() => {});

      return new Response(null, { status: 101, webSocket: client });
    }

    return new Response('Not Found', { status: 404 });
  }
};
