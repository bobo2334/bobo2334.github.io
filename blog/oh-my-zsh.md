---
date: 2021-11-26
tags:
    - zsh
    - oh-my-zsh
---

# 配置 oh-my-zsh

## 前言

oh-my-zsh[^1] 是 zsh[^2] 的一款插件管理器，提供了很多 zsh 的插件和主题。

zsh 的优点是兼容 bash 语法，可以在日常工作中替换掉 bash，并且可以享受 zsh 的很多特性。

<!-- more -->

## 安装

安装 oh-my-zsh 之前需要先安装 zsh 和 git，oh-my-zsh 依赖它们在能正常工作。

在 zsh 中执行以下命令安装 oh-my-zsh。

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

安装脚本就是帮你克隆了 oh-my-zsh 的仓库到`~/.oh-my-zsh`，并且给你新建了一个`~/.zshrc`文件模板，用于在 zsh 启动时加载 oh-my-zsh。

你之前的`.zshrc`文件内容被转移到`.zshrc.pre-oh-my-zsh`，现在的`.zshrc`的内容是全新的，如果你之前在用户配置文件里做了重要配置，你需要将`.zshrc.pre-oh-my-zsh`里的内容附加到现在的`.zshrc`之后，以确保之前的功能正常使用。

## 主题

oh-my-zsh 默认自带了许多主题，这些主题文件存放在`~/.oh-my-zsh/themes/`文件夹下。你可以在 oh-my-zsh 主题 wiki[^3] 中参考这些主题的预览图。

编辑`.zshrc`文件，修改`ZSH_THEME`配置，执行`exec zsh`命令或重启终端即可看到新主题的效果。

```bash
ZSH_THEME="robbyrussell"
```

## 第三方主题

除了默认自带的主题外，你还可以使用第三方主题，如 Dracula[^4] 主题。

下面的命令用于克隆 Dracula 主题的仓库到本地的`~/zsh-dracula`文件夹。

```bash
git clone https://github.com/dracula/zsh.git ~/zsh-dracula
```

你可以手动复制`~/zsh-dracula`下的`dracula.zsh-theme`文件和`lib`文件夹至`~/.oh-my-zsh/custome/themes/`文件夹下来完成主题的安装。

也可以使用以下命令创建一个主题的软连接到主题文件夹，来完成主题的安装。

```bash
ln -s ~/zsh-dracula/dracula.zsh-theme $ZSH_CUSTOM/themes/dracula.zsh-theme
```

在安装完成之后编辑`.zshrc`文件，修改`ZSH_THEME`配置，执行`exec zsh`命令或重启终端即可看到新主题的效果。

```bash
ZSH_THEME="dracula"
```

## 插件

oh-my-zsh 默认自带了许多插件，这些插件文件存放在`~/.oh-my-zsh/plugins/`文件夹下。你可以在 oh-my-zsh 插件 wiki[^5] 中查阅默认插件的目录和文档。

编辑`.zshrc`文件，修改`plugins`配置，把插件名称写入其中即可启用插件，每个插件名称之间用空格或换行分隔，不要用逗号。注意过多的插件会影响启动时间。执行`exec zsh`命令或重启终端即可让配置文件生效。

```bash
plugins=(git theme)
```

下面记录一些自用的插件。

### git[^6]

默认启用的插件，提供了一些 Git 命令的别名和 Git 相关的常用命令，详情可参考其文档 [^6]。

### theme[^7]

用命令预览主题，不需要修改配置文件。

- `theme`，随机加载主题
- `lstheme`，列出所有主题
- `theme <name>`，预览指定主题

### z[^8]

提供一个`z`命令用于常用目录快速跳转，日常中可以替换掉`cd`，在通过`z`命令切换目录后下次切换只需要输入部分文件名。

下面的命令演示了`z plug`命令切换到`~/.oh-my-zsh/plugins`目录。

```bash
/usr/bin$ z plug  # Even 'z p' might suffice
~/.oh-my-zsh/plugins$
```

### safe-paste[^9]

防止粘贴进终端的多行代码直接执行。

### sudo[^10]

按两次<kbd>ESC</kbd>为你当前的命令或前一次命令加上`sudo`前缀。

## 第三方插件

### zsh-syntax-highlighting[^11]

命令语法高亮。

克隆仓库。

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

编辑`.zshrc`文件，修改`plugins`配置，加上`zsh-syntax-highlighting`。

```bash
plugins=(git theme zsh-syntax-highl3ighting)
```

### zsh-autosuggestions[^12]

根据历史命令和命令提示插件来给你输入建议。

克隆仓库。

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

编辑`.zshrc`文件，修改`plugins`配置，加上`zsh-autosuggestions`。

[^1]:[ohmyzsh/ohmyzsh: 🙃 A delightful community-driven (with 1900+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+ themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.](https://github.com/ohmyzsh/ohmyzsh)
[^2]:[Installing ZSH · ohmyzsh/ohmyzsh Wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
[^3]:[Themes · ohmyzsh/ohmyzsh Wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
[^4]:[Dark theme for Zsh and 223+ apps — Dracula](https://draculatheme.com/zsh)
[^5]:[Plugins · ohmyzsh/ohmyzsh Wiki (github.com)](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)
[^6]:[ohmyzsh/plugins/git at master · ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git)
[^7]:[ohmyzsh/plugins/themes at master · ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/themes)
[^8]:[ohmyzsh/plugins/z at master · ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/z)
[^9]:[ohmyzsh/plugins/safe-paste at master · ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/safe-paste)
[^10]: [ohmyzsh/plugins/sudo at master · ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo)
[^11]: [zsh-users/zsh-syntax-highlighting: Fish shell like syntax highlighting for Zsh.](https://github.com/zsh-users/zsh-syntax-highlighting)
