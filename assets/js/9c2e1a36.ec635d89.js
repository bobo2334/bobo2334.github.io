"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6876],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),b=r,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50629:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return b}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={date:new Date("2020-12-08T00:00:00.000Z")},l="\u4f7f\u7528 Vant Weapp \u81ea\u5b9a\u4e49\u5fae\u4fe1\u5c0f\u7a0b\u5e8f TabBar",c={permalink:"/blog/customize-wechat-mini-program-tabbar-with-vant-weapp",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/customize-wechat-mini-program-tabbar-with-vant-weapp.md",source:"@site/blog/customize-wechat-mini-program-tabbar-with-vant-weapp.md",title:"\u4f7f\u7528 Vant Weapp \u81ea\u5b9a\u4e49\u5fae\u4fe1\u5c0f\u7a0b\u5e8f TabBar",description:"\u524d\u8a00",date:"2020-12-08T00:00:00.000Z",formattedDate:"2020\u5e7412\u67088\u65e5",tags:[],truncated:!1,authors:[],prevItem:{title:"\u5229\u7528 Github Actions \u90e8\u7f72 Vuepress \u9879\u76ee\u5230 Github Pages",permalink:"/blog/deploy-vuepress-project-to-github-pages-with-github-actions"},nextItem:{title:"\u89e3\u51b3 IntelliJ IDEA \u4e2d Tomcat \u65e5\u5fd7\u8f93\u51fa\u4e71\u7801\u7684\u95ee\u9898",permalink:"/blog/solve-the-problem-of-tomcat-log-output-messy-code-in-intellij-idea"}},s={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u65b0\u5efa custom-tab-bar \u7ec4\u4ef6",id:"\u65b0\u5efa-custom-tab-bar-\u7ec4\u4ef6",children:[],level:2},{value:"\u542f\u7528\u81ea\u5b9a\u4e49 TabBar \u8bbe\u7f6e",id:"\u542f\u7528\u81ea\u5b9a\u4e49-tabbar-\u8bbe\u7f6e",children:[],level:2},{value:"\u5728\u6bcf\u4e2a Tab \u9875\u4e2d\u914d\u7f6e",id:"\u5728\u6bcf\u4e2a-tab-\u9875\u4e2d\u914d\u7f6e",children:[],level:2}],m={toc:u};function b(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u539f\u751f\u7684 TabBar \u867d\u7136\u8bbe\u7f6e\u7b80\u5355\uff0c\u4f46\u662f\u6837\u5f0f\u4e0d\u597d\u770b\uff0c\u4e5f\u4e0d\u80fd\u4f7f\u7528\u5b57\u4f53\u56fe\u6807\uff0c\u4f46\u662f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u6709\u81ea\u5b9a\u4e49 TabBar \u7684\u673a\u5236\u3002"),(0,i.kt)("p",null,"Vant WeApp",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u662f\u6709\u8d5e\u51fa\u54c1\u7684\u9488\u5bf9\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u4e00\u5957\u5f00\u6e90\u7ec4\u4ef6\u5e93\uff0c\u7ed3\u5408 van-tabbar",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u548c\u5fae\u4fe1\u7684\u81ea\u5b9a\u4e49 TabBar \u673a\u5236 ",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," \u53ef\u4ee5\u5b9e\u73b0\u4e00\u5957\u6bd4\u8f83\u597d\u770b\u7684 TabBar\u3002"),(0,i.kt)("h2",{id:"\u65b0\u5efa-custom-tab-bar-\u7ec4\u4ef6"},"\u65b0\u5efa custom-tab-bar \u7ec4\u4ef6"),(0,i.kt)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5de5\u7a0b\u6587\u4ef6\u5939\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"custom-tab-bar")," \u7684\u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(78947).Z})),(0,i.kt)("p",null,"\u5176\u4e2d\u5404\u4e2a\u6587\u4ef6\u4e2d\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "component": true,\n  "usingComponents": {\n    "van-tabbar": "@vant/weapp/tabbar/index",\n    "van-tabbar-item": "@vant/weapp/tabbar-item/index"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// custom-tab-bar/index.js\nComponent({\n  /**\n   * \u7ec4\u4ef6\u7684\u5c5e\u6027\u5217\u8868\n   */\n  properties: {},\n\n  /**\n   * \u7ec4\u4ef6\u7684\u521d\u59cb\u6570\u636e\n   */\n  data: {\n    active: -1,\n    list: [{\n        icon: "search",\n        text: "\u641c\u7d22",\n        url: "/pages/index/index",\n      },\n      {\n        icon: "question-o",\n        text: "\u7b54\u9898",\n        url: "/pages/question/index",\n      },\n      {\n        icon: "ellipsis",\n        text: "\u5173\u4e8e",\n        url: "/pages/user/index",\n      },\n    ],\n  },\n\n  /**\n   * \u7ec4\u4ef6\u7684\u65b9\u6cd5\u5217\u8868\n   */\n  methods: {\n    onChange(event) {\n      wx.switchTab({\n        url: this.data.list[event.detail].url,\n      });\n    },\n\n    init() {\n      const {\n        route\n      } = getCurrentPages().pop();\n      const active = this.data.list.findIndex(\n        (item) => item.url === `/${route}`\n      );\n      console.log("active:", active);\n      this.setData({\n        active,\n      });\n    },\n  },\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- custom-tab-bar/index.wxml --\x3e\n<van-tabbar active="{{ active }}" bind:change="onChange">\n    <van-tabbar-item wx:for="{{list}}" wx:key="index" icon="{{item.icon}}">\n        {{item.text}}\n    </van-tabbar-item>\n</van-tabbar>\n')),(0,i.kt)("h2",{id:"\u542f\u7528\u81ea\u5b9a\u4e49-tabbar-\u8bbe\u7f6e"},"\u542f\u7528\u81ea\u5b9a\u4e49 TabBar \u8bbe\u7f6e"),(0,i.kt)("p",null,"\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"app.js")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBar")," \u8bbe\u7f6e\uff0c\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," \u4e2d\u7684\u5bf9\u8c61\u53ea\u9700\u4fdd\u7559 ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," \u5c5e\u6027\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(451).Z})),(0,i.kt)("h2",{id:"\u5728\u6bcf\u4e2a-tab-\u9875\u4e2d\u914d\u7f6e"},"\u5728\u6bcf\u4e2a Tab \u9875\u4e2d\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728\u5f00\u542f\u4e86\u81ea\u5b9a\u4e49 TabBar \u8bbe\u7f6e\u540e\uff0c\u53ef\u4ee5\u5728\u6bcf\u4e2a\u9875\u9762\u4e2d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"getTabBar()")," \u83b7\u53d6 TabBar \u7ec4\u4ef6\u5b9e\u4f8b\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u9700\u8981\u5728\u6bcf\u4e2a Tab \u9875\u4e2d\u8bbe\u7f6e\u5f53\u524d Tab \u9875\u56fe\u6807\u9ad8\u4eae\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728\u6bcf\u4e2a Tab \u9875\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"onShow()")," \u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e2d\u8c03\u7528 TabBar \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," \u65b9\u6cd5\uff0c\u4fee\u6539\u5f53\u524d\u6fc0\u6d3b\u9875\uff0c\u6765\u9ad8\u4eae\u5f53\u524d Tab \u9875\u7684\u56fe\u6807\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n* \u751f\u547d\u5468\u671f\u51fd\u6570--\u76d1\u542c\u9875\u9762\u663e\u793a\n*/\nonShow: function () {\n  this.getTabBar().init();\n},\n")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://vant-contrib.gitee.io/vant/#/zh-CN/"},"Vant - \u8f7b\u91cf\u3001\u53ef\u9760\u7684\u79fb\u52a8\u7aef\u7ec4\u4ef6\u5e93 (gitee.io)"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},(0,i.kt)("a",{parentName:"li",href:"https://vant-contrib.gitee.io/vant-weapp/#/tabbar"},"Tabbar \u6807\u7b7e\u680f - Vant Weapp"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},(0,i.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html"},"\u81ea\u5b9a\u4e49 tabBar | \u5fae\u4fe1\u5f00\u653e\u6587\u6863"),(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},78947:function(e,t,n){t.Z=n.p+"assets/images/image-5-2a1b9ebb370903e61d8a3845837ba07b.png"},451:function(e,t,n){t.Z=n.p+"assets/images/image-6-668x1024-b2e7c63ae44c86975ab555f88e15ab5d.png"}}]);