"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,d=s["".concat(m,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65346:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={date:new Date("2021-12-23T00:00:00.000Z")},m="iterm2 \u5bf9 tmux \u7684\u7279\u6b8a\u652f\u6301",u={permalink:"/blog/tmux-integration-in-iterm2",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/tmux-integration-in-iterm2.md",source:"@site/blog/tmux-integration-in-iterm2.md",title:"iterm2 \u5bf9 tmux \u7684\u7279\u6b8a\u652f\u6301",description:"\u524d\u8a00",date:"2021-12-23T00:00:00.000Z",formattedDate:"2021\u5e7412\u670823\u65e5",tags:[],truncated:!1,authors:[],prevItem:{title:"\u901a\u8fc7\u4ee3\u7406\u8fde\u63a5 SSH \u670d\u52a1\u5668",permalink:"/blog/ssh-under-proxy"},nextItem:{title:"Zerotier \u5f02\u5730\u7ec4\u7f51",permalink:"/blog/zerotier"}},c={authorsImageUrls:[]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],s={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"tmux",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u662f\u4e00\u6b3e\u975e\u5e38\u597d\u7528\u7684\u7ec8\u7aef\u590d\u7528\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u5730\u4fdd\u5b58\u548c\u6062\u590d\u5de5\u4f5c\u73b0\u573a\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 tmux \u7684\u65f6\u5019\u6709\u8bb8\u591a\u5feb\u6377\u952e\u9700\u8981\u8bb0\u5fc6\uff0c\u5e76\u4e14\u7a97\u683c\u5207\u6362\u548c\u7a97\u683c\u7684\u4e0a\u4e0b\u6eda\u52a8\u5e76\u4e0d\u65b9\u4fbf\uff1btmux \u7684\u5feb\u6377\u952e\u8fd8\u53ef\u80fd\u548c\u5176\u5b83\u8f6f\u4ef6\u7684\u5feb\u6377\u952e\u6709\u51b2\u7a81\u3002"),(0,o.kt)("p",null,"iterm2",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u662f macOS \u4e2d\u7684\u4e00\u4e2a\u7ec8\u7aef\u6a21\u62df\u5668\u8f6f\u4ef6\uff0c\u5b83\u5bf9 tmux \u6709\u72ec\u5bb6\u652f\u6301\uff0c\u53ef\u4ee5\u5728\u63a7\u5236\u6a21\u5f0f\u4e0b\u8fd0\u884c tmux\u3002\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e2d\uff0ctmux \u4f1a\u8bdd\u8868\u73b0\u548c\u672c\u5730\u7ec8\u7aef\u4e00\u6837\uff0c\u53ef\u4ee5\u4f7f\u7528 iterm2 \u7684\u5feb\u6377\u952e\u6765\u8fdb\u884c\u591a\u7a97\u53e3\u548c\u591a\u7a97\u683c\u5206\u9694\uff0c\u7528\u9f20\u6807\u5207\u6362\u7a97\u53e3\u548c\u7a97\u683c\uff0c\u5e76\u4e14\u7528\u9f20\u6807\u6eda\u8f6e\u4e0a\u4e0b\u6eda\u52a8\u7a97\u683c\u4e5f\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u4e0d\u9700\u8981\u8fdb tmux \u7684\u590d\u5236\u6a21\u5f0f\u6765\u6eda\u52a8\u7a97\u683c\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u4e0d\u8bba\u662f\u5728\u672c\u5730\u4f7f\u7528 tmux\uff0c\u8fd8\u662f\u901a\u8fc7 ssh \u4f7f\u7528\u8fdc\u7aef\u7684 tmux\uff0citerm2 \u90fd\u652f\u6301\u4f7f\u7528 tmux \u7684\u63a7\u5236\u6a21\u5f0f\u3002"),(0,o.kt)("p",null,"tmux \u7684\u63a7\u5236\u6a21\u5f0f\u901a\u8fc7\u9644\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"-CC"),"\u53c2\u6570\u6765\u5f00\u542f\u3002"),(0,o.kt)("p",null,"\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"tmux -CC"),"\u547d\u4ee4\u4f1a\u5f00\u542f\u4e00\u4e2a\u65b0\u7684 tmux \u4f1a\u8bdd\uff0c\u5e76\u542f\u7528\u63a7\u5236\u6a21\u5f0f\uff0c\u4e4b\u540e\u4f60\u7684 iterm \u4f1a\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u7a97\u53e3\uff0c\u7528\u4e8e\u5c55\u793a tmux \u4f1a\u8bdd\uff1b\u8be5\u7a97\u53e3\u7684\u8868\u73b0\u548c\u6ca1\u4f7f\u7528 tmux \u65f6\u4e00\u6837\uff0c\u4f60\u4e0d\u9700\u8981\u901a\u8fc7\u5feb\u6377\u952e\u6216 tmux \u547d\u4ee4\u6765\u65b0\u5efa\u591a\u7a97\u53e3\u548c\u591a\u7a97\u683c\u3002\u4f7f\u7528 iterm2 \u7684\u5feb\u6377\u952e",(0,o.kt)("kbd",null,"Command+D"),"\u548c",(0,o.kt)("kbd",null,"Command+Shift+D"),"\u6765\u5206\u9694\u7a97\u683c\uff0c\u4f7f\u7528",(0,o.kt)("kbd",null,"Command+N"),"\u6765\u65b0\u5efa Tab\uff0c\u4f7f\u7528",(0,o.kt)("kbd",null,"Command+N"),"\u6765\u65b0\u5efa\u7a97\u53e3\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u9644\u52a0\u5230\u4e00\u4e2a\u5df2\u5b58\u5728\u7684 tmux \u4f1a\u8bdd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tmux ls\ntmux -CC attach -t 0\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"\u7684\u4f1a\u8bdd\uff0c\u5982\u679c\u6ca1\u6709\u5219\u65b0\u5efa\u4e00\u4e2a\u5e76\u9644\u52a0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tmux -CC new -A -s main\n")),(0,o.kt)("p",null,"\u6216\u8005\u5728\u901a\u8fc7 SSH \u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u65f6\u5019\u76f4\u63a5\u6267\u884c\u6b64\u547d\u4ee4\uff0c\u76f4\u63a5\u6253\u5f00\u4e00\u4e2a tmux \u4f1a\u8bdd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh root@1.1.1.1 'tmux -CC new -A -s main'\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/gnachman/iterm2/-/wikis/tmux-Integration-Best-Practices"},"tmux Integration Best Practices \xb7 Wiki \xb7 George Nachman / iterm2 \xb7 GitLab"))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://bobo2334.github.io/notes/utilities/tmux"},"tmux | \u6211\u7684\u5b66\u4e60\u7b14\u8bb0"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},(0,o.kt)("a",{parentName:"li",href:"https://iterm2.com/documentation-tmux-integration.html"},"tmux Integration - Documentation - iTerm2 - macOS Terminal Replacement"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);