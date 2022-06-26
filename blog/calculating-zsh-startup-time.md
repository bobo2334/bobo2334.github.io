---
date: 2022-06-26
tags:
    - zsh
---

# 计算 zsh 启动时间

## 前言

最近发现 zsh 启动速度慢，每次启动后要过 2 秒左右才完全启动。虽然在完全启动之前也可以输入命令，但是还是让人不爽。

<!-- more -->

## 使用`time`命令

```bash
time zsh -i -c exit
```

```
zsh -i -c exit  0.36s user 0.25s system 88% cpu 0.688 total
```

## 使用`zprof`模块

在`~/.zshrc`文件中的开头写入`zmodload zsh/zprof`，在结尾写入`zprof`，启动 zsh 之后就能看到哪些加载项影响了启动速度。

```bash
# ~/.zshrc

# 首行加入
zmodload zsh/zprof

# 中间省略
# ...

# 末行加入
zprof
```

```
num  calls                time                       self            name
-----------------------------------------------------------------------------------
 1)    1          91.87    91.87   38.76%     78.87    78.87   33.28%  nvm_auto
 2)    1          60.75    60.75   25.63%     60.75    60.75   25.63%  is_update_available
 3)    2          22.79    11.39    9.62%     22.79    11.39    9.62%  compaudit
 4)    2          80.84    40.42   34.11%     20.08    10.04    8.47%  (anon)
 5)    1          35.70    35.70   15.06%     12.91    12.91    5.45%  compinit
 6)    1          10.37    10.37    4.38%     10.28    10.28    4.34%  _zsh_highlight_load_highlighters
 7)    1          13.00    13.00    5.48%      7.54     7.54    3.18%  nvm_rc_version
 8)    1           5.38     5.38    2.27%      5.38     5.38    2.27%  nvm_echo
 9)    1           5.05     5.05    2.13%      5.05     5.05    2.13%  _zsh_highlight_bind_widgets
10)    1           4.88     4.88    2.06%      4.88     4.88    2.06%  __sdkman_export_candidate_home
11)    1           3.86     3.86    1.63%      3.86     3.86    1.63%  __sdkman_prepend_candidate_to_path
12)    1           1.36     1.36    0.57%      1.36     1.36    0.57%  regexp-replace
13)    1           0.75     0.75    0.32%      0.75     0.75    0.32%  colors
14)    7           0.65     0.09    0.28%      0.65     0.09    0.28%  add-zsh-hook
15)    3           0.52     0.17    0.22%      0.52     0.17    0.22%  bashcompinit
16)    4           0.51     0.13    0.21%      0.51     0.13    0.21%  is-at-least
17)    4           0.28     0.07    0.12%      0.28     0.07    0.12%  compdef
18)    2           0.30     0.15    0.13%      0.15     0.08    0.06%  complete
19)    8           0.12     0.02    0.05%      0.12     0.02    0.05%  is_plugin
20)    1           5.46     5.46    2.30%      0.07     0.07    0.03%  nvm_err
21)    2           0.05     0.02    0.02%      0.05     0.02    0.02%  is_theme
22)    1          91.91    91.91   38.78%      0.04     0.04    0.02%  nvm_process_parameters
23)    2           0.03     0.02    0.01%      0.03     0.02    0.01%  env_default
24)    2           0.02     0.01    0.01%      0.02     0.01    0.01%  __sdkman_echo_debug
25)    1           0.02     0.02    0.01%      0.02     0.02    0.01%  detect-clipboard
26)    1           0.01     0.01    0.01%      0.01     0.01    0.01%  nvm_is_zsh
```

## 参考资料

- [Quit using nvm：快删掉这个占据 Zsh 启动时间一半的怪物！ - Spencer's Blog](https://spencerwoo.com/blog/remove-nvm-to-speed-up-zsh)
- [zsh: 22 Zsh Modules](https://zsh.sourceforge.io/Doc/Release/Zsh-Modules.html#The-zsh_002fzprof-Module)
