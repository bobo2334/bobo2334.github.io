# Java

## 参考资料

- [尚硅谷 Java 零基础入门教程（含百道 Java 真题，2 万多行 Java 代码实战）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kb411W75N)
- [30 天搞定 Java 核心技术-程序员标配，人手一套尚硅谷教程](http://www.atguigu.com/download_detail.shtml?v=129)
- [30 天搞定 Java 核心技术（上） - 谷粒学苑 - Java 培训|大数据培训|前端培训|HTML5 培训|Linux 运维培训_程序员一站式 IT 在线学习平台 - Powered By EduSoho](https://www.gulixueyuan.com/goods/show/203?targetId=309&preview=0)

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

编程语言排行榜：[index | TIOBE - The Software Quality Company](https://www.tiobe.com/tiobe-index/)。

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
- Java Card，支持一些 Java 小程序（Applets）运行在小内存设备（如智能卡）上的平台。

### Java 语言的环境搭建

- JRE（Java Runtime Environment，Java 运行环境）
- JDK（Java Development Kit，Java 开发工具包）

![image-20211028110720639](./java.assets/image-20211028110720639.png)

![image-20211028110750021](./java.assets/image-20211028110750021.png)

### 开发体验——Hello World

1. 编写
   1. 文件以`.java`为后缀
   2. 以类为基本单位
   3. 一个文件中只能由一个`public`类
   4. 如果存在`public`类，则源代码文件名需要与类名相同
   5. 程序的入口为固定写法，`public static void main(String[] args) { /* ... */ }`
   6. 语句之间用分号分隔
2. 编译，`javac A.java`
3. 运行，`java 类名`

![image-20211028152547834](./java.assets/image-20211028152547834.png)

### 注释

1. 单行注释，`// 注释`
2. 多行注释，`/* 注释 */`
3. 文档注释，`/** @author Roddy */`，可以用`javadoc`工具解析，生成代码文档

### Java API 文档

- [Java 8 中文版 - 在线 API 中文手册 - 码工具](https://www.matools.com/api/java8)
- [Overview (Java Platform SE 8 )](https://docs.oracle.com/javase/8/docs/api/)

## Java 基本语法

### 关键字与保留字

[Java Language Keywords (The Java™ Tutorials > Learning the Java Language > Language Basics)](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html)

关键字（keyword）：被 Java 语言赋予了特殊含义，用做专门用途的字符串（单词）。关键字中所有字母都为小写。

保留字（reserverd word）：现有 Java 版本尚未使用，但以后版本可能会作为关键字使用。有两个`goto`、`const`。

![image-20211028154406433](./java.assets/image-20211028154406433.png)

### 标识符

#### 命名规则

Java 对各种变量、方法和类等要素命名时使用的字符序列称为标识符。

- 由 26 个英文字母大小写，`0-9` 、`_`或 `$` 组成
- 数字不可以开头。
- 不可以使用关键字和保留字，但能包含关键字和保留字。
- Java 中严格区分大小写，长度无限制。
- 标识符不能包含空格。

#### 命名规范

命名规范，不强制但是强烈建议。

- 包名：`xxxyyyzzz`
- 类名、接口名：`XxxYyyZzz`
- 变量名、方法名：`xxxYyyZzz`
- 常量名：`XXX_YYY_ZZZ`

### 变量

#### 概念

- 内存中的一个存储区域
- 

### 运算符

