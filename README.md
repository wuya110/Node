# Sing-box 完美双核版 (Reality + Hysteria 2) 一键脚本

这是一个追求极致**安全**、**速度**与**极简**体验的 Sing-box 管理脚本。拒绝花哨冗余的功能，只保留目前最强悍的两种抗封锁协议，并强制使用最佳安全实践配置。

## 🌟 核心特性

* **双核架构**：同时部署 **VLESS-Reality-Vision** (防封主力) + **Hysteria 2** (暴力加速)，互不干扰。
* **官方内核**：强制拉取 [SagerNet/sing-box](https://github.com/SagerNet/sing-box) 官方最新内核，拒绝第三方修改版，安全放心。
* **完美伪装 (Reality)**：强制监听 **443 端口**，内置微软、亚马逊、苹果等大厂白名单域名伪装，流量特征与正常 HTTPS 访问完全一致。
* **完美证书 (Hy2)**：集成 `acme.sh`，自动申请 **Let's Encrypt 正规证书**。客户端无需开启 `allow_insecure`，彻底杜绝中间人攻击隐患。
* **暴力抗封**：
    * **Hysteria 2 混淆**：强制开启 `Salamander` 混淆算法。
    * **端口跳跃**：自动配置 `iptables` 实现端口跳跃 (Port Hopping)，有效对抗运营商 QOS 限速。
* **极简管理**：
    * **快捷命令**：安装后直接输入 `sb` 即可唤出管理菜单。
    * **开机自启**：全自动配置 Systemd 服务，重启无忧。
    * **智能清理**：内置系统垃圾清理功能，保持 VPS 轻快运行。

## 🚀 一键安装

使用 Root 用户在终端执行以下命令即可：

```bash
bash <(curl -Ls [https://raw.githubusercontent.com/wuya110/Node/refs/heads/main/sb](https://raw.githubusercontent.com/wuya110/Node/refs/heads/main/sb))
