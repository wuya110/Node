/**
 * 使用说明（给第一次用的人看的）：
 *
 * 本脚本用于 Cloudflare Workers，
 * 提供 Shadowsocks + WebSocket (WSS)，
 *
 * 用于解决 Quantumult X 在直连可用、但访问部分站点时
 * 始终无法触发 proxyIP 回退的问题。
 *
 * 提醒：请绑定你自己的域名使用，
 * 有些网络下 workers.dev 的 443 端口会没网。
 *
 * ================= 默认已经帮你配好的参数 =================
 * （你什么都不改，也能直接用）
 *
 * 优选 IP / 域名（客户端连接用）：
 *   www.visa.cn
 *
 * 直连失败时使用的备用代理：
 *   ProxyIP.CMLiussss.net
 *
 * 默认密码 / UUID：
 *   0121c9a2-11e7-49cb-9cf6-1f2e06a3954d
 *
 * ================= 建议你自己修改的地方 =================
 *
 * 修改方法（照着点就行）：
 *
 * 1. 登录 Cloudflare 官网
 * 2. 进入 Workers & Pages
 * 3. 点进你这个 Worker
 * 4. 打开 Settings（设置）
 * 5. 找到 Variables（变量）
 * 6. 添加【纯文本变量】：
 *
 *    变量名：PASSWORD
 *    变量值：你自己的 UUID 或密码
 *
 *    变量名：SUB_PATH
 *    变量值：sub   （订阅路径，可随便改）
 *
 *    变量名：PROXY_IP
 *    变量值：你自己的 proxyIP（可选）
 *
 * 保存即可生效，不用改代码。
 *
 * 订阅地址示例：
 *   https://你的域名/sub
 */

import { connect } from 'cloudflare:sockets';

function parseProxy(addr) {
  if (!addr) return null;
  const [host, port] = addr.split(':');
  return { host, port: +(port || 443) };
}

export default {
  async fetch(req, env) {
    const DEFAULT_UUID = '0121c9a2-11e7-49cb-9cf6-1f2e06a3954d';
    const DEFAULT_PROXYIP = 'ProxyIP.CMLiussss.net';
    const DEFAULT_SUBPATH = 'sub';
    const DEFAULT_SERVER = 'www.visa.cn';

    const PASSWORD = (env.PASSWORD || DEFAULT_UUID).trim();
    const PROXY_IP = (env.PROXY_IP || DEFAULT_PROXYIP).trim();
    const SUB_PATH = (env.SUB_PATH || DEFAULT_SUBPATH).trim();

    const url = new URL(req.url);
    const cleanPath = url.pathname.replace(/\/+$/, '').trim();
    const workerHost = url.hostname;

    if (cleanPath === `/${SUB_PATH}`) {
      const ssBase = btoa(`none:${PASSWORD}`);
      const ssLink =
        `ss://${ssBase}@${DEFAULT_SERVER}:443` +
        `?plugin=v2ray-plugin` +
        `;mode=websocket` +
        `;tls` +
        `;host=${workerHost}` +
        `;path=/` +
        `;mux=0` +
        `#SS-CF`;

      return new Response(ssLink + '\n', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    if (req.headers.get('Upgrade') === 'websocket') {
      const [client, ws] = Object.values(new WebSocketPair());
      ws.accept();

      let remote = null;
      let buffer = new Uint8Array(0);

      const concat = (a, b) => {
        const c = new Uint8Array(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
        return c;
      };

      new ReadableStream({
        start(ctrl) {
          ws.onmessage = e => ctrl.enqueue(new Uint8Array(e.data));
          ws.onclose = () => ctrl.close();
          ws.onerror = () => ctrl.error();
        }
      }).pipeTo(new WritableStream({
        async write(chunk) {
          buffer = concat(buffer, chunk);

          if (remote) {
            const w = remote.writable.getWriter();
            await w.write(chunk);
            w.releaseLock();
            return;
          }

          if (buffer.length < 7) return;

          const v = buffer;
          let p = 1;
          let host = '';

          if (v[0] === 1) {
            host = `${v[p++]}.${v[p++]}.${v[p++]}.${v[p++]}`;
          } else if (v[0] === 3) {
            const len = v[p++];
            host = new TextDecoder().decode(v.slice(p, p + len));
            p += len;
          } else {
            return;
          }

          const port = (v[p++] << 8) + v[p++];
          const payload = buffer.slice(p);
          buffer = new Uint8Array(0);

          async function tryConnect(h, pt) {
            const sock = connect({ hostname: h, port: pt });
            await sock.opened;
            const w = sock.writable.getWriter();
            await w.write(payload);
            w.releaseLock();
            return sock;
          }

          try {
            remote = await tryConnect(host, port);
          } catch {
            const proxy = parseProxy(PROXY_IP);
            if (!proxy) return;
            remote = await tryConnect(proxy.host, proxy.port);
          }

          remote.readable.pipeTo(new WritableStream({
            write(c) { ws.send(c); },
            close() { ws.close(); }
          })).catch(() => {});
        }
      }));

      return new Response(null, { status: 101, webSocket: client });
    }

    return new Response('Not Found', { status: 404 });
  }
};