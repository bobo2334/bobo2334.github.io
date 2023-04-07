# 使用 SDKMAN 在 M1 Mac 上安装 JDK

## 前言

SDKMAN 是一系列 Bash 脚本，可以用来管理各个版本的 JDK。在 M1 芯片的 Mac 中可以很方便地安装 ARM 版本的 JDK，并在各个版本之间切换。

SDKMAN 也可以用来安装其他工具，如 Maven、Gradle 等，但是目前我用不上，我只用它来管理 JDK。

## 安装

*SDKMAN* [^1] 是一系列 Bash 脚本，所以有 Bash 环境的系统就能运行 SDKMAN，比如 Linux、macOS。

执行下面的安装脚本来安装 SDKMAN。改脚本会把 SDKMAN 的相关脚本下载至`~/.sdkman`文件夹中。之后它会修改你的 Shell 启动文件，将 SDKMAN 的初始化命令放入其中。

```bash
curl -s "https://get.sdkman.io" | bash
```

如果你的 Shell 启动文件（`.zshrc`/`.bashrc`/...）没有被附加 SDKMAN 的初始化命令，你可以手动放入以下命令。

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

## 使用

重新打开一个新的 Shell 会话，如果你正确完成了安装过程，此时你可以执行命令`sdk`。

```bash
# 列出可以安装的 JDK 发行版
sdk ls java
```

```txt
================================================================================
Available Java Versions for macOS ARM 64bit
================================================================================
 Vendor        | Use | Version      | Dist    | Status     | Identifier
--------------------------------------------------------------------------------
 Corretto      |     | 18.0.1       | amzn    |            | 18.0.1-amzn
               |     | 17.0.3.6.1   | amzn    |            | 17.0.3.6.1-amzn
               |     | 11.0.15.9.1  | amzn    |            | 11.0.15.9.1-amzn
               |     | 8.332.08.1   | amzn    |            | 8.332.08.1-amzn
 Gluon         |     | 22.1.0.1.r17 | gln     |            | 22.1.0.1.r17-gln
               |     | 22.1.0.1.r11 | gln     |            | 22.1.0.1.r11-gln
 GraalVM       |     | 22.1.0.r17   | grl     | installed  | 22.1.0.r17-grl
               |     | 22.1.0.r11   | grl     |            | 22.1.0.r11-grl
 Java.net      |     | 20.ea.4      | open    |            | 20.ea.4-open
               |     | 20.ea.3      | open    |            | 20.ea.3-open
               |     | 19.ea.29     | open    |            | 19.ea.29-open
               |     | 19.ea.28     | open    |            | 19.ea.28-open
               |     | 18.0.1.1     | open    |            | 18.0.1.1-open
 Liberica      |     | 18.0.1.1.fx  | librca  |            | 18.0.1.1.fx-librca
               |     | 18.0.1.1     | librca  |            | 18.0.1.1-librca
               |     | 17.0.3.1.fx  | librca  |            | 17.0.3.1.fx-librca
               |     | 17.0.3.1     | librca  |            | 17.0.3.1-librca
               |     | 11.0.15.1.fx | librca  |            | 11.0.15.1.fx-librca
               |     | 11.0.15.1    | librca  |            | 11.0.15.1-librca
               |     | 8.0.333.fx   | librca  |            | 8.0.333.fx-librca
               |     | 8.0.333      | librca  |            | 8.0.333-librca
 Microsoft     |     | 17.0.3       | ms      |            | 17.0.3-ms
               |     | 11.0.15      | ms      |            | 11.0.15-ms
 Oracle        |     | 18.0.1       | oracle  |            | 18.0.1-oracle
               |     | 17.0.3       | oracle  |            | 17.0.3-oracle
 SapMachine    |     | 18.0.1.1     | sapmchn |            | 18.0.1.1-sapmchn
               |     | 17.0.3       | sapmchn |            | 17.0.3-sapmchn
               |     | 17.0.3.0.1   | sapmchn |            | 17.0.3.0.1-sapmchn
               |     | 17.0.2       | sapmchn |            | 17.0.2-sapmchn
 Semeru        |     | 18.0.1.1     | sem     |            | 18.0.1.1-sem
               |     | 17.0.3       | sem     |            | 17.0.3-sem
               |     | 11.0.15      | sem     |            | 11.0.15-sem
 Temurin       |     | 18.0.1       | tem     |            | 18.0.1-tem
               |     | 17.0.3       | tem     |            | 17.0.3-tem
               |     | 11.0.15      | tem     |            | 11.0.15-tem
 Zulu          |     | 18.0.1       | zulu    |            | 18.0.1-zulu
               |     | 18.0.1.fx    | zulu    |            | 18.0.1.fx-zulu
               |     | 17.0.3       | zulu    | installed  | 17.0.3-zulu
               |     | 17.0.3.fx    | zulu    |            | 17.0.3.fx-zulu
               |     | 11.0.15      | zulu    | installed  | 11.0.15-zulu
               |     | 11.0.15.fx   | zulu    |            | 11.0.15.fx-zulu
               | >>> | 8.0.332      | zulu    | installed  | 8.0.332-zulu
               |     | 8.0.332.fx   | zulu    |            | 8.0.332.fx-zulu
================================================================================
Omit Identifier to install default version 17.0.3-tem:
    $ sdk install java
Use TAB completion to discover available versions
    $ sdk install java [TAB]
Or install a specific version by Identifier:
    $ sdk install java 17.0.3-tem
Hit Q to exit this list view
================================================================================
(END)
```

```bash
# 安装 zulu jdk 8.0.332
sdk install java 8.0.332-zulu
```

```bash
# 把 8.0.332-zulu 加入环境变量
sdk use java 8.0.332-zulu
```

```bash
# 查看现在使用的哪个 JDK
sdk current java
```

```bash
# 卸载 8.0.332-zulu
sdk uninstall java 8.0.332-zulu
```

[^1]: [Home - SDKMAN! the Software Development Kit Manager](https://sdkman.io/)
