---
date: 2023-03-02
---

# 在 Windows 中运行 ssh-add 命令

## 问题描述

在 Windows 10 系统中运行`ssh-add`命令失败，详情如下。

```pwsh
PS C:\Users\uuu\.ssh> ssh-add .\id_ed25519
Error connecting to agent: No such file or directory
```

## 解决办法

造成此问题的原因是 ssh-agent 服务没有启动。手动启动此服务即可。

在 Windows 服务管理中，找到 OpenSSH Authentication Agent，修改它的启动类型为自动，并且手动启动它一次。它下次会随着 Windows 一起启动，不用再手动启动一次了。

之后再运行`ssh-add`命令就可以把私钥添加进 ssh-agent 了。

## Git 和 Windows 10 提供的 OpenSSH

Git 默认使用自带的 SSH 客户端，并不能使用 Windows 10 的 ssh-agent。这会导致即使你把私钥添加进入了 ssh-agent，在使用 SSH 协议进行 Git 克隆操作的时候还会要求你验证私钥密码。

你需要设置环境变量`GIT_SSH`为`C:\Windows\System32\OpenSSH\ssh.exe`才可以让 Git 使用 Windows 10 提供的 SSH 客户端。

## 参考资料

- [How to run ssh-add on windows? - Stack Overflow](https://stackoverflow.com/questions/18683092/how-to-run-ssh-add-on-windows)
- [Git with SSH on Windows - Stack Overflow](https://stackoverflow.com/questions/2499331/git-with-ssh-on-windows/8713121#8713121)
- [Git on Windows: Force use of OpenSSH - Stack Overflow](https://stackoverflow.com/questions/19531626/git-on-windows-force-use-of-openssh)
