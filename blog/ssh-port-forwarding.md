---
date: 2022-07-03
tags:
    - ssh
---

# SSH 端口转发

## 前言

SSH 除了能连接远程服务器外，还可以做端口转发的工作，并且利用安全隧道来保障通信安全。

## 动态转发

动态转发指的是 SSH 在本机暴露一个 SOCKS5 端口，通过此端口进行的所有通信都转发到远程服务器，通过远程服务器访问外网。通过这种方式可以实现一个简易代理。

```bash
ssh -D local-port tunnel-host -N
```

- `-D`，动态转发；
- `-N`，不打开 Shell，只进行端口转发。

下面这条命令的用途是通过本机`2121`端口的流量都会被转发到`tunnel-host`，然后通过`tunnel-host`再发送该流量。

```bash
ssh -D 2121 tunnel-host -N
```

可以写在 ssh_config（`~/.ssh/config`）中。

```txt
DynamicForward <tunnel-host>:<local-port>
```

## 本地转发

本地转发指的是 SSH 在本机暴露一个端口，通过此端口的请求都会转发到远程服务器，然后远程服务器会将请求转发到目标服务器的目标端口。

```bash
ssh -L local-port:target-host:target-port tunnel-host
```

下面这条命令的用途是，当访问本地`2121`端口时，流量会被转发到`tunnel-host`，再由`tunnel-host`把流量发送到`www.example.com:80`。

```bash
ssh -L 2121:www.example.com:80 tunnel-host -N
```

可以写在 ssh_config（`~/.ssh/config`）中。

```txt
Host test.example.com
LocalForward client-IP:client-port server-IP:server-port
```

## 远程转发

远程转发指的是在远程主机监听某个端口，通过该端口的流量都转发到本机，再通过本机发送该流量。

```bash
ssh -R remote-port:target-host:target-port -N remotehost
```

下面这条命令的作用是通过远程主机`8080`端口的流量都转发到本地主机的`80`端口。

```bash
ssh -R 8080:localhost:80 -N my.public.server
```

可以写在 ssh_config（`~/.ssh/config`）中。

```txt
Host remote-forward
  HostName test.example.com
  RemoteForward remote-port target-host:target-port
```

## 参考资料

- [SSH 端口转发 - SSH 教程 - 网道](https://wangdoc.com/ssh/port-forwarding.html)
