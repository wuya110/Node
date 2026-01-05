/**
 * Cloudflare Worker - Shadowsocks 服务
 * * 功能：
 * - 支持 QX 和小火箭订阅格式
 * - UUID 路径鉴权，只有路径完全匹配 /UUID 才能连接
 * - 直连失败时自动回退到代理池中的代理 IP
 * * 可配置环境变量：
 * - PASSWORD: 你的 UUID (不填则使用代码内默认值)
 * - IP: 优选代理 IP (不填则使用 www.visa.cn 或 mfa.gov.ua)
 * - SUB_PATH: 订阅路径 (不填则默认为 sub)
 * * 默认配置：
 * - 优选代理 IP 默认值为 'www.visa.cn' 和 'mfa.gov.ua'。
 * - 如果设置了环境变量 IP，将会优先使用该代理 IP。
 * * 获取订阅链接：
 * - 访问 https://你的worker域名/sub 即可获取订阅链接。
 */
// =============================================================================

import { connect } from 'cloudflare:sockets';

// ================= 移植区域：智能路由数据 =================
// 备用代理 IP 池 (来自脚本2)
const proxyIpAddrs = {
  EU: 'ProxyIP.DE.CMLiussss.net', 
  AS: 'ProxyIP.SG.CMLiussss.net', 
  JP: 'ProxyIP.JP.CMLiussss.net', 
  US: 'ProxyIP.US.CMLiussss.net',
  Global: 'ProxyIP.CMLiussss.net' // 兜底全局
};

// Cloudflare 数据中心代码映射 (来自脚本2)
const coloRegions = {
  JP: ['FUK', 'ICN', 'KIX', 'NRT', 'OKA'],
  EU: ['ACC', 'ADB', 'ALA', 'ALG', 'AMM', 'AMS', 'ARN', 'ATH', 'BAH', 'BCN', 'BEG', 'BGW', 'BOD', 'BRU', 'BTS', 'BUD', 'CAI',
       'CDG', 'CPH', 'CPT', 'DAR', 'DKR', 'DMM', 'DOH', 'DUB', 'DUR', 'DUS', 'DXB', 'EBB', 'EDI', 'EVN', 'FCO', 'FRA', 'GOT',
       'GVA', 'HAM', 'HEL', 'HRE', 'IST', 'JED', 'JIB', 'JNB', 'KBP', 'KEF', 'KWI', 'LAD', 'LED', 'LHR', 'LIS', 'LOS', 'LUX',
       'LYS', 'MAD', 'MAN', 'MCT', 'MPM', 'MRS', 'MUC', 'MXP', 'NBO', 'OSL', 'OTP', 'PMO', 'PRG', 'RIX', 'RUH', 'RUN', 'SKG',
       'SOF', 'STR', 'TBS', 'TLL', 'TLV', 'TUN', 'VIE', 'VNO', 'WAW', 'ZAG', 'ZRH'],
  AS: ['ADL', 'AKL', 'AMD', 'BKK', 'BLR', 'BNE', 'BOM', 'CBR', 'CCU', 'CEB', 'CGK', 'CMB', 'COK', 'DAC', 'DEL', 'HAN', 'HKG',
       'HYD', 'ISB', 'JHB', 'JOG', 'KCH', 'KHH', 'KHI', 'KTM', 'KUL', 'LHE', 'MAA', 'MEL', 'MFM', 'MLE', 'MNL', 'NAG', 'NOU',
       'PAT', 'PBH', 'PER', 'PNH', 'SGN', 'SIN', 'SYD', 'TPE', 'ULN', 'VTE']
};

export default {
  async fetch(req, env) {
    // ================= 配置区域 (默认值) =================
    const DEFAULT_UUID = '0121c9a2-11e7-49cb-9cf6-1f2e06a3954d'; // 默认 UUID
    const DEFAULT_SUBPATH = 'sub'; // 默认订阅路径

    // 获取环境变量配置
    const UUID = (env.PASSWORD || DEFAULT_UUID).trim(); // UUID 读取
    // 注意：这里的 IP 主要用于订阅显示，实际连接会优先走 Geo-Routing
    const IP = env.IP || 'www.visa.cn'; 
    const SUB_PATH = (env.SUB_PATH || DEFAULT_SUBPATH).trim(); // 订阅路径

    const url = new URL(req.url);
    const cleanPath = url.pathname.replace(/\/+$/, '').trim();
    const host = url.hostname;

    // ================= 辅助函数：智能获取优选 IP =================
    const getBestProxyIP = (colo) => {
      if (!colo) return proxyIpAddrs.Global;
      for (const [region, colos] of Object.entries(coloRegions)) {
        if (colos.includes(colo)) {
          return proxyIpAddrs[region];
        }
      }
      return proxyIpAddrs.Global;
    };

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

      // 获取当前请求的地理位置代码 (Colo) 并计算优选 IP
      const currentColo = req.cf?.colo;
      const optimizedProxyHost = getBestProxyIP(currentColo);

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

            // ================= 增强连接逻辑：并发与赛马 =================
            const tryConnect = async (h, pt, concurrency = 1) => {
               // 并发建立 socket 连接，谁快用谁
               const attempts = Array(concurrency).fill(null).map(async () => {
                  const s = connect({ hostname: h, port: pt });
                  await s.opened;
                  return s;
               });
               return Promise.any(attempts);
            };

            try {
              // 1. 尝试直连目标 (并发=1)
              remote = await tryConnect(address, port, 1);
            } catch {
              try {
                // 2. 直连失败，使用区域优选 IP (并发=3，提高抢占成功率)
                // console.log(`直连失败，切换到区域优选: ${optimizedProxyHost} (Region: ${currentColo})`);
                remote = await tryConnect(optimizedProxyHost, 443, 3);
              } catch {
                // 3. 优选失败，使用全局兜底 IP (并发=2)
                remote = await tryConnect(proxyIpAddrs.Global, 443, 2);
              }
            }

            // 连接成功后建立管道
            if (remote) {
                const w = remote.writable.getWriter();
                await w.write(payload);
                w.releaseLock();
                
                remote.readable.pipeTo(new WritableStream({
                write(c) { ws.send(c); },
                close() { ws.close(); }
                })).catch(() => {});
            }

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
