---
date: 2023-03-02
---

# 适合在代码和命令行中使用的字体

## Fira Code

用于写代码。Fira Code 是 Fira Mono 的扩展；Fira Code 加入了一些连体字符（ligatures）。使用原始版本`FiraCode`。

```pwsh
scoop install FiraCode
```

- [tonsky/FiraCode: Free monospaced font with programming ligatures](https://github.com/tonsky/FiraCode)

## Cascadia Code

用于命令行。一般使用 NerdFont 的补丁版本，其中加入了许多字体图标，可以在命令行中展示更丰富的内容。

使用`CascadiaCode-NF-Mono`，因为 Cascadia Code 本身就是等宽字体，此版本加入的图标字形都是 1 个字符宽度的。

```pwsh
scoop install CascadiaCode-NF-Mono
```

- [microsoft/cascadia-code: This is a fun, new monospaced font that includes programming ligatures and is designed to enhance the modern look and feel of the Windows Terminal.](https://github.com/microsoft/cascadia-code)

## JetBrains Mono

用于阅读。使用原始版本`JetBrains-Mono`。

```pwsh
scoop install JetBrains-Mono
```

- [JetBrains Mono: A free and open source typeface for developers | JetBrains: Developer Tools for Professionals and Teams](https://www.jetbrains.com/lp/mono/)

## Sarasa Gothic

英文字形太窄了导致不好看，使用其中的中文字形作为中文后备字体。各大包管理器都没收录此字体，需要手动安装。选择`Sarasa Mono CL`安装，使用 ttf 格式。

- [be5invis/Sarasa-Gothic: Sarasa Gothic / 更纱黑体 / 更紗黑體 / 更紗ゴシック / 사라사 고딕](https://github.com/be5invis/Sarasa-Gothic)

## VS Code 设置备份

```json
{
  "editor.fontFamily": "'Fira Code', 'Sarasa Mono CL', Consolas, 'Courier New', monospace",
  "terminal.integrated.fontFamily": "'CaskaydiaCove NFM', 'Sarasa Mono CL', Consolas, 'Courier New', monospace"
}
```

## 参考资料

- [三款代码字体：Fira Code、JetBrains Mono 与 Cascadia Code - 知乎](https://zhuanlan.zhihu.com/p/116230037)
- [ryanoasis/nerd-fonts: Iconic font aggregator, collection, & patcher. 3,600+ icons, 50+ patched fonts: Hack, Source Code Pro, more. Glyph collections: Font Awesome, Material Design Icons, Octicons, & more](https://github.com/ryanoasis/nerd-fonts)
