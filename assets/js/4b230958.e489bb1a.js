"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6606],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,y=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46694:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={date:new Date("2022-10-20T00:00:00.000Z"),tags:["proxmox-ve","synology"]},c="\u5728 Proxmox VE \u4e2d\u5b89\u88c5\u7fa4\u6656 DSM 7",u={permalink:"/blog/install-synology-dsm-7-in-proxmox-ve",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/install-synology-dsm-7-in-proxmox-ve.md",source:"@site/blog/install-synology-dsm-7-in-proxmox-ve.md",title:"\u5728 Proxmox VE \u4e2d\u5b89\u88c5\u7fa4\u6656 DSM 7",description:"\u524d\u8a00",date:"2022-10-20T00:00:00.000Z",formattedDate:"2022\u5e7410\u670820\u65e5",tags:[{label:"proxmox-ve",permalink:"/blog/tags/proxmox-ve"},{label:"synology",permalink:"/blog/tags/synology"}],readingTime:11.345,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-10-20T00:00:00.000Z",tags:["proxmox-ve","synology"]},prevItem:{title:"Github SSH \u8ba4\u8bc1\u9519\u8bef\u6392\u67e5",permalink:"/blog/github-ssh-authentication-failed"},nextItem:{title:"\u4f7f\u7528 GPG \u7b7e\u540d\u548c\u52a0\u5bc6",permalink:"/blog/gpg"}},p={authorsImageUrls:[]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"DSM 7 \u5df2\u7ecf\u53d1\u5e03\u5f88\u4e45\u4e86\uff0c\u6700\u8fd1\u5728 Proxmox VE \u4e2d\u5b89\u88c5\u4e86 DSM 7\uff0c\u8bb0\u5f55\u4e00\u4e0b\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u65b0\u5b89\u88c5\u7684\u6d41\u7a0b\uff0c\u5e76\u4e0d\u662f\u4ece DSM 6 \u5347\u7ea7\u5230 DSM 7\u3002\u5347\u7ea7\u7684\u6d41\u7a0b\u53ef\u80fd\u5e76\u4e0d\u4e00\u6837\uff0c\u6ce8\u610f\u5907\u4efd\u81ea\u5df1\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4e2d\u4f7f\u7528 DS920+ \u578b\u53f7\u5bf9\u5e94\u7684\u5f15\u5bfc\u548c\u7cfb\u7edf\uff0c\u5e76\u5728\u6784\u5efa\u5f15\u5bfc\u7684\u8fc7\u7a0b\u4e2d\u52a0\u5165\u4e86\u9700\u8981\u7684\u9a71\u52a8\u3002"))}f.isMDXComponent=!0}}]);