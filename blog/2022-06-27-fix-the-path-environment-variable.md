# 修复 PATH 环境变量

## 前言

折腾 Shell 的时候搞坏了 PATH 环境变量，导致所有命令都找不到。

## 临时修复

在 Shell 中执行以下命令来在此次会话中设置 PATH。这样一些基础工具就能工作了。

```bash
export PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
```

## 排查错误

从 Shell 启动文件中排查错误，看看最近修改了什么，以及什么命令可能会影响到 PATH 变量。

如果你使用 Bash，你可能需要排查下面的文件。

- /etc/profile
- /etc/bash.bashrc
- /etc/profile.d/*
- ~/.profile
- ~/.bashrc

如果你使用 Zsh，你可能需要排查下面的文件。

- /etc/zprofile
- /etc/zshrc
- ~/.zprofile
- ~/.zshrc

## 参考资料

- [linux 下环境变量 PATH 设置错误的补救\_铭霏的博客-CSDN 博客\_linux 环境变量修复](https://blog.csdn.net/u012102306/article/details/51036561)
- [Bash Startup Files (Bash Reference Manual)](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html)
- [macos - ZSH: .zprofile, .zshrc, .zlogin - What goes where? - Ask Different](https://apple.stackexchange.com/questions/388622/zsh-zprofile-zshrc-zlogin-what-goes-where)
