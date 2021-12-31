---
date: 2021-12-23
tags:
    - ssh
    - tmux
    - iterm2
---

# iterm2 对 tmux 的特殊支持

## 前言

tmux[^1] 是一款非常好用的终端复用工具，它可以帮助你快速地保存和恢复工作现场。

使用 tmux 的时候有许多快捷键需要记忆，并且窗格切换和窗格的上下滚动并不方便；tmux 的快捷键还可能和其它软件的快捷键有冲突。

iterm2[^2] 是 macOS 中的一个终端模拟器软件，它对 tmux 有独家支持，可以在控制模式下运行 tmux。在这个模式中，tmux 会话表现和本地终端一样，可以使用 iterm2 的快捷键来进行多窗口和多窗格分隔，用鼠标切换窗口和窗格，并且用鼠标滚轮上下滚动窗格也能正常工作，不需要进 tmux 的复制模式来滚动窗格。

<!-- more -->

## 使用

不论是在本地使用 tmux，还是通过 ssh 使用远端的 tmux，iterm2 都支持使用 tmux 的控制模式。

tmux 的控制模式通过附加`-CC`参数来开启。

如`tmux -CC`命令会开启一个新的 tmux 会话，并启用控制模式，之后你的 iterm 会打开一个新的窗口，用于展示 tmux 会话；该窗口的表现和没使用 tmux 时一样，你不需要通过快捷键或 tmux 命令来新建多窗口和多窗格。使用 iterm2 的快捷键<kbd>Command+D</kbd>和<kbd>Command+Shift+D</kbd>来分隔窗格，使用<kbd>Command+N</kbd>来新建 Tab，使用<kbd>Command+N</kbd>来新建窗口。

使用如下命令来附加到一个已存在的 tmux 会话。

```bash
tmux ls
tmux -CC attach -t 0
```

下面的命令用于创建一个名为`main`的会话，如果该会话存在的话则直接恢复该会话。

```bash
tmux -CC new -A -s main
```

或者在通过 SSH 连接到服务器的时候直接执行此命令，直接打开一个 tmux 会话。

```bash
ssh -t root@1.1.1.1 'tmux -CC new -A -s main'
```

## 参考资料

- [tmux Integration Best Practices · Wiki · George Nachman / iterm2 · GitLab](https://gitlab.com/gnachman/iterm2/-/wikis/tmux-Integration-Best-Practices)

[^1]: [tmux | 我的学习笔记](../docs/notes/utilities/tmux)
[^2]: [tmux Integration - Documentation - iTerm2 - macOS Terminal Replacement](https://iterm2.com/documentation-tmux-integration.html)
