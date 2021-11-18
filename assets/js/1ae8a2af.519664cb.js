"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[526],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89270:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return m},toc:function(){return c},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={date:new Date("2020-02-24T00:00:00.000Z")},p="\u7528 Windows Terminal \u548c oh-my-posh \u6253\u9020\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef",s={permalink:"/blog/build-a-decent-terminal-with-windows-terminal-and-oh-my-posh",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/build-a-decent-terminal-with-windows-terminal-and-oh-my-posh.md",source:"@site/blog/build-a-decent-terminal-with-windows-terminal-and-oh-my-posh.md",title:"\u7528 Windows Terminal \u548c oh-my-posh \u6253\u9020\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef",description:"2021-11-14 \u5907\u6ce8",date:"2020-02-24T00:00:00.000Z",formattedDate:"2020\u5e742\u670824\u65e5",tags:[],truncated:!1,authors:[],prevItem:{title:"\u89e3\u51b3 IntelliJ IDEA \u4e2d Tomcat \u65e5\u5fd7\u8f93\u51fa\u4e71\u7801\u7684\u95ee\u9898",permalink:"/blog/solve-the-problem-of-tomcat-log-output-messy-code-in-intellij-idea"},nextItem:{title:"\u300a\u6c42\u751f\u4e4b\u8def 2\u300b\u5236\u4f5c\u52a8\u6001\u55b7\u6f06",permalink:"/blog/making-dynamic-spray-paint-for-left-4-dead-2"}},m={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u5b89\u88c5 Windows Terminal",id:"\u5b89\u88c5-windows-terminal",children:[],level:3},{value:"\u5b89\u88c5 oh-my-posh",id:"\u5b89\u88c5-oh-my-posh",children:[],level:3},{value:"\u7528\u4e0a\u5fae\u8f6f\u7684 Cascadia Code \u5b57\u4f53",id:"\u7528\u4e0a\u5fae\u8f6f\u7684-cascadia-code-\u5b57\u4f53",children:[],level:3},{value:"\u96c6\u6210 Git Bash",id:"\u96c6\u6210-git-bash",children:[],level:3}],level:2},{value:"\u540e\u8bb0",id:"\u540e\u8bb0",children:[],level:2}],d={toc:c};function u(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2021-11-14 \u5907\u6ce8"),(0,r.kt)("p",{parentName:"blockquote"},"oh-my-posh \u9879\u76ee\u5df2\u88ab\u91cd\u6784\uff0c\u73b0\u5728\u7531 Go \u8bed\u8a00\u5b9e\u73b0\uff0c\u4ed3\u5e93\u5730\u5740\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanDeDobbeleer/oh-my-posh"},"Github"),"\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6587\u7ae0\u4e2d\u6240\u4f7f\u7528\u7684\u7248\u672c\u73b0\u5df2\u88ab\u91cd\u547d\u540d\u4e3a oh-my-posh2\uff0c\u7531 PowerShell \u5b9e\u73b0\uff0c\u4ed3\u5e93\u5730\u5740\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JanDeDobbeleer/oh-my-posh2"},"Github"),"\u3002")),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"Windows \u4e2d\u81ea\u5e26\u7684\u7ec8\u7aef\u4f7f\u7528\u4f53\u9a8c\u786e\u5b9e\u8bf4\u4e0d\u4e0a\u597d\uff0c\u5c1d\u8bd5\u4e86\u8bb8\u591a\u7ec4\u5408\u4e5f\u611f\u89c9\u90fd\u4e0d\u987a\u624b\u3002\u8fd9\u6b21\u8bd5\u8bd5\u5fae\u8f6f\u4eb2\u81ea\u51fa\u7684 Windows Terminal",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\uff0c\u518d\u52a0\u4e0a oh-my-posh",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u63d2\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,r.kt)("h3",{id:"\u5b89\u88c5-windows-terminal"},"\u5b89\u88c5 Windows Terminal"),(0,r.kt)("p",null,"Windows Terminal \u63d0\u4f9b\u591a\u79cd\u5b89\u88c5\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u5728 Microsoft Store \u4e2d\u5b89\u88c5\uff1b\u53ef\u4ee5\u81ea\u884c\u5728\u8be5\u9879\u76ee\u7684 Github \u4ed3\u5e93 ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u4e2d\u4e0a\u4e0b\u8f7d\u5b89\u88c5\u7a0b\u5e8f\uff1b\u867d\u7136\u5b98\u65b9\u6587\u6863\u672a\u63d0\u53ca\uff0c\u4f46\u662f\u4f60\u4e5f\u53ef\u4ee5\u7528 Scoop",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," \u5b89\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install windows-terminal\n")),(0,r.kt)("h3",{id:"\u5b89\u88c5-oh-my-posh"},"\u5b89\u88c5 oh-my-posh"),(0,r.kt)("p",null,"oh-my-posh \u662f\u9488\u5bf9 Windows PowerShell \u8bbe\u8ba1\u7684\u4e3b\u9898\u5f15\u64ce\uff0c\u7c7b\u4f3c\u4e8e zsh \u548c Oh My Zsh \u7684\u5173\u7cfb\u3002\u5b83\u53ef\u4ee5\u8ba9\u4f60\u7684\u547d\u4ee4\u884c\u66f4\u5f3a\u5927\u3002"),(0,r.kt)("p",null,"\u6253\u5f00 PowerShell\uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module posh-git -Scope CurrentUser\nInstall-Module oh-my-posh -Scope CurrentUser\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\u8fd8\u66f4\u6539 PowerShell \u7684\u7528\u6237\u914d\u7f6e\uff0c\u8ba9\u5b83\u6bcf\u6b21\u542f\u52a8\u7684\u65f6\u5019\u81ea\u52a8\u52a0\u8f7d oh-my-posh \u63d2\u4ef6\uff1b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }\nnotepad $PROFILE\n")),(0,r.kt)("p",null,"\u4e0d\u51fa\u610f\u5916\u7684\u8bdd\u63a5\u4e0b\u6765\u4f1a\u51fa\u73b0\u8bb0\u4e8b\u672c\uff0c\u4f60\u9700\u8981\u5728\u91cc\u9762\u5199\u4e0a\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Import-Module posh-git\nImport-Module oh-my-posh\nSet-Theme Paradox\n")),(0,r.kt)("p",null,"\u4fdd\u5b58\u8be5\u6587\u4ef6\uff0c\u91cd\u65b0\u6253\u5f00 PowerShell \u4f60\u5c31\u80fd\u770b\u5230\u4e00\u4e2a\u53d1\u751f\u6539\u53d8\u4e86\u7684 PowerShell \u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(18683).Z})),(0,r.kt)("p",null,"oh-my-posh \u63d0\u4f9b\u4e86\u51e0\u7ec4\u9884\u8bbe\u7684\u4e3b\u9898\u4f9b\u4f60\u9009\u62e9\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Set-Theme")," \u547d\u4ee4\u6765\u66f4\u6539\u5f53\u524d\u4e3b\u9898\uff0c\u53ef\u9009\u7684\u503c\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Agnoster"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Paradox"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Sorin"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Darkblood"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Avit"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Honukai"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Fish"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Robbyrussell"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(33793).Z})),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4e3b\u9898\u8bbe\u7f6e\u53ea\u5728\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\uff0c\u4e3a\u4e86\u6bcf\u6b21\u542f\u52a8 PowerShell \u7684\u65f6\u5019\u90fd\u80fd\u52a0\u8f7d\u4f60\u60f3\u8981\u7684\u4e3b\u9898\uff0c\u4f60\u8fd8\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u7528\u6237\u914d\u7f6e\u6587\u4ef6\uff0c\u5c31\u50cf\u4e0a\u4e00\u4e2a\u6b65\u9aa4\u4e2d\u505a\u7684\u4e00\u6837\uff0c\u53ea\u9700\u8981\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"Set-Theme")," \u547d\u4ee4\u7684\u90e8\u5206\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"\u7528\u4e0a\u5fae\u8f6f\u7684-cascadia-code-\u5b57\u4f53"},"\u7528\u4e0a\u5fae\u8f6f\u7684 Cascadia Code \u5b57\u4f53"),(0,r.kt)("p",null,"\u6216\u8bb8\u4f60\u5df2\u7ecf\u53d1\u73b0\u4e86\u6709\u4e9b\u5b57\u7b26\u663e\u793a\u4e0d\u6b63\u5e38\uff0c\u90a3\u662f\u56e0\u4e3a\u9ed8\u8ba4\u7684\u5b57\u4f53\u6ca1\u6709\u5185\u5d4c\u8fd9\u4e9b\u5b57\u7b26\u7684\u5f62\u72b6\uff0c\u4f60\u8fd8\u9700\u8981\u6362\u4e00\u4e2a\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u5fae\u8f6f\u7684\u53e6\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0cCascadia Code",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," \u5c31\u662f\u4e00\u6b3e\u9002\u7528\u4e8e\u7ec8\u7aef\u548c\u4ee3\u7801\u5c55\u793a\u7684\u5b57\u4f53\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Scoop \u6765\u5b89\u88c5\u5b83\uff1b\u5b89\u88c5\u5b57\u4f53\u7684\u65f6\u5019\u9700\u8981\u4f7f\u7528\u5230\u7ba1\u7406\u5458\u6743\u9650\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," \u547d\u4ee4\uff0c\u6216\u8005\u7528\u7ba1\u7406\u5458\u6743\u9650\u91cd\u65b0\u6253\u5f00 PowerShell\uff0c\u518d\u6267\u884c\u5b89\u88c5\u3002"),(0,r.kt)("p",null,"\u5728\u5b89\u88c5\u4e4b\u524d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u6dfb\u52a0\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"nerd-fonts")," \u4ed3\u5e93\uff0c\u56e0\u4e3a\u5b57\u4f53\u8f6f\u4ef6\u7684\u5143\u4fe1\u606f\u90fd\u5b58\u653e\u4e8e\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop bucket add nerd-fonts\n")),(0,r.kt)("p",null,"\u5728 Scoop \u7684\u4ed3\u5e93\u4e2d\u5b58\u5728\u7740\u597d\u51e0\u4e2a\u7248\u672c\u7684 Cascadia Code\uff0c\u5176\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cascadia-Code"),"\u662f\u539f\u7248\u4e0d\u5e26 Powerline \u5b57\u7b26\u7684\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cascadia-PL"),"\u662f\u5fae\u8f6f\u51fa\u54c1\u7684\uff0c\u81ea\u5e26 Powerline \u5b57\u7b26\u7684\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CascadiaCode-NF"),"\u662f Nerd Fonts",(0,r.kt)("sup",{parentName:"li",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))," \u9879\u76ee\u51fa\u54c1\u7684\uff0c\u540e\u671f\u8865\u4e01\u4e86\u5927\u91cf Powerline \u5b57\u7b26\u3002")),(0,r.kt)("p",null,"\u6ca1\u6709\u7279\u6b8a\u9700\u6c42\u7684\u8bdd\u53ef\u4ee5\u9009\u62e9\u5b98\u65b9\u51fa\u7684\u8f7b\u91cf\u7ea7\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascadia-PL"),"\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"sudo scoop install Cascadia-PL\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\u8fd8\u9700\u8bbe\u7f6e\u4ee5\u4e0b\uff0c\u6307\u5b9a Windows Terminal \u4f7f\u7528\u8be5\u5b57\u4f53\u3002"),(0,r.kt)("p",null,"\u76ee\u524d Windows Terminal \u6ca1\u6709\u4e13\u95e8\u7684\u8bbe\u7f6e\u754c\u9762\uff0c\u6240\u6709\u7684\u914d\u7f6e\u9879\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles.json")," \u914d\u7f6e\u6587\u4ef6\u91cc\uff1b\u5728\u914d\u7f6e\u6587\u4ef6\u7684\u5bf9\u5e94\u5730\u65b9\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"fontFace")," \u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cascadia Code PL"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"defaults":\n{\n    // Put settings here that you want to apply to all profiles\n    "fontFace": "Cascadia Code PL"\n},\n// ...\n')),(0,r.kt)("p",null,"\u4fdd\u5b58\u914d\u7f6e\u6587\u4ef6\u540e\u5c31\u80fd\u4f7f\u914d\u7f6e\u6587\u4ef6\u751f\u6548\uff1b\u6b64\u65f6\u6240\u6709\u5b57\u7b26\u5e94\u8be5\u80fd\u6b63\u5e38\u663e\u793a\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(55278).Z})),(0,r.kt)("h3",{id:"\u96c6\u6210-git-bash"},"\u96c6\u6210 Git Bash"),(0,r.kt)("p",null,"\u9996\u5148\u5c06 Git \u5b89\u88c5\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u52a0\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," \u73af\u5883\u53d8\u91cf\uff0c\u5982\u679c\u4f60\u662f\u7528 Scoop \u5b89\u88c5\u7684 Git\uff0c\u5219\u53ef\u4ee5\u5ffd\u7565\u6b64\u6b65\u9aa4\uff0c\u56e0\u4e3a Scoop \u5df2\u7ecf\u5e2e\u4f60\u5b8c\u6210\u4e86\u8fd9\u4e2a\u5de5\u4f5c\uff1b\u7136\u540e\u4fee\u6539 Windows Terminal \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"profiles"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"list")," \u4e2d\u65b0\u589e\u4e00\u6761\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// ...\n"list":\n[\n\n    {\n        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff4411}",\n        "name": "Git Bash",\n        "commandline": "bash.exe",\n        "hidden": false,\n        "startingDirectory" : "%USERPROFILE%"\n    }\n]\n// ...\n')),(0,r.kt)("p",null,"\u6ce8\u610f JSON \u7684\u8bed\u6cd5\u683c\u5f0f\uff0c\u5728\u5217\u8868\u4e2d\u4e0d\u8981\u5c11\u52a0\u6216\u8005\u591a\u52a0\u9017\u53f7\u3002\u4fdd\u5b58\u914d\u7f6e\u6587\u4ef6\u4e4b\u540e\u5c31\u80fd\u5728 Windows Terminal \u4e2d\u5feb\u6377\u542f\u52a8 Git Bash \u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(47240).Z})),(0,r.kt)("h2",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),(0,r.kt)("p",null,"\u65b0\u7684 Windows Terminal \u4f7f\u7528\u4f53\u9a8c\u8fd8\u662f\u633a\u4e0d\u9519\u7684\uff0c\u989c\u503c\u4e5f OK\uff0c\u6298\u817e\u4e00\u4e0b\u4e5f\u633a\u597d\u7528\u7684\u3002"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/terminal"},"microsoft/terminal: The new Windows Terminal and the original Windows console host, all in the same place!"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JanDeDobbeleer/oh-my-posh2"},"JanDeDobbeleer/oh-my-posh2: A prompt theming engine for Powershell"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukesampson/scoop"},"lukesampson/scoop: A command-line installer for Windows."),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/cascadia-code"},"microsoft/cascadia-code: This is a fun, new monospaced font that includes programming ligatures and is designed to enhance the modern look and feel of the Windows Terminal."),(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ryanoasis/nerd-fonts"},"ryanoasis/nerd-fonts: Iconic font aggregator, collection, & patcher. 3,600+ icons, 50+ patched fonts: Hack, Source Code Pro, more. Glyph collections: Font Awesome, Material Design Icons, Octicons, & more"),(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},47240:function(e,t,n){t.Z=n.p+"assets/images/SI7S9fkaKG-1024x523-e44b17f15112629b60b8ab1345d51598.png"},33793:function(e,t,n){t.Z=n.p+"assets/images/sA8iXJPC2j-f28c467468a57825f9272ddd98063021.png"},18683:function(e,t,n){t.Z=n.p+"assets/images/vMcBOyiREC-1024x523-be89bd67db5756110207e9baa7b0bfb1.png"},55278:function(e,t,n){t.Z=n.p+"assets/images/vjPXgPO7AB-1024x523-83e56a02d8071a76974865cb56eaf68e.png"}}]);