# 主页

## 关于

这是一个用Vuepress生成的静态网站，用于存储和展示我的学习笔记。

## 学习笔记

### Java

### JavaScript

- [Vue.js](学习笔记/JavaScript/Vue.js.md)
- [TypeScript](学习笔记/JavaScript/TypeScript.md)

### 操作系统

### 运维

### 实用工具

-  [EditorConfig](学习笔记/实用工具/EditorConfig.md)

### 数据库

### 消息队列

## 文章

### 2021

- [利用 Github Actions 部署 Vuepress 项目到 Github Pages](文章/deploy-vuepress-project-to-github-pages-with-github-actions.md)

## 读书笔记

## TODO

- [x] 集成`pangu.js`，就不用自己手动加空格了；
- [ ] 自动生成索引页，将子文件夹的名称作为分类名称，其中的内容作为文章名称；
- [x] 解决TODO没有正确解析的问题；
- [ ] `Mermaid`扩展；
- [x] `Markdown-it`脚注；
- [ ] favicon
- [x] plantuml


@startuml
scale 600 width

[*] -> State1
State1 --> State2 : Succeeded
State1 --> [*] : Aborted
State2 --> State3 : Succeeded
State2 --> [*] : Aborted
state State3 {
  state "Accumulate Enough Data\nLong State Name" as long1
  long1 : Just a test
  [*] --> long1
  long1 --> long1 : New Data
  long1 --> ProcessData : Enough Data
}
State3 --> State3 : Failed
State3 --> [*] : Succeeded / Save Result
State3 --> [*] : Aborted

@enduml

