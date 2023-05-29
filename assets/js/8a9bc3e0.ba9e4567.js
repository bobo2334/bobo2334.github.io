"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3472],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,g=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={tags:["ssh","git"]},s="Github SSH \u8ba4\u8bc1\u9519\u8bef\u6392\u67e5",u={permalink:"/blog/2022/10/25/github-ssh-authentication-error-troubleshooting",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/2022-10-25-github-ssh-authentication-error-troubleshooting.md",source:"@site/blog/2022-10-25-github-ssh-authentication-error-troubleshooting.md",title:"Github SSH \u8ba4\u8bc1\u9519\u8bef\u6392\u67e5",description:"\u524d\u8a00",date:"2022-10-25T00:00:00.000Z",formattedDate:"2022\u5e7410\u670825\u65e5",tags:[{label:"ssh",permalink:"/blog/tags/ssh"},{label:"git",permalink:"/blog/tags/git"}],readingTime:2.17,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["ssh","git"]},prevItem:{title:"Gitea SSH \u8ba4\u8bc1\u5931\u8d25\uff0c\u63d0\u793a\u300cno mutual signature algorithm\u300d",permalink:"/blog/2022/10/25/gitea-no-mutual-signature-algorithm"},nextItem:{title:"\u5728 Proxmox VE \u4e2d\u5b89\u88c5\u7fa4\u6656 DSM 7",permalink:"/blog/2022/10/20/installing-synology-dsm-7-in-proxmox-ve"}},c={authorsImageUrls:[]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u6d4b\u8bd5\u662f\u5426\u80fd\u4f7f\u7528",id:"\u6d4b\u8bd5\u662f\u5426\u80fd\u4f7f\u7528",level:2},{value:"\u4fee\u6539 ~/.ssh/config",id:"\u4fee\u6539-sshconfig",level:2},{value:"\u6700\u7ec8\u6d4b\u8bd5",id:"\u6700\u7ec8\u6d4b\u8bd5",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6211\u4e00\u76f4\u4f7f\u7528 SSH \u65b9\u5f0f\u8fde\u63a5\u5230 Github\uff0c\u4f46\u662f\u524d\u51e0\u5929\u5728\u6211\u5411\u81ea\u5df1\u7684\u4ed3\u5e93\u6267\u884c\u63a8\u9001\u64cd\u4f5c\u65f6\u5374\u4e00\u76f4\u5931\u8d25\uff0c\u9519\u8bef\u73b0\u8c61\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u6b21\u51fa\u73b0\u9519\u8bef\uff0c\u8fde\u63a5\u65f6\u63d0\u793a",(0,o.kt)("inlineCode",{parentName:"li"},"github.com REMOTE HOST IDENTIFICATION HAS CHANGED"),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u4fe1\u4efb\u4e86\u65b0\u7684 REMOTE HOST IDENTIFICATION \u540e\uff0c\u8fd8\u662f\u8fde\u63a5\u4e0d\u4e0a\uff1b"),(0,o.kt)("li",{parentName:"ol"},"github.com \u5728\u5c1d\u8bd5\u4e86 publickey \u8ba4\u8bc1\u65b9\u5f0f\u540e\u4e00\u76f4\u8981\u6c42\u6211\u8f93\u5165\u5bc6\u7801\uff1b\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"ssh -v -T git@githun.com"),"\u6392\u67e5\u9519\u8bef\u65f6\uff0c\u65e5\u5fd7\u4e2d\u663e\u793a\u5728\u5c1d\u8bd5 publickey \u540e\u5e76\u6ca1\u6709\u8f93\u51fa\u9519\u8bef\u4fe1\u606f\u3002")),(0,o.kt)("p",null,"\u95ee\u9898\u641e\u4e86\u51e0\u5929\u90fd\u6ca1\u89e3\u51b3\uff0c\u540e\u6765\u901a\u8fc7 Github \u6587\u6863\u5e93\u4e2d\u7684\u4e00\u7bc7 ",(0,o.kt)("em",{parentName:"p"},"\u6587\u6863")," ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-e021fa"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-e021fa",className:"footnote-ref"},"1"))," \u4e2d\u4ecb\u7ecd\u7684 SSH over HTTPS port \u65b9\u5f0f\u89e3\u51b3\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u81f3\u4eca\u4e0d\u77e5\u9053\u4e3a\u5565\u4f1a\u8fd9\u6837\u3002"),(0,o.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u4e86\u89e3",(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh/config"),"\u7684\u7528\u5904\u548c\u7528\u6cd5\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u4e86\u89e3",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-agent"),"\u7684\u7528\u6cd5\uff0c\u5e76\u4e14\u63d0\u524d\u5c06\u4f60\u7684 SSH \u79c1\u94a5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-add"),"\u547d\u4ee4\u52a0\u5165\u5176\u4e2d\u3002")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u662f\u5426\u80fd\u4f7f\u7528"},"\u6d4b\u8bd5\u662f\u5426\u80fd\u4f7f\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6d4b\u8bd5\u80fd\u5426\u901a\u8fc7 443 \u7aef\u53e3\u8fde\u63a5\u5230 ssh.github.com\uff0c\u5e76\u5b8c\u6210 SSH \u8ba4\u8bc1\u3002\u6ce8\u610f\u57df\u540d\uff0cgithub.com \u4e0d\u80fd\u901a\u8fc7 443 \u7aef\u53e3\u8fde\u63a5\uff0c\u53ea\u80fd\u4f7f\u7528 ssh.github.com \u7684 443 \u7aef\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -T -v git@ssh.github.com -p 443\n")),(0,o.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u5982\u4e0b\u7684\u6b22\u8fce\u6d88\u606f\u5219\u8bc1\u660e\u53ef\u4ee5\u4f7f\u7528\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4f60\u9700\u8981\u6839\u636e\u8f93\u51fa\u7684\u65e5\u5fd7\u4fe1\u606f\u6392\u67e5\u9519\u8bef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.\n")),(0,o.kt)("h2",{id:"\u4fee\u6539-sshconfig"},"\u4fee\u6539 ~/.ssh/config"),(0,o.kt)("p",null,"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),"\uff0c\u52a0\u5165\u5982\u4e0b\u5185\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Host github.com\n    Hostname ssh.github.com\n    Port 443\n    User git\n")),(0,o.kt)("h2",{id:"\u6700\u7ec8\u6d4b\u8bd5"},"\u6700\u7ec8\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u6210\u529f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -T -v git@github.com\n")),(0,o.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u6b22\u8fce\u6d88\u606f\u5219\u6210\u529f\uff0c\u672c\u5730\u7684 Github \u4ed3\u5e93\u4e0d\u9700\u8981\u4fee\u6539\u8fdc\u7a0b\u5730\u5740\uff0c\u8fd8\u8ddf\u5f80\u5e38\u4e00\u6837\u4f7f\u7528\u3002"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-e021fa"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port"},"Using SSH over the HTTPS port - GitHub Docs"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-e021fa",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);