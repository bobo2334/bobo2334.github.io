# 使用 yrm 来快速切换 npm 和 yarn 源

## 简介

**yrm**[^1] 是一个 npm 包，可以用来快速切换 npm 和 yarn 的源，对于国内用户很实用。

之前使用过 nrm，但是它只能修改 npm 源，yrm 会同时修改 npm 和 yarn 的源设置。

## 安装

```bash
npm install -g yrm --registry=https://registry.npmmirror.com
```

## 使用

```bash
# 列出所有源
yrm ls

  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
  yarn --- https://registry.yarnpkg.com
```

```bash
# 使用淘宝源
yrm use cnpm

   YARN Registry has been set to: http://r.cnpmjs.org/

   NPM Registry has been set to: http://r.cnpmjs.org/
```

除了可以切换内置源之外，你还可以手动添加第三方源管理，详情请参考其文档。

## 原理

npm 的配置文件位于`~/.npmrc`。以下是其中内容。

```text
registry=http://r.cnpmjs.org/
```

yarn 的配置文件位于`~/.yarnrc`。以下是其中内容。

```text
registry "http://r.cnpmjs.org/"
```

[^1]: [i5ting/yrm: YARN registry manager, fast switch between different registries: npm, cnpm, nj, taobao](https://github.com/i5ting/yrm)
