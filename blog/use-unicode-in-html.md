---
date: 2021-11-27
---

# 在 HTML 中使用 Unicode 代码

## 前言

在某些情况下需要在 HTML 中嵌入特殊符号，但是 HTML 实体中并不包含这些符号，或是该实体符号不能被浏览器正确渲染，可以通过 Unicode 代码代替这些字符，以达到在网页中正确渲染该字符的目的。HTML 实体代码和字符对应的 Unicode 代码可以参考 HTML Standard[^1]。

## 声明网页编码

为了能在网页中正常显示 Unicode 字符，该网页必须使用 Unicode 编码，如 UTF-8。可在`meta`标签里声明网页编码，并确保 HTTP 头也使用此编码。

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

## 使用 HTML 实体

在 HTML Standard[^1] 中可以看到该符号的名字是`Aacute;`，可以在其前方加上`&`来表示 HTML 命名字符。

<p>&Aacute;</p>

```html
<p>&Aacute;</p>
```

但是并不是所有的命名字符都能被渲染出来，比如字符`{`。

<p>&lbrace;</p>

```html
<p>&lbrace;</p>
```

## 使用 Unicode 代码

可以使用十六进制编码。

<p>&#x0007B;</p>

```html
<p>&#x0007B;</p>
```

也可以使用十进制编码。

<p>&#123;</p>

```html
<p>&#123;</p>
```

## 参考资料

- [HTML、CSS、JS 对 unicode 字符的不同处理 - 我是小茗同学 - 博客园](https://www.cnblogs.com/liuxianan/p/display-unicode-character-in-html-css-and-js.html)
- [HTML Unicode UTF-8](https://www.w3schools.com/charsets/ref_utf_symbols.asp)

[^1]: [HTML Standard](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
