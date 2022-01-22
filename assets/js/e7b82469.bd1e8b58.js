"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2669],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,s=m["".concat(l,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(s,i(i({ref:t},u),{},{components:n})):r.createElement(s,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6076:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={date:new Date("2022-01-22T00:00:00.000Z"),tags:["caddy"]},l="\u4f7f\u7528 Caddy \u81ea\u52a8\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66",p={permalink:"/blog/wildcard-certificates-with-caddy",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/wildcard-certificates-with-caddy.md",source:"@site/blog/wildcard-certificates-with-caddy.md",title:"\u4f7f\u7528 Caddy \u81ea\u52a8\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66",description:"\u6cdb\u57df\u540d\u8bc1\u4e66",date:"2022-01-22T00:00:00.000Z",formattedDate:"2022\u5e741\u670822\u65e5",tags:[{label:"caddy",permalink:"/blog/tags/caddy"}],truncated:!0,authors:[],prevItem:{title:"\u4f18\u96c5\u5730\u91cd\u8f7d Caddyfile",permalink:"/blog/reload-caddyfile-gracefully"},nextItem:{title:"\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939",permalink:"/blog/mount-tencent-cos-on-local-file-system"}},u={authorsImageUrls:[]},d=[{value:"\u6cdb\u57df\u540d\u8bc1\u4e66",id:"\u6cdb\u57df\u540d\u8bc1\u4e66",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6cdb\u57df\u540d\u8bc1\u4e66"},"\u6cdb\u57df\u540d\u8bc1\u4e66"),(0,o.kt)("p",null,"\u5728 Caddy \u4e2d\u4e66\u5199 Matcher \u65f6\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\uff0cCaddy \u4f1a\u81ea\u52a8\u4e3a\u4f60\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66\uff0c\u4f46\u662f\u9700\u8981\u5408\u9002\u7684\u914d\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\u5305\u62ec",(0,o.kt)("inlineCode",{parentName:"p"},"foo.example.com"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"bar.example.com"),"\u7b49\u5176\u5b83\u4e8c\u7ea7\u57df\u540d\uff0c\u4f46\u662f\u4e0d\u5305\u62ec\u9876\u7ea7\u57df\u540d",(0,o.kt)("inlineCode",{parentName:"p"},"example.com"),"\uff1b\u540c\u65f6\u4e0d\u5305\u62ec\u5176\u5b83\u7b49\u7ea7\u7684\u57df\u540d\uff0c\u53ea\u5305\u62ec\u540c\u7b49\u7ea7\u57df\u540d\u3002"),(0,o.kt)("p",null,"\u901a\u914d\u7b26",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"\u53ea\u80fd\u653e\u5728\u6700\u5de6\u8fb9\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"*.foo.example.com"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"*.bar.example.com"),"\u7b49\uff1b\u4e0d\u80fd\u5199\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"foo.*.example.com"),"\u3002"))}f.isMDXComponent=!0}}]);