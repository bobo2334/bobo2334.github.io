---
date: 2022-07-03
tags:
    - ssh
---

# SSH 连接保活

## 前言

某些情况下路由器会丢弃长时间不活跃的 TCP 连接，通过正确配置可以防止 SSH 连接闲置后意外被断开。

可以配置客户端或者服务端定期发送心跳包来保持连接活跃；选择其一配置即可。

<!-- more -->

## 客户端配置

修改`~/.ssh/config`文件。

```
Host *
	ServerAliveInterval 60
	ServerAliveCountMax 5
```

## 服务端配置

修改`/etc/ssh/sshd_config`文件。

```
ClientAliveInterval 60
ClientAliveCountMax 5
```

重启 SSH 服务。

```bash
systemctl restart sshd
```
