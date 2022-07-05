---
date: 2021-11-27
tags:
    - tmux
---

# tmux 终端复用

## 前言

tmux 是一个终端复用器，能让你在一个终端里分屏出多个窗格，还能保存你的终端会话。尤其是在 SSH 连接到远程服务器工作的时候，网络情况不好的情况下 SSH 连接可能会意外断开，此时在该 SSH 会话中运行的命令也会被中断；在使用了 tmux 之后，只要 tmux 进程不结束，任务就不会中断，待恢复 SSH 连接后，tmux 可以让你快速恢复到之前的工作现场。

<!-- more -->

## 快捷键说明

tmux 的快捷键操作都需要先按下前缀快捷键，默认的前缀快捷键是<kbd>Ctrl+b</kbd>，需要先按下此快捷键后松开，然后再按下后续指令。所有的快捷键操作均需要在 tmux 会话中按下才能生效。

如分离会话的快捷键是<kbd>Ctrl+b</kbd><kbd>d</kbd>，你需要先按下<kbd>Ctrl+b</kbd>，松开键盘，再按下<kbd>d</kbd>。其它快捷键同理。

在会话中，使用<kbd>Ctrl+b</kbd><kbd>?</kbd>快捷键来展示所有的快捷键，按<kbd>q</kbd>退出帮助页面。

## 多会话

### 启动

- `tmux`，新建一个会话，默认名称是以数字序号，从 0 开始
- `tmux new -s session_name`，新建一个会话并命名为「session_name」

### 退出

- 会话中不存在进程时会话会自动关闭，使用`exit`命令或者<kbd>Ctrl+d</kbd>关闭当前 shell
- `tmux kill-session -t <会话编号/会话名称>`，杀死会话

### 分离

可以手动分离会话，在 SSH 断开的时候也会分离会话，只要会话中有进程该会话就不会自动关闭。

- 在会话中，使用<kbd>Ctrl+b</kbd><kbd>d</kbd>分离当前会话

### 返回

- `tmux ls`，列出所有会话
- <kbd>Ctrl+b</kbd><kbd>s</kbd>，列出所有会话
- `tmux attach -t <会话编号/会话名称>`，返回会话
- `tmux switch -t <会话编号/会话名称>`，切换会话

### 重命名

- `tmux rename-session -t <会话编号/会话名称> <新的会话名称>`
- <kbd>Ctrl+b</kbd><kbd>$</kbd>，重命名当前会话

## 多窗格（pane）

### 划分窗格

- `tmux split-window`，向下划分窗格（垂直）
- <kbd>Ctrl+b</kbd><kbd>%</kbd> ，向下划分窗格
- `tmux split-window -h`，向右划分窗格（水平）
- <kbd>Ctrl+b</kbd><kbd>"</kbd> ，向右划分窗格

### 切换光标

- `tmux select-pane -U` ，光标切换到上一窗格
- <kbd>Ctrl+b</kbd><kbd>&uarr;</kbd>
- `tmux select-pane -D` ，光标切换到下一窗格
- <kbd>Ctrl+b</kbd><kbd>&darr;</kbd>
- `tmux select-pane -L` ，光标切换到左一窗格
- <kbd>Ctrl+b</kbd><kbd>&larr;</kbd>
- `tmux select-pane -R` ，光标切换到右一窗格
- <kbd>Ctrl+b</kbd><kbd>&rarr;</kbd>

### 移动窗格

- <kbd>Ctrl+b</kbd><kbd>q</kbd> ，显示窗格编号
- `tmux swap-pane -U`，把当前窗格与上一个窗格交换位置
- <kbd>Ctrl+b</kbd><kbd>&#x0007B;</kbd> ，把当前窗格与上一个窗格交换位置
- `tmux swap-pane -D`，把当前窗格与下一个窗格交换位置
- <kbd>Ctrl+b</kbd><kbd>&#x0007D;</kbd> ，把当前窗格与下一个窗格交换位置

### 其它操作

- <kbd>Ctrl+b</kbd><kbd>z</kbd> ，当前窗格全屏显示，再按一次还原。在全屏模式下
- <kbd>Ctrl+b</kbd><kbd>x</kbd> ，关闭当前窗格
- <kbd>Ctrl+b</kbd><kbd>!</kbd> ，把当前窗格拆分为一个独立窗口
- <kbd>Ctrl+b</kbd><kbd>[</kbd> ，开启复制模式，可以用用方向键或滚轮上下滚动，<kbd>q</kbd>退出。

## 多窗口（window）

一个会话中可以存在多个窗口，每个窗口中可以有多个窗格。

- `tmux new-window`，新建窗口
- `tmux new-window -n <窗口名称>`，新建窗口
- <kbd>Ctrl+b</kbd><kbd>c</kbd> ，新建窗口
- `tmux select-window -t <窗口名称>`，切换到指定名称的窗口
- <kbd>Ctrl+b</kbd><kbd>p</kbd> ，切换到上一个窗口
- <kbd>Ctrl+b</kbd><kbd>n</kbd> ，缺环到下一个窗口
- <kbd>Ctrl+b</kbd><kbd>number</kbd> ，切换到指定序号的窗口

## 参考资料

- [Tmux 使用教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/10/tmux.html)
- [Gentle Guide to Get Started With tmux | Pragmatic Pineapple 🍍](https://pragmaticpineapple.com/gentle-guide-to-get-started-with-tmux/)
