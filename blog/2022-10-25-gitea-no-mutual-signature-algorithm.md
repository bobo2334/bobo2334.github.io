# Gitea SSH 认证失败，提示「no mutual signature algorithm」

## 前言

这个和我之前在 Github 中遇到的问题不一样，在通过`ssh -T -v`命令排查错误时输出「no mutual signature algorithm」。

## 问题原因

有了错误日志就好解决了，这个是服务器不支持密钥的加密方式，当时我使用的 rsa 格式的密钥。可能是由于 Gitea 更新，其中的 OpenSSH 也更新了，在新版本的 OpenSSH 中，rsa 加密格式被默认关闭了。

为了安全考虑，生成一个新的密钥对即可，使用 ed25519 格式。

## 生成新密钥对

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

## 上传新公钥

在 Gitea 的个人设置页面中，把公钥的内容上传到 Gitea 中即可。

## 测试

使用下面的命令测试是否能通过 SSH 连接到 Gitea 实例。你需要把命令中的`<host>`和`<port>`替换为你的 Gitea 实例的信息。

```bash
ssh -T -v git@<host> -p <port>
```

如果得到如下的欢迎信息则证明成功，如果没有则你需要根据输出的日志排查错误。

```text
Hi there, <...>! You've successfully authenticated with the key named <...>, but Gitea does not provide shell access.
```

## 参考资料

- [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
