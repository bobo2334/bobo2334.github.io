---
category: 学习笔记
tags:
    - EditorConfig
---
# EditorConfig

## 简介

EditorConfig[^1]配置文件被许多优秀的代码编辑器默认支持，只要`.editorconfig`文件存在于项目的根目录下，它就会被编辑器读取并应用。

将项目文件格式写入名为`.editorconfig`的配置文件，如文件编码、换行风格、缩进风格等，以便多个开发人员在项目里保持一致的编码风格。

## 示例

```ini
# EditorConfig is awesome: https://EditorConfig.org

root = true

[*]
end_of_line = lf
charset = utf-8
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 4

[{*.ts, *.js}]
indent_size = 2
```

用`#`标注注释；

配置可以分段，在`[]`之中声明要匹配的文件，可以用`{}`来声明多种匹配规则，用英文逗号`,`分隔这些规则；

1. `*`，匹配任意字符串，除了`/`；
2. `**`，匹配任意字符串；
3. `?`，匹配单个字符；
4. `[name]`，匹配`name`中的任意单个字符，即`n`、`a`、`m`和`e`；
5. `[!name]`，匹配不出现在`name`中的单个字符；
6. `{s1, s2, s3}`，联合多个匹配；
7. `{1..9}`，匹配任意`1`至`9`之间的数字。

用`key=value`的形式定义属性，常用的一些属性如下。

| 配置项                     | 可选值           | 备注                                                         |
| -------------------------- | ---------------- | ------------------------------------------------------------ |
| `indent_style`             | `tab`/`space`    | 缩进风格                                                     |
| `indent_size`              | 数字             | 空格缩进数量                                                 |
| `end_of_line`              | `lf`/`cr`/`crlf` | 换行符风格                                                   |
| `charset`                  | `utf-8`/`...`    | 文件编码                                                     |
| `trim_trailing_whitespace` | `true`/`false`   | 移除行尾空白字符                                             |
| `insert_final_newline`     | `true`/`false`   | 文件永远以空行结尾                                           |
| `root`                     | `true`/`false`   | 该属性表名此配置文件是最顶层的配置文件，不会再往上层寻找配置文件了 |

可以在每个文件夹层级都定义配置文件，在进行格式化文件的时候，EditorConfig会从当前目录至上级目录一直寻找`.editorconfig`文件，直到文件系统的根目录或者到某个包含`root=true`的配置文件为止。最终生效的配置文件是将所有寻找到的配置文件合并后的结果，路径短的配置内容会覆盖路径长的配置内容。

[^1]: [EditorConfig](https://editorconfig.org/)

