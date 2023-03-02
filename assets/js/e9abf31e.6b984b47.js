"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4871],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,y=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return r?n.createElement(y,i(i({ref:t},m),{},{components:r})):n.createElement(y,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29153:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],p={date:new Date("2023-03-02T00:00:00.000Z")},s="\u4f7f\u7528 yrm \u6765\u5feb\u901f\u5207\u6362 npm \u548c yarn \u6e90",l={permalink:"/blog/using-yrm-to-quickly-switch-npm-and-yarn-sources",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/using-yrm-to-quickly-switch-npm-and-yarn-sources.md",source:"@site/blog/using-yrm-to-quickly-switch-npm-and-yarn-sources.md",title:"\u4f7f\u7528 yrm \u6765\u5feb\u901f\u5207\u6362 npm \u548c yarn \u6e90",description:"\u7b80\u4ecb",date:"2023-03-02T00:00:00.000Z",formattedDate:"2023\u5e743\u67082\u65e5",tags:[],readingTime:1.09,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-02T00:00:00.000Z"},prevItem:{title:"Windows \u8fdc\u7a0b\u684c\u9762\u4f7f\u7528\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801",permalink:"/blog/username-and-password-for-windows-remote-desktop"},nextItem:{title:"Gitea SSH \u8ba4\u8bc1\u5931\u8d25\uff0c\u63d0\u793a\u300cno mutual signature algorithm\u300d",permalink:"/blog/gitea-ssh-no-mutual-signature-algorithm"}},m={authorsImageUrls:[]},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2}],u={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"yrm"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1-e99d89"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-e99d89",className:"footnote-ref"},"1"))," \u662f\u4e00\u4e2a npm \u5305\uff0c\u53ef\u4ee5\u7528\u6765\u5feb\u901f\u5207\u6362 npm \u548c yarn \u7684\u6e90\uff0c\u5bf9\u4e8e\u56fd\u5185\u7528\u6237\u5f88\u5b9e\u7528\u3002"),(0,o.kt)("p",null,"\u4e4b\u524d\u4f7f\u7528\u8fc7 nrm\uff0c\u4f46\u662f\u5b83\u53ea\u80fd\u4fee\u6539 npm \u6e90\uff0cyrm \u4f1a\u540c\u65f6\u4fee\u6539 npm \u548c yarn \u7684\u6e90\u8bbe\u7f6e\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yrm --registry=https://registry.npmmirror.com\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5217\u51fa\u6240\u6709\u6e90\nyrm ls\n\n  npm ---- https://registry.npmjs.org/\n  cnpm --- http://r.cnpmjs.org/\n* taobao - https://registry.npm.taobao.org/\n  nj ----- https://registry.nodejitsu.com/\n  rednpm - http://registry.mirror.cqupt.edu.cn/\n  npmMirror  https://skimdb.npmjs.com/registry/\n  edunpm - http://registry.enpmjs.org/\n  yarn --- https://registry.yarnpkg.com\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u6dd8\u5b9d\u6e90\nyrm use cnpm\n\n   YARN Registry has been set to: http://r.cnpmjs.org/\n\n   NPM Registry has been set to: http://r.cnpmjs.org/\n")),(0,o.kt)("p",null,"\u9664\u4e86\u53ef\u4ee5\u5207\u6362\u5185\u7f6e\u6e90\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u7b2c\u4e09\u65b9\u6e90\u7ba1\u7406\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\u5176\u6587\u6863\u3002"),(0,o.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,o.kt)("p",null,"npm \u7684\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"~/.npmrc"),"\u3002\u4ee5\u4e0b\u662f\u5176\u4e2d\u5185\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"registry=http://r.cnpmjs.org/\n")),(0,o.kt)("p",null,"yarn \u7684\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"~/.yarnrc"),"\u3002\u4ee5\u4e0b\u662f\u5176\u4e2d\u5185\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'registry "http://r.cnpmjs.org/"\n')),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-e99d89"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/i5ting/yrm"},"i5ting/yrm: YARN registry manager, fast switch between different registries: npm, cnpm, nj, taobao"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-e99d89",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);