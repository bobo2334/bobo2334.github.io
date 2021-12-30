"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8357],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={date:new Date("2021-11-27T00:00:00.000Z")},c="\u5728 HTML \u4e2d\u4f7f\u7528 Unicode \u4ee3\u7801",p={permalink:"/blog/use-unicode-in-html",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/use-unicode-in-html.md",source:"@site/blog/use-unicode-in-html.md",title:"\u5728 HTML \u4e2d\u4f7f\u7528 Unicode \u4ee3\u7801",description:"\u524d\u8a00",date:"2021-11-27T00:00:00.000Z",formattedDate:"2021\u5e7411\u670827\u65e5",tags:[],truncated:!1,authors:[],prevItem:{title:"Zerotier \u5f02\u5730\u7ec4\u7f51",permalink:"/blog/zerotier"},nextItem:{title:"\u914d\u7f6e oh-my-zsh",permalink:"/blog/oh-my-zsh"}},u={authorsImageUrls:[]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u58f0\u660e\u7f51\u9875\u7f16\u7801",id:"\u58f0\u660e\u7f51\u9875\u7f16\u7801",children:[],level:2},{value:"\u4f7f\u7528 HTML \u5b9e\u4f53",id:"\u4f7f\u7528-html-\u5b9e\u4f53",children:[],level:2},{value:"\u4f7f\u7528 Unicode \u4ee3\u7801",id:"\u4f7f\u7528-unicode-\u4ee3\u7801",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u9700\u8981\u5728 HTML \u4e2d\u5d4c\u5165\u7279\u6b8a\u7b26\u53f7\uff0c\u4f46\u662f HTML \u5b9e\u4f53\u4e2d\u5e76\u4e0d\u5305\u542b\u8fd9\u4e9b\u7b26\u53f7\uff0c\u6216\u662f\u8be5\u5b9e\u4f53\u7b26\u53f7\u4e0d\u80fd\u88ab\u6d4f\u89c8\u5668\u6b63\u786e\u6e32\u67d3\uff0c\u53ef\u4ee5\u901a\u8fc7 Unicode \u4ee3\u7801\u4ee3\u66ff\u8fd9\u4e9b\u5b57\u7b26\uff0c\u4ee5\u8fbe\u5230\u5728\u7f51\u9875\u4e2d\u6b63\u786e\u6e32\u67d3\u8be5\u5b57\u7b26\u7684\u76ee\u7684\u3002HTML \u5b9e\u4f53\u4ee3\u7801\u548c\u5b57\u7b26\u5bf9\u5e94\u7684 Unicode \u4ee3\u7801\u53ef\u4ee5\u53c2\u8003 HTML Standard",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002"),(0,l.kt)("h2",{id:"\u58f0\u660e\u7f51\u9875\u7f16\u7801"},"\u58f0\u660e\u7f51\u9875\u7f16\u7801"),(0,l.kt)("p",null,"\u4e3a\u4e86\u80fd\u5728\u7f51\u9875\u4e2d\u6b63\u5e38\u663e\u793a Unicode \u5b57\u7b26\uff0c\u8be5\u7f51\u9875\u5fc5\u987b\u4f7f\u7528 Unicode \u7f16\u7801\uff0c\u5982 UTF-8\u3002\u53ef\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"meta"),"\u6807\u7b7e\u91cc\u58f0\u660e\u7f51\u9875\u7f16\u7801\uff0c\u5e76\u786e\u4fdd HTTP \u5934\u4e5f\u4f7f\u7528\u6b64\u7f16\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528-html-\u5b9e\u4f53"},"\u4f7f\u7528 HTML \u5b9e\u4f53"),(0,l.kt)("p",null,"\u5728 HTML Standard",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u4e2d\u53ef\u4ee5\u770b\u5230\u8be5\u7b26\u53f7\u7684\u540d\u5b57\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Aacute;"),"\uff0c\u53ef\u4ee5\u5728\u5176\u524d\u65b9\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"&"),"\u6765\u8868\u793a HTML \u547d\u540d\u5b57\u7b26\u3002"),(0,l.kt)("p",null,"\xc1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>&Aacute;</p>\n")),(0,l.kt)("p",null,"\u4f46\u662f\u5e76\u4e0d\u662f\u6240\u6709\u7684\u547d\u540d\u5b57\u7b26\u90fd\u80fd\u88ab\u6e32\u67d3\u51fa\u6765\uff0c\u6bd4\u5982\u5b57\u7b26",(0,l.kt)("inlineCode",{parentName:"p"},"{"),"\u3002"),(0,l.kt)("p",null,"&lbrace;"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>&lbrace;</p>\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-unicode-\u4ee3\u7801"},"\u4f7f\u7528 Unicode \u4ee3\u7801"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5341\u516d\u8fdb\u5236\u7f16\u7801\u3002"),(0,l.kt)("p",null,"{"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>&#x0007B;</p>\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5341\u8fdb\u5236\u7f16\u7801\u3002"),(0,l.kt)("p",null,"{"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>&#123;</p>\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/liuxianan/p/display-unicode-character-in-html-css-and-js.html"},"HTML\u3001CSS\u3001JS \u5bf9 unicode \u5b57\u7b26\u7684\u4e0d\u540c\u5904\u7406 - \u6211\u662f\u5c0f\u8317\u540c\u5b66 - \u535a\u5ba2\u56ed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3schools.com/charsets/ref_utf_symbols.asp"},"HTML Unicode UTF-8"))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},(0,l.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references"},"HTML Standard"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);