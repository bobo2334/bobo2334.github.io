"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8816],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),s=o,b=f["".concat(c,".").concat(s)]||f[s]||m[s]||a;return r?n.createElement(b,u(u({ref:t},p),{},{components:r})):n.createElement(b,u({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96203:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=["components"],i={date:new Date("2021-11-27T00:00:00.000Z"),tags:["tmux"]},c="tmux \u7ec8\u7aef\u590d\u7528",l={permalink:"/blog/tmux",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/tmux.md",source:"@site/blog/tmux.md",title:"tmux \u7ec8\u7aef\u590d\u7528",description:"\u524d\u8a00",date:"2021-11-27T00:00:00.000Z",formattedDate:"2021\u5e7411\u670827\u65e5",tags:[{label:"tmux",permalink:"/blog/tags/tmux"}],truncated:!0,authors:[],frontMatter:{date:"2021-11-27T00:00:00.000Z",tags:["tmux"]},prevItem:{title:"Zerotier \u5f02\u5730\u7ec4\u7f51",permalink:"/blog/zerotier"},nextItem:{title:"\u5728 HTML \u4e2d\u4f7f\u7528 Unicode \u4ee3\u7801",permalink:"/blog/use-unicode-in-html"}},p={authorsImageUrls:[]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],f={toc:m};function s(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"tmux \u662f\u4e00\u4e2a\u7ec8\u7aef\u590d\u7528\u5668\uff0c\u80fd\u8ba9\u4f60\u5728\u4e00\u4e2a\u7ec8\u7aef\u91cc\u5206\u5c4f\u51fa\u591a\u4e2a\u7a97\u683c\uff0c\u8fd8\u80fd\u4fdd\u5b58\u4f60\u7684\u7ec8\u7aef\u4f1a\u8bdd\u3002\u5c24\u5176\u662f\u5728 SSH \u8fde\u63a5\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u5de5\u4f5c\u7684\u65f6\u5019\uff0c\u7f51\u7edc\u60c5\u51b5\u4e0d\u597d\u7684\u60c5\u51b5\u4e0b SSH \u8fde\u63a5\u53ef\u80fd\u4f1a\u610f\u5916\u65ad\u5f00\uff0c\u6b64\u65f6\u5728\u8be5 SSH \u4f1a\u8bdd\u4e2d\u8fd0\u884c\u7684\u547d\u4ee4\u4e5f\u4f1a\u88ab\u4e2d\u65ad\uff1b\u5728\u4f7f\u7528\u4e86 tmux \u4e4b\u540e\uff0c\u53ea\u8981 tmux \u8fdb\u7a0b\u4e0d\u7ed3\u675f\uff0c\u4efb\u52a1\u5c31\u4e0d\u4f1a\u4e2d\u65ad\uff0c\u5f85\u6062\u590d SSH \u8fde\u63a5\u540e\uff0ctmux \u53ef\u4ee5\u8ba9\u4f60\u5feb\u901f\u6062\u590d\u5230\u4e4b\u524d\u7684\u5de5\u4f5c\u73b0\u573a\u3002"))}s.isMDXComponent=!0}}]);