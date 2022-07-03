"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1976],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(r),b=o,m=f["".concat(l,".").concat(b)]||f[b]||p[b]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20115:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=["components"],a={date:new Date("2022-05-22T00:00:00.000Z"),tags:["restic","tencent-cos"]},l="restic\uff1a\u8f7b\u91cf\u3001\u8de8\u5e73\u53f0\u7684\u589e\u91cf\u5907\u4efd\u5de5\u5177",u={permalink:"/blog/restic-backup-tool",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/restic-backup-tool.md",source:"@site/blog/restic-backup-tool.md",title:"restic\uff1a\u8f7b\u91cf\u3001\u8de8\u5e73\u53f0\u7684\u589e\u91cf\u5907\u4efd\u5de5\u5177",description:"\u524d\u8a00",date:"2022-05-22T00:00:00.000Z",formattedDate:"2022\u5e745\u670822\u65e5",tags:[{label:"restic",permalink:"/blog/tags/restic"},{label:"tencent-cos",permalink:"/blog/tags/tencent-cos"}],truncated:!0,authors:[],frontMatter:{date:"2022-05-22T00:00:00.000Z",tags:["restic","tencent-cos"]},prevItem:{title:"\u4f7f\u7528 restic \u5b9a\u65f6\u5907\u4efd\u6587\u4ef6",permalink:"/blog/restic-scheduled-backup"},nextItem:{title:"Gitea\uff1a\u8f7b\u91cf\u7ea7\u81ea\u5efa Git \u670d\u52a1",permalink:"/blog/self-hosted-git-service-gitea"}},s={authorsImageUrls:[]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],f={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,c.kt)("p",null,"restic \u662f\u4e00\u6b3e\u7528 Go \u8bed\u8a00\u5b9e\u73b0\u7684\u5907\u4efd\u5de5\u5177\uff0c\u5177\u6709\u8de8\u5e73\u53f0\u8fd0\u884c\u3001\u589e\u91cf\u5907\u4efd\u548c\u5386\u53f2\u7248\u672c\u5907\u4efd\u7684\u7279\u6027\u3002"),(0,c.kt)("p",null,"restic \u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u4f4d\u7f6e\u6216\u7f51\u7edc\u4f4d\u7f6e\u4f5c\u4e3a\u5b58\u50a8\u5e93\u3002"),(0,c.kt)("p",null,"\u6709\u5f88\u591a\u60c5\u51b5\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931\uff0c\u6bd4\u5982 VPS \u63d0\u4f9b\u5546\u8dd1\u8def\u3001\u673a\u623f\u5931\u706b\u3001\u8bbe\u5907\u4e22\u5931\u4ee5\u53ca\u4eba\u5458\u8bef\u64cd\u4f5c\u7b49\uff0c\u6240\u4ee5\u6570\u636e\u5907\u4efd\u662f\u4e00\u9879\u5f88\u91cd\u8981\u7684\u5de5\u4f5c\u3002\u91cd\u8981\u6570\u636e\u5fc5\u987b\u8981\u5907\u4efd\u3002"))}b.isMDXComponent=!0}}]);