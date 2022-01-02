---
date: 2022-01-02
---

# 用 KMS 激活 Windows 和 Office

## 激活 Windows

只能激活 VL 版本的系统，零售版不能通过这种方式激活。

<!-- more -->

使用管理员权限运行`cmd`。

```cmd
slmgr /skms kms.03k.org
slmgr /ato
```

## 激活 Office

进入 Office 安装目录，用管理员权限执行命令。

```cmd
# C:\Program Files (x86)\Microsoft Office\Office16
cscript ospp.vbs /sethst:kms.03k.org
cscript ospp.vbs /act
```

## KMS 服务器收集

在上面命令中的 KMS 服务器失效的时候可以尝试下面列表中的其它 KMS 服务器。

- `kms.03k.org`
- `kms.v0v.bid`

## 自建 KMS 服务器

或者也可以自己搭建 KMS 服务器，难度不高，通过 Docker 可以快速部署。

- [teddysun/kms - Docker Image | Docker Hub](https://hub.docker.com/r/teddysun/kms)

## 其它激活方式

- [云萌 Windows 10 激活工具 - 首页](https://cmwtat.cloudmoe.com/cn.html)

## 参考资料

- [本站上线 KMS 服务~一句命令激活 windows/office | 零散坑知识分享](https://03k.org/kms.html)
