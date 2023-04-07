# Windows 远程桌面使用的用户名和密码

## 确定用户名

下面两种用户名都可以使用。

1. 如果你使用微软账号登录，可以用你微软账号的邮箱作为用户名；
2. 使用`whoami`命令得到本地用户名，只使用`\`之后的用户名即可。

## 确定密码

1. 使用微软账号的密码；
2. 使用本地账户的密码，可以在**设置**->**登录选项**中设置密码。

Windows 会缓存微软账号密码的特征到本地用于离线登录。如果你在网页中修改了微软账户的密码，之后你使用新密码登录远程桌面，此时你会发现认证失败，因为 Windows 对比的是你的旧密码。解决办法就是把微软账号注销重新登录；或者在锁屏界面点击忘记密码，在网页中成功验证微软账号的密码之后就会重新缓存新密码的特征。此时退出流程，不需要修改本地密码，之后就可以使用新密码登录远程桌面了。

## 参考资料

- [WIN10 的远程桌面账号密码到底是什么？？？ - V2EX](https://v2ex.com/t/629651)
- [如果凭据未在本地更新，则 Windows 10 远程桌面登录失败 | Dell 中国](https://www.dell.com/support/kbdoc/zh-cn/000134994/%E5%A6%82%E6%9E%9C%E5%87%AD%E6%8D%AE%E6%9C%AA%E5%9C%A8%E6%9C%AC%E5%9C%B0%E6%9B%B4%E6%96%B0-%E5%88%99windows-10%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2%E7%99%BB%E5%BD%95%E5%A4%B1%E8%B4%A5)