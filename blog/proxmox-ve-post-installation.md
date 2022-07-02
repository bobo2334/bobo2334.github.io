---
date: 2022-06-18
tags:
    - proxmox-ve
    - debian
---

# Proxmox VE 安装后配置

## 前言

Proxmox VE 基于 Debian，所以和 Debian 的操作还是有很多一样的地方。

<!-- more -->

## 系统软件源镜像


执行命令。

```bash
apt edit-sources
```

替换内容，这里使用了 *清华大学开源软件镜像站 [^1]*。

```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```

或者使用 *阿里巴巴开源镜像站点 [^2]*

```
deb http://mirrors.aliyun.com/debian/ bullseye main non-free contrib
# deb-src http://mirrors.aliyun.com/debian/ bullseye main non-free contrib
deb http://mirrors.aliyun.com/debian-security/ bullseye-security main
# deb-src http://mirrors.aliyun.com/debian-security/ bullseye-security main
deb http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
# deb-src http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
# deb-src http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
```

## Proxmox VE 软件源镜像

这里使用了 *清华大学开源软件镜像站 [^3]*

```bash
echo "deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bullseye pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list
```

删除 pve-enterprise 源。

```bash
# rm /etc/apt/sources.list.d/pve-enterprise.list
trash-put /etc/apt/sources.list.d/pve-enterprise.list
```

## 更新

```bash
apt update
apt upgrade
```

## 安装一些小工具

```bash
apt install curl wget tmux bat htop btop exa neofetch trash-cli
```

## 配置别名

执行命令。

```
nano .profile
```

加入内容。

```bash
alias bat='batcat'
alias ll='exa -lha --modified --created --time-style long-iso --group-directories-first'
```

## CT 模板镜像

直接从 *清华大学开源软件镜像站 [^4]* 复制下载链接到 Web 控制台下载。

## Windows VirtIO 驱动

从 *Proxmox VE wiki[^5]* 中可以找到下载地址。

## 挂载点

- local：`/var/lib/vz/`
- local-lvm：`/dev/pve`，不能直接访问其中的文件
- 其它硬盘：`/mnt/`
- 虚拟机配置文件：`/etc/pve/qemu-server/`

[^1]: [debian | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/debian/)
[^2]: [debian 镜像-debian 下载地址-debian 安装教程 - 阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/debian)
[^3]: [proxmox | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/proxmox/)
[^4]: [Index of /proxmox/images/system/ | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/proxmox/images/system/)
[^5]: [Windows VirtIO Drivers - Proxmox VE](https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers)
