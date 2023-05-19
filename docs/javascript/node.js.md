# Node.js

## 模块化

### CommonJS

```javascript

function a(){

}

# 1
module.exports = a

# 2
module.exports = {
  a
}

##

const a = require('./a.js')
const { a } = require('./a.js')
```

## 包管理工具

### NPM

[npm](https://www.npmjs.com/)

- `npm init -y`，初始化项目
- `npm i -S jquery`，安装运行依赖
- `npm i -D less`，安装开发依赖
- `npm i -g nodemon`，安装全局依赖
- `npm r jquery`，移除依赖
- `npm r -g jquery`，移除全局依赖
- `npm run serve`，运行脚本
- `npm start`，相当于`npm run start`
- `npm i`，安装所有依赖

### Yarn

- `yarn init -y`，初始化项目
- `yarn add jquery`
- `yarn add less --dev`
- `yarn global add nodemon`
- `yarn remove nodemon`
- `yarn global remove nodemon`
- `yarn serve`，运行脚本，不需要`run`命令
- `yarn start`，运行脚本，不需要`run`命令
- `yarn`，安装所有依赖
