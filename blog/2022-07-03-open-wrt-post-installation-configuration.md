# OpenWrt 安装后配置

## 前言

OpenWrt 是一个用于嵌入式设备的 Linux 发行版，通常作为路由器的操作系统。

## OpenWrt_CN

*OpenWrt_CN* [^1] 中收录了一些适合国内用户的发行版。

我主要在虚拟机中使用 OpenWrt，所以选择了 *ImmortalWrt* [^2]，它的优点是简洁，出厂附带的软件包非常少，内置软件源和该发行版对齐发行，比较稳定；并且我常用的软件都能在软件源中找到。

## 安装

略

## 更改局域网 IP 地址

使用下面的命令编辑网络配置文件，修改其中`br-lan`的部分。

```bash
vi /etc/config/network
```

使用下面的命令重启网络服务。

```bash
service restart network
```

更多帮助可以参考 *官方文档* [^3]。

## 包管理器 opkg

OpenWrt 使用 *opkg* [^4] 作为包管理器。

opkg 软件源配置在`/etc/opkg/distfeeds.conf`和`/etc/opkg/customfeeds.conf`中；设置官方软件源的镜像设置前者即可。

下面是 opkg 常用的命令。

```bash
opkg update
opkg upgrade <>
opkg install <>
opkg remove <>
opkg list <>
opkg list-installed
opkg list-upgradable
opkg info <>
```

## 安装软件示例

某些时候连接不上官方软件源，需要爱国上网；可以使用 SSH 把本地的代理端口带过去。

```bash
ssh root@192.168.233.4 -R 7890:localhost:7890
```

之后在 SSH 会话中设置代理。

```bash
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
```

下面的命令用于安装一些常用软件。

```bash
# 更新索引
opkg update

# openclash
opkg install luci-app-openclash

# zerotier
opkg install luci-i18n-zerotier-zh-cn

# tailscale
opkg install tailscale

# wireguard
# 安装完之后重启才能生效
opkg install luci-proto-wireguard luci-i18n-wireguard-zh-cn
```

[^1]: [OpenWrt\_CN | OpenWrt\_简中](https://bingmeme.github.io/OpenWrt_CN/)
[^2]: [ImmortalWrt Downloads](https://mirrors.vsean.net/openwrt/)
[^3]: [\[OpenWrt Wiki\] IPv4 configuration](https://openwrt.org/docs/guide-user/network/ipv4/configuration)
[^4]: [\[OpenWrt Wiki\] Opkg package manager](https://openwrt.org/docs/guide-user/additional-software/opkg)
