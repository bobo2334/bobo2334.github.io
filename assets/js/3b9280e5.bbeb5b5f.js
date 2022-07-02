"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5793],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(a),f=r,s=c["".concat(p,".").concat(f)]||c[f]||u[f]||l;return a?n.createElement(s,i(i({ref:t},d),{},{components:a})):n.createElement(s,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8695:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={date:new Date("2022-03-09T00:00:00.000Z"),tags:["scoop","aria2"]},p="Scoop\uff1a\u7528 aria2 \u52a0\u901f\u4e0b\u8f7d",m={permalink:"/blog/scoop-with-aria2-for-multi-thread-download",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/scoop-with-aria2-for-multi-thread-download.md",source:"@site/blog/scoop-with-aria2-for-multi-thread-download.md",title:"Scoop\uff1a\u7528 aria2 \u52a0\u901f\u4e0b\u8f7d",description:"\u524d\u8a00",date:"2022-03-09T00:00:00.000Z",formattedDate:"2022\u5e743\u67089\u65e5",tags:[{label:"scoop",permalink:"/blog/tags/scoop"},{label:"aria2",permalink:"/blog/tags/aria-2"}],truncated:!0,authors:[],frontMatter:{date:"2022-03-09T00:00:00.000Z",tags:["scoop","aria2"]},prevItem:{title:"Gitea\uff1a\u8f7b\u91cf\u7ea7\u81ea\u5efa Git \u670d\u52a1",permalink:"/blog/self-hosted-git-service-gitea"},nextItem:{title:"Nodebrew\uff1aNode.js \u5b89\u88c5\u4ee5\u53ca\u7248\u672c\u5207\u6362",permalink:"/blog/nodebrew-the-nodejs-version-manager"}},d={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88c5 aria2",id:"\u5b89\u88c5-aria2",level:2},{value:"\u914d\u7f6e aria2",id:"\u914d\u7f6e-aria2",level:2}],c={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"aria2",(0,l.kt)("sup",{parentName:"p",id:"fnref-1-e8af21"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-e8af21",className:"footnote-ref"},"1"))," \u662f\u4e00\u6b3e\u6d41\u884c\u7684\u591a\u7ebf\u7a0b\u4e0b\u8f7d\u5668\u3002Scoop \u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528\u5355\u7ebf\u7a0b\u4e0b\u8f7d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5 aria2 \u6765\u8ba9 Scoop \u652f\u6301\u591a\u7ebf\u7a0b\u4e0b\u8f7d\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-aria2"},"\u5b89\u88c5 aria2"),(0,l.kt)("p",null,"\u5728 PowerShell \u4e2d\u6267\u884c\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u5b89\u88c5 aria2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install aria2\n")),(0,l.kt)("p",null,"\u4e0d\u9700\u8981\u591a\u4f59\u914d\u7f6e\uff0cScoop \u5728\u6267\u884c\u4e0b\u8f7d\u52a8\u4f5c\u524d\u4f1a\u68c0\u6d4b\u4f60\u662f\u5426\u5b89\u88c5\u4e86 aria2\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 aria2 \u5219\u81ea\u52a8\u8c03\u7528\u5176\u8fdb\u884c\u591a\u7ebf\u7a0b\u4e0b\u8f7d\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e-aria2"},"\u914d\u7f6e aria2"),(0,l.kt)("p",null,"\u5728 Scoop \u4e2d\u6709\u4e00\u4e9b\u5173\u4e8e aria2 \u7684\u914d\u7f6e ",(0,l.kt)("sup",{parentName:"p",id:"fnref-2-e8af21"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-e8af21",className:"footnote-ref"},"2")),"\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f60\u53ef\u80fd\u60f3\u4e86\u89e3\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria2-enabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528 aria2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria2-warning-enabled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u6bcf\u6b21\u4e0b\u8f7d\u4e4b\u524d\u8f93\u51fa\u63d0\u793a\u4fe1\u606f\uff0c\u5185\u5bb9\u4e3a aria2 \u4e0b\u8f7d\u7684\u8bf4\u660e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria2-retry-wait")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"aria2 \u91cd\u8bd5\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria2-split")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u65f6\u4f7f\u7528\u7684\u94fe\u63a5\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria2-max-connection-per-server")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u670d\u52a1\u5668\u7684\u6700\u5927\u8fde\u63a5\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria2-min-split-size")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5M")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u5206\u6bb5\u5927\u5c0f\uff0c\u5982\u679c\u5c06\u8981\u4e0b\u8f7d\u7684\u6587\u4ef6\u5927\u5c0f\u5c0f\u4e8e\u8be5\u53c2\u6570\u7684 2 \u500d\uff0c\u5219\u4e0b\u8f7d\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u5bf9\u6587\u4ef6\u8fdb\u884c\u5206\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria2-options")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5176\u5b83\u9700\u8981\u4f20\u9012\u7ed9 aria2 \u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u53c2\u8003 aria2 \u7684\u6587\u6863 ",(0,l.kt)("sup",{parentName:"td",id:"fnref-3-e8af21"},(0,l.kt)("a",{parentName:"sup",href:"#fn-3-e8af21",className:"footnote-ref"},"3")))))),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"scoop config"),"\u547d\u4ee4\u6765\u66f4\u6539\u8fd9\u4e9b\u914d\u7f6e\u9879\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u4f60\u60f3\u505c\u6b62\u4f7f\u7528 aria2 \u8fdb\u884c\u591a\u7ebf\u7a0b\u4e0b\u8f7d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5b9e\u73b0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop config aria2-enabled false\n")),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-e8af21"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/aria2/aria2"},"aria2/aria2: aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink."),(0,l.kt)("a",{parentName:"li",href:"#fnref-1-e8af21",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2-e8af21"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ScoopInstaller/scoop#multi-connection-downloads-with-aria2"},"ScoopInstaller/Scoop: A command-line installer for Windows."),(0,l.kt)("a",{parentName:"li",href:"#fnref-2-e8af21",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-3-e8af21"},(0,l.kt)("a",{parentName:"li",href:"https://aria2.github.io/manual/en/html/aria2c.html#options"},"aria2c(1) \u2014 aria2 1.36.0 documentation"),(0,l.kt)("a",{parentName:"li",href:"#fnref-3-e8af21",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);