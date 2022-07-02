---
date: 2022-07-02
tags:
    - zsh
    - zinit
---

# 使用 zinit 作为 zsh 的插件管理器

## 前言

之前使用 ohmyzsh 作为 zsh 的插件管理器，但是在使用过程中发现启动速度太慢了。在终端启动后仍需花费 1 至 2 秒才能看见命令提示符，并且我开启的插件数量也不多，没有什么优化思路。

近期我寻找到 ohmyzsh 的替代品 zinit，在经过一番体验之后感觉良好，启动速度非常快，并且我之前在 ohmyzsh 中需要的功能都能实现。

<!-- more -->

## 备份 Shell 启动文件

折腾之前先备份一下目前的 Shell 启动文件，如`.zshrc`和`.zprofile`文件，在折腾坏了之后能快速恢复。

在这两个文件备份完毕之后，清空这两个文件的内容。

## 安装 zinit

在 zsh 中执行下面的命令来下载 *zinit* [^1] 的安装脚本并执行。

```bash
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
```

这个安装脚本会克隆 zinit 的仓库至`~/.local/share/zinit/zinit.git`；并且更新你的`.zshrc`文件，在其中附加上 zinit 的启动命令，以下内容是安装脚本放入`.zshrc`文件的内容。

```bash
# ~/.zshrc

### Added by Zinit's installer
source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit
### End of Zinit's installer chunk
```

之后打开一个新的 zsh 会话，zinit 就生效了。

在以后的使用过程中可以使用下面的命令来更新 zinit。

```bash
zinit self-update
```

## 安装插件

zinit 引入插件的语法和 ohmyzsh 的语法不一样。

ohmyzsh 在引入自带插件的时候只需直接声明在`plugins`变量中即可；在引入第三方插件的时候首先需要自己下载插件到`~/.oh-my-zsh/custom/plugins`目录中，然后再在`plugins`中声明。

zinit 在引入插件的时候不需要自己手动下载，通过`zinit`命令声明之后在下次 zinit 加载之后自动下载插件。

zinit 引入插件的语法有两种。确保这些命令处于 zinit 初始化命令之后即可。

- 通过`load`加载的插件会启用分析功能，你可以通过`zinit report [plugin]`命令来查看插件的加载过程；
- 通过`light`加载的插件不启用分析功能，性能比`load`好。

其中`repo/plugin`代表了 Github 仓库的用户名和仓库名。

```bash
zinit load  <repo/plugin> # Load with reporting/investigating.
zinit light <repo/plugin> # Load without reporting/investigating.
```

这是我加载的一些插件。

其中，`zdharma-continuum/fast-syntax-highlighting`确实比 oh-my-posh 中的`zsh-syntax-highlighting`流畅不少。

```bash
# ~/.zshrc

zinit light zdharma-continuum/fast-syntax-highlighting
zinit light zsh-users/zsh-completions
zinit light zsh-users/zsh-autosuggestions
zinit light sunlei/zsh-ssh
zinit light ael-code/zsh-colored-man-pages
zinit light MichaelAquilina/zsh-you-should-use
```

你还可以通过`snippet`命令来加载一个或多个脚本文件。使用这个命令可以加载 ohmyzsh 仓库中的插件，因为这些插件处于仓库的子目录中。

在 snippet 命令之后你可以加载本地或远程的脚本，直接写本地文件地址或 URL 即可。

对于常用的仓库你还可以使用别名，可以使用的别名有：

- `PZT::`，Prezto
- `PZTM::`，Prezto module
- `OMZ::`，Oh My Zsh
- `OMZP::`，OMZ plugin
- `OMZL::`，OMZ library
- `OMZT::`，OMZ theme

下面是我从 ohmyzsh 中加载的插件。

```bash
# ~/.zshrc

zinit snippet OMZP::safe-paste
zinit snippet OMZP::sudo
```

某些插件不是单文件的，在使用过程中还需要加载其它文件，此时你就需要加载多个文件。

你可以在`zinit snippet`命令之前使用`zinit ice`命令。`zinit ice`命令是对下一句`zinit`命令的描述，只对下一句命令生效。`zinit ice`不仅仅可以用来描述`zinit snippet`命令。

比如在加载插件`z`的时候，除了加载`z.plugin.zsh`之外，该文件还加载了`z.sh`，此时就需要把整个子目录下载到本地。

使用`zinit ice svn`表示下一句`zinit`命令使用 svn 下载整个子文件夹到本地，Github 兼容 svn 协议。这样在使用 z 插件的时候就不会出错了。

```bash
# ~/.zshrc

zinit ice svn
zinit snippet OMZP::z
```

使用下面的命令来更新插件。

```bash
zinit update --parallel
```

## 安装主题

这里我使用了 powerlevel10k[^2] 主题，原因就是它启动非常快。直接使用 zinit 加载主题。

其中`zinit ice depth"1"`中的`depth`是传递给`git clone`的参数。

```bash
# ~/.zshrc

zinit ice depth"1"
zinit light romkatv/powerlevel10k
```

重新开启一个 zsh 会话你就可以看到 powerlevel10k 的初始化向导。根据向导选择你喜欢的样式即可，该向导会自动修改你的`.zshrc`文件，加入相关的启动命令。

如果 powerlevel10k 的初始化向导没有出现或者你想重新配置 powerlevel10k，运行以下命令即可。

```bash
p10k configure
```

## 其他优化思路

除了替换掉 ohmyzsh 之外，还有很多优化 zsh 启动时间的思路。

如果你正在使用 nvm 作为你的 Node.js 版本管理工具，你可以考虑停止使用 nvm，寻找其他替代品代替它，因为它实在是太影响启动速度了，你可以使用 fnm，兼容`.nvmrc`配置文件；

在 Shell 启动文件中尽量不要执行外部命令，如`brew --prefix`命令，因为你不会经常更改 Homebrew 的安装位置，所以直接使用`brew --prefix`的结果替换掉该命令。

尽量少使用`eval`命令，比如在引入 Homebrew 的时候会使用`eval "$(/opt/homebrew/bin/brew shellenv)"`，你可以直接将`/opt/homebrew/bin/brew shellenv`命令的结果写入启动文件而不是使用`eval`命令。比如使用下面的命令替代`eval`命令。

```bash
export HOMEBREW_PREFIX="/opt/homebrew";
export HOMEBREW_CELLAR="/opt/homebrew/Cellar";
export HOMEBREW_REPOSITORY="/opt/homebrew";
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin${PATH+:$PATH}";
export MANPATH="/opt/homebrew/share/man${MANPATH+:$MANPATH}:";
export INFOPATH="/opt/homebrew/share/info:${INFOPATH:-}";
FPATH="/opt/homebrew/share/zsh/site-functions:${FPATH}"
```

## 前后对比

使用`time`命令对比一下分别使用 ohmyzsh 和使用 zinit 的 zsh 加载速度。

```bash
# ohmyzsh
/usr/bin/time zsh -i -c exit
        0.37 real         0.18 user         0.12 sys

# zinit
/usr/bin/time zsh -i -c exit
        0.12 real         0.07 user         0.03 sys
```

最终发现两者实际差距并不大，提升体验大部分是 powerlevel10k 主题的功劳，你在启动 zsh 之后的瞬间就能看见命令提示符。

zinit 还可以配置 Turbo Mode，可以让插件懒加载，对于加载时间长的插件非常有用。不过我在使用中并没有配置懒加载，即使这样，zinit 的加载速度还是比 ohmyzsh 快的。

暂时就先用 zinit 和 powerlevel10k 主题的组合吧，感觉不错。

## 参考资料

- [加速你的 zsh —— 最强 zsh 插件管理器 zplugin/zinit 教程 - Aloxaf's Blog](https://www.aloxaf.com/2019/11/zplugin_tutorial/)
- [unixorn/awesome-zsh-plugins: A collection of ZSH frameworks, plugins, themes and tutorials.](https://github.com/unixorn/awesome-zsh-plugins)
- [gustavohellwig/gh-zsh](https://github.com/gustavohellwig/gh-zsh)

[^1]: [zdharma-continuum/zinit: 🌻 Flexible and fast ZSH plugin manager](https://github.com/zdharma-continuum/zinit)
[^2]: [romkatv/powerlevel10k: A Zsh theme](https://github.com/romkatv/powerlevel10k#zim)
