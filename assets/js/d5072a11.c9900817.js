"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1328],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=c(r),f=i,m=v["".concat(u,".").concat(f)]||v[f]||s[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=v;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},2958:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return v}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},u="Vue.js",c={unversionedId:"notes/javascript/vue.js",id:"notes/javascript/vue.js",isDocsHomePage:!1,title:"Vue.js",description:"\u53c2\u8003\u8d44\u6599",source:"@site/docs/notes/javascript/vue.js.md",sourceDirName:"notes/javascript",slug:"/notes/javascript/vue.js",permalink:"/docs/notes/javascript/vue.js",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript",permalink:"/docs/notes/javascript/typescript"},next:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",permalink:"/docs/notes/javascript/weapp"}},p=[{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2},{value:"Vue \u7b80\u4ecb",id:"vue-\u7b80\u4ecb",children:[],level:2},{value:"MVVM",id:"mvvm",children:[],level:2},{value:"\u6a21\u677f\u8bed\u6cd5",id:"\u6a21\u677f\u8bed\u6cd5",children:[{value:"\u63d2\u503c",id:"\u63d2\u503c",children:[],level:3},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",children:[],level:3}],level:2}],s={toc:p};function v(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vuejs"},"Vue.js"),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cn.vuejs.org/"},"Vue.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1Zy4y1K7SH"},"\u3010\u5c1a\u7845\u8c37\u3011Web \u524d\u7aef\u8fc5\u901f\u4e0a\u624b Vue \u6559\u7a0b\u4e28 vue3.0 \u5165\u95e8\u5230\u7cbe\u901a_\u54d4\u54e9\u54d4\u54e9_bilibili"))),(0,a.kt)("h2",{id:"vue-\u7b80\u4ecb"},"Vue \u7b80\u4ecb"),(0,a.kt)("p",null,"Vue.js \u662f\u4e00\u5957",(0,a.kt)("strong",{parentName:"p"},"\u6784\u5efa\u7528\u6237\u754c\u9762"),"\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6e10\u8fdb\u5f0f")," JavaScript \u6846\u67b6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6784\u5efa\u7528\u6237\u754c\u9762"),"\uff1a\u5c06\u6570\u636e\u6e32\u67d3\u5728\u9875\u9762\u4e0a\uff1b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6e10\u8fdb\u5f0f"),"\uff1aVue \u53ef\u4ee5\u81ea\u5e95\u5411\u4e0a\u9010\u5c42\u5e94\u7528\u3002\u5982\u679c\u662f\u7b80\u5355\u5e94\u7528\u53ea\u9700\u8981\u5f15\u5165\u6838\u5fc3\u5e93\uff1b\u5982\u679c\u662f\u590d\u6742\u5e94\u7528\uff0c\u53ef\u4ee5\u5f15\u5165\u5404\u79cd\u5404\u6837\u7684 Vue \u63d2\u4ef6\u3002")),(0,a.kt)("h2",{id:"mvvm"},"MVVM"),(0,a.kt)("h2",{id:"\u6a21\u677f\u8bed\u6cd5"},"\u6a21\u677f\u8bed\u6cd5"),(0,a.kt)("h3",{id:"\u63d2\u503c"},"\u63d2\u503c"),(0,a.kt)("p",null,"\u5c06\u8868\u8fbe\u5f0f\u5199\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"{{ }}"),"\u4e2d\uff0c"),(0,a.kt)("h3",{id:"\u6307\u4ee4"},"\u6307\u4ee4"))}v.isMDXComponent=!0}}]);