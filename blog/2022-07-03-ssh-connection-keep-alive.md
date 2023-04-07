# SSH 连接保活

## 前言

某些情况下路由器会丢弃长时间不活跃的 TCP 连接，通过正确配置可以防止 SSH 连接闲置后意外被断开。

可以配置客户端或者服务端定期发送心跳包来保持连接活跃；选择其一配置即可。

## 客户端配置

修改`~/.ssh/config`文件。

```txt
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 5
```

## 服务端配置

修改`/etc/ssh/sshd_config`文件。

```txt
ClientAliveInterval 60
ClientAliveCountMax 5
```

重启 SSH 服务。

```bash
systemctl restart sshd
```

## 参考资料

- [ssh 与远程机器保持心跳（linux） - MTJO](https://mtjo.net/blog/article/30.html)
- [ssh\_config(5): OpenSSH SSH client config files - Linux man page](https://linux.die.net/man/5/ssh_config)
