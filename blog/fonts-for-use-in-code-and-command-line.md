---
date: 2023-03-02
---

# 适合在代码和命令行中使用的字体

## Fira Code

用于写代码。Fira Code 是 Fira Mono 的扩展；Fira Code 加入了一些连体字符（ligatures）。使用原始版本`FiraCode`。

```powershell
scoop install FiraCode
```

- [tonsky/FiraCode: Free monospaced font with programming ligatures](https://github.com/tonsky/FiraCode)

## Cascadia Code

用于命令行。一般使用 NerdFont 的补丁版本，其中加入了许多字体图标，可以在命令行中展示更丰富的内容。

使用`CascadiaCode-NF-Mono`，因为 Cascadia Code 本身就是等宽字体，此版本加入的图标字形都是 1 个字符宽度的。

```powershell
scoop install CascadiaCode-NF-Mono
```

- [microsoft/cascadia-code: This is a fun, new monospaced font that includes programming ligatures and is designed to enhance the modern look and feel of the Windows Terminal.](https://github.com/microsoft/cascadia-code)

## JetBrains Mono

用于阅读。使用原始版本`JetBrains-Mono`。

```powershell
scoop install JetBrains-Mono
```

- [JetBrains Mono: A free and open source typeface for developers | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/lp/mono/)

## Sarasa Gothic

用作中文候补字体，或者中英混合排版时的字体。

```powershell
scoop install SarasaGothic-SC
```

在 Scoop 中有该字体的多个安装包。

`SarasaGothic`和`SarasaGothic-ttc`分别为该字体的 ttf 和 ttc 格式的版本，包含全部字体文件，体积较大；ttc 格式比 ttf 格式占用空间小，但是要求 Windows 10 以上的系统才能使用；ttf 则兼容性比较好。

类似`SarasaGothic-*`这种以地区代号为后缀的版本，它们之间的区别是 pen stroke 的标准不同（我也不知道这是什么意思，我从 `SarasaGothic.json` 文件中看到的这些说明），这些版本的字体中涵盖的字符数量是一样的。所以就选`SarasaGothic-SC`安装吧，其他版本的安装包包含了其他地区标准的字体，估计也用不上。

- `SarasaGothic`：包含所有地区，ttf 格式
- `SarasaGothic-ttc`：包含所有地区，ttc 格式
- `SarasaGothic-SC`：mainland China
- `SarasaGothic-TC`：Taiwan
- `SarasaGothic-HK`：Hong Kong
- `SarasaGothic-J`：Japan
- `SarasaGothic-K`：Korea

除了地区版本不同之外，这个字体内还包含很多后缀。下面的表格对这些字体的后缀进行了一些简短的介绍。

| 后缀     | 西文字符                                           | CJK 字符                                                                                     | 其它说明                            |
| ------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------- |
| Gothic | [Inter](https://github.com/rsms/inter)         | [思源黑体](https://github.com/adobe-fonts/source-han-sans/blob/master/README-CN.md) | 引号（`“”`）是一个字符宽度                 |
| UI     | [Inter](https://github.com/rsms/inter)         | [思源黑体](https://github.com/adobe-fonts/source-han-sans/blob/master/README-CN.md) | 引号（`“”`）更窄                      |
| Mono   | [Iosevka](https://github.com/be5invis/Iosevka) | [思源黑体](https://github.com/adobe-fonts/source-han-sans/blob/master/README-CN.md) | 破折号（`——`）是一个字符宽度                |
| Term   | [Iosevka](https://github.com/be5invis/Iosevka) | [思源黑体](https://github.com/adobe-fonts/source-han-sans/blob/master/README-CN.md) | 破折号（`——`）是半个字符宽度                |
| Fixed  | [Iosevka](https://github.com/be5invis/Iosevka) | [思源黑体](https://github.com/adobe-fonts/source-han-sans/blob/master/README-CN.md) | 没有连字（ligature），破折号（`——`）是半个字符宽度 |

编程字体选`Sarasa Mono SC`，因为西文字体 Iosevka 更适合编程。

以上这些这些后缀都能搭配`Slab`后缀如`Sarasa Fixed Slab SC`，`Slab`字体的英文字形带有笔锋。

- [be5invis/Sarasa-Gothic: Sarasa Gothic / 更纱黑体 / 更紗黑體 / 更紗ゴシック / 사라사 고딕](https://github.com/be5invis/Sarasa-Gothic)

## VS Code 设置备份

```json
{
  "editor.fontFamily": "'Fira Code', 'Sarasa Mono SC', Consolas, 'Courier New', monospace",
  "terminal.integrated.fontFamily": "'CaskaydiaCove NFM', 'Sarasa Mono SC', Consolas, 'Courier New', monospace"
}
```

## 参考资料

- [三款代码字体：Fira Code、JetBrains Mono 与 Cascadia Code - 知乎](https://zhuanlan.zhihu.com/p/116230037)
- [ryanoasis/nerd-fonts: Iconic font aggregator, collection, & patcher. 3,600+ icons, 50+ patched fonts: Hack, Source Code Pro, more. Glyph collections: Font Awesome, Material Design Icons, Octicons, & more](https://github.com/ryanoasis/nerd-fonts)
