"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2957],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35655:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),p=["components"],i={date:new Date("2021-11-24T00:00:00.000Z"),tags:["windows-terminal","powershell","oh-my-posh"]},l="Windows Terminal + pwsh + oh my posh3 + PSReadLine \u6253\u9020\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef",s={permalink:"/blog/use-pwsh-and-oh-my-posh3-on-windows",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/use-pwsh-and-oh-my-posh3-on-windows.md",source:"@site/blog/use-pwsh-and-oh-my-posh3-on-windows.md",title:"Windows Terminal + pwsh + oh my posh3 + PSReadLine \u6253\u9020\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef",description:"\u524d\u8a00",date:"2021-11-24T00:00:00.000Z",formattedDate:"2021\u5e7411\u670824\u65e5",tags:[{label:"windows-terminal",permalink:"/blog/tags/windows-terminal"},{label:"powershell",permalink:"/blog/tags/powershell"},{label:"oh-my-posh",permalink:"/blog/tags/oh-my-posh"}],truncated:!0,authors:[],frontMatter:{date:"2021-11-24T00:00:00.000Z",tags:["windows-terminal","powershell","oh-my-posh"]},prevItem:{title:"Scoop\uff1aWindows \u5305\u7ba1\u7406\u5668",permalink:"/blog/scoop-the-windows-package-manager"},nextItem:{title:"\u4ee5\u5bb9\u5668\u7684\u65b9\u5f0f\u66b4\u9732 Docker Remote API \u5e76\u542f\u7528 TLS",permalink:"/blog/enable-docker-remote-api-with-tls-protection-via-container"}},c={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728 macOS \u4e2d\u7528 zsh \u914d\u5408 oh-my-zsh \u53ef\u4ee5\u6253\u9020\u51fa\u4e00\u4e2a\u7528\u7684\u5f88\u8212\u670d\u7684\u7ec8\u7aef\uff0c\u5176\u5b9e\u5728 Windows \u4e2d\u4e5f\u53ef\u4ee5\u3002"),(0,a.kt)("p",null,"\u5728 Windows \u4e2d\u53ef\u4ee5\u7528 pwsh",(0,a.kt)("sup",{parentName:"p",id:"fnref-1-848939"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1-848939",className:"footnote-ref"},"1"))," \u548c oh-my-posh",(0,a.kt)("sup",{parentName:"p",id:"fnref-2-848939"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2-848939",className:"footnote-ref"},"2"))," \u6253\u9020\u51fa\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef\u3002"),(0,a.kt)("p",null,"Windows \u81ea\u5e26\u7684 PowerShell \u7248\u672c\u4f4e\uff0c\u6240\u4ee5\u9700\u8981\u989d\u5916\u5b89\u88c5\u4e00\u4e2a\u65b0\u7248\u672c\u7684 pwsh\uff0c\u800c\u4e0d\u662f\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u3002"),(0,a.kt)("p",null,"oh-my-posh3 \u73b0\u5728\u5df2\u57fa\u4e8e Go \u8bed\u8a00\u91cd\u6784\uff0c\u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b89\u88c5\u548c\u914d\u7f6e\u65b9\u5f0f\u548c oh-my-posh2 \u76f8\u6bd4\u6709\u4e9b\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u7ec8\u7aef\u8f6f\u4ef6\u7528\u7684\u662f Windows Terminal",(0,a.kt)("sup",{parentName:"p",id:"fnref-3-848939"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3-848939",className:"footnote-ref"},"3")),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u73b0\u4ee3\u5316\u7684\u3001\u53ef\u81ea\u5b9a\u4e49\u7684\u597d\u770b\u7684\u7ec8\u7aef\u6a21\u62df\u5668\u3002"),(0,a.kt)("p",null,"\u5386\u53f2\u547d\u4ee4\u63d0\u793a\u662f\u901a\u8fc7 PowerShell \u7684 PSReadLine",(0,a.kt)("sup",{parentName:"p",id:"fnref-4-848939"},(0,a.kt)("a",{parentName:"sup",href:"#fn-4-848939",className:"footnote-ref"},"4"))," \u6a21\u7ec4\u5b9e\u73b0\u7684\u3002"))}f.isMDXComponent=!0}}]);