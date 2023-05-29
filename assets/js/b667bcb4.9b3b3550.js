"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9930],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},20168:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=["components"],o={},p="Node.js",u={unversionedId:"javascript/node.js",id:"javascript/node.js",title:"Node.js",description:"\u6a21\u5757\u5316",source:"@site/docs/javascript/node.js.md",sourceDirName:"javascript",slug:"/javascript/node.js",permalink:"/docs/javascript/node.js",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Thymeleaf",permalink:"/docs/java/thymeleaf"},next:{title:"Linux",permalink:"/docs/linux/"}},m={},c=[{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",level:2},{value:"CommonJS",id:"commonjs",level:3},{value:"\u5305\u7ba1\u7406\u5de5\u5177",id:"\u5305\u7ba1\u7406\u5de5\u5177",level:2},{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3}],s={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodejs"},"Node.js"),(0,i.kt)("h2",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,i.kt)("h3",{id:"commonjs"},"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\nfunction a(){\n\n}\n\n# 1\nmodule.exports = a\n\n# 2\nmodule.exports = {\n  a\n}\n\n##\n\nconst a = require('./a.js')\nconst { a } = require('./a.js')\n")),(0,i.kt)("h2",{id:"\u5305\u7ba1\u7406\u5de5\u5177"},"\u5305\u7ba1\u7406\u5de5\u5177"),(0,i.kt)("h3",{id:"npm"},"NPM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm init -y"),"\uff0c\u521d\u59cb\u5316\u9879\u76ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm i -S jquery"),"\uff0c\u5b89\u88c5\u8fd0\u884c\u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm i -D less"),"\uff0c\u5b89\u88c5\u5f00\u53d1\u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm i -g nodemon"),"\uff0c\u5b89\u88c5\u5168\u5c40\u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm r jquery"),"\uff0c\u79fb\u9664\u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm r -g jquery"),"\uff0c\u79fb\u9664\u5168\u5c40\u4f9d\u8d56"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run serve"),"\uff0c\u8fd0\u884c\u811a\u672c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm start"),"\uff0c\u76f8\u5f53\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"npm run start")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm i"),"\uff0c\u5b89\u88c5\u6240\u6709\u4f9d\u8d56")),(0,i.kt)("h3",{id:"yarn"},"Yarn"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn init -y"),"\uff0c\u521d\u59cb\u5316\u9879\u76ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn add jquery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn add less --dev")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn global add nodemon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn remove nodemon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn global remove nodemon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn serve"),"\uff0c\u8fd0\u884c\u811a\u672c\uff0c\u4e0d\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"li"},"run"),"\u547d\u4ee4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn start"),"\uff0c\u8fd0\u884c\u811a\u672c\uff0c\u4e0d\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"li"},"run"),"\u547d\u4ee4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn"),"\uff0c\u5b89\u88c5\u6240\u6709\u4f9d\u8d56")))}d.isMDXComponent=!0}}]);