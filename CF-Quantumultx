var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js
import { connect } from "cloudflare:sockets";
var config_JSON;
var \u53CD\u4EE3IP = "";
var \u542F\u7528SOCKS5\u53CD\u4EE3 = null;
var \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = false;
var \u6211\u7684SOCKS5\u8D26\u53F7 = "";
var parsedSocks5Address = {};
var \u7F13\u5B58\u53CD\u4EE3IP;
var \u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4;
var \u7F13\u5B58\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 = 0;
var \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = true;
var SOCKS5\u767D\u540D\u5355 = ["*tapecontent.net", "*cloudatacdn.com", "*loadshare.org", "*cdn-centaurus.com", "scholar.google.com"];
var Pages\u9759\u6001\u9875\u9762 = "https://edt-pages.github.io";
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const UA = request.headers.get("User-Agent") || "null";
    const upgradeHeader = request.headers.get("Upgrade");
    const \u7BA1\u7406\u5458\u5BC6\u7801 = env.ADMIN || env.admin || env.PASSWORD || env.password || env.pswd || env.TOKEN || env.KEY || env.UUID || env.uuid;
    const \u52A0\u5BC6\u79D8\u94A5 = env.KEY || "\u52FF\u52A8\u6B64\u9ED8\u8BA4\u5BC6\u94A5\uFF0C\u6709\u9700\u6C42\u8BF7\u81EA\u884C\u901A\u8FC7\u6DFB\u52A0\u53D8\u91CFKEY\u8FDB\u884C\u4FEE\u6539";
    const userIDMD5 = await MD5MD5(\u7BA1\u7406\u5458\u5BC6\u7801 + \u52A0\u5BC6\u79D8\u94A5);
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    const envUUID = env.UUID || env.uuid;
    const userID = envUUID && uuidRegex.test(envUUID) ? envUUID.toLowerCase() : [userIDMD5.slice(0, 8), userIDMD5.slice(8, 12), "4" + userIDMD5.slice(13, 16), "8" + userIDMD5.slice(17, 20), userIDMD5.slice(20)].join("-");
    const hosts = env.HOST ? (await \u6574\u7406\u6210\u6570\u7EC4(env.HOST)).map((h) => h.toLowerCase().replace(/^https?:\/\//, "").split("/")[0].split(":")[0]) : [url.hostname];
    const host = hosts[0];
    if (env.PROXYIP) {
      const proxyIPs = await \u6574\u7406\u6210\u6570\u7EC4(env.PROXYIP);
      \u53CD\u4EE3IP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
      \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = false;
    } else \u53CD\u4EE3IP = (request.cf.colo + ".PrOxYIp.CmLiUsSsS.nEt").toLowerCase();
    const \u8BBF\u95EEIP = request.headers.get("X-Real-IP") || request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For") || request.headers.get("True-Client-IP") || request.headers.get("Fly-Client-IP") || request.headers.get("X-Appengine-Remote-Addr") || request.headers.get("X-Forwarded-For") || request.headers.get("X-Real-IP") || request.headers.get("X-Cluster-Client-IP") || request.cf?.clientTcpRtt || "\u672A\u77E5IP";
    if (env.GO2SOCKS5) SOCKS5\u767D\u540D\u5355 = await \u6574\u7406\u6210\u6570\u7EC4(env.GO2SOCKS5);
    if (!upgradeHeader || upgradeHeader !== "websocket") {
      if (url.protocol === "http:") return Response.redirect(url.href.replace(`http://${url.hostname}`, `https://${url.hostname}`), 301);
      if (!\u7BA1\u7406\u5458\u5BC6\u7801) return fetch(Pages\u9759\u6001\u9875\u9762 + "/noADMIN").then((r) => {
        const headers = new Headers(r.headers);
        headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        headers.set("Pragma", "no-cache");
        headers.set("Expires", "0");
        return new Response(r.body, { status: 404, statusText: r.statusText, headers });
      });
      if (env.KV && typeof env.KV.get === "function") {
        const \u8BBF\u95EE\u8DEF\u5F84 = url.pathname.slice(1).toLowerCase();
        const \u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 = url.pathname.slice(1);
        if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === \u52A0\u5BC6\u79D8\u94A5 && \u52A0\u5BC6\u79D8\u94A5 !== "\u52FF\u52A8\u6B64\u9ED8\u8BA4\u5BC6\u94A5\uFF0C\u6709\u9700\u6C42\u8BF7\u81EA\u884C\u901A\u8FC7\u6DFB\u52A0\u53D8\u91CFKEY\u8FDB\u884C\u4FEE\u6539") {
          const params = new URLSearchParams(url.search);
          params.set("token", await MD5MD5(host + userID));
          return new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": `/sub?${params.toString()}` } });
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "login") {
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies.split(";").find((c) => c.trim().startsWith("auth="))?.split("=")[1];
          if (authCookie == await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)) return new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": "/admin" } });
          if (request.method === "POST") {
            const formData = await request.text();
            const params = new URLSearchParams(formData);
            const \u8F93\u5165\u5BC6\u7801 = params.get("password");
            if (\u8F93\u5165\u5BC6\u7801 === \u7BA1\u7406\u5458\u5BC6\u7801) {
              const \u54CD\u5E94 = new Response(JSON.stringify({ success: true }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              \u54CD\u5E94.headers.set("Set-Cookie", `auth=${await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)}; Path=/; Max-Age=86400; HttpOnly`);
              return \u54CD\u5E94;
            }
          }
          return fetch(Pages\u9759\u6001\u9875\u9762 + "/login");
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin" || \u8BBF\u95EE\u8DEF\u5F84.startsWith("admin/")) {
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies.split(";").find((c) => c.trim().startsWith("auth="))?.split("=")[1];
          if (!authCookie || authCookie !== await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)) return new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": "/login" } });
          if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/log.json") {
            const \u8BFB\u53D6\u65E5\u5FD7\u5185\u5BB9 = await env.KV.get("log.json") || "[]";
            return new Response(\u8BFB\u53D6\u65E5\u5FD7\u5185\u5BB9, { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
          } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/getCloudflareUsage") {
            try {
              const Usage_JSON = await getCloudflareUsage(url.searchParams.get("Email"), url.searchParams.get("GlobalAPIKey"), url.searchParams.get("AccountID"), url.searchParams.get("APIToken"));
              return new Response(JSON.stringify(Usage_JSON, null, 2), { status: 200, headers: { "Content-Type": "application/json" } });
            } catch (err) {
              const errorResponse = { msg: "\u67E5\u8BE2\u8BF7\u6C42\u91CF\u5931\u8D25\uFF0C\u5931\u8D25\u539F\u56E0\uFF1A" + err.message, error: err.message };
              return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
            }
          } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/getADDAPI") {
            if (url.searchParams.get("url")) {
              const \u5F85\u9A8C\u8BC1\u4F18\u9009URL = url.searchParams.get("url");
              try {
                new URL(\u5F85\u9A8C\u8BC1\u4F18\u9009URL);
                const \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9 = await \u8BF7\u6C42\u4F18\u9009API([\u5F85\u9A8C\u8BC1\u4F18\u9009URL], url.searchParams.get("port") || "443");
                const \u4F18\u9009API\u7684IP = \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[0].length > 0 ? \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[0] : \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[1];
                return new Response(JSON.stringify({ success: true, data: \u4F18\u9009API\u7684IP }, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (err) {
                const errorResponse = { msg: "\u9A8C\u8BC1\u4F18\u9009API\u5931\u8D25\uFF0C\u5931\u8D25\u539F\u56E0\uFF1A" + err.message, error: err.message };
                return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            }
            return new Response(JSON.stringify({ success: false, data: [] }, null, 2), { status: 403, headers: { "Content-Type": "application/json;charset=utf-8" } });
          } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/check") {
            let \u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94;
            if (url.searchParams.has("socks5")) {
              \u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94 = await SOCKS5\u53EF\u7528\u6027\u9A8C\u8BC1("socks5", url.searchParams.get("socks5"));
            } else if (url.searchParams.has("http")) {
              \u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94 = await SOCKS5\u53EF\u7528\u6027\u9A8C\u8BC1("http", url.searchParams.get("http"));
            } else {
              return new Response(JSON.stringify({ error: "\u7F3A\u5C11\u4EE3\u7406\u53C2\u6570" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
            }
            return new Response(JSON.stringify(\u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
          }
          config_JSON = await \u8BFB\u53D6config_JSON(env, host, userID);
          if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/init") {
            try {
              config_JSON = await \u8BFB\u53D6config_JSON(env, host, userID, true);
              ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Init_Config", config_JSON));
              config_JSON.init = "\u914D\u7F6E\u5DF2\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C";
              return new Response(JSON.stringify(config_JSON, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
            } catch (err) {
              const errorResponse = { msg: "\u914D\u7F6E\u91CD\u7F6E\u5931\u8D25\uFF0C\u5931\u8D25\u539F\u56E0\uFF1A" + err.message, error: err.message };
              return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
            }
          } else if (request.method === "POST") {
            if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/config.json") {
              try {
                const newConfig = await request.json();
                if (!newConfig.UUID || !newConfig.HOST) return new Response(JSON.stringify({ error: "\u914D\u7F6E\u4E0D\u5B8C\u6574" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
                await env.KV.put("config.json", JSON.stringify(newConfig, null, 2));
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u914D\u7F6E\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/cf.json") {
              try {
                const newConfig = await request.json();
                const CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
                if (!newConfig.init || newConfig.init !== true) {
                  if (newConfig.Email && newConfig.GlobalAPIKey) {
                    CF_JSON.Email = newConfig.Email;
                    CF_JSON.GlobalAPIKey = newConfig.GlobalAPIKey;
                  } else if (newConfig.AccountID && newConfig.APIToken) {
                    CF_JSON.AccountID = newConfig.AccountID;
                    CF_JSON.APIToken = newConfig.APIToken;
                  } else if (newConfig.UsageAPI) {
                    CF_JSON.UsageAPI = newConfig.UsageAPI;
                  } else {
                    return new Response(JSON.stringify({ error: "\u914D\u7F6E\u4E0D\u5B8C\u6574" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
                  }
                }
                await env.KV.put("cf.json", JSON.stringify(CF_JSON, null, 2));
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u914D\u7F6E\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/tg.json") {
              try {
                const newConfig = await request.json();
                if (newConfig.init && newConfig.init === true) {
                  const TG_JSON = { BotToken: null, ChatID: null };
                  await env.KV.put("tg.json", JSON.stringify(TG_JSON, null, 2));
                } else {
                  if (!newConfig.BotToken || !newConfig.ChatID) return new Response(JSON.stringify({ error: "\u914D\u7F6E\u4E0D\u5B8C\u6574" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
                  await env.KV.put("tg.json", JSON.stringify(newConfig, null, 2));
                }
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u914D\u7F6E\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/ADD.txt") {
              try {
                const customIPs = await request.text();
                await env.KV.put("ADD.txt", customIPs);
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Custom_IPs", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u81EA\u5B9A\u4E49IP\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u81EA\u5B9A\u4E49IP\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u81EA\u5B9A\u4E49IP\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else return new Response(JSON.stringify({ error: "\u4E0D\u652F\u6301\u7684POST\u8BF7\u6C42\u8DEF\u5F84" }), { status: 404, headers: { "Content-Type": "application/json;charset=utf-8" } });
          } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/config.json") {
            return new Response(JSON.stringify(config_JSON, null, 2), { status: 200, headers: { "Content-Type": "application/json" } });
          } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/ADD.txt") {
            let \u672C\u5730\u4F18\u9009IP = await env.KV.get("ADD.txt") || "null";
            if (\u672C\u5730\u4F18\u9009IP == "null") \u672C\u5730\u4F18\u9009IP = (await \u751F\u6210\u968F\u673AIP(request, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673A\u6570\u91CF, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u6307\u5B9A\u7AEF\u53E3))[1];
            return new Response(\u672C\u5730\u4F18\u9009IP, { status: 200, headers: { "Content-Type": "text/plain;charset=utf-8", "asn": request.cf.asn } });
          } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/cf.json") {
            return new Response(JSON.stringify(request.cf, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
          }
          ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Admin_Login", config_JSON));
          return fetch(Pages\u9759\u6001\u9875\u9762 + "/admin");
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "logout" || uuidRegex.test(\u8BBF\u95EE\u8DEF\u5F84)) {
          const \u54CD\u5E94 = new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": "/login" } });
          \u54CD\u5E94.headers.set("Set-Cookie", "auth=; Path=/; Max-Age=0; HttpOnly");
          return \u54CD\u5E94;
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "sub") {
          const \u8BA2\u9605TOKEN = await MD5MD5(host + userID);
          if (url.searchParams.get("token") === \u8BA2\u9605TOKEN) {
            config_JSON = await \u8BFB\u53D6config_JSON(env, host, userID);
            ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Get_SUB", config_JSON));
            const ua = UA.toLowerCase();
            const expire = 4102329600;
            const now = Date.now();
            const today = new Date(now);
            today.setHours(0, 0, 0, 0);
            const UD = Math.floor((now - today.getTime()) / 864e5 * 24 * 1099511627776 / 2);
            let pagesSum = UD, workersSum = UD, total = 24 * 1099511627776;
            if (config_JSON.CF.Usage.success) {
              pagesSum = config_JSON.CF.Usage.pages;
              workersSum = config_JSON.CF.Usage.workers;
              total = Number.isFinite(config_JSON.CF.Usage.max) ? config_JSON.CF.Usage.max / 1e3 * 1024 : 1024 * 100;
            }
            const responseHeaders = {
              "content-type": "text/plain; charset=utf-8",
              "Profile-Update-Interval": config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBUpdateTime,
              "Profile-web-page-url": url.protocol + "//" + url.host + "/admin",
              "Subscription-Userinfo": `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=${expire}`,
              "Cache-Control": "no-store"
            };
            const isSubConverterRequest = url.searchParams.has("b64") || url.searchParams.has("base64") || request.headers.get("subconverter-request") || request.headers.get("subconverter-version") || ua.includes("subconverter") || ua.includes("CF-Workers-SUB".toLowerCase());
            const \u8BA2\u9605\u7C7B\u578B = isSubConverterRequest ? "mixed" : url.searchParams.has("target") ? url.searchParams.get("target") : url.searchParams.has("clash") || ua.includes("clash") || ua.includes("meta") || ua.includes("mihomo") ? "clash" : url.searchParams.has("sb") || url.searchParams.has("singbox") || ua.includes("singbox") || ua.includes("sing-box") ? "singbox" : url.searchParams.has("surge") || ua.includes("surge") ? "surge&ver=4" : url.searchParams.has("quanx") || ua.includes("quantumult") ? "quanx" : url.searchParams.has("loon") || ua.includes("loon") ? "loon" : "mixed";
            if (!ua.includes("mozilla")) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBNAME)}`;
            const \u534F\u8BAE\u7C7B\u578B = url.searchParams.has("surge") || ua.includes("surge") ? "trojan" : config_JSON.\u534F\u8BAE\u7C7B\u578B;
            let \u8BA2\u9605\u5185\u5BB9 = "";
            if (\u8BA2\u9605\u7C7B\u578B === "mixed") {
              const TLS\u5206\u7247\u53C2\u6570 = config_JSON.TLS\u5206\u7247 == "Shadowrocket" ? `&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}` : config_JSON.TLS\u5206\u7247 == "Happ" ? `&fragment=${encodeURIComponent("3,1,tlshello")}` : "";
              let \u5B8C\u6574\u4F18\u9009IP = [], \u5176\u4ED6\u8282\u70B9LINK = "", \u53CD\u4EE3IP\u6C60 = [];
              if (!url.searchParams.has("sub") && config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.local) {
                const \u5B8C\u6574\u4F18\u9009\u5217\u8868 = config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673AIP ? (await \u751F\u6210\u968F\u673AIP(request, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673A\u6570\u91CF, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u6307\u5B9A\u7AEF\u53E3))[0] : await env.KV.get("ADD.txt") ? await \u6574\u7406\u6210\u6570\u7EC4(await env.KV.get("ADD.txt")) : (await \u751F\u6210\u968F\u673AIP(request, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673A\u6570\u91CF, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u6307\u5B9A\u7AEF\u53E3))[0];
                const \u4F18\u9009API = [], \u4F18\u9009IP = [], \u5176\u4ED6\u8282\u70B9 = [];
                for (const \u5143\u7D20 of \u5B8C\u6574\u4F18\u9009\u5217\u8868) {
                  if (\u5143\u7D20.toLowerCase().startsWith("sub://")) {
                    \u4F18\u9009API.push(\u5143\u7D20);
                  } else {
                    const subMatch = \u5143\u7D20.match(/sub\s*=\s*([^\s&#]+)/i);
                    if (subMatch && subMatch[1].trim().includes(".")) {
                      const \u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP = \u5143\u7D20.toLowerCase().includes("proxyip=true");
                      if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u4F18\u9009API.push("sub://" + subMatch[1].trim() + "?proxyip=true" + (\u5143\u7D20.includes("#") ? "#" + \u5143\u7D20.split("#")[1] : ""));
                      else \u4F18\u9009API.push("sub://" + subMatch[1].trim() + (\u5143\u7D20.includes("#") ? "#" + \u5143\u7D20.split("#")[1] : ""));
                    } else if (\u5143\u7D20.toLowerCase().startsWith("https://")) {
                      \u4F18\u9009API.push(\u5143\u7D20);
                    } else if (\u5143\u7D20.toLowerCase().includes("://")) {
                      if (\u5143\u7D20.includes("#")) {
                        const \u5730\u5740\u5907\u6CE8\u5206\u79BB = \u5143\u7D20.split("#");
                        \u5176\u4ED6\u8282\u70B9.push(\u5730\u5740\u5907\u6CE8\u5206\u79BB[0] + "#" + encodeURIComponent(decodeURIComponent(\u5730\u5740\u5907\u6CE8\u5206\u79BB[1])));
                      } else \u5176\u4ED6\u8282\u70B9.push(\u5143\u7D20);
                    } else {
                      \u4F18\u9009IP.push(\u5143\u7D20);
                    }
                  }
                }
                const \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9 = await \u8BF7\u6C42\u4F18\u9009API(\u4F18\u9009API);
                const \u5408\u5E76\u5176\u4ED6\u8282\u70B9\u6570\u7EC4 = [...new Set(\u5176\u4ED6\u8282\u70B9.concat(\u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[1]))];
                \u5176\u4ED6\u8282\u70B9LINK = \u5408\u5E76\u5176\u4ED6\u8282\u70B9\u6570\u7EC4.length > 0 ? \u5408\u5E76\u5176\u4ED6\u8282\u70B9\u6570\u7EC4.join("\n") + "\n" : "";
                const \u4F18\u9009API\u7684IP = \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[0];
                \u53CD\u4EE3IP\u6C60 = \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[3] || [];
                \u5B8C\u6574\u4F18\u9009IP = [...new Set(\u4F18\u9009IP.concat(\u4F18\u9009API\u7684IP))];
              } else {
                let \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST = url.searchParams.get("sub") || config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUB;
                const [\u4F18\u9009\u751F\u6210\u5668IP\u6570\u7EC4, \u4F18\u9009\u751F\u6210\u5668\u5176\u4ED6\u8282\u70B9] = await \u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E(\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST);
                \u5B8C\u6574\u4F18\u9009IP = \u5B8C\u6574\u4F18\u9009IP.concat(\u4F18\u9009\u751F\u6210\u5668IP\u6570\u7EC4);
                \u5176\u4ED6\u8282\u70B9LINK += \u4F18\u9009\u751F\u6210\u5668\u5176\u4ED6\u8282\u70B9;
              }
              const ECHLINK\u53C2\u6570 = config_JSON.ECH ? `&ech=${encodeURIComponent((config_JSON.ECHConfig.SNI ? config_JSON.ECHConfig.SNI + "+" : "") + config_JSON.ECHConfig.DNS)}` : "";
              const isLoonOrSurge = ua.includes("loon") || ua.includes("surge");
              \u8BA2\u9605\u5185\u5BB9 = \u5176\u4ED6\u8282\u70B9LINK + \u5B8C\u6574\u4F18\u9009IP.map((\u539F\u59CB\u5730\u5740) => {
                const regex = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
                const match = \u539F\u59CB\u5730\u5740.match(regex);
                let \u8282\u70B9\u5730\u5740, \u8282\u70B9\u7AEF\u53E3 = "443", \u8282\u70B9\u5907\u6CE8;
                if (match) {
                  \u8282\u70B9\u5730\u5740 = match[1];
                  \u8282\u70B9\u7AEF\u53E3 = match[2] || "443";
                  \u8282\u70B9\u5907\u6CE8 = match[3] || \u8282\u70B9\u5730\u5740;
                } else {
                  console.warn(`[\u8BA2\u9605\u5185\u5BB9] \u4E0D\u89C4\u8303\u7684IP\u683C\u5F0F\u5DF2\u5FFD\u7565: ${\u539F\u59CB\u5730\u5740}`);
                  return null;
                }
                let \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84;
                if (\u53CD\u4EE3IP\u6C60.length > 0) {
                  const \u5339\u914D\u5230\u7684\u53CD\u4EE3IP = \u53CD\u4EE3IP\u6C60.find((p) => p.includes(\u8282\u70B9\u5730\u5740));
                  if (\u5339\u914D\u5230\u7684\u53CD\u4EE3IP) \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = `${config_JSON.PATH}/proxyip=${\u5339\u914D\u5230\u7684\u53CD\u4EE3IP}`.replace(/\/\//g, "/") + (config_JSON.\u542F\u75280RTT ? "?ed=2560" : "");
                }
                if (isLoonOrSurge) \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace(/,/g, "%2C");
                return `${\u534F\u8BAE\u7C7B\u578B}://00000000-0000-4000-8000-000000000000@${\u8282\u70B9\u5730\u5740}:${\u8282\u70B9\u7AEF\u53E3}?security=tls&type=${config_JSON.\u4F20\u8F93\u534F\u8BAE + ECHLINK\u53C2\u6570}&host=example.com&fp=${config_JSON.Fingerprint}&sni=example.com&path=${encodeURIComponent(config_JSON.\u968F\u673A\u8DEF\u5F84 ? \u968F\u673A\u8DEF\u5F84(\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) : \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) + TLS\u5206\u7247\u53C2\u6570}&encryption=none${config_JSON.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1 ? "&insecure=1&allowInsecure=1" : ""}#${encodeURIComponent(\u8282\u70B9\u5907\u6CE8)}`;
              }).filter((item) => item !== null).join("\n");
            } else {
              const \u8BA2\u9605\u8F6C\u6362URL = `${config_JSON.\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E.SUBAPI}/sub?target=${\u8BA2\u9605\u7C7B\u578B}&url=${encodeURIComponent(url.protocol + "//" + url.host + "/sub?target=mixed&token=" + \u8BA2\u9605TOKEN + (url.searchParams.has("sub") && url.searchParams.get("sub") != "" ? `&sub=${url.searchParams.get("sub")}` : ""))}&config=${encodeURIComponent(config_JSON.\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E.SUBCONFIG)}&emoji=${config_JSON.\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E.SUBEMOJI}&scv=${config_JSON.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1}`;
              try {
                const response = await fetch(\u8BA2\u9605\u8F6C\u6362URL, { headers: { "User-Agent": "Subconverter for " + \u8BA2\u9605\u7C7B\u578B + " edgetunnel(https://github.com/cmliu/edgetunnel)" } });
                if (response.ok) {
                  \u8BA2\u9605\u5185\u5BB9 = await response.text();
                  if (url.searchParams.has("surge") || ua.includes("surge")) \u8BA2\u9605\u5185\u5BB9 = Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(\u8BA2\u9605\u5185\u5BB9, url.protocol + "//" + url.host + "/sub?token=" + \u8BA2\u9605TOKEN + "&surge", config_JSON);
                } else return new Response("\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u5F02\u5E38\uFF1A" + response.statusText, { status: response.status });
              } catch (error) {
                return new Response("\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u5F02\u5E38\uFF1A" + error.message, { status: 403 });
              }
            }
            if (!ua.includes("subconverter")) \u8BA2\u9605\u5185\u5BB9 = await \u6279\u91CF\u66FF\u6362\u57DF\u540D(\u8BA2\u9605\u5185\u5BB9.replace(/00000000-0000-4000-8000-000000000000/g, config_JSON.UUID), config_JSON.HOSTS);
            if (\u8BA2\u9605\u7C7B\u578B === "mixed" && (!ua.includes("mozilla") || url.searchParams.has("b64") || url.searchParams.has("base64"))) \u8BA2\u9605\u5185\u5BB9 = btoa(\u8BA2\u9605\u5185\u5BB9);
            if (\u8BA2\u9605\u7C7B\u578B === "singbox") {
              \u8BA2\u9605\u5185\u5BB9 = Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(\u8BA2\u9605\u5185\u5BB9, config_JSON.UUID, config_JSON.Fingerprint, config_JSON.ECH ? await getECH(config_JSON.ECHConfig.SNI || host) : null);
              responseHeaders["content-type"] = "application/json; charset=utf-8";
            } else if (\u8BA2\u9605\u7C7B\u578B === "clash") {
              \u8BA2\u9605\u5185\u5BB9 = Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(\u8BA2\u9605\u5185\u5BB9, config_JSON.UUID, config_JSON.ECH, config_JSON.HOSTS, config_JSON.ECHConfig.SNI, config_JSON.ECHConfig.DNS);
              responseHeaders["content-type"] = "application/x-yaml; charset=utf-8";
            }
            return new Response(\u8BA2\u9605\u5185\u5BB9, { status: 200, headers: responseHeaders });
          }
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "locations") {
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies.split(";").find((c) => c.trim().startsWith("auth="))?.split("=")[1];
          if (authCookie && authCookie == await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)) return fetch(new Request("https://speed.cloudflare.com/locations", { headers: { "Referer": "https://speed.cloudflare.com/" } }));
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "robots.txt") return new Response("User-agent: *\nDisallow: /", { status: 200, headers: { "Content-Type": "text/plain; charset=UTF-8" } });
      } else if (!envUUID) return fetch(Pages\u9759\u6001\u9875\u9762 + "/noKV").then((r) => {
        const headers = new Headers(r.headers);
        headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        headers.set("Pragma", "no-cache");
        headers.set("Expires", "0");
        return new Response(r.body, { status: 404, statusText: r.statusText, headers });
      });
    } else if (\u7BA1\u7406\u5458\u5BC6\u7801) {
      await \u53CD\u4EE3\u53C2\u6570\u83B7\u53D6(request);
      return await \u5904\u7406WS\u8BF7\u6C42(request, userID);
    }
    let \u4F2A\u88C5\u9875URL = env.URL || "nginx";
    if (\u4F2A\u88C5\u9875URL && \u4F2A\u88C5\u9875URL !== "nginx" && \u4F2A\u88C5\u9875URL !== "1101") {
      \u4F2A\u88C5\u9875URL = \u4F2A\u88C5\u9875URL.trim().replace(/\/$/, "");
      if (!\u4F2A\u88C5\u9875URL.match(/^https?:\/\//i)) \u4F2A\u88C5\u9875URL = "https://" + \u4F2A\u88C5\u9875URL;
      if (\u4F2A\u88C5\u9875URL.toLowerCase().startsWith("http://")) \u4F2A\u88C5\u9875URL = "https://" + \u4F2A\u88C5\u9875URL.substring(7);
      try {
        const u = new URL(\u4F2A\u88C5\u9875URL);
        \u4F2A\u88C5\u9875URL = u.protocol + "//" + u.host;
      } catch (e) {
        \u4F2A\u88C5\u9875URL = "nginx";
      }
    }
    if (\u4F2A\u88C5\u9875URL === "1101") return new Response(await html1101(url.host, \u8BBF\u95EEIP), { status: 200, headers: { "Content-Type": "text/html; charset=UTF-8" } });
    try {
      const \u53CD\u4EE3URL = new URL(\u4F2A\u88C5\u9875URL), \u65B0\u8BF7\u6C42\u5934 = new Headers(request.headers);
      \u65B0\u8BF7\u6C42\u5934.set("Host", \u53CD\u4EE3URL.host);
      \u65B0\u8BF7\u6C42\u5934.set("Referer", \u53CD\u4EE3URL.origin);
      \u65B0\u8BF7\u6C42\u5934.set("Origin", \u53CD\u4EE3URL.origin);
      if (!\u65B0\u8BF7\u6C42\u5934.has("User-Agent") && UA && UA !== "null") \u65B0\u8BF7\u6C42\u5934.set("User-Agent", UA);
      const \u53CD\u4EE3\u54CD\u5E94 = await fetch(\u53CD\u4EE3URL.origin + url.pathname + url.search, { method: request.method, headers: \u65B0\u8BF7\u6C42\u5934, body: request.body, cf: request.cf });
      const \u5185\u5BB9\u7C7B\u578B = \u53CD\u4EE3\u54CD\u5E94.headers.get("content-type") || "";
      if (/text|javascript|json|xml/.test(\u5185\u5BB9\u7C7B\u578B)) {
        const \u54CD\u5E94\u5185\u5BB9 = (await \u53CD\u4EE3\u54CD\u5E94.text()).replaceAll(\u53CD\u4EE3URL.host, url.host);
        return new Response(\u54CD\u5E94\u5185\u5BB9, { status: \u53CD\u4EE3\u54CD\u5E94.status, headers: { ...Object.fromEntries(\u53CD\u4EE3\u54CD\u5E94.headers), "Cache-Control": "no-store" } });
      }
      return \u53CD\u4EE3\u54CD\u5E94;
    } catch (error) {
    }
    return new Response(await nginx(), { status: 200, headers: { "Content-Type": "text/html; charset=UTF-8" } });
  }
};
async function \u5904\u7406WS\u8BF7\u6C42(request, yourUUID) {
  const wssPair = new WebSocketPair();
  const [clientSock, serverSock] = Object.values(wssPair);
  serverSock.accept();
  let remoteConnWrapper = { socket: null };
  let isDnsQuery = false;
  const earlyData = request.headers.get("sec-websocket-protocol") || "";
  const readable = makeReadableStr(serverSock, earlyData);
  let \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = null;
  readable.pipeTo(new WritableStream({
    async write(chunk) {
      if (isDnsQuery) return await forwardataudp(chunk, serverSock, null);
      if (remoteConnWrapper.socket) {
        const writer = remoteConnWrapper.socket.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }
      if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C === null) {
        const bytes = new Uint8Array(chunk);
        \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = bytes.byteLength >= 58 && bytes[56] === 13 && bytes[57] === 10;
      }
      if (remoteConnWrapper.socket) {
        const writer = remoteConnWrapper.socket.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }
      if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C) {
        const { port, hostname, rawClientData } = \u89E3\u6790\u6728\u9A6C\u8BF7\u6C42(chunk, yourUUID);
        if (isSpeedTestSite(hostname)) throw new Error("Speedtest site is blocked");
        await forwardataTCP(hostname, port, rawClientData, serverSock, null, remoteConnWrapper, yourUUID);
      } else {
        const { port, hostname, rawIndex, version, isUDP } = \u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42(chunk, yourUUID);
        if (isSpeedTestSite(hostname)) throw new Error("Speedtest site is blocked");
        if (isUDP) {
          if (port === 53) isDnsQuery = true;
          else throw new Error("UDP is not supported");
        }
        const respHeader = new Uint8Array([version[0], 0]);
        const rawData = chunk.slice(rawIndex);
        if (isDnsQuery) return forwardataudp(rawData, serverSock, respHeader);
        await forwardataTCP(hostname, port, rawData, serverSock, respHeader, remoteConnWrapper, yourUUID);
      }
    }
  })).catch((err) => {
  });
  return new Response(null, { status: 101, webSocket: clientSock });
}
__name(\u5904\u7406WS\u8BF7\u6C42, "\u5904\u7406WS\u8BF7\u6C42");
function \u89E3\u6790\u6728\u9A6C\u8BF7\u6C42(buffer, passwordPlainText) {
  const sha224Password = sha224(passwordPlainText);
  if (buffer.byteLength < 56) return { hasError: true, message: "invalid data" };
  let crLfIndex = 56;
  if (new Uint8Array(buffer.slice(56, 57))[0] !== 13 || new Uint8Array(buffer.slice(57, 58))[0] !== 10) return { hasError: true, message: "invalid header format" };
  const password = new TextDecoder().decode(buffer.slice(0, crLfIndex));
  if (password !== sha224Password) return { hasError: true, message: "invalid password" };
  const socks5DataBuffer = buffer.slice(crLfIndex + 2);
  if (socks5DataBuffer.byteLength < 6) return { hasError: true, message: "invalid S5 request data" };
  const view = new DataView(socks5DataBuffer);
  const cmd = view.getUint8(0);
  if (cmd !== 1) return { hasError: true, message: "unsupported command, only TCP is allowed" };
  const atype = view.getUint8(1);
  let addressLength = 0;
  let addressIndex = 2;
  let address = "";
  switch (atype) {
    case 1:
      addressLength = 4;
      address = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength)).join(".");
      break;
    case 3:
      addressLength = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + 1))[0];
      addressIndex += 1;
      address = new TextDecoder().decode(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      break;
    case 4:
      addressLength = 16;
      const dataView = new DataView(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      address = ipv6.join(":");
      break;
    default:
      return { hasError: true, message: `invalid addressType is ${atype}` };
  }
  if (!address) {
    return { hasError: true, message: `address is empty, addressType is ${atype}` };
  }
  const portIndex = addressIndex + addressLength;
  const portBuffer = socks5DataBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  return {
    hasError: false,
    addressType: atype,
    port: portRemote,
    hostname: address,
    rawClientData: socks5DataBuffer.slice(portIndex + 4)
  };
}
__name(\u89E3\u6790\u6728\u9A6C\u8BF7\u6C42, "\u89E3\u6790\u6728\u9A6C\u8BF7\u6C42");
function \u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42(chunk, token) {
  if (chunk.byteLength < 24) return { hasError: true, message: "Invalid data" };
  const version = new Uint8Array(chunk.slice(0, 1));
  if (formatIdentifier(new Uint8Array(chunk.slice(1, 17))) !== token) return { hasError: true, message: "Invalid uuid" };
  const optLen = new Uint8Array(chunk.slice(17, 18))[0];
  const cmd = new Uint8Array(chunk.slice(18 + optLen, 19 + optLen))[0];
  let isUDP = false;
  if (cmd === 1) {
  } else if (cmd === 2) {
    isUDP = true;
  } else {
    return { hasError: true, message: "Invalid command" };
  }
  const portIdx = 19 + optLen;
  const port = new DataView(chunk.slice(portIdx, portIdx + 2)).getUint16(0);
  let addrIdx = portIdx + 2, addrLen = 0, addrValIdx = addrIdx + 1, hostname = "";
  const addressType = new Uint8Array(chunk.slice(addrIdx, addrValIdx))[0];
  switch (addressType) {
    case 1:
      addrLen = 4;
      hostname = new Uint8Array(chunk.slice(addrValIdx, addrValIdx + addrLen)).join(".");
      break;
    case 2:
      addrLen = new Uint8Array(chunk.slice(addrValIdx, addrValIdx + 1))[0];
      addrValIdx += 1;
      hostname = new TextDecoder().decode(chunk.slice(addrValIdx, addrValIdx + addrLen));
      break;
    case 3:
      addrLen = 16;
      const ipv6 = [];
      const ipv6View = new DataView(chunk.slice(addrValIdx, addrValIdx + addrLen));
      for (let i = 0; i < 8; i++) ipv6.push(ipv6View.getUint16(i * 2).toString(16));
      hostname = ipv6.join(":");
      break;
    default:
      return { hasError: true, message: `Invalid address type: ${addressType}` };
  }
  if (!hostname) return { hasError: true, message: `Invalid address: ${addressType}` };
  return { hasError: false, addressType, port, hostname, isUDP, rawIndex: addrValIdx + addrLen, version };
}
__name(\u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42, "\u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42");
async function forwardataTCP(host, portNum, rawData, ws, respHeader, remoteConnWrapper, yourUUID) {
  console.log(`[TCP\u8F6C\u53D1] \u76EE\u6807: ${host}:${portNum} | \u53CD\u4EE3IP: ${\u53CD\u4EE3IP} | \u53CD\u4EE3\u515C\u5E95: ${\u542F\u7528\u53CD\u4EE3\u515C\u5E95 ? "\u662F" : "\u5426"} | \u53CD\u4EE3\u7C7B\u578B: ${\u542F\u7528SOCKS5\u53CD\u4EE3 || "proxyip"} | \u5168\u5C40: ${\u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 ? "\u662F" : "\u5426"}`);
  async function connectDirect(address, port, data, \u6240\u6709\u53CD\u4EE3\u6570\u7EC4 = null, \u53CD\u4EE3\u515C\u5E95 = true) {
    let remoteSock;
    if (\u6240\u6709\u53CD\u4EE3\u6570\u7EC4 && \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.length > 0) {
      for (let i = 0; i < \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.length; i++) {
        const \u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 = (\u7F13\u5B58\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 + i) % \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.length;
        const [\u53CD\u4EE3\u5730\u5740, \u53CD\u4EE3\u7AEF\u53E3] = \u6240\u6709\u53CD\u4EE3\u6570\u7EC4[\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15];
        try {
          console.log(`[\u53CD\u4EE3\u8FDE\u63A5] \u5C1D\u8BD5\u8FDE\u63A5\u5230: ${\u53CD\u4EE3\u5730\u5740}:${\u53CD\u4EE3\u7AEF\u53E3} (\u7D22\u5F15: ${\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15})`);
          remoteSock = connect({ hostname: \u53CD\u4EE3\u5730\u5740, port: \u53CD\u4EE3\u7AEF\u53E3 });
          await Promise.race([
            remoteSock.opened,
            new Promise((_, reject) => setTimeout(() => reject(new Error("\u8FDE\u63A5\u8D85\u65F6")), 1e3))
          ]);
          const testWriter = remoteSock.writable.getWriter();
          await testWriter.write(data);
          testWriter.releaseLock();
          console.log(`[\u53CD\u4EE3\u8FDE\u63A5] \u6210\u529F\u8FDE\u63A5\u5230: ${\u53CD\u4EE3\u5730\u5740}:${\u53CD\u4EE3\u7AEF\u53E3}`);
          \u7F13\u5B58\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 = \u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15;
          return remoteSock;
        } catch (err) {
          console.log(`[\u53CD\u4EE3\u8FDE\u63A5] \u8FDE\u63A5\u5931\u8D25: ${\u53CD\u4EE3\u5730\u5740}:${\u53CD\u4EE3\u7AEF\u53E3}, \u9519\u8BEF: ${err.message}`);
          try {
            remoteSock?.close?.();
          } catch (e) {
          }
          continue;
        }
      }
    }
    if (\u53CD\u4EE3\u515C\u5E95) {
      remoteSock = connect({ hostname: address, port });
      const writer = remoteSock.writable.getWriter();
      await writer.write(data);
      writer.releaseLock();
      return remoteSock;
    } else {
      closeSocketQuietly(ws);
      throw new Error("[\u53CD\u4EE3\u8FDE\u63A5] \u6240\u6709\u53CD\u4EE3\u8FDE\u63A5\u5931\u8D25\uFF0C\u4E14\u672A\u542F\u7528\u53CD\u4EE3\u515C\u5E95\uFF0C\u8FDE\u63A5\u7EC8\u6B62\u3002");
    }
  }
  __name(connectDirect, "connectDirect");
  async function connecttoPry() {
    let newSocket;
    if (\u542F\u7528SOCKS5\u53CD\u4EE3 === "socks5") {
      console.log(`[SOCKS5\u4EE3\u7406] \u4EE3\u7406\u5230: ${host}:${portNum}`);
      newSocket = await socks5Connect(host, portNum, rawData);
    } else if (\u542F\u7528SOCKS5\u53CD\u4EE3 === "http" || \u542F\u7528SOCKS5\u53CD\u4EE3 === "https") {
      console.log(`[HTTP\u4EE3\u7406] \u4EE3\u7406\u5230: ${host}:${portNum}`);
      newSocket = await httpConnect(host, portNum, rawData);
    } else {
      console.log(`[\u53CD\u4EE3\u8FDE\u63A5] \u4EE3\u7406\u5230: ${host}:${portNum}`);
      const \u6240\u6709\u53CD\u4EE3\u6570\u7EC4 = await \u89E3\u6790\u5730\u5740\u7AEF\u53E3(\u53CD\u4EE3IP, host, yourUUID);
      newSocket = await connectDirect(atob("UFJPWFlJUC50cDEuMDkwMjI3Lnh5eg=="), 1, rawData, \u6240\u6709\u53CD\u4EE3\u6570\u7EC4, \u542F\u7528\u53CD\u4EE3\u515C\u5E95);
    }
    remoteConnWrapper.socket = newSocket;
    newSocket.closed.catch(() => {
    }).finally(() => closeSocketQuietly(ws));
    connectStreams(newSocket, ws, respHeader, null);
  }
  __name(connecttoPry, "connecttoPry");
  const \u9A8C\u8BC1SOCKS5\u767D\u540D\u5355 = /* @__PURE__ */ __name((addr) => SOCKS5\u767D\u540D\u5355.some((p) => new RegExp(`^${p.replace(/\*/g, ".*")}$`, "i").test(addr)), "\u9A8C\u8BC1SOCKS5\u767D\u540D\u5355");
  if (\u542F\u7528SOCKS5\u53CD\u4EE3 && (\u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 || \u9A8C\u8BC1SOCKS5\u767D\u540D\u5355(host))) {
    console.log(`[TCP\u8F6C\u53D1] \u542F\u7528 SOCKS5/HTTP \u5168\u5C40\u4EE3\u7406`);
    try {
      await connecttoPry();
    } catch (err) {
      console.log(`[TCP\u8F6C\u53D1] SOCKS5/HTTP \u4EE3\u7406\u8FDE\u63A5\u5931\u8D25: ${err.message}`);
      throw err;
    }
  } else {
    try {
      console.log(`[TCP\u8F6C\u53D1] \u5C1D\u8BD5\u76F4\u8FDE\u5230: ${host}:${portNum}`);
      const initialSocket = await Promise.race([
        connectDirect(host, portNum, rawData),
        new Promise((_, reject) => setTimeout(() => reject(new Error("\u76F4\u8FDE\u8D85\u65F6(500ms)")), 500))
      ]);
      remoteConnWrapper.socket = initialSocket;
      connectStreams(initialSocket, ws, respHeader, connecttoPry);
    } catch (err) {
      console.log(`[TCP\u8F6C\u53D1] \u76F4\u8FDE ${host}:${portNum} \u5931\u8D25: ${err.message}`);
      await connecttoPry();
    }
  }
}
__name(forwardataTCP, "forwardataTCP");
async function forwardataudp(udpChunk, webSocket, respHeader) {
  try {
    const tcpSocket = connect({ hostname: "8.8.4.4", port: 53 });
    let vlessHeader = respHeader;
    const writer = tcpSocket.writable.getWriter();
    await writer.write(udpChunk);
    writer.releaseLock();
    await tcpSocket.readable.pipeTo(new WritableStream({
      async write(chunk) {
        if (webSocket.readyState === WebSocket.OPEN) {
          if (vlessHeader) {
            const response = new Uint8Array(vlessHeader.length + chunk.byteLength);
            response.set(vlessHeader, 0);
            response.set(chunk, vlessHeader.length);
            webSocket.send(response.buffer);
            vlessHeader = null;
          } else {
            webSocket.send(chunk);
          }
        }
      }
    }));
  } catch (error) {
  }
}
__name(forwardataudp, "forwardataudp");
function closeSocketQuietly(socket) {
  try {
    if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CLOSING) {
      socket.close();
    }
  } catch (error) {
  }
}
__name(closeSocketQuietly, "closeSocketQuietly");
function formatIdentifier(arr, offset = 0) {
  const hex = [...arr.slice(offset, offset + 16)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}
__name(formatIdentifier, "formatIdentifier");
async function connectStreams(remoteSocket, webSocket, headerData, retryFunc) {
  let header = headerData, hasData = false;
  await remoteSocket.readable.pipeTo(
    new WritableStream({
      async write(chunk, controller) {
        hasData = true;
        if (webSocket.readyState !== WebSocket.OPEN) controller.error("ws.readyState is not open");
        if (header) {
          const response = new Uint8Array(header.length + chunk.byteLength);
          response.set(header, 0);
          response.set(chunk, header.length);
          webSocket.send(response.buffer);
          header = null;
        } else {
          webSocket.send(chunk);
        }
      },
      abort() {
      }
    })
  ).catch((err) => {
    closeSocketQuietly(webSocket);
  });
  if (!hasData && retryFunc) {
    await retryFunc();
  }
}
__name(connectStreams, "connectStreams");
function makeReadableStr(socket, earlyDataHeader) {
  let cancelled = false;
  return new ReadableStream({
    start(controller) {
      socket.addEventListener("message", (event) => {
        if (!cancelled) controller.enqueue(event.data);
      });
      socket.addEventListener("close", () => {
        if (!cancelled) {
          closeSocketQuietly(socket);
          controller.close();
        }
      });
      socket.addEventListener("error", (err) => controller.error(err));
      const { earlyData, error } = base64ToArray(earlyDataHeader);
      if (error) controller.error(error);
      else if (earlyData) controller.enqueue(earlyData);
    },
    cancel() {
      cancelled = true;
      closeSocketQuietly(socket);
    }
  });
}
__name(makeReadableStr, "makeReadableStr");
function isSpeedTestSite(hostname) {
  const speedTestDomains = [atob("c3BlZWQuY2xvdWRmbGFyZS5jb20=")];
  if (speedTestDomains.includes(hostname)) {
    return true;
  }
  for (const domain of speedTestDomains) {
    if (hostname.endsWith("." + domain) || hostname === domain) {
      return true;
    }
  }
  return false;
}
__name(isSpeedTestSite, "isSpeedTestSite");
function base64ToArray(b64Str) {
  if (!b64Str) return { error: null };
  try {
    const binaryString = atob(b64Str.replace(/-/g, "+").replace(/_/g, "/"));
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return { earlyData: bytes.buffer, error: null };
  } catch (error) {
    return { error };
  }
}
__name(base64ToArray, "base64ToArray");
async function socks5Connect(targetHost, targetPort, initialData) {
  const { username, password, hostname, port } = parsedSocks5Address;
  const socket = connect({ hostname, port }), writer = socket.writable.getWriter(), reader = socket.readable.getReader();
  try {
    const authMethods = username && password ? new Uint8Array([5, 2, 0, 2]) : new Uint8Array([5, 1, 0]);
    await writer.write(authMethods);
    let response = await reader.read();
    if (response.done || response.value.byteLength < 2) throw new Error("S5 method selection failed");
    const selectedMethod = new Uint8Array(response.value)[1];
    if (selectedMethod === 2) {
      if (!username || !password) throw new Error("S5 requires authentication");
      const userBytes = new TextEncoder().encode(username), passBytes = new TextEncoder().encode(password);
      const authPacket = new Uint8Array([1, userBytes.length, ...userBytes, passBytes.length, ...passBytes]);
      await writer.write(authPacket);
      response = await reader.read();
      if (response.done || new Uint8Array(response.value)[1] !== 0) throw new Error("S5 authentication failed");
    } else if (selectedMethod !== 0) throw new Error(`S5 unsupported auth method: ${selectedMethod}`);
    const hostBytes = new TextEncoder().encode(targetHost);
    const connectPacket = new Uint8Array([5, 1, 0, 3, hostBytes.length, ...hostBytes, targetPort >> 8, targetPort & 255]);
    await writer.write(connectPacket);
    response = await reader.read();
    if (response.done || new Uint8Array(response.value)[1] !== 0) throw new Error("S5 connection failed");
    await writer.write(initialData);
    writer.releaseLock();
    reader.releaseLock();
    return socket;
  } catch (error) {
    try {
      writer.releaseLock();
    } catch (e) {
    }
    try {
      reader.releaseLock();
    } catch (e) {
    }
    try {
      socket.close();
    } catch (e) {
    }
    throw error;
  }
}
__name(socks5Connect, "socks5Connect");
async function httpConnect(targetHost, targetPort, initialData) {
  const { username, password, hostname, port } = parsedSocks5Address;
  const socket = connect({ hostname, port }), writer = socket.writable.getWriter(), reader = socket.readable.getReader();
  try {
    const auth = username && password ? `Proxy-Authorization: Basic ${btoa(`${username}:${password}`)}\r
` : "";
    const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r
Host: ${targetHost}:${targetPort}\r
${auth}User-Agent: Mozilla/5.0\r
Connection: keep-alive\r
\r
`;
    await writer.write(new TextEncoder().encode(request));
    let responseBuffer = new Uint8Array(0), headerEndIndex = -1, bytesRead = 0;
    while (headerEndIndex === -1 && bytesRead < 8192) {
      const { done, value } = await reader.read();
      if (done) throw new Error("Connection closed before receiving HTTP response");
      responseBuffer = new Uint8Array([...responseBuffer, ...value]);
      bytesRead = responseBuffer.length;
      const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 13 && responseBuffer[i + 1] === 10 && responseBuffer[i + 2] === 13 && responseBuffer[i + 3] === 10);
      if (crlfcrlf !== -1) headerEndIndex = crlfcrlf + 4;
    }
    if (headerEndIndex === -1) throw new Error("Invalid HTTP response");
    const statusCode = parseInt(new TextDecoder().decode(responseBuffer.slice(0, headerEndIndex)).split("\r\n")[0].match(/HTTP\/\d\.\d\s+(\d+)/)[1]);
    if (statusCode < 200 || statusCode >= 300) throw new Error(`Connection failed: HTTP ${statusCode}`);
    await writer.write(initialData);
    writer.releaseLock();
    reader.releaseLock();
    return socket;
  } catch (error) {
    try {
      writer.releaseLock();
    } catch (e) {
    }
    try {
      reader.releaseLock();
    } catch (e) {
    }
    try {
      socket.close();
    } catch (e) {
    }
    throw error;
  }
}
__name(httpConnect, "httpConnect");
function Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(Clash_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9, uuid = null, ECH\u542F\u7528 = false, HOSTS = [], ECH_SNI = null, ECH_DNS) {
  let clash_yaml = Clash_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9.replace(/mode:\s*Rule\b/g, "mode: rule");
  const baseDnsBlock = `dns:
  enable: true
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
    - 114.114.114.114
  use-hosts: true
  nameserver:
    - https://sm2.doh.pub/dns-query
    - https://dns.alidns.com/dns-query
  fallback:
    - 8.8.4.4
    - 208.67.220.220
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
      - 127.0.0.1/32
      - 0.0.0.0/32
    domain:
      - '+.google.com'
      - '+.facebook.com'
      - '+.youtube.com'
`;
  const hasDns = /^dns:\s*(?:\n|$)/m.test(clash_yaml);
  if (!hasDns) {
    clash_yaml = baseDnsBlock + clash_yaml;
  }
  if (ECH_SNI && !HOSTS.includes(ECH_SNI)) HOSTS.push(ECH_SNI);
  if (ECH\u542F\u7528 && HOSTS.length > 0) {
    const hostsEntries = HOSTS.map((host) => `    "${host}":${ECH_DNS ? `
      - ${ECH_DNS}` : ""}
      - https://doh.cm.edu.kg/CMLiussss`).join("\n");
    const hasNameserverPolicy = /^\s{2}nameserver-policy:\s*(?:\n|$)/m.test(clash_yaml);
    if (hasNameserverPolicy) {
      clash_yaml = clash_yaml.replace(
        /^(\s{2}nameserver-policy:\s*\n)/m,
        `$1${hostsEntries}
`
      );
    } else {
      const lines2 = clash_yaml.split("\n");
      let dnsBlockEndIndex = -1;
      let inDnsBlock = false;
      for (let i2 = 0; i2 < lines2.length; i2++) {
        const line = lines2[i2];
        if (/^dns:\s*$/.test(line)) {
          inDnsBlock = true;
          continue;
        }
        if (inDnsBlock) {
          if (/^[a-zA-Z]/.test(line)) {
            dnsBlockEndIndex = i2;
            break;
          }
        }
      }
      const nameserverPolicyBlock = `  nameserver-policy:
${hostsEntries}`;
      if (dnsBlockEndIndex !== -1) {
        lines2.splice(dnsBlockEndIndex, 0, nameserverPolicyBlock);
      } else {
        lines2.push(nameserverPolicyBlock);
      }
      clash_yaml = lines2.join("\n");
    }
  }
  if (!uuid || !ECH\u542F\u7528) return clash_yaml;
  const lines = clash_yaml.split("\n");
  const processedLines = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("- {") && (trimmedLine.includes("uuid:") || trimmedLine.includes("password:"))) {
      let fullNode = line;
      let braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      while (braceCount > 0 && i + 1 < lines.length) {
        i++;
        fullNode += "\n" + lines[i];
        braceCount += (lines[i].match(/\{/g) || []).length - (lines[i].match(/\}/g) || []).length;
      }
      const typeMatch = fullNode.match(/type:\s*(\w+)/);
      const proxyType = typeMatch ? typeMatch[1] : "vless";
      let credentialField = "uuid";
      if (proxyType === "trojan") {
        credentialField = "password";
      }
      const credentialPattern = new RegExp(`${credentialField}:\\s*([^,}\\n]+)`);
      const credentialMatch = fullNode.match(credentialPattern);
      if (credentialMatch && credentialMatch[1].trim() === uuid.trim()) {
        fullNode = fullNode.replace(/\}(\s*)$/, `, ech-opts: {enable: true${ECH_SNI ? `, query-server-name: ${ECH_SNI}` : ""}}}$1`);
      }
      processedLines.push(fullNode);
      i++;
    } else if (trimmedLine.startsWith("- name:")) {
      let nodeLines = [line];
      let baseIndent = line.search(/\S/);
      let topLevelIndent = baseIndent + 2;
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();
        if (!nextTrimmed) {
          nodeLines.push(nextLine);
          i++;
          break;
        }
        const nextIndent = nextLine.search(/\S/);
        if (nextIndent <= baseIndent && nextTrimmed.startsWith("- ")) {
          break;
        }
        if (nextIndent < baseIndent && nextTrimmed) {
          break;
        }
        nodeLines.push(nextLine);
        i++;
      }
      const nodeText = nodeLines.join("\n");
      const typeMatch = nodeText.match(/type:\s*(\w+)/);
      const proxyType = typeMatch ? typeMatch[1] : "vless";
      let credentialField = "uuid";
      if (proxyType === "trojan") {
        credentialField = "password";
      }
      const credentialPattern = new RegExp(`${credentialField}:\\s*([^\\n]+)`);
      const credentialMatch = nodeText.match(credentialPattern);
      if (credentialMatch && credentialMatch[1].trim() === uuid.trim()) {
        let insertIndex = -1;
        for (let j = nodeLines.length - 1; j >= 0; j--) {
          if (nodeLines[j].trim()) {
            insertIndex = j;
            break;
          }
        }
        if (insertIndex >= 0) {
          const indent = " ".repeat(topLevelIndent);
          const echOptsLines = [
            `${indent}ech-opts:`,
            `${indent}  enable: true`
          ];
          if (ECH_SNI) echOptsLines.push(`${indent}  query-server-name: ${ECH_SNI}`);
          nodeLines.splice(insertIndex + 1, 0, ...echOptsLines);
        }
      }
      processedLines.push(...nodeLines);
    } else {
      processedLines.push(line);
      i++;
    }
  }
  return processedLines.join("\n");
}
__name(Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01, "Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01");
function Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(SingBox_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9, uuid = null, fingerprint = "chrome", ech_config = null) {
  const sb_json_text = SingBox_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9.replace("1.1.1.1", "8.8.8.8").replace("1.0.0.1", "8.8.4.4");
  try {
    let config = JSON.parse(sb_json_text);
    if (Array.isArray(config.inbounds)) {
      config.inbounds.forEach((inbound) => {
        if (inbound.type === "tun") {
          const addresses = [];
          if (inbound.inet4_address) addresses.push(inbound.inet4_address);
          if (inbound.inet6_address) addresses.push(inbound.inet6_address);
          if (addresses.length > 0) {
            inbound.address = addresses;
            delete inbound.inet4_address;
            delete inbound.inet6_address;
          }
          const route_addresses = [];
          if (Array.isArray(inbound.inet4_route_address)) route_addresses.push(...inbound.inet4_route_address);
          if (Array.isArray(inbound.inet6_route_address)) route_addresses.push(...inbound.inet6_route_address);
          if (route_addresses.length > 0) {
            inbound.route_address = route_addresses;
            delete inbound.inet4_route_address;
            delete inbound.inet6_route_address;
          }
          const route_exclude_addresses = [];
          if (Array.isArray(inbound.inet4_route_exclude_address)) route_exclude_addresses.push(...inbound.inet4_route_exclude_address);
          if (Array.isArray(inbound.inet6_route_exclude_address)) route_exclude_addresses.push(...inbound.inet6_route_exclude_address);
          if (route_exclude_addresses.length > 0) {
            inbound.route_exclude_address = route_exclude_addresses;
            delete inbound.inet4_route_exclude_address;
            delete inbound.inet6_route_exclude_address;
          }
        }
      });
    }
    const ruleSetsDefinitions = /* @__PURE__ */ new Map();
    const processRules = /* @__PURE__ */ __name((rules, isDns = false) => {
      if (!Array.isArray(rules)) return;
      rules.forEach((rule) => {
        if (rule.geosite) {
          const geositeList = Array.isArray(rule.geosite) ? rule.geosite : [rule.geosite];
          rule.rule_set = geositeList.map((name) => {
            const tag = `geosite-${name}`;
            if (!ruleSetsDefinitions.has(tag)) {
              ruleSetsDefinitions.set(tag, {
                tag,
                type: "remote",
                format: "binary",
                url: `https://gh.090227.xyz/https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-${name}.srs`,
                download_detour: "DIRECT"
              });
            }
            return tag;
          });
          delete rule.geosite;
        }
        if (rule.geoip) {
          const geoipList = Array.isArray(rule.geoip) ? rule.geoip : [rule.geoip];
          rule.rule_set = rule.rule_set || [];
          geoipList.forEach((name) => {
            const tag = `geoip-${name}`;
            if (!ruleSetsDefinitions.has(tag)) {
              ruleSetsDefinitions.set(tag, {
                tag,
                type: "remote",
                format: "binary",
                url: `https://gh.090227.xyz/https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-${name}.srs`,
                download_detour: "DIRECT"
              });
            }
            rule.rule_set.push(tag);
          });
          delete rule.geoip;
        }
        const targetField = isDns ? "server" : "outbound";
        const actionValue = String(rule[targetField]).toUpperCase();
        if (actionValue === "REJECT" || actionValue === "BLOCK") {
          rule.action = "reject";
          rule.method = "drop";
          delete rule[targetField];
        }
      });
    }, "processRules");
    if (config.dns && config.dns.rules) processRules(config.dns.rules, true);
    if (config.route && config.route.rules) processRules(config.route.rules, false);
    if (ruleSetsDefinitions.size > 0) {
      if (!config.route) config.route = {};
      config.route.rule_set = Array.from(ruleSetsDefinitions.values());
    }
    if (!config.outbounds) config.outbounds = [];
    config.outbounds = config.outbounds.filter((o) => {
      if (o.tag === "REJECT" || o.tag === "block") {
        return false;
      }
      return true;
    });
    const existingOutboundTags = new Set(config.outbounds.map((o) => o.tag));
    if (!existingOutboundTags.has("DIRECT")) {
      config.outbounds.push({ "type": "direct", "tag": "DIRECT" });
      existingOutboundTags.add("DIRECT");
    }
    if (config.dns && config.dns.servers) {
      const dnsServerTags = new Set(config.dns.servers.map((s) => s.tag));
      if (config.dns.rules) {
        config.dns.rules.forEach((rule) => {
          if (rule.server && !dnsServerTags.has(rule.server)) {
            if (rule.server === "dns_block" && dnsServerTags.has("block")) {
              rule.server = "block";
            } else if (rule.server.toLowerCase().includes("block") && !dnsServerTags.has(rule.server)) {
              config.dns.servers.push({ "tag": rule.server, "address": "rcode://success" });
              dnsServerTags.add(rule.server);
            }
          }
        });
      }
    }
    config.outbounds.forEach((outbound) => {
      if (outbound.type === "selector" || outbound.type === "urltest") {
        if (Array.isArray(outbound.outbounds)) {
          outbound.outbounds = outbound.outbounds.filter((tag) => {
            const upperTag = tag.toUpperCase();
            return existingOutboundTags.has(tag) && upperTag !== "REJECT" && upperTag !== "BLOCK";
          });
          if (outbound.outbounds.length === 0) outbound.outbounds.push("DIRECT");
        }
      }
    });
    if (uuid) {
      config.outbounds.forEach((outbound) => {
        if (outbound.uuid && outbound.uuid === uuid || outbound.password && outbound.password === uuid) {
          if (!outbound.tls) {
            outbound.tls = { enabled: true };
          }
          if (fingerprint) {
            outbound.tls.utls = {
              enabled: true,
              fingerprint
            };
          }
          if (ech_config) {
            outbound.tls.ech = {
              enabled: true,
              //query_server_name: "cloudflare-ech.com",// 等待 1.13.0+ 版本上线
              config: `-----BEGIN ECH CONFIGS-----
${ech_config}
-----END ECH CONFIGS-----`
            };
          }
        }
      });
    }
    return JSON.stringify(config, null, 2);
  } catch (e) {
    console.error("Singbox\u70ED\u8865\u4E01\u6267\u884C\u5931\u8D25:", e);
    return JSON.stringify(JSON.parse(sb_json_text), null, 2);
  }
}
__name(Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01, "Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01");
function Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(content, url, config_JSON2) {
  const \u6BCF\u884C\u5185\u5BB9 = content.includes("\r\n") ? content.split("\r\n") : content.split("\n");
  const \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = config_JSON2.\u968F\u673A\u8DEF\u5F84 ? \u968F\u673A\u8DEF\u5F84(config_JSON2.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) : config_JSON2.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84;
  let \u8F93\u51FA\u5185\u5BB9 = "";
  for (let x of \u6BCF\u884C\u5185\u5BB9) {
    if (x.includes("= trojan,") && !x.includes("ws=true") && !x.includes("ws-path=")) {
      const host = x.split("sni=")[1].split(",")[0];
      const \u5907\u6539\u5185\u5BB9 = `sni=${host}, skip-cert-verify=${config_JSON2.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1}`;
      const \u6B63\u786E\u5185\u5BB9 = `sni=${host}, skip-cert-verify=${config_JSON2.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1}, ws=true, ws-path=${\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace(/,/g, "%2C")}, ws-headers=Host:"${host}"`;
      \u8F93\u51FA\u5185\u5BB9 += x.replace(new RegExp(\u5907\u6539\u5185\u5BB9, "g"), \u6B63\u786E\u5185\u5BB9).replace("[", "").replace("]", "") + "\n";
    } else {
      \u8F93\u51FA\u5185\u5BB9 += x + "\n";
    }
  }
  \u8F93\u51FA\u5185\u5BB9 = `#!MANAGED-CONFIG ${url} interval=${config_JSON2.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBUpdateTime * 60 * 60} strict=false` + \u8F93\u51FA\u5185\u5BB9.substring(\u8F93\u51FA\u5185\u5BB9.indexOf("\n"));
  return \u8F93\u51FA\u5185\u5BB9;
}
__name(Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01, "Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01");
async function \u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, \u8BF7\u6C42\u7C7B\u578B = "Get_SUB", config_JSON2) {
  const KV\u5BB9\u91CF\u9650\u5236 = 4;
  try {
    const \u5F53\u524D\u65F6\u95F4 = /* @__PURE__ */ new Date();
    const \u65E5\u5FD7\u5185\u5BB9 = { TYPE: \u8BF7\u6C42\u7C7B\u578B, IP: \u8BBF\u95EEIP, ASN: `AS${request.cf.asn || "0"} ${request.cf.asOrganization || "Unknown"}`, CC: `${request.cf.country || "N/A"} ${request.cf.city || "N/A"}`, URL: request.url, UA: request.headers.get("User-Agent") || "Unknown", TIME: \u5F53\u524D\u65F6\u95F4.getTime() };
    let \u65E5\u5FD7\u6570\u7EC4 = [];
    const \u73B0\u6709\u65E5\u5FD7 = await env.KV.get("log.json");
    if (\u73B0\u6709\u65E5\u5FD7) {
      try {
        \u65E5\u5FD7\u6570\u7EC4 = JSON.parse(\u73B0\u6709\u65E5\u5FD7);
        if (!Array.isArray(\u65E5\u5FD7\u6570\u7EC4)) {
          \u65E5\u5FD7\u6570\u7EC4 = [\u65E5\u5FD7\u5185\u5BB9];
        } else if (\u8BF7\u6C42\u7C7B\u578B !== "Get_SUB") {
          const \u4E09\u5341\u5206\u949F\u524D\u65F6\u95F4\u6233 = \u5F53\u524D\u65F6\u95F4.getTime() - 30 * 60 * 1e3;
          if (\u65E5\u5FD7\u6570\u7EC4.some((log) => log.TYPE !== "Get_SUB" && log.IP === \u8BBF\u95EEIP && log.URL === request.url && log.UA === (request.headers.get("User-Agent") || "Unknown") && log.TIME >= \u4E09\u5341\u5206\u949F\u524D\u65F6\u95F4\u6233)) return;
          \u65E5\u5FD7\u6570\u7EC4.push(\u65E5\u5FD7\u5185\u5BB9);
          while (JSON.stringify(\u65E5\u5FD7\u6570\u7EC4, null, 2).length > KV\u5BB9\u91CF\u9650\u5236 * 1024 * 1024 && \u65E5\u5FD7\u6570\u7EC4.length > 0) \u65E5\u5FD7\u6570\u7EC4.shift();
        } else {
          \u65E5\u5FD7\u6570\u7EC4.push(\u65E5\u5FD7\u5185\u5BB9);
          while (JSON.stringify(\u65E5\u5FD7\u6570\u7EC4, null, 2).length > KV\u5BB9\u91CF\u9650\u5236 * 1024 * 1024 && \u65E5\u5FD7\u6570\u7EC4.length > 0) \u65E5\u5FD7\u6570\u7EC4.shift();
        }
        if (config_JSON2.TG.\u542F\u7528) {
          try {
            const TG_TXT = await env.KV.get("tg.json");
            const TG_JSON = JSON.parse(TG_TXT);
            await sendMessage(TG_JSON.BotToken, TG_JSON.ChatID, \u65E5\u5FD7\u5185\u5BB9, config_JSON2);
          } catch (error) {
            console.error(`\u8BFB\u53D6tg.json\u51FA\u9519: ${error.message}`);
          }
        }
      } catch (e) {
        \u65E5\u5FD7\u6570\u7EC4 = [\u65E5\u5FD7\u5185\u5BB9];
      }
    } else {
      \u65E5\u5FD7\u6570\u7EC4 = [\u65E5\u5FD7\u5185\u5BB9];
    }
    await env.KV.put("log.json", JSON.stringify(\u65E5\u5FD7\u6570\u7EC4, null, 2));
  } catch (error) {
    console.error(`\u65E5\u5FD7\u8BB0\u5F55\u5931\u8D25: ${error.message}`);
  }
}
__name(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55, "\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55");
async function sendMessage(BotToken, ChatID, \u65E5\u5FD7\u5185\u5BB9, config_JSON2) {
  if (!BotToken || !ChatID) return;
  try {
    const \u8BF7\u6C42\u65F6\u95F4 = new Date(\u65E5\u5FD7\u5185\u5BB9.TIME).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
    const \u8BF7\u6C42URL = new URL(\u65E5\u5FD7\u5185\u5BB9.URL);
    const msg = `<b>#${config_JSON2.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBNAME} \u65E5\u5FD7\u901A\u77E5</b>

\u{1F4CC} <b>\u7C7B\u578B\uFF1A</b>#${\u65E5\u5FD7\u5185\u5BB9.TYPE}
\u{1F310} <b>IP\uFF1A</b><code>${\u65E5\u5FD7\u5185\u5BB9.IP}</code>
\u{1F4CD} <b>\u4F4D\u7F6E\uFF1A</b>${\u65E5\u5FD7\u5185\u5BB9.CC}
\u{1F3E2} <b>ASN\uFF1A</b>${\u65E5\u5FD7\u5185\u5BB9.ASN}
\u{1F517} <b>\u57DF\u540D\uFF1A</b><code>${\u8BF7\u6C42URL.host}</code>
\u{1F50D} <b>\u8DEF\u5F84\uFF1A</b><code>${\u8BF7\u6C42URL.pathname + \u8BF7\u6C42URL.search}</code>
\u{1F916} <b>UA\uFF1A</b><code>${\u65E5\u5FD7\u5185\u5BB9.UA}</code>
\u{1F4C5} <b>\u65F6\u95F4\uFF1A</b>${\u8BF7\u6C42\u65F6\u95F4}
${config_JSON2.CF.Usage.success ? `\u{1F4CA} <b>\u8BF7\u6C42\u7528\u91CF\uFF1A</b>${config_JSON2.CF.Usage.total}/${config_JSON2.CF.Usage.max} <b>${(config_JSON2.CF.Usage.total / config_JSON2.CF.Usage.max * 100).toFixed(2)}%</b>
` : ""}`;
    const url = `https://api.telegram.org/bot${BotToken}/sendMessage?chat_id=${ChatID}&parse_mode=HTML&text=${encodeURIComponent(msg)}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": \u65E5\u5FD7\u5185\u5BB9.UA || "Unknown"
      }
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
}
__name(sendMessage, "sendMessage");
function \u63A9\u7801\u654F\u611F\u4FE1\u606F(\u6587\u672C, \u524D\u7F00\u957F\u5EA6 = 3, \u540E\u7F00\u957F\u5EA6 = 2) {
  if (!\u6587\u672C || typeof \u6587\u672C !== "string") return \u6587\u672C;
  if (\u6587\u672C.length <= \u524D\u7F00\u957F\u5EA6 + \u540E\u7F00\u957F\u5EA6) return \u6587\u672C;
  const \u524D\u7F00 = \u6587\u672C.slice(0, \u524D\u7F00\u957F\u5EA6);
  const \u540E\u7F00 = \u6587\u672C.slice(-\u540E\u7F00\u957F\u5EA6);
  const \u661F\u53F7\u6570\u91CF = \u6587\u672C.length - \u524D\u7F00\u957F\u5EA6 - \u540E\u7F00\u957F\u5EA6;
  return `${\u524D\u7F00}${"*".repeat(\u661F\u53F7\u6570\u91CF)}${\u540E\u7F00}`;
}
__name(\u63A9\u7801\u654F\u611F\u4FE1\u606F, "\u63A9\u7801\u654F\u611F\u4FE1\u606F");
async function MD5MD5(\u6587\u672C) {
  const \u7F16\u7801\u5668 = new TextEncoder();
  const \u7B2C\u4E00\u6B21\u54C8\u5E0C = await crypto.subtle.digest("MD5", \u7F16\u7801\u5668.encode(\u6587\u672C));
  const \u7B2C\u4E00\u6B21\u54C8\u5E0C\u6570\u7EC4 = Array.from(new Uint8Array(\u7B2C\u4E00\u6B21\u54C8\u5E0C));
  const \u7B2C\u4E00\u6B21\u5341\u516D\u8FDB\u5236 = \u7B2C\u4E00\u6B21\u54C8\u5E0C\u6570\u7EC4.map((\u5B57\u8282) => \u5B57\u8282.toString(16).padStart(2, "0")).join("");
  const \u7B2C\u4E8C\u6B21\u54C8\u5E0C = await crypto.subtle.digest("MD5", \u7F16\u7801\u5668.encode(\u7B2C\u4E00\u6B21\u5341\u516D\u8FDB\u5236.slice(7, 27)));
  const \u7B2C\u4E8C\u6B21\u54C8\u5E0C\u6570\u7EC4 = Array.from(new Uint8Array(\u7B2C\u4E8C\u6B21\u54C8\u5E0C));
  const \u7B2C\u4E8C\u6B21\u5341\u516D\u8FDB\u5236 = \u7B2C\u4E8C\u6B21\u54C8\u5E0C\u6570\u7EC4.map((\u5B57\u8282) => \u5B57\u8282.toString(16).padStart(2, "0")).join("");
  return \u7B2C\u4E8C\u6B21\u5341\u516D\u8FDB\u5236.toLowerCase();
}
__name(MD5MD5, "MD5MD5");
function \u968F\u673A\u8DEF\u5F84(\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = "/") {
  const \u5E38\u7528\u8DEF\u5F84\u76EE\u5F55 = ["about", "account", "acg", "act", "activity", "ad", "ads", "ajax", "album", "albums", "anime", "api", "app", "apps", "archive", "archives", "article", "articles", "ask", "auth", "avatar", "bbs", "bd", "blog", "blogs", "book", "books", "bt", "buy", "cart", "category", "categories", "cb", "channel", "channels", "chat", "china", "city", "class", "classify", "clip", "clips", "club", "cn", "code", "collect", "collection", "comic", "comics", "community", "company", "config", "contact", "content", "course", "courses", "cp", "data", "detail", "details", "dh", "directory", "discount", "discuss", "dl", "dload", "doc", "docs", "document", "documents", "doujin", "download", "downloads", "drama", "edu", "en", "ep", "episode", "episodes", "event", "events", "f", "faq", "favorite", "favourites", "favs", "feedback", "file", "files", "film", "films", "forum", "forums", "friend", "friends", "game", "games", "gif", "go", "go.html", "go.php", "group", "groups", "help", "home", "hot", "htm", "html", "image", "images", "img", "index", "info", "intro", "item", "items", "ja", "jp", "jump", "jump.html", "jump.php", "jumping", "knowledge", "lang", "lesson", "lessons", "lib", "library", "link", "links", "list", "live", "lives", "m", "mag", "magnet", "mall", "manhua", "map", "member", "members", "message", "messages", "mobile", "movie", "movies", "music", "my", "new", "news", "note", "novel", "novels", "online", "order", "out", "out.html", "out.php", "outbound", "p", "page", "pages", "pay", "payment", "pdf", "photo", "photos", "pic", "pics", "picture", "pictures", "play", "player", "playlist", "post", "posts", "product", "products", "program", "programs", "project", "qa", "question", "rank", "ranking", "read", "readme", "redirect", "redirect.html", "redirect.php", "reg", "register", "res", "resource", "retrieve", "sale", "search", "season", "seasons", "section", "seller", "series", "service", "services", "setting", "settings", "share", "shop", "show", "shows", "site", "soft", "sort", "source", "special", "star", "stars", "static", "stock", "store", "stream", "streaming", "streams", "student", "study", "tag", "tags", "task", "teacher", "team", "tech", "temp", "test", "thread", "tool", "tools", "topic", "topics", "torrent", "trade", "travel", "tv", "txt", "type", "u", "upload", "uploads", "url", "urls", "user", "users", "v", "version", "video", "videos", "view", "vip", "vod", "watch", "web", "wenku", "wiki", "work", "www", "zh", "zh-cn", "zh-tw", "zip"];
  const \u968F\u673A\u6570 = Math.floor(Math.random() * 3 + 1);
  const \u968F\u673A\u8DEF\u5F842 = \u5E38\u7528\u8DEF\u5F84\u76EE\u5F55.sort(() => 0.5 - Math.random()).slice(0, \u968F\u673A\u6570).join("/");
  if (\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 === "/") return `/${\u968F\u673A\u8DEF\u5F842}`;
  else return `/${\u968F\u673A\u8DEF\u5F842 + \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace("/?", "?")}`;
}
__name(\u968F\u673A\u8DEF\u5F84, "\u968F\u673A\u8DEF\u5F84");
function \u968F\u673A\u66FF\u6362\u901A\u914D\u7B26(h) {
  if (!h?.includes("*")) return h;
  const \u5B57\u7B26\u96C6 = "abcdefghijklmnopqrstuvwxyz0123456789";
  return h.replace(/\*/g, () => {
    let s = "";
    for (let i = 0; i < Math.floor(Math.random() * 14) + 3; i++)
      s += \u5B57\u7B26\u96C6[Math.floor(Math.random() * 36)];
    return s;
  });
}
__name(\u968F\u673A\u66FF\u6362\u901A\u914D\u7B26, "\u968F\u673A\u66FF\u6362\u901A\u914D\u7B26");
function \u6279\u91CF\u66FF\u6362\u57DF\u540D(\u5185\u5BB9, hosts, \u6BCF\u7EC4\u6570\u91CF = 2) {
  const \u6253\u4E71\u540E\u6570\u7EC4 = [...hosts].sort(() => Math.random() - 0.5);
  let count = 0, currentRandomHost = null;
  return \u5185\u5BB9.replace(/example\.com/g, () => {
    if (count % \u6BCF\u7EC4\u6570\u91CF === 0) currentRandomHost = \u968F\u673A\u66FF\u6362\u901A\u914D\u7B26(\u6253\u4E71\u540E\u6570\u7EC4[Math.floor(count / \u6BCF\u7EC4\u6570\u91CF) % \u6253\u4E71\u540E\u6570\u7EC4.length]);
    count++;
    return currentRandomHost;
  });
}
__name(\u6279\u91CF\u66FF\u6362\u57DF\u540D, "\u6279\u91CF\u66FF\u6362\u57DF\u540D");
async function DoH\u67E5\u8BE2(\u57DF\u540D, \u8BB0\u5F55\u7C7B\u578B, DoH\u89E3\u6790\u670D\u52A1 = "https://cloudflare-dns.com/dns-query") {
  const \u5F00\u59CB\u65F6\u95F4 = performance.now();
  console.log(`[DoH\u67E5\u8BE2] \u5F00\u59CB\u67E5\u8BE2 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1}`);
  try {
    const \u7C7B\u578B\u6620\u5C04 = { "A": 1, "NS": 2, "CNAME": 5, "MX": 15, "TXT": 16, "AAAA": 28, "SRV": 33, "HTTPS": 65 };
    const qtype = \u7C7B\u578B\u6620\u5C04[\u8BB0\u5F55\u7C7B\u578B.toUpperCase()] || 1;
    const \u7F16\u7801\u57DF\u540D = /* @__PURE__ */ __name((name) => {
      const parts = name.endsWith(".") ? name.slice(0, -1).split(".") : name.split(".");
      const bufs = [];
      for (const label of parts) {
        const enc = new TextEncoder().encode(label);
        bufs.push(new Uint8Array([enc.length]), enc);
      }
      bufs.push(new Uint8Array([0]));
      const total = bufs.reduce((s, b) => s + b.length, 0);
      const result = new Uint8Array(total);
      let off = 0;
      for (const b of bufs) {
        result.set(b, off);
        off += b.length;
      }
      return result;
    }, "\u7F16\u7801\u57DF\u540D");
    const qname = \u7F16\u7801\u57DF\u540D(\u57DF\u540D);
    const query = new Uint8Array(12 + qname.length + 4);
    const qview = new DataView(query.buffer);
    qview.setUint16(0, 0);
    qview.setUint16(2, 256);
    qview.setUint16(4, 1);
    query.set(qname, 12);
    qview.setUint16(12 + qname.length, qtype);
    qview.setUint16(12 + qname.length + 2, 1);
    console.log(`[DoH\u67E5\u8BE2] \u53D1\u9001\u67E5\u8BE2\u62A5\u6587 ${\u57DF\u540D} via ${DoH\u89E3\u6790\u670D\u52A1} (type=${qtype}, ${query.length}\u5B57\u8282)`);
    const response = await fetch(DoH\u89E3\u6790\u670D\u52A1, {
      method: "POST",
      headers: {
        "Content-Type": "application/dns-message",
        "Accept": "application/dns-message"
      },
      body: query
    });
    if (!response.ok) {
      console.warn(`[DoH\u67E5\u8BE2] \u8BF7\u6C42\u5931\u8D25 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} \u54CD\u5E94\u4EE3\u7801:${response.status}`);
      return [];
    }
    const buf = new Uint8Array(await response.arrayBuffer());
    const dv = new DataView(buf.buffer);
    const qdcount = dv.getUint16(4);
    const ancount = dv.getUint16(6);
    console.log(`[DoH\u67E5\u8BE2] \u6536\u5230\u54CD\u5E94 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} (${buf.length}\u5B57\u8282, ${ancount}\u6761\u5E94\u7B54)`);
    const \u89E3\u6790\u57DF\u540D = /* @__PURE__ */ __name((pos) => {
      const labels = [];
      let p = pos, jumped = false, endPos = -1, safe = 128;
      while (p < buf.length && safe-- > 0) {
        const len = buf[p];
        if (len === 0) {
          if (!jumped) endPos = p + 1;
          break;
        }
        if ((len & 192) === 192) {
          if (!jumped) endPos = p + 2;
          p = (len & 63) << 8 | buf[p + 1];
          jumped = true;
          continue;
        }
        labels.push(new TextDecoder().decode(buf.slice(p + 1, p + 1 + len)));
        p += len + 1;
      }
      if (endPos === -1) endPos = p + 1;
      return [labels.join("."), endPos];
    }, "\u89E3\u6790\u57DF\u540D");
    let offset = 12;
    for (let i = 0; i < qdcount; i++) {
      const [, end] = \u89E3\u6790\u57DF\u540D(offset);
      offset = /** @type {number} */
      end + 4;
    }
    const answers = [];
    for (let i = 0; i < ancount && offset < buf.length; i++) {
      const [name, nameEnd] = \u89E3\u6790\u57DF\u540D(offset);
      offset = /** @type {number} */
      nameEnd;
      const type = dv.getUint16(offset);
      offset += 2;
      offset += 2;
      const ttl = dv.getUint32(offset);
      offset += 4;
      const rdlen = dv.getUint16(offset);
      offset += 2;
      const rdata = buf.slice(offset, offset + rdlen);
      offset += rdlen;
      let data;
      if (type === 1 && rdlen === 4) {
        data = `${rdata[0]}.${rdata[1]}.${rdata[2]}.${rdata[3]}`;
      } else if (type === 28 && rdlen === 16) {
        const segs = [];
        for (let j = 0; j < 16; j += 2) segs.push((rdata[j] << 8 | rdata[j + 1]).toString(16));
        data = segs.join(":");
      } else if (type === 16) {
        let tOff = 0;
        const parts = [];
        while (tOff < rdlen) {
          const tLen = rdata[tOff++];
          parts.push(new TextDecoder().decode(rdata.slice(tOff, tOff + tLen)));
          tOff += tLen;
        }
        data = parts.join("");
      } else if (type === 5) {
        const [cname] = \u89E3\u6790\u57DF\u540D(offset - rdlen);
        data = cname;
      } else {
        data = Array.from(rdata).map((b) => b.toString(16).padStart(2, "0")).join("");
      }
      answers.push({ name, type, TTL: ttl, data, rdata });
    }
    const \u8017\u65F6 = (performance.now() - \u5F00\u59CB\u65F6\u95F4).toFixed(2);
    console.log(`[DoH\u67E5\u8BE2] \u67E5\u8BE2\u5B8C\u6210 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} ${\u8017\u65F6}ms \u5171${answers.length}\u6761\u7ED3\u679C${answers.length > 0 ? "\n" + answers.map((a, i) => `  ${i + 1}. ${a.name} type=${a.type} TTL=${a.TTL} data=${a.data}`).join("\n") : ""}`);
    return answers;
  } catch (error) {
    const \u8017\u65F6 = (performance.now() - \u5F00\u59CB\u65F6\u95F4).toFixed(2);
    console.error(`[DoH\u67E5\u8BE2] \u67E5\u8BE2\u5931\u8D25 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} ${\u8017\u65F6}ms:`, error);
    return [];
  }
}
__name(DoH\u67E5\u8BE2, "DoH\u67E5\u8BE2");
async function getECH(host) {
  try {
    const answers = await DoH\u67E5\u8BE2(host, "HTTPS");
    if (!answers.length) return "";
    for (const ans of answers) {
      if (ans.type !== 65 || !ans.rdata) continue;
      const bytes = ans.rdata;
      let offset = 2;
      while (offset < bytes.length) {
        const len = bytes[offset];
        if (len === 0) {
          offset++;
          break;
        }
        offset += len + 1;
      }
      while (offset + 4 <= bytes.length) {
        const key = bytes[offset] << 8 | bytes[offset + 1];
        const len = bytes[offset + 2] << 8 | bytes[offset + 3];
        offset += 4;
        if (key === 5) return btoa(String.fromCharCode(...bytes.slice(offset, offset + len)));
        offset += len;
      }
    }
    return "";
  } catch {
    return "";
  }
}
__name(getECH, "getECH");
async function \u8BFB\u53D6config_JSON(env, hostname, userID, \u91CD\u7F6E\u914D\u7F6E = false) {
  const _p = atob("UFJPWFlJUA==");
  const host = hostname, CM_DoH = "https://doh.cmliussss.net/CMLiussss", \u5360\u4F4D\u7B26 = "{{IP:PORT}}", \u521D\u59CB\u5316\u5F00\u59CB\u65F6\u95F4 = performance.now(), \u9ED8\u8BA4\u914D\u7F6EJSON = {
    TIME: (/* @__PURE__ */ new Date()).toISOString(),
    HOST: host,
    HOSTS: [hostname],
    UUID: userID,
    PATH: "/",
    \u534F\u8BAE\u7C7B\u578B: "vless",
    \u4F20\u8F93\u534F\u8BAE: "ws",
    \u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1: false,
    \u542F\u75280RTT: false,
    TLS\u5206\u7247: null,
    \u968F\u673A\u8DEF\u5F84: false,
    ECH: false,
    ECHConfig: {
      DNS: CM_DoH,
      SNI: null
    },
    Fingerprint: "chrome",
    \u4F18\u9009\u8BA2\u9605\u751F\u6210: {
      local: true,
      // true: 基于本地的优选地址  false: 优选订阅生成器
      \u672C\u5730IP\u5E93: {
        \u968F\u673AIP: true,
        // 当 随机IP 为true时生效，启用随机IP的数量，否则使用KV内的ADD.txt
        \u968F\u673A\u6570\u91CF: 16,
        \u6307\u5B9A\u7AEF\u53E3: -1
      },
      SUB: null,
      SUBNAME: "edgetunnel",
      SUBUpdateTime: 3,
      // 订阅更新时间（小时）
      TOKEN: await MD5MD5(hostname + userID)
    },
    \u8BA2\u9605\u8F6C\u6362\u914D\u7F6E: {
      SUBAPI: "https://SUBAPI.cmliussss.net",
      SUBCONFIG: "https://raw.githubusercontent.com/cmliu/ACL4SSR/refs/heads/main/Clash/config/ACL4SSR_Online_Mini_MultiMode_CF.ini",
      SUBEMOJI: false
    },
    \u53CD\u4EE3: {
      [_p]: "auto",
      SOCKS5: {
        \u542F\u7528: \u542F\u7528SOCKS5\u53CD\u4EE3,
        \u5168\u5C40: \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3,
        \u8D26\u53F7: \u6211\u7684SOCKS5\u8D26\u53F7,
        \u767D\u540D\u5355: SOCKS5\u767D\u540D\u5355
      },
      \u8DEF\u5F84\u6A21\u677F: {
        [_p]: "proxyip=" + \u5360\u4F4D\u7B26,
        SOCKS5: {
          \u5168\u5C40: "socks5://" + \u5360\u4F4D\u7B26,
          \u6807\u51C6: "socks5=" + \u5360\u4F4D\u7B26
        },
        HTTP: {
          \u5168\u5C40: "http://" + \u5360\u4F4D\u7B26,
          \u6807\u51C6: "http=" + \u5360\u4F4D\u7B26
        }
      }
    },
    TG: {
      \u542F\u7528: false,
      BotToken: null,
      ChatID: null
    },
    CF: {
      Email: null,
      GlobalAPIKey: null,
      AccountID: null,
      APIToken: null,
      UsageAPI: null,
      Usage: {
        success: false,
        pages: 0,
        workers: 0,
        total: 0,
        max: 1e5
      }
    }
  };
  try {
    let configJSON = await env.KV.get("config.json");
    if (!configJSON || \u91CD\u7F6E\u914D\u7F6E == true) {
      await env.KV.put("config.json", JSON.stringify(\u9ED8\u8BA4\u914D\u7F6EJSON, null, 2));
      config_JSON = \u9ED8\u8BA4\u914D\u7F6EJSON;
    } else {
      config_JSON = JSON.parse(configJSON);
    }
  } catch (error) {
    console.error(`\u8BFB\u53D6config_JSON\u51FA\u9519: ${error.message}`);
    config_JSON = \u9ED8\u8BA4\u914D\u7F6EJSON;
  }
  config_JSON.HOST = host;
  if (!config_JSON.HOSTS) config_JSON.HOSTS = [hostname];
  if (env.HOST) config_JSON.HOSTS = (await \u6574\u7406\u6210\u6570\u7EC4(env.HOST)).map((h) => h.toLowerCase().replace(/^https?:\/\//, "").split("/")[0].split(":")[0]);
  config_JSON.UUID = userID;
  if (!config_JSON.\u968F\u673A\u8DEF\u5F84) config_JSON.\u968F\u673A\u8DEF\u5F84 = false;
  if (!config_JSON.\u542F\u75280RTT) config_JSON.\u542F\u75280RTT = false;
  if (env.PATH) config_JSON.PATH = env.PATH.startsWith("/") ? env.PATH : "/" + env.PATH;
  else if (!config_JSON.PATH) config_JSON.PATH = "/";
  if (!config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F?.[_p]) {
    config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F = {
      [_p]: "proxyip=" + \u5360\u4F4D\u7B26,
      SOCKS5: {
        \u5168\u5C40: "socks5://" + \u5360\u4F4D\u7B26,
        \u6807\u51C6: "socks5=" + \u5360\u4F4D\u7B26
      },
      HTTP: {
        \u5168\u5C40: "http://" + \u5360\u4F4D\u7B26,
        \u6807\u51C6: "http=" + \u5360\u4F4D\u7B26
      }
    };
  }
  const \u4EE3\u7406\u914D\u7F6E = config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F[config_JSON.\u53CD\u4EE3.SOCKS5.\u542F\u7528?.toUpperCase()];
  let \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = "";
  if (\u4EE3\u7406\u914D\u7F6E && config_JSON.\u53CD\u4EE3.SOCKS5.\u8D26\u53F7) \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = (config_JSON.\u53CD\u4EE3.SOCKS5.\u5168\u5C40 ? \u4EE3\u7406\u914D\u7F6E.\u5168\u5C40 : \u4EE3\u7406\u914D\u7F6E.\u6807\u51C6).replace(\u5360\u4F4D\u7B26, config_JSON.\u53CD\u4EE3.SOCKS5.\u8D26\u53F7);
  else if (config_JSON.\u53CD\u4EE3[_p] !== "auto") \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F[_p].replace(\u5360\u4F4D\u7B26, config_JSON.\u53CD\u4EE3[_p]);
  let \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 = "";
  if (\u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570.includes("?")) {
    const [\u53CD\u4EE3\u8DEF\u5F84\u90E8\u5206, \u53CD\u4EE3\u67E5\u8BE2\u90E8\u5206] = \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570.split("?");
    \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = \u53CD\u4EE3\u8DEF\u5F84\u90E8\u5206;
    \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 = \u53CD\u4EE3\u67E5\u8BE2\u90E8\u5206;
  }
  config_JSON.PATH = config_JSON.PATH.replace(\u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570, "").replace("//", "/");
  const normalizedPath = config_JSON.PATH === "/" ? "" : config_JSON.PATH.replace(/\/+(?=\?|$)/, "").replace(/\/+$/, "");
  const [\u8DEF\u5F84\u90E8\u5206, ...\u67E5\u8BE2\u6570\u7EC4] = normalizedPath.split("?");
  const \u67E5\u8BE2\u90E8\u5206 = \u67E5\u8BE2\u6570\u7EC4.length ? "?" + \u67E5\u8BE2\u6570\u7EC4.join("?") : "";
  const \u6700\u7EC8\u67E5\u8BE2\u90E8\u5206 = \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 ? \u67E5\u8BE2\u90E8\u5206 ? \u67E5\u8BE2\u90E8\u5206 + "&" + \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 : "?" + \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 : \u67E5\u8BE2\u90E8\u5206;
  config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = (\u8DEF\u5F84\u90E8\u5206 || "/") + (\u8DEF\u5F84\u90E8\u5206 && \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 ? "/" : "") + \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 + \u6700\u7EC8\u67E5\u8BE2\u90E8\u5206 + (config_JSON.\u542F\u75280RTT ? (\u6700\u7EC8\u67E5\u8BE2\u90E8\u5206 ? "&" : "?") + "ed=2560" : "");
  if (!config_JSON.TLS\u5206\u7247 && config_JSON.TLS\u5206\u7247 !== null) config_JSON.TLS\u5206\u7247 = null;
  const TLS\u5206\u7247\u53C2\u6570 = config_JSON.TLS\u5206\u7247 == "Shadowrocket" ? `&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}` : config_JSON.TLS\u5206\u7247 == "Happ" ? `&fragment=${encodeURIComponent("3,1,tlshello")}` : "";
  if (!config_JSON.Fingerprint) config_JSON.Fingerprint = "chrome";
  if (!config_JSON.ECH) config_JSON.ECH = false;
  if (!config_JSON.ECHConfig) config_JSON.ECHConfig = { DNS: CM_DoH, SNI: null };
  const ECHLINK\u53C2\u6570 = config_JSON.ECH ? `&ech=${encodeURIComponent((config_JSON.ECHConfig.SNI ? config_JSON.ECHConfig.SNI + "+" : "") + config_JSON.ECHConfig.DNS)}` : "";
  config_JSON.LINK = `${config_JSON.\u534F\u8BAE\u7C7B\u578B}://${userID}@${host}:443?security=tls&type=${config_JSON.\u4F20\u8F93\u534F\u8BAE + ECHLINK\u53C2\u6570}&host=${host}&fp=${config_JSON.Fingerprint}&sni=${host}&path=${encodeURIComponent(config_JSON.\u968F\u673A\u8DEF\u5F84 ? \u968F\u673A\u8DEF\u5F84(config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) : config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) + TLS\u5206\u7247\u53C2\u6570}&encryption=none${config_JSON.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1 ? "&insecure=1&allowInsecure=1" : ""}#${encodeURIComponent(config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBNAME)}`;
  config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.TOKEN = await MD5MD5(hostname + userID);
  const \u521D\u59CB\u5316TG_JSON = { BotToken: null, ChatID: null };
  config_JSON.TG = { \u542F\u7528: config_JSON.TG.\u542F\u7528 ? config_JSON.TG.\u542F\u7528 : false, ...\u521D\u59CB\u5316TG_JSON };
  try {
    const TG_TXT = await env.KV.get("tg.json");
    if (!TG_TXT) {
      await env.KV.put("tg.json", JSON.stringify(\u521D\u59CB\u5316TG_JSON, null, 2));
    } else {
      const TG_JSON = JSON.parse(TG_TXT);
      config_JSON.TG.ChatID = TG_JSON.ChatID ? TG_JSON.ChatID : null;
      config_JSON.TG.BotToken = TG_JSON.BotToken ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(TG_JSON.BotToken) : null;
    }
  } catch (error) {
    console.error(`\u8BFB\u53D6tg.json\u51FA\u9519: ${error.message}`);
  }
  const \u521D\u59CB\u5316CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
  config_JSON.CF = { ...\u521D\u59CB\u5316CF_JSON, Usage: { success: false, pages: 0, workers: 0, total: 0, max: 1e5 } };
  try {
    const CF_TXT = await env.KV.get("cf.json");
    if (!CF_TXT) {
      await env.KV.put("cf.json", JSON.stringify(\u521D\u59CB\u5316CF_JSON, null, 2));
    } else {
      const CF_JSON = JSON.parse(CF_TXT);
      if (CF_JSON.UsageAPI) {
        try {
          const response = await fetch(CF_JSON.UsageAPI);
          const Usage = await response.json();
          config_JSON.CF.Usage = Usage;
        } catch (err) {
          console.error(`\u8BF7\u6C42 CF_JSON.UsageAPI \u5931\u8D25: ${err.message}`);
        }
      } else {
        config_JSON.CF.Email = CF_JSON.Email ? CF_JSON.Email : null;
        config_JSON.CF.GlobalAPIKey = CF_JSON.GlobalAPIKey ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(CF_JSON.GlobalAPIKey) : null;
        config_JSON.CF.AccountID = CF_JSON.AccountID ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(CF_JSON.AccountID) : null;
        config_JSON.CF.APIToken = CF_JSON.APIToken ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(CF_JSON.APIToken) : null;
        config_JSON.CF.UsageAPI = null;
        const Usage = await getCloudflareUsage(CF_JSON.Email, CF_JSON.GlobalAPIKey, CF_JSON.AccountID, CF_JSON.APIToken);
        config_JSON.CF.Usage = Usage;
      }
    }
  } catch (error) {
    console.error(`\u8BFB\u53D6cf.json\u51FA\u9519: ${error.message}`);
  }
  config_JSON.\u52A0\u8F7D\u65F6\u95F4 = (performance.now() - \u521D\u59CB\u5316\u5F00\u59CB\u65F6\u95F4).toFixed(2) + "ms";
  return config_JSON;
}
__name(\u8BFB\u53D6config_JSON, "\u8BFB\u53D6config_JSON");
async function \u751F\u6210\u968F\u673AIP(request, count = 16, \u6307\u5B9A\u7AEF\u53E3 = -1) {
  const ISP\u914D\u7F6E = {
    "9808": { file: "cmcc", name: "CF\u79FB\u52A8\u4F18\u9009" },
    "4837": { file: "cu", name: "CF\u8054\u901A\u4F18\u9009" },
    "17623": { file: "cu", name: "CF\u8054\u901A\u4F18\u9009" },
    "17816": { file: "cu", name: "CF\u8054\u901A\u4F18\u9009" },
    "4134": { file: "ct", name: "CF\u7535\u4FE1\u4F18\u9009" }
  };
  const asn = request.cf.asn, isp = ISP\u914D\u7F6E[asn];
  const cidr_url = isp ? `https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/${isp.file}.txt` : "https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR.txt";
  const cfname = isp?.name || "CF\u5B98\u65B9\u4F18\u9009";
  const cfport = [443, 2053, 2083, 2087, 2096, 8443];
  let cidrList = [];
  try {
    const res = await fetch(cidr_url);
    cidrList = res.ok ? await \u6574\u7406\u6210\u6570\u7EC4(await res.text()) : ["104.16.0.0/13"];
  } catch {
    cidrList = ["104.16.0.0/13"];
  }
  const generateRandomIPFromCIDR = /* @__PURE__ */ __name((cidr) => {
    const [baseIP, prefixLength] = cidr.split("/"), prefix = parseInt(prefixLength), hostBits = 32 - prefix;
    const ipInt = baseIP.split(".").reduce((a, p, i) => a | parseInt(p) << 24 - i * 8, 0);
    const randomOffset = Math.floor(Math.random() * Math.pow(2, hostBits));
    const mask = 4294967295 << hostBits >>> 0, randomIP = ((ipInt & mask) >>> 0) + randomOffset >>> 0;
    return [randomIP >>> 24 & 255, randomIP >>> 16 & 255, randomIP >>> 8 & 255, randomIP & 255].join(".");
  }, "generateRandomIPFromCIDR");
  const randomIPs = Array.from({ length: count }, () => {
    const ip = generateRandomIPFromCIDR(cidrList[Math.floor(Math.random() * cidrList.length)]);
    return `${ip}:${\u6307\u5B9A\u7AEF\u53E3 === -1 ? cfport[Math.floor(Math.random() * cfport.length)] : \u6307\u5B9A\u7AEF\u53E3}#${cfname}`;
  });
  return [randomIPs, randomIPs.join("\n")];
}
__name(\u751F\u6210\u968F\u673AIP, "\u751F\u6210\u968F\u673AIP");
async function \u6574\u7406\u6210\u6570\u7EC4(\u5185\u5BB9) {
  var \u66FF\u6362\u540E\u7684\u5185\u5BB9 = \u5185\u5BB9.replace(/[	"'\r\n]+/g, ",").replace(/,+/g, ",");
  if (\u66FF\u6362\u540E\u7684\u5185\u5BB9.charAt(0) == ",") \u66FF\u6362\u540E\u7684\u5185\u5BB9 = \u66FF\u6362\u540E\u7684\u5185\u5BB9.slice(1);
  if (\u66FF\u6362\u540E\u7684\u5185\u5BB9.charAt(\u66FF\u6362\u540E\u7684\u5185\u5BB9.length - 1) == ",") \u66FF\u6362\u540E\u7684\u5185\u5BB9 = \u66FF\u6362\u540E\u7684\u5185\u5BB9.slice(0, \u66FF\u6362\u540E\u7684\u5185\u5BB9.length - 1);
  const \u5730\u5740\u6570\u7EC4 = \u66FF\u6362\u540E\u7684\u5185\u5BB9.split(",");
  return \u5730\u5740\u6570\u7EC4;
}
__name(\u6574\u7406\u6210\u6570\u7EC4, "\u6574\u7406\u6210\u6570\u7EC4");
function isValidBase64(str) {
  if (typeof str !== "string") return false;
  const cleanStr = str.replace(/\s/g, "");
  if (cleanStr.length === 0 || cleanStr.length % 4 !== 0) return false;
  const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
  if (!base64Regex.test(cleanStr)) return false;
  try {
    atob(cleanStr);
    return true;
  } catch {
    return false;
  }
}
__name(isValidBase64, "isValidBase64");
function base64Decode(str) {
  const bytes = new Uint8Array(atob(str).split("").map((c) => c.charCodeAt(0)));
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(bytes);
}
__name(base64Decode, "base64Decode");
async function \u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E(\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST) {
  let \u4F18\u9009IP = [], \u5176\u4ED6\u8282\u70B9LINK = "", \u683C\u5F0F\u5316HOST = \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST.replace(/^sub:\/\//i, "https://").split("#")[0].split("?")[0];
  if (!/^https?:\/\//i.test(\u683C\u5F0F\u5316HOST)) \u683C\u5F0F\u5316HOST = `https://${\u683C\u5F0F\u5316HOST}`;
  try {
    const url = new URL(\u683C\u5F0F\u5316HOST);
    \u683C\u5F0F\u5316HOST = url.origin;
  } catch (error) {
    \u4F18\u9009IP.push(`127.0.0.1:1234#${\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST}\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u683C\u5F0F\u5316\u5F02\u5E38:${error.message}`);
    return [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK];
  }
  const \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668URL = `${\u683C\u5F0F\u5316HOST}/sub?host=example.com&uuid=00000000-0000-4000-8000-000000000000`;
  try {
    const response = await fetch(\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668URL, {
      headers: { "User-Agent": "v2rayN/edgetunnel (https://github.com/cmliu/edgetunnel)" }
    });
    if (!response.ok) {
      \u4F18\u9009IP.push(`127.0.0.1:1234#${\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST}\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u5F02\u5E38:${response.statusText}`);
      return [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK];
    }
    const \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9 = atob(await response.text());
    const \u8BA2\u9605\u884C\u5217\u8868 = \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9.includes("\r\n") ? \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9.split("\r\n") : \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9.split("\n");
    for (const \u884C\u5185\u5BB9 of \u8BA2\u9605\u884C\u5217\u8868) {
      if (!\u884C\u5185\u5BB9.trim()) continue;
      if (\u884C\u5185\u5BB9.includes("00000000-0000-4000-8000-000000000000") && \u884C\u5185\u5BB9.includes("example.com")) {
        const \u5730\u5740\u5339\u914D = \u884C\u5185\u5BB9.match(/:\/\/[^@]+@([^?]+)/);
        if (\u5730\u5740\u5339\u914D) {
          let \u5730\u5740\u7AEF\u53E3 = \u5730\u5740\u5339\u914D[1], \u5907\u6CE8 = "";
          const \u5907\u6CE8\u5339\u914D = \u884C\u5185\u5BB9.match(/#(.+)$/);
          if (\u5907\u6CE8\u5339\u914D) \u5907\u6CE8 = "#" + decodeURIComponent(\u5907\u6CE8\u5339\u914D[1]);
          \u4F18\u9009IP.push(\u5730\u5740\u7AEF\u53E3 + \u5907\u6CE8);
        }
      } else {
        \u5176\u4ED6\u8282\u70B9LINK += \u884C\u5185\u5BB9 + "\n";
      }
    }
  } catch (error) {
    \u4F18\u9009IP.push(`127.0.0.1:1234#${\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST}\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u5F02\u5E38:${error.message}`);
  }
  return [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK];
}
__name(\u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E, "\u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E");
async function \u8BF7\u6C42\u4F18\u9009API(urls, \u9ED8\u8BA4\u7AEF\u53E3 = "443", \u8D85\u65F6\u65F6\u95F4 = 3e3) {
  if (!urls?.length) return [[], [], [], []];
  const results = /* @__PURE__ */ new Set(), \u53CD\u4EE3IP\u6C60 = /* @__PURE__ */ new Set();
  let \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 = "", \u9700\u8981\u8BA2\u9605\u8F6C\u6362\u8BA2\u9605URLs = [];
  await Promise.allSettled(urls.map(async (url) => {
    const hashIndex = url.indexOf("#");
    const urlWithoutHash = hashIndex > -1 ? url.substring(0, hashIndex) : url;
    const API\u5907\u6CE8\u540D = hashIndex > -1 ? decodeURIComponent(url.substring(hashIndex + 1)) : null;
    const \u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP = url.toLowerCase().includes("proxyip=true");
    if (urlWithoutHash.toLowerCase().startsWith("sub://")) {
      try {
        const [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK] = await \u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E(urlWithoutHash);
        if (API\u5907\u6CE8\u540D) {
          for (const ip of \u4F18\u9009IP) {
            const \u5904\u7406\u540EIP = ip.includes("#") ? `${ip} [${API\u5907\u6CE8\u540D}]` : `${ip}#[${API\u5907\u6CE8\u540D}]`;
            results.add(\u5904\u7406\u540EIP);
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(ip.split("#")[0]);
          }
        } else {
          for (const ip of \u4F18\u9009IP) {
            results.add(ip);
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(ip.split("#")[0]);
          }
        }
        if (\u5176\u4ED6\u8282\u70B9LINK && typeof \u5176\u4ED6\u8282\u70B9LINK === "string" && API\u5907\u6CE8\u540D) {
          const \u5904\u7406\u540ELINK\u5185\u5BB9 = \u5176\u4ED6\u8282\u70B9LINK.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (match, link, lineEnd) => {
            const \u5B8C\u6574\u94FE\u63A5 = link.includes("#") ? `${link}${encodeURIComponent(` [${API\u5907\u6CE8\u540D}]`)}` : `${link}${encodeURIComponent(`#[${API\u5907\u6CE8\u540D}]`)}`;
            return `${\u5B8C\u6574\u94FE\u63A5}${lineEnd}`;
          });
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u5904\u7406\u540ELINK\u5185\u5BB9;
        } else if (\u5176\u4ED6\u8282\u70B9LINK && typeof \u5176\u4ED6\u8282\u70B9LINK === "string") {
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u5176\u4ED6\u8282\u70B9LINK;
        }
      } catch (e) {
      }
      return;
    }
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), \u8D85\u65F6\u65F6\u95F4);
      const response = await fetch(urlWithoutHash, { signal: controller.signal });
      clearTimeout(timeoutId);
      let text = "";
      try {
        const buffer = await response.arrayBuffer();
        const contentType = (response.headers.get("content-type") || "").toLowerCase();
        const charset = contentType.match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase() || "";
        let decoders = ["utf-8", "gb2312"];
        if (charset.includes("gb") || charset.includes("gbk") || charset.includes("gb2312")) {
          decoders = ["gb2312", "utf-8"];
        }
        let decodeSuccess = false;
        for (const decoder of decoders) {
          try {
            const decoded = new TextDecoder(decoder).decode(buffer);
            if (decoded && decoded.length > 0 && !decoded.includes("\uFFFD")) {
              text = decoded;
              decodeSuccess = true;
              break;
            } else if (decoded && decoded.length > 0) {
              continue;
            }
          } catch (e) {
            continue;
          }
        }
        if (!decodeSuccess) {
          text = await response.text();
        }
        if (!text || text.trim().length === 0) {
          return;
        }
      } catch (e) {
        console.error("Failed to decode response:", e);
        return;
      }
      const \u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9 = isValidBase64(text) ? base64Decode(text) : text;
      if (\u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9.split("#")[0].includes("://")) {
        if (API\u5907\u6CE8\u540D) {
          const \u5904\u7406\u540ELINK\u5185\u5BB9 = \u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (match, link, lineEnd) => {
            const \u5B8C\u6574\u94FE\u63A5 = link.includes("#") ? `${link}${encodeURIComponent(` [${API\u5907\u6CE8\u540D}]`)}` : `${link}${encodeURIComponent(`#[${API\u5907\u6CE8\u540D}]`)}`;
            return `${\u5B8C\u6574\u94FE\u63A5}${lineEnd}`;
          });
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u5904\u7406\u540ELINK\u5185\u5BB9 + "\n";
        } else {
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9 + "\n";
        }
        return;
      }
      const lines = text.trim().split("\n").map((l) => l.trim()).filter((l) => l);
      const isCSV = lines.length > 1 && lines[0].includes(",");
      const IPV6_PATTERN = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;
      const parsedUrl = new URL(urlWithoutHash);
      if (!isCSV) {
        lines.forEach((line) => {
          const lineHashIndex = line.indexOf("#");
          const [hostPart, remark] = lineHashIndex > -1 ? [line.substring(0, lineHashIndex), line.substring(lineHashIndex)] : [line, ""];
          let hasPort = false;
          if (hostPart.startsWith("[")) {
            hasPort = /\]:(\d+)$/.test(hostPart);
          } else {
            const colonIndex = hostPart.lastIndexOf(":");
            hasPort = colonIndex > -1 && /^\d+$/.test(hostPart.substring(colonIndex + 1));
          }
          const port = parsedUrl.searchParams.get("port") || \u9ED8\u8BA4\u7AEF\u53E3;
          const ipItem = hasPort ? line : `${hostPart}:${port}${remark}`;
          if (API\u5907\u6CE8\u540D) {
            const \u5904\u7406\u540EIP = ipItem.includes("#") ? `${ipItem} [${API\u5907\u6CE8\u540D}]` : `${ipItem}#[${API\u5907\u6CE8\u540D}]`;
            results.add(\u5904\u7406\u540EIP);
          } else {
            results.add(ipItem);
          }
          if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(ipItem.split("#")[0]);
        });
      } else {
        const headers = lines[0].split(",").map((h) => h.trim());
        const dataLines = lines.slice(1);
        if (headers.includes("IP\u5730\u5740") && headers.includes("\u7AEF\u53E3") && headers.includes("\u6570\u636E\u4E2D\u5FC3")) {
          const ipIdx = headers.indexOf("IP\u5730\u5740"), portIdx = headers.indexOf("\u7AEF\u53E3");
          const remarkIdx = headers.indexOf("\u56FD\u5BB6") > -1 ? headers.indexOf("\u56FD\u5BB6") : headers.indexOf("\u57CE\u5E02") > -1 ? headers.indexOf("\u57CE\u5E02") : headers.indexOf("\u6570\u636E\u4E2D\u5FC3");
          const tlsIdx = headers.indexOf("TLS");
          dataLines.forEach((line) => {
            const cols = line.split(",").map((c) => c.trim());
            if (tlsIdx !== -1 && cols[tlsIdx]?.toLowerCase() !== "true") return;
            const wrappedIP = IPV6_PATTERN.test(cols[ipIdx]) ? `[${cols[ipIdx]}]` : cols[ipIdx];
            const ipItem = `${wrappedIP}:${cols[portIdx]}#${cols[remarkIdx]}`;
            if (API\u5907\u6CE8\u540D) {
              const \u5904\u7406\u540EIP = `${ipItem} [${API\u5907\u6CE8\u540D}]`;
              results.add(\u5904\u7406\u540EIP);
            } else {
              results.add(ipItem);
            }
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(`${wrappedIP}:${cols[portIdx]}`);
          });
        } else if (headers.some((h) => h.includes("IP")) && headers.some((h) => h.includes("\u5EF6\u8FDF")) && headers.some((h) => h.includes("\u4E0B\u8F7D\u901F\u5EA6"))) {
          const ipIdx = headers.findIndex((h) => h.includes("IP"));
          const delayIdx = headers.findIndex((h) => h.includes("\u5EF6\u8FDF"));
          const speedIdx = headers.findIndex((h) => h.includes("\u4E0B\u8F7D\u901F\u5EA6"));
          const port = parsedUrl.searchParams.get("port") || \u9ED8\u8BA4\u7AEF\u53E3;
          dataLines.forEach((line) => {
            const cols = line.split(",").map((c) => c.trim());
            const wrappedIP = IPV6_PATTERN.test(cols[ipIdx]) ? `[${cols[ipIdx]}]` : cols[ipIdx];
            const ipItem = `${wrappedIP}:${port}#CF\u4F18\u9009 ${cols[delayIdx]}ms ${cols[speedIdx]}MB/s`;
            if (API\u5907\u6CE8\u540D) {
              const \u5904\u7406\u540EIP = `${ipItem} [${API\u5907\u6CE8\u540D}]`;
              results.add(\u5904\u7406\u540EIP);
            } else {
              results.add(ipItem);
            }
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(`${wrappedIP}:${port}`);
          });
        }
      }
    } catch (e) {
    }
  }));
  const LINK\u6570\u7EC4 = \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9.trim() ? [...new Set(\u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9.split(/\r?\n/).filter((line) => line.trim() !== ""))] : [];
  return [Array.from(results), LINK\u6570\u7EC4, \u9700\u8981\u8BA2\u9605\u8F6C\u6362\u8BA2\u9605URLs, Array.from(\u53CD\u4EE3IP\u6C60)];
}
__name(\u8BF7\u6C42\u4F18\u9009API, "\u8BF7\u6C42\u4F18\u9009API");
async function \u53CD\u4EE3\u53C2\u6570\u83B7\u53D6(request) {
  const url = new URL(request.url);
  const { searchParams } = url, pathname = decodeURIComponent(url.pathname);
  const pathLower = pathname.toLowerCase();
  \u6211\u7684SOCKS5\u8D26\u53F7 = searchParams.get("socks5") || searchParams.get("http") || null;
  \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = searchParams.has("globalproxy") || false;
  const \u89E3\u6790\u4EE3\u7406URL = /* @__PURE__ */ __name((proxyUrl, \u9ED8\u8BA4\u5168\u5C40 = true) => {
    const protocolMatch = proxyUrl.match(/^(socks5|http):\/\/(.+)$/i);
    if (!protocolMatch) return false;
    \u542F\u7528SOCKS5\u53CD\u4EE3 = protocolMatch[1].toLowerCase();
    \u6211\u7684SOCKS5\u8D26\u53F7 = protocolMatch[2].split("/")[0];
    \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = \u9ED8\u8BA4\u5168\u5C40 || \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3;
    return true;
  }, "\u89E3\u6790\u4EE3\u7406URL");
  const \u63D0\u53D6\u8DEF\u5F84\u503C = /* @__PURE__ */ __name((rawValue) => {
    if (rawValue.includes("://")) {
      const protocolPart = rawValue.split("://");
      if (protocolPart.length === 2) {
        const [protocol, afterProtocol] = protocolPart;
        const firstSlashIndex = afterProtocol.indexOf("/");
        if (firstSlashIndex > 0) {
          return protocol + "://" + afterProtocol.substring(0, firstSlashIndex);
        }
      }
    } else {
      const firstSlashIndex = rawValue.indexOf("/");
      if (firstSlashIndex > 0) {
        return rawValue.substring(0, firstSlashIndex);
      }
    }
    return rawValue;
  }, "\u63D0\u53D6\u8DEF\u5F84\u503C");
  let socksMatch, proxyMatch;
  if (searchParams.has("proxyip")) {
    const \u8DEF\u53C2IP = searchParams.get("proxyip");
    if (\u89E3\u6790\u4EE3\u7406URL(\u8DEF\u53C2IP)) {
    } else {
      \u53CD\u4EE3IP = \u8DEF\u53C2IP;
      \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = false;
      return;
    }
  } else if (socksMatch = pathname.match(/\/(socks5?|http):\/?\/?([^/?#\s]+)/i)) {
    \u542F\u7528SOCKS5\u53CD\u4EE3 = socksMatch[1].toLowerCase() === "http" ? "http" : "socks5";
    \u6211\u7684SOCKS5\u8D26\u53F7 = socksMatch[2].split("/")[0];
    \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = true;
  } else if (socksMatch = pathname.match(/\/(g?s5|socks5|g?http)=([^/?#\s]+)/i)) {
    const type = socksMatch[1].toLowerCase();
    \u6211\u7684SOCKS5\u8D26\u53F7 = socksMatch[2].split("/")[0];
    \u542F\u7528SOCKS5\u53CD\u4EE3 = type.includes("http") ? "http" : "socks5";
    \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = type.startsWith("g") || \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3;
  } else if (proxyMatch = pathLower.match(/\/(proxyip[.=]|pyip=|ip=)([^?#\s]+)/)) {
    let \u8DEF\u53C2IP = \u63D0\u53D6\u8DEF\u5F84\u503C(proxyMatch[2]);
    if (!\u89E3\u6790\u4EE3\u7406URL(\u8DEF\u53C2IP)) {
      \u53CD\u4EE3IP = \u8DEF\u53C2IP;
      \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = false;
      return;
    }
  }
  if (\u6211\u7684SOCKS5\u8D26\u53F7) {
    try {
      parsedSocks5Address = await \u83B7\u53D6SOCKS5\u8D26\u53F7(\u6211\u7684SOCKS5\u8D26\u53F7);
      \u542F\u7528SOCKS5\u53CD\u4EE3 = searchParams.get("http") ? "http" : \u542F\u7528SOCKS5\u53CD\u4EE3 || "socks5";
    } catch (err) {
      console.error("\u89E3\u6790SOCKS5\u5730\u5740\u5931\u8D25:", err.message);
      \u542F\u7528SOCKS5\u53CD\u4EE3 = null;
    }
  } else \u542F\u7528SOCKS5\u53CD\u4EE3 = null;
}
__name(\u53CD\u4EE3\u53C2\u6570\u83B7\u53D6, "\u53CD\u4EE3\u53C2\u6570\u83B7\u53D6");
async function \u83B7\u53D6SOCKS5\u8D26\u53F7(address) {
  if (address.includes("@")) {
    const lastAtIndex = address.lastIndexOf("@");
    let userPassword = address.substring(0, lastAtIndex).replaceAll("%3D", "=");
    const base64Regex = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
    if (base64Regex.test(userPassword) && !userPassword.includes(":")) userPassword = atob(userPassword);
    address = `${userPassword}@${address.substring(lastAtIndex + 1)}`;
  }
  const atIndex = address.lastIndexOf("@");
  const [hostPart, authPart] = atIndex === -1 ? [address, void 0] : [address.substring(atIndex + 1), address.substring(0, atIndex)];
  let username, password;
  if (authPart) {
    [username, password] = authPart.split(":");
    if (!password) throw new Error('\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1A\u8BA4\u8BC1\u90E8\u5206\u5FC5\u987B\u662F "username:password" \u7684\u5F62\u5F0F');
  }
  let hostname, port;
  if (hostPart.includes("]:")) {
    [hostname, port] = [hostPart.split("]:")[0] + "]", Number(hostPart.split("]:")[1].replace(/[^\d]/g, ""))];
  } else if (hostPart.startsWith("[")) {
    [hostname, port] = [hostPart, 80];
  } else {
    const parts = hostPart.split(":");
    [hostname, port] = parts.length === 2 ? [parts[0], Number(parts[1].replace(/[^\d]/g, ""))] : [hostPart, 80];
  }
  if (isNaN(port)) throw new Error("\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1A\u7AEF\u53E3\u53F7\u5FC5\u987B\u662F\u6570\u5B57");
  if (hostname.includes(":") && !/^\[.*\]$/.test(hostname)) throw new Error("\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1AIPv6 \u5730\u5740\u5FC5\u987B\u7528\u65B9\u62EC\u53F7\u62EC\u8D77\u6765\uFF0C\u5982 [2001:db8::1]");
  return { username, password, hostname, port };
}
__name(\u83B7\u53D6SOCKS5\u8D26\u53F7, "\u83B7\u53D6SOCKS5\u8D26\u53F7");
async function getCloudflareUsage(Email, GlobalAPIKey, AccountID, APIToken) {
  const API = "https://api.cloudflare.com/client/v4";
  const sum = /* @__PURE__ */ __name((a) => a?.reduce((t, i) => t + (i?.sum?.requests || 0), 0) || 0, "sum");
  const cfg = { "Content-Type": "application/json" };
  try {
    if (!AccountID && (!Email || !GlobalAPIKey)) return { success: false, pages: 0, workers: 0, total: 0, max: 1e5 };
    if (!AccountID) {
      const r = await fetch(`${API}/accounts`, {
        method: "GET",
        headers: { ...cfg, "X-AUTH-EMAIL": Email, "X-AUTH-KEY": GlobalAPIKey }
      });
      if (!r.ok) throw new Error(`\u8D26\u6237\u83B7\u53D6\u5931\u8D25: ${r.status}`);
      const d = await r.json();
      if (!d?.result?.length) throw new Error("\u672A\u627E\u5230\u8D26\u6237");
      const idx = d.result.findIndex((a) => a.name?.toLowerCase().startsWith(Email.toLowerCase()));
      AccountID = d.result[idx >= 0 ? idx : 0]?.id;
    }
    const now = /* @__PURE__ */ new Date();
    now.setUTCHours(0, 0, 0, 0);
    const hdr = APIToken ? { ...cfg, "Authorization": `Bearer ${APIToken}` } : { ...cfg, "X-AUTH-EMAIL": Email, "X-AUTH-KEY": GlobalAPIKey };
    const res = await fetch(`${API}/graphql`, {
      method: "POST",
      headers: hdr,
      body: JSON.stringify({
        query: `query getBillingMetrics($AccountID: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
                    viewer { accounts(filter: {accountTag: $AccountID}) {
                        pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) { sum { requests } }
                        workersInvocationsAdaptive(limit: 10000, filter: $filter) { sum { requests } }
                    } }
                }`,
        variables: { AccountID, filter: { datetime_geq: now.toISOString(), datetime_leq: (/* @__PURE__ */ new Date()).toISOString() } }
      })
    });
    if (!res.ok) throw new Error(`\u67E5\u8BE2\u5931\u8D25: ${res.status}`);
    const result = await res.json();
    if (result.errors?.length) throw new Error(result.errors[0].message);
    const acc = result?.data?.viewer?.accounts?.[0];
    if (!acc) throw new Error("\u672A\u627E\u5230\u8D26\u6237\u6570\u636E");
    const pages = sum(acc.pagesFunctionsInvocationsAdaptiveGroups);
    const workers = sum(acc.workersInvocationsAdaptive);
    const total = pages + workers;
    const max = 1e5;
    console.log(`\u7EDF\u8BA1\u7ED3\u679C - Pages: ${pages}, Workers: ${workers}, \u603B\u8BA1: ${total}, \u4E0A\u9650: 100000`);
    return { success: true, pages, workers, total, max };
  } catch (error) {
    console.error("\u83B7\u53D6\u4F7F\u7528\u91CF\u9519\u8BEF:", error.message);
    return { success: false, pages: 0, workers: 0, total: 0, max: 1e5 };
  }
}
__name(getCloudflareUsage, "getCloudflareUsage");
function sha224(s) {
  const K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  const r = /* @__PURE__ */ __name((n, b) => (n >>> b | n << 32 - b) >>> 0, "r");
  s = unescape(encodeURIComponent(s));
  const l = s.length * 8;
  s += String.fromCharCode(128);
  while (s.length * 8 % 512 !== 448) s += String.fromCharCode(0);
  const h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
  const hi = Math.floor(l / 4294967296), lo = l & 4294967295;
  s += String.fromCharCode(hi >>> 24 & 255, hi >>> 16 & 255, hi >>> 8 & 255, hi & 255, lo >>> 24 & 255, lo >>> 16 & 255, lo >>> 8 & 255, lo & 255);
  const w = [];
  for (let i = 0; i < s.length; i += 4) w.push(s.charCodeAt(i) << 24 | s.charCodeAt(i + 1) << 16 | s.charCodeAt(i + 2) << 8 | s.charCodeAt(i + 3));
  for (let i = 0; i < w.length; i += 16) {
    const x = new Array(64).fill(0);
    for (let j = 0; j < 16; j++) x[j] = w[i + j];
    for (let j = 16; j < 64; j++) {
      const s0 = r(x[j - 15], 7) ^ r(x[j - 15], 18) ^ x[j - 15] >>> 3;
      const s1 = r(x[j - 2], 17) ^ r(x[j - 2], 19) ^ x[j - 2] >>> 10;
      x[j] = x[j - 16] + s0 + x[j - 7] + s1 >>> 0;
    }
    let [a, b, c, d, e, f, g, h0] = h;
    for (let j = 0; j < 64; j++) {
      const S1 = r(e, 6) ^ r(e, 11) ^ r(e, 25), ch = e & f ^ ~e & g, t1 = h0 + S1 + ch + K[j] + x[j] >>> 0;
      const S0 = r(a, 2) ^ r(a, 13) ^ r(a, 22), maj = a & b ^ a & c ^ b & c, t2 = S0 + maj >>> 0;
      h0 = g;
      g = f;
      f = e;
      e = d + t1 >>> 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 >>> 0;
    }
    for (let j = 0; j < 8; j++) h[j] = h[j] + (j === 0 ? a : j === 1 ? b : j === 2 ? c : j === 3 ? d : j === 4 ? e : j === 5 ? f : j === 6 ? g : h0) >>> 0;
  }
  let hex = "";
  for (let i = 0; i < 7; i++) {
    for (let j = 24; j >= 0; j -= 8) hex += (h[i] >>> j & 255).toString(16).padStart(2, "0");
  }
  return hex;
}
__name(sha224, "sha224");
async function \u89E3\u6790\u5730\u5740\u7AEF\u53E3(proxyIP, \u76EE\u6807\u57DF\u540D = "dash.cloudflare.com", UUID = "00000000-0000-4000-8000-000000000000") {
  if (!\u7F13\u5B58\u53CD\u4EE3IP || !\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4 || \u7F13\u5B58\u53CD\u4EE3IP !== proxyIP) {
    let \u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32 = function(str) {
      let \u5730\u5740 = str, \u7AEF\u53E3 = 443;
      if (str.includes("]:")) {
        const parts = str.split("]:");
        \u5730\u5740 = parts[0] + "]";
        \u7AEF\u53E3 = parseInt(parts[1], 10) || \u7AEF\u53E3;
      } else if (str.includes(":") && !str.startsWith("[")) {
        const colonIndex = str.lastIndexOf(":");
        \u5730\u5740 = str.slice(0, colonIndex);
        \u7AEF\u53E3 = parseInt(str.slice(colonIndex + 1), 10) || \u7AEF\u53E3;
      }
      return [\u5730\u5740, \u7AEF\u53E3];
    };
    __name(\u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32, "\u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32");
    proxyIP = proxyIP.toLowerCase();
    const \u53CD\u4EE3IP\u6570\u7EC4 = await \u6574\u7406\u6210\u6570\u7EC4(proxyIP);
    let \u6240\u6709\u53CD\u4EE3\u6570\u7EC4 = [];
    for (const singleProxyIP of \u53CD\u4EE3IP\u6570\u7EC4) {
      if (singleProxyIP.includes(".william")) {
        try {
          let txtRecords = await DoH\u67E5\u8BE2(singleProxyIP, "TXT");
          let txtData = txtRecords.filter((r) => r.type === 16).map((r) => (
            /** @type {string} */
            r.data
          ));
          if (txtData.length === 0) {
            console.log(`[\u53CD\u4EE3\u89E3\u6790] \u9ED8\u8BA4DoH\u672A\u83B7\u53D6\u5230TXT\u8BB0\u5F55\uFF0C\u5207\u6362Google DoH\u91CD\u8BD5 ${singleProxyIP}`);
            txtRecords = await DoH\u67E5\u8BE2(singleProxyIP, "TXT", "https://dns.google/dns-query");
            txtData = txtRecords.filter((r) => r.type === 16).map((r) => (
              /** @type {string} */
              r.data
            ));
          }
          if (txtData.length > 0) {
            let data = txtData[0];
            if (data.startsWith('"') && data.endsWith('"')) data = data.slice(1, -1);
            const prefixes = data.replace(/\\010/g, ",").replace(/\n/g, ",").split(",").map((s) => s.trim()).filter(Boolean);
            \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push(...prefixes.map((prefix) => \u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32(prefix)));
          }
        } catch (error) {
          console.error("\u89E3\u6790William\u57DF\u540D\u5931\u8D25:", error);
        }
      } else {
        let [\u5730\u5740, \u7AEF\u53E3] = \u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32(singleProxyIP);
        if (singleProxyIP.includes(".tp")) {
          const tpMatch = singleProxyIP.match(/\.tp(\d+)/);
          if (tpMatch) \u7AEF\u53E3 = parseInt(tpMatch[1], 10);
        }
        const ipv4Regex = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
        const ipv6Regex = /^\[?([a-fA-F0-9:]+)\]?$/;
        if (!ipv4Regex.test(\u5730\u5740) && !ipv6Regex.test(\u5730\u5740)) {
          let [aRecords, aaaaRecords] = await Promise.all([
            DoH\u67E5\u8BE2(\u5730\u5740, "A"),
            DoH\u67E5\u8BE2(\u5730\u5740, "AAAA")
          ]);
          let ipv4List = aRecords.filter((r) => r.type === 1).map((r) => r.data);
          let ipv6List = aaaaRecords.filter((r) => r.type === 28).map((r) => `[${r.data}]`);
          let ipAddresses = [...ipv4List, ...ipv6List];
          if (ipAddresses.length === 0) {
            console.log(`[\u53CD\u4EE3\u89E3\u6790] \u9ED8\u8BA4DoH\u672A\u83B7\u53D6\u5230\u89E3\u6790\u7ED3\u679C\uFF0C\u5207\u6362Google DoH\u91CD\u8BD5 ${\u5730\u5740}`);
            [aRecords, aaaaRecords] = await Promise.all([
              DoH\u67E5\u8BE2(\u5730\u5740, "A", "https://dns.google/dns-query"),
              DoH\u67E5\u8BE2(\u5730\u5740, "AAAA", "https://dns.google/dns-query")
            ]);
            ipv4List = aRecords.filter((r) => r.type === 1).map((r) => r.data);
            ipv6List = aaaaRecords.filter((r) => r.type === 28).map((r) => `[${r.data}]`);
            ipAddresses = [...ipv4List, ...ipv6List];
          }
          if (ipAddresses.length > 0) {
            \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push(...ipAddresses.map((ip) => [ip, \u7AEF\u53E3]));
          } else {
            \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push([\u5730\u5740, \u7AEF\u53E3]);
          }
        } else {
          \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push([\u5730\u5740, \u7AEF\u53E3]);
        }
      }
    }
    const \u6392\u5E8F\u540E\u6570\u7EC4 = \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.sort((a, b) => a[0].localeCompare(b[0]));
    const \u76EE\u6807\u6839\u57DF\u540D = \u76EE\u6807\u57DF\u540D.includes(".") ? \u76EE\u6807\u57DF\u540D.split(".").slice(-2).join(".") : \u76EE\u6807\u57DF\u540D;
    let \u968F\u673A\u79CD\u5B50 = [...\u76EE\u6807\u6839\u57DF\u540D + UUID].reduce((a, c) => a + c.charCodeAt(0), 0);
    console.log(`[\u53CD\u4EE3\u89E3\u6790] \u968F\u673A\u79CD\u5B50: ${\u968F\u673A\u79CD\u5B50}
\u76EE\u6807\u7AD9\u70B9: ${\u76EE\u6807\u6839\u57DF\u540D}`);
    const \u6D17\u724C\u540E = [...\u6392\u5E8F\u540E\u6570\u7EC4].sort(() => (\u968F\u673A\u79CD\u5B50 = \u968F\u673A\u79CD\u5B50 * 1103515245 + 12345 & 2147483647) / 2147483647 - 0.5);
    \u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4 = \u6D17\u724C\u540E.slice(0, 8);
    console.log(`[\u53CD\u4EE3\u89E3\u6790] \u89E3\u6790\u5B8C\u6210 \u603B\u6570: ${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.length}\u4E2A
${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.map(([ip, port], index) => `${index + 1}. ${ip}:${port}`).join("\n")}`);
    \u7F13\u5B58\u53CD\u4EE3IP = proxyIP;
  } else console.log(`[\u53CD\u4EE3\u89E3\u6790] \u8BFB\u53D6\u7F13\u5B58 \u603B\u6570: ${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.length}\u4E2A
${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.map(([ip, port], index) => `${index + 1}. ${ip}:${port}`).join("\n")}`);
  return \u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4;
}
__name(\u89E3\u6790\u5730\u5740\u7AEF\u53E3, "\u89E3\u6790\u5730\u5740\u7AEF\u53E3");
async function SOCKS5\u53EF\u7528\u6027\u9A8C\u8BC1(\u4EE3\u7406\u534F\u8BAE = "socks5", \u4EE3\u7406\u53C2\u6570) {
  const startTime = Date.now();
  try {
    parsedSocks5Address = await \u83B7\u53D6SOCKS5\u8D26\u53F7(\u4EE3\u7406\u53C2\u6570);
  } catch (err) {
    return { success: false, error: err.message, proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u4EE3\u7406\u53C2\u6570, responseTime: Date.now() - startTime };
  }
  const { username, password, hostname, port } = parsedSocks5Address;
  const \u5B8C\u6574\u4EE3\u7406\u53C2\u6570 = username && password ? `${username}:${password}@${hostname}:${port}` : `${hostname}:${port}`;
  try {
    const initialData = new Uint8Array(0);
    const tcpSocket = \u4EE3\u7406\u534F\u8BAE == "socks5" ? await socks5Connect("check.socks5.090227.xyz", 80, initialData) : await httpConnect("check.socks5.090227.xyz", 80, initialData);
    if (!tcpSocket) return { success: false, error: "\u65E0\u6CD5\u8FDE\u63A5\u5230\u4EE3\u7406\u670D\u52A1\u5668", proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u5B8C\u6574\u4EE3\u7406\u53C2\u6570, responseTime: Date.now() - startTime };
    try {
      const writer = tcpSocket.writable.getWriter(), encoder = new TextEncoder();
      await writer.write(encoder.encode(`GET /cdn-cgi/trace HTTP/1.1\r
Host: check.socks5.090227.xyz\r
Connection: close\r
\r
`));
      writer.releaseLock();
      const reader = tcpSocket.readable.getReader(), decoder = new TextDecoder();
      let response = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          response += decoder.decode(value, { stream: true });
        }
      } finally {
        reader.releaseLock();
      }
      await tcpSocket.close();
      return { success: true, proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u5B8C\u6574\u4EE3\u7406\u53C2\u6570, ip: response.match(/ip=(.*)/)[1], loc: response.match(/loc=(.*)/)[1], responseTime: Date.now() - startTime };
    } catch (error) {
      try {
        await tcpSocket.close();
      } catch (e) {
        console.log("\u5173\u95ED\u8FDE\u63A5\u65F6\u51FA\u9519:", e);
      }
      return { success: false, error: error.message, proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u5B8C\u6574\u4EE3\u7406\u53C2\u6570, responseTime: Date.now() - startTime };
    }
  } catch (error) {
    return { success: false, error: error.message, proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u5B8C\u6574\u4EE3\u7406\u53C2\u6570, responseTime: Date.now() - startTime };
  }
}
__name(SOCKS5\u53EF\u7528\u6027\u9A8C\u8BC1, "SOCKS5\u53EF\u7528\u6027\u9A8C\u8BC1");
async function nginx() {
  return `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`;
}
__name(nginx, "nginx");
async function html1101(host, \u8BBF\u95EEIP) {
  const now = /* @__PURE__ */ new Date();
  const \u683C\u5F0F\u5316\u65F6\u95F4\u6233 = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0") + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
  const \u968F\u673A\u5B57\u7B26\u4E32 = Array.from(crypto.getRandomValues(new Uint8Array(8))).map((b) => b.toString(16).padStart(2, "0")).join("");
  return `<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
<title>Worker threw exception | ${host} | Cloudflare</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/cf.errors.css" />
<!--[if lt IE 9]><link rel="stylesheet" id='cf_styles-ie-css' href="/cdn-cgi/styles/cf.errors.ie.css" /><![endif]-->
<style>body{margin:0;padding:0}</style>


<!--[if gte IE 10]><!-->
<script>
  if (!navigator.cookieEnabled) {
    window.addEventListener('DOMContentLoaded', function () {
      var cookieEl = document.getElementById('cookie-alert');
      cookieEl.style.display = 'block';
    })
  }
<\/script>
<!--<![endif]-->

</head>
<body>
    <div id="cf-wrapper">
        <div class="cf-alert cf-alert-error cf-cookie-error" id="cookie-alert" data-translate="enable_cookies">Please enable cookies.</div>
        <div id="cf-error-details" class="cf-error-details-wrapper">
            <div class="cf-wrapper cf-header cf-error-overview">
                <h1>
                    <span class="cf-error-type" data-translate="error">Error</span>
                    <span class="cf-error-code">1101</span>
                    <small class="heading-ray-id">Ray ID: ${\u968F\u673A\u5B57\u7B26\u4E32} &bull; ${\u683C\u5F0F\u5316\u65F6\u95F4\u6233} UTC</small>
                </h1>
                <h2 class="cf-subheadline" data-translate="error_desc">Worker threw exception</h2>
            </div><!-- /.header -->
    
            <section></section><!-- spacer -->
    
            <div class="cf-section cf-wrapper">
                <div class="cf-columns two">
                    <div class="cf-column">
                        <h2 data-translate="what_happened">What happened?</h2>
                            <p>You've requested a page on a website (${host}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=error_100x" target="_blank">Cloudflare</a> network. An unknown error occurred while rendering the page.</p>
                    </div>
                    
                    <div class="cf-column">
                        <h2 data-translate="what_can_i_do">What can I do?</h2>
                            <p><strong>If you are the owner of this website:</strong><br />refer to <a href="https://developers.cloudflare.com/workers/observability/errors/" target="_blank">Workers - Errors and Exceptions</a> and check Workers Logs for ${host}.</p>
                    </div>
                    
                </div>
            </div><!-- /.section -->
    
            <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
    <p class="text-13">
      <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold"> ${\u968F\u673A\u5B57\u7B26\u4E32}</strong></span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
      <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
        Your IP:
        <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
        <span class="hidden" id="cf-footer-ip">${\u8BBF\u95EEIP}</span>
        <span class="cf-footer-separator sm:hidden">&bull;</span>
      </span>
      <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing" id="brand_link" target="_blank">Cloudflare</a></span>
      
    </p>
    <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();<\/script>
  </div><!-- /.error-footer -->

        </div><!-- /#cf-error-details -->
    </div><!-- /#cf-wrapper -->

     <script>
    window._cf_translation = {};
    
    
  <\/script> 
</body>
</html>`;
}
__name(html1101, "html1101");
export {
  worker_default as default
};
//# sourceMappingURL=_worker.js.map
