# Github SSH 认证错误排查

## 前言

我一直使用 SSH 方式连接到 Github，但是前几天在我向自己的仓库执行推送操作时却一直失败，错误现象如下：

1. 首次出现错误，连接时提示`github.com REMOTE HOST IDENTIFICATION HAS CHANGED`；
2. 在信任了新的 REMOTE HOST IDENTIFICATION 后，还是连接不上；
3. github.com 在尝试了 publickey 认证方式后一直要求我输入密码；在使用`ssh -v -T git@githun.com`排查错误时，日志中显示在尝试 publickey 后并没有输出错误信息。

问题搞了几天都没解决，后来通过 Github 文档库中的一篇 *文档* [^1] 中介绍的 SSH over HTTPS port 方式解决。

但是至今不知道为啥会这样。

## 前提

- 你需要了解`~/.ssh/config`的用处和用法；
- 你需要了解`ssh-agent`的用法，并且提前将你的 SSH 私钥通过`ssh-add`命令加入其中。

## 测试是否能使用

使用下面的命令测试能否通过 443 端口连接到 ssh.github.com，并完成 SSH 认证。注意域名，github.com 不能通过 443 端口连接，只能使用 ssh.github.com 的 443 端口。

```bash
ssh -T -v git@ssh.github.com -p 443
```

如果出现如下的欢迎消息则证明可以使用，如果没有则你需要根据输出的日志信息排查错误。

```text
Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.
```

## 修改 ~/.ssh/config

修改`~/.ssh/config`，加入如下内容。

```text
Host github.com
    Hostname ssh.github.com
    Port 443
    User git
```

## 最终测试

运行下面的命令测试配置是否成功。

```bash
ssh -T -v git@github.com
```

如果出现欢迎消息则成功，本地的 Github 仓库不需要修改远程地址，还跟往常一样使用。

[^1]: [Using SSH over the HTTPS port - GitHub Docs](https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
