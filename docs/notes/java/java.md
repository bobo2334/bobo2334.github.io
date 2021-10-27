# Java

## 参考资料

- [尚硅谷Java零基础入门教程（含百道Java真题，2万多行Java代码实战）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kb411W75N)

## Java 语言概述

### 软件开发介绍

#### 人机交互方式

- 图形化界面（Graphical User Interface, GUI）
- 命令行方式（Command Line Interface, CLI）

#### 常用的 DOS 命令

- `dir`列出目录下的文件以及文件夹
- `md`创建目录
- `rd`删除目录
- `cd`进入指定目录
- `cd..`进入上级目录
- `cd\`进入根目录
- `del`删除文件
- `exit`退出 DOS 命令行
- `echo`回显；可以用输出重定向输出内容到文件，如`echo javase > 1.txt`
- <kbd>TAB</kbd>代码提示
- <kbd>←</kbd><kbd>→</kbd>移动光标
- <kbd>↑</kbd><kbd>↓</kbd>调整历史命令
- <kbd>Delete</kbd><kbd>Backspace</kbd>删除字符

### 计算机编程语言介绍

- 第一代语言：机器语言，指令以二进制代码形式存在；
- 第二代语言：汇编语言，使用助剂符表示一条机器指令；
- 第三代语言：高级语言。

### Java 语言概述

Java 语言是 SUN（**S**tanford **U**niversity **N**etwork）1995 年推出的一门高级编程语言。

编程语言排行榜[^1]。

#### Java 简史

- 1991 年 Green 项目，开发语言最初命名为 Oak （橡树）
- 1996 年，发布 JDK 1.0
- 1999 年，Java 分成 J2SE、J2EE 和 J2ME，JSP/Servlet 技术诞生
- 2004 年，发布里程碑式版本 JDK 1.5，为突出此版本的重要性，更名为 JDK 5.0
- 2005 年，J2SE -> JavaSE，J2EE -> JavaEE，J2ME -> JavaME
- 2009 年，Oracle 公司收购 SUN，交易价格 74 亿美元
- 2014 年，发布 JDK 8.0，是继 JDK 5.0 以来变化最大的版本
- 2018 年 3 月，发布 JDK 10.0，版本号也称为 18.3
- 2018 年 9 月，发布 JDK 11.0，版本号也称为 18.9

#### Java 技术体系平台

- Java SE（Java Standard Edition）标准版，面向桌面级应用开发；
- Java EE（Java Enterprise Edition）企业版，是为开发企业环境下的应用程序提供的一套解决方案。该技术体系中包含的技术如 Servlet 、JSP 等，主要针对于 Web 应用程序开发；
- ava ME（Java Micro Edition）小型版，支持 Java 程序运行在移动终端上的平台；
- Java Card，支持一些Java小程序（Applets）运行在小内存设备（如智能卡）上的平台。









[^1]: [index | TIOBE - The Software Quality Company](https://www.tiobe.com/tiobe-index/)

