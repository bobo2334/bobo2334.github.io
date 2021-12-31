# 网站生成器的要求

## 要求

1. 以 Markdown 文档为基础
2. 样式简洁，没有花里胡哨的颜色和动画
3. 字体美观，可以设置中英文字体
4. 移动端适配
5. 图片放大
6. 代码高亮、代码一键复制
7. 支持渲染 MathJax[^1] 或 KaTex[^2]
8. 支持渲染 PlantUML[^3]
9. 支持渲染 Mermaid[^4]
10. 明亮/黑暗主题自动切换
11. 搜索
12. 自动生成文章内目录

## 可选方案

### docsify

- [docsifyjs/docsify: 🃏 A magical documentation site generator.](https://github.com/docsifyjs/docsify)

### docute

- [egoist/docute: 📚 Effortless documentation, done right.](https://github.com/egoist/docute)

### VuePress

- [VuePress](https://vuepress.vuejs.org/zh/)

遇到的问题：

1. 不支持主题切换

### VuePress V2

- [首页 | VuePress](https://v2.vuepress.vuejs.org/zh/)

遇到的问题：

1. 明亮主题代码块背景有问题
2. 没有代码复制按钮
3. 不支持 Mermaid

### MkDocs

- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

遇到的问题：

1. Python 语言实现
2. 主题的部分功能要高级版才能用

### wiki

- [Requarks/wiki: Wiki.js | A modern and powerful wiki app built on Node.js](https://github.com/Requarks/wiki)

1. 需要服务端
2. 图片资源管理有点不太方便

### docusaurus

- [facebook/docusaurus: Easy to maintain open source documentation websites.](https://github.com/facebook/docusaurus)

[^1]: [MathJax | Beautiful math in all browsers.](https://www.mathjax.org/)
[^2]: [KaTeX – The fastest math typesetting library for the web](https://katex.org/)
[^3]: [开源工具，使用简单的文字描述画 UML 图。](https://plantuml.com/zh/)
[^4]: [mermaid - Markdownish syntax for generating flowcharts, sequence diagrams, class diagrams, gantt charts and git graphs.](https://mermaid-js.github.io/mermaid/#/)
