"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9914],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,u=c["".concat(s,".").concat(d)]||c[d]||h[d]||l;return t?a.createElement(u,r(r({ref:n},m),{},{components:t})):a.createElement(u,r({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5723:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return h}});var a=t(7462),o=t(3366),l=(t(7294),t(3905)),r=["components"],i={date:new Date("2021-11-24T00:00:00.000Z"),tags:["windows-terminal","powershell","oh-my-posh"]},s="Windows Terminal + pwsh + oh my posh3 + PSReadLine \u6253\u9020\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef",p={permalink:"/blog/use-pwsh-and-oh-my-posh3-on-windows",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/use-pwsh-and-oh-my-posh3-on-windows.md",source:"@site/blog/use-pwsh-and-oh-my-posh3-on-windows.md",title:"Windows Terminal + pwsh + oh my posh3 + PSReadLine \u6253\u9020\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef",description:"\u524d\u8a00",date:"2021-11-24T00:00:00.000Z",formattedDate:"2021\u5e7411\u670824\u65e5",tags:[{label:"windows-terminal",permalink:"/blog/tags/windows-terminal"},{label:"powershell",permalink:"/blog/tags/powershell"},{label:"oh-my-posh",permalink:"/blog/tags/oh-my-posh"}],truncated:!0,authors:[],frontMatter:{date:"2021-11-24T00:00:00.000Z",tags:["windows-terminal","powershell","oh-my-posh"]},prevItem:{title:"Scoop\uff1aWindows \u5305\u7ba1\u7406\u5668",permalink:"/blog/scoop-the-windows-package-manager"},nextItem:{title:"\u4ee5\u5bb9\u5668\u7684\u65b9\u5f0f\u66b4\u9732 Docker Remote API \u5e76\u542f\u7528 TLS",permalink:"/blog/enable-docker-remote-api-with-tls-protection-via-container"}},m={authorsImageUrls:[]},h=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u5b89\u88c5 pwsh",id:"\u5b89\u88c5-pwsh",level:2},{value:"\u5b89\u88c5 Windows Terminal",id:"\u5b89\u88c5-windows-terminal",level:2},{value:"\u5b89\u88c5 Cascadia Code \u5b57\u4f53",id:"\u5b89\u88c5-cascadia-code-\u5b57\u4f53",level:2},{value:"\u5728 Windows Terminal \u4e2d\u96c6\u6210 pwsh",id:"\u5728-windows-terminal-\u4e2d\u96c6\u6210-pwsh",level:2},{value:"\u5b89\u88c5 oh-my-posh3",id:"\u5b89\u88c5-oh-my-posh3",level:2},{value:"\u914d\u7f6e\u5386\u53f2\u547d\u4ee4\u63d0\u793a",id:"\u914d\u7f6e\u5386\u53f2\u547d\u4ee4\u63d0\u793a",level:2},{value:"\u66f4\u6539 oh-my-posh \u7684\u4e3b\u9898",id:"\u66f4\u6539-oh-my-posh-\u7684\u4e3b\u9898",level:2},{value:"\u66f4\u6539 Windows Terminal \u7684\u914d\u8272",id:"\u66f4\u6539-windows-terminal-\u7684\u914d\u8272",level:2},{value:"\u5728 VS Code \u91cc\u4f7f\u7528",id:"\u5728-vs-code-\u91cc\u4f7f\u7528",level:2}],c={toc:h};function d(e){var n=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u5728 macOS \u4e2d\u7528 zsh \u914d\u5408 oh-my-zsh \u53ef\u4ee5\u6253\u9020\u51fa\u4e00\u4e2a\u7528\u7684\u5f88\u8212\u670d\u7684\u7ec8\u7aef\uff0c\u5176\u5b9e\u5728 Windows \u4e2d\u4e5f\u53ef\u4ee5\u3002"),(0,l.kt)("p",null,"\u5728 Windows \u4e2d\u53ef\u4ee5\u7528 pwsh",(0,l.kt)("sup",{parentName:"p",id:"fnref-1-848939"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-848939",className:"footnote-ref"},"1"))," \u548c oh-my-posh",(0,l.kt)("sup",{parentName:"p",id:"fnref-2-848939"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-848939",className:"footnote-ref"},"2"))," \u6253\u9020\u51fa\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef\u3002"),(0,l.kt)("p",null,"Windows \u81ea\u5e26\u7684 PowerShell \u7248\u672c\u4f4e\uff0c\u6240\u4ee5\u9700\u8981\u989d\u5916\u5b89\u88c5\u4e00\u4e2a\u65b0\u7248\u672c\u7684 pwsh\uff0c\u800c\u4e0d\u662f\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u3002"),(0,l.kt)("p",null,"oh-my-posh3 \u73b0\u5728\u5df2\u57fa\u4e8e Go \u8bed\u8a00\u91cd\u6784\uff0c\u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b89\u88c5\u548c\u914d\u7f6e\u65b9\u5f0f\u548c oh-my-posh2 \u76f8\u6bd4\u6709\u4e9b\u53d8\u5316\u3002"),(0,l.kt)("p",null,"\u7ec8\u7aef\u8f6f\u4ef6\u7528\u7684\u662f Windows Terminal",(0,l.kt)("sup",{parentName:"p",id:"fnref-3-848939"},(0,l.kt)("a",{parentName:"sup",href:"#fn-3-848939",className:"footnote-ref"},"3")),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u73b0\u4ee3\u5316\u7684\u3001\u53ef\u81ea\u5b9a\u4e49\u7684\u597d\u770b\u7684\u7ec8\u7aef\u6a21\u62df\u5668\u3002"),(0,l.kt)("p",null,"\u5386\u53f2\u547d\u4ee4\u63d0\u793a\u662f\u901a\u8fc7 PowerShell \u7684 PSReadLine",(0,l.kt)("sup",{parentName:"p",id:"fnref-4-848939"},(0,l.kt)("a",{parentName:"sup",href:"#fn-4-848939",className:"footnote-ref"},"4"))," \u6a21\u7ec4\u5b9e\u73b0\u7684\u3002"),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"Scoop",(0,l.kt)("sup",{parentName:"p",id:"fnref-5-848939"},(0,l.kt)("a",{parentName:"sup",href:"#fn-5-848939",className:"footnote-ref"},"5"))," \u662f Windows \u4e0a\u7684\u4e00\u6b3e\u57fa\u4e8e PowerShell \u7684\u5305\u7ba1\u7406\u5668\uff0c\u63a5\u4e0b\u6765\u7684\u8f6f\u4ef6\u90fd\u662f\u7528 Scoop \u5b89\u88c5\u7684\uff0c\u56e0\u4e3a\u5b83\u80fd\u5f88\u65b9\u4fbf\u5730\u7ba1\u7406\u8f6f\u4ef6\u548c\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u3002Scoop \u7684\u5b89\u88c5\u53ca\u4f7f\u7528\u4e0d\u5728\u672c\u6587\u7684\u8ba8\u8bba\u8303\u56f4\u5185\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u591a\u6570\u8f6f\u4ef6\u6765\u6e90\u4e8e Github\uff0c\u5728\u7f51\u7edc\u4e0d\u597d\u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5b89\u88c5\u5931\u8d25\uff0c\u8bf7\u81ea\u884c\u914d\u7f6e\u7f51\u7edc\u4ee3\u7406\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u7528\u4e8e\u5728 PowerShell \u4e2d\u914d\u7f6e\u4ee3\u7406\uff0c\u8bf7\u81ea\u884c\u66ff\u6362\u5730\u5740\u548c\u7aef\u53e3\u53f7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$Env:http_proxy="http://127.0.0.1:11223";\n$Env:https_proxy="http://127.0.0.1:11223"\n')),(0,l.kt)("p",null,"Scoop \u57fa\u4e8e Git\uff0c\u4e3a\u4e86\u8ba9 Scoop \u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u547d\u4ee4\u7528\u4e8e\u914d\u7f6e Git \u7684\u4ee3\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global http.proxy http://127.0.0.1:11223\ngit config --global https.proxy https://127.0.0.1:11223\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5-pwsh"},"\u5b89\u88c5 pwsh"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install pwsh\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5-windows-terminal"},"\u5b89\u88c5 Windows Terminal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install windows-terminal\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5-cascadia-code-\u5b57\u4f53"},"\u5b89\u88c5 Cascadia Code \u5b57\u4f53"),(0,l.kt)("p",null,"\u90e8\u5206\u547d\u4ee4\u884c\u5b57\u7b26\u9700\u8981\u6b63\u786e\u914d\u7f6e\u5b57\u4f53\u624d\u80fd\u6b63\u5e38\u663e\u793a\uff0c\u5b89\u88c5\u5b57\u4f53\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\uff0c\u6ce8\u610f\u6388\u6743\u63d0\u793a\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u547d\u4ee4\u884c\u5b57\u7b26\u5b57\u4f53\u53ef\u53c2\u8003 nerd-fonts",(0,l.kt)("sup",{parentName:"p",id:"fnref-6-848939"},(0,l.kt)("a",{parentName:"sup",href:"#fn-6-848939",className:"footnote-ref"},"6"))," \u9879\u76ee\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install sudo\nscoop bucket add nerd-fonts\nsudo scoop install CascadiaCode-NF-Mono\n")),(0,l.kt)("h2",{id:"\u5728-windows-terminal-\u4e2d\u96c6\u6210-pwsh"},"\u5728 Windows Terminal \u4e2d\u96c6\u6210 pwsh"),(0,l.kt)("p",null,"\u5728 Window Terminal \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\u914d\u7f6e\u3002\u547d\u540d\u4e3a\u300cPWSH\u300d\uff0c\u547d\u4ee4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"pwsh"),"\u3002\u8bbe\u7f6e\u5b57\u4f53\u4e3a\u300cCaskaydiaCove NF\u300d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124184401253",src:t(4796).Z,width:"1113",height:"622"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124184424643",src:t(8742).Z,width:"1113",height:"622"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124184447256",src:t(3443).Z,width:"1113",height:"622"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124184503221",src:t(19).Z,width:"1113",height:"622"})),(0,l.kt)("p",null,"\u4fdd\u5b58\u6b64\u914d\u7f6e\uff0c\u5728\u300c\u542f\u52a8\u300d\u9009\u9879\u5361\u4e2d\u628a\u521a\u521a\u65b0\u589e\u7684\u300cPWSH\u300d\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124184748158",src:t(8106).Z,width:"1113",height:"622"})),(0,l.kt)("p",null,"\u6253\u5f00 PWSH\uff0c\u914d\u7f6e\u5b8c\u6210\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124184925333",src:t(3436).Z,width:"1113",height:"622"})),(0,l.kt)("h2",{id:"\u5b89\u88c5-oh-my-posh3"},"\u5b89\u88c5 oh-my-posh3"),(0,l.kt)("p",null,"\u76ee\u524d\uff0c\u5728 oh-my-posh \u7684\u5b98\u65b9\u6587\u6863\u4e2d\u4f7f\u7528\u7684\u5b89\u88c5\u547d\u4ee4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json"),"\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"oh-my-posh3 \u5df2\u5b58\u5728\u4e8e Scoop \u7684 main \u4ed3\u5e93\u4e2d\uff0c\u8bf7\u5b89\u88c5\u6b64\u8f6f\u4ef6\u5305\uff0c\u540e\u9762\u7684\u914d\u7f6e\u547d\u4ee4\u8ddf\u5305\u540d\u6709\u5173\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install oh-my-posh3\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u7f16\u5199 PWSH \u7684\u7528\u6237\u914d\u7f6e\uff0c\u4ee5\u4e0b\u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u5e76\u7528\u8bb0\u4e8b\u672c\u6253\u5f00\u3002\u8be5\u914d\u7f6e\u6587\u4ef6\u7684\u4f5c\u7528\u662f\u5728\u6bcf\u6b21 pwsh \u521d\u59cb\u5316\u7684\u65f6\u5019\u81ea\u52a8\u6267\u884c\u5176\u4e2d\u7684\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }\nnotepad $PROFILE\n")),(0,l.kt)("p",null,"\u5728\u5f39\u51fa\u7684\u8bb0\u4e8b\u672c\u91cc\u5199\u5165 oh-my-posh \u7684\u521d\u59cb\u5316\u547d\u4ee4\uff0c\u8be5\u547d\u4ee4\u4f1a\u5728\u6bcf\u6b21 pwsh \u521d\u59cb\u5316\u7684\u65f6\u5019\u6267\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:POSH_GIT_ENABLED = $true\noh-my-posh --init --shell pwsh --config "$(scoop prefix oh-my-posh3)\\themes\\wopian.omp.json" | Invoke-Expression\n')),(0,l.kt)("p",null,"\u91cd\u65b0\u6253\u5f00\u7ec8\u7aef\u5c31\u80fd\u770b\u5230\u4e00\u4e2a\u5e26\u4e3b\u9898\u7684 PowerShell\uff0c\u5982\u679c\u6709\u4e9b\u5b57\u7b26\u663e\u793a\u4e0d\u51fa\u6765\u5c31\u662f\u5b57\u4f53\u6ca1\u6709\u914d\u7f6e\u597d\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124185954914",src:t(1311).Z,width:"1113",height:"622"})),(0,l.kt)("h2",{id:"\u914d\u7f6e\u5386\u53f2\u547d\u4ee4\u63d0\u793a"},"\u914d\u7f6e\u5386\u53f2\u547d\u4ee4\u63d0\u793a"),(0,l.kt)("p",null,"\u5728 PWSH \u4e2d\u6267\u884c\u547d\u4ee4\uff0c\u5b89\u88c5 PSReadLine \u6a21\u7ec4\u3002\u5728\u5b89\u88c5\u65f6\u8bf7\u8f93\u5165\u300cY\u300d\u6765\u786e\u8ba4\u5b89\u88c5\u3002\u4ee5\u4e0b\u547d\u4ee4\u7528\u4e8e\u5b89\u88c5 PSReadLine\uff0c\u8bf7\u5728 PWSH \u4e2d\u6267\u884c\u800c\u4e0d\u662f\u5728 PowerShell \u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module PSReadLine\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124194613000",src:t(2144).Z,width:"1890",height:"350"})),(0,l.kt)("p",null,"\u7136\u540e\u7f16\u8f91",(0,l.kt)("inlineCode",{parentName:"p"},"$PROFILE"),"\u6587\u4ef6\uff0c\u5728\u6bcf\u6b21\u7ec8\u7aef\u6253\u5f00\u7684\u65f6\u5019\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"PSReadLine"),"\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"notepad $PROFILE\n")),(0,l.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u9644\u52a0\u4e0a\u4ee5\u4e0b\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Set-PSReadLineOption -PredictionSource History # \u8bbe\u7f6e\u9884\u6d4b\u6587\u672c\u6765\u6e90\u4e3a\u5386\u53f2\u8bb0\u5f55\nSet-PSReadlineKeyHandler -Key Tab -Function Complete # \u8bbe\u7f6e Tab \u952e\u8865\u5168\nSet-PSReadLineKeyHandler -Key "Ctrl+d" -Function MenuComplete # \u8bbe\u7f6e Ctrl+d \u4e3a\u83dc\u5355\u8865\u5168\u548c Intellisense\nSet-PSReadLineKeyHandler -Key "Ctrl+z" -Function Undo # \u8bbe\u7f6e Ctrl+z \u4e3a\u64a4\u9500\nSet-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward # \u8bbe\u7f6e\u5411\u4e0a\u952e\u4e3a\u540e\u5411\u641c\u7d22\u5386\u53f2\u8bb0\u5f55\nSet-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward # \u8bbe\u7f6e\u5411\u4e0b\u952e\u4e3a\u524d\u5411\u641c\u7d22\u5386\u53f2\u7eaa\u5f55\n')),(0,l.kt)("p",null,"\u4fdd\u5b58\u914d\u7f6e\u6587\u4ef6\uff0c\u91cd\u542f\u7ec8\u7aef\uff0c\u5c31\u80fd\u770b\u5230\u4e00\u4e2a\u5e26\u5386\u53f2\u547d\u4ee4\u63d0\u793a\u7684\u7ec8\u7aef\u4e86\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124190601792",src:t(1882).Z,width:"1113",height:"622"})),(0,l.kt)("h2",{id:"\u66f4\u6539-oh-my-posh-\u7684\u4e3b\u9898"},"\u66f4\u6539 oh-my-posh \u7684\u4e3b\u9898"),(0,l.kt)("p",null,"oh-my-posh \u63d0\u4f9b\u4e86\u591a\u5957\u4e3b\u9898\u53ef\u4f9b\u9009\u62e9\uff0c\u5728 PWSH \u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5bf9\u6240\u6709\u4e3b\u9898\u8fdb\u884c\u9884\u89c8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Get-ChildItem -Path "$(scoop prefix oh-my-posh3)\\themes\\*" -Include \'*.omp.json\' | Sort-Object Name | ForEach-Object -Process {\n    $esc = [char]27\n    Write-Host ""\n    Write-Host "$esc[1m$($_.BaseName)$esc[0m"\n    Write-Host ""\n    oh-my-posh --config $($_.FullName) --pwd $PWD\n    Write-Host ""\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124195044478",src:t(6662).Z,width:"1113",height:"622"})),(0,l.kt)("p",null,"\u5176\u4e2d\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},".omp"),"\u7ed3\u5c3e\u7684\u662f\u4e3b\u9898\u6587\u4ef6\u7684\u540d\u79f0\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u67d0\u4e2a\u4e3b\u9898\u5c31\u66ff\u6362\u6389",(0,l.kt)("inlineCode",{parentName:"p"},"$PROFILE"),"\u6587\u4ef6\u4e2d\u521d\u59cb\u5316\u547d\u4ee4\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u540d\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u7528\u4e8e\u7528\u8bb0\u4e8b\u672c\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"$PROFILE"),"\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"notepad $PROFILE\n")),(0,l.kt)("p",null,"\u5728\u6253\u5f00\u7684\u8bb0\u4e8b\u672c\u4e2d\u4f60\u4f1a\u770b\u5230 oh-my-posh \u7684\u521d\u59cb\u5316\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'oh-my-posh --init --shell pwsh --config "$(scoop prefix oh-my-posh3)\\themes\\wopian.omp.json" | Invoke-Expression\n')),(0,l.kt)("p",null,"\u5c06\u4f60\u4e2d\u610f\u7684\u4e3b\u9898\u540d\u79f0\u66ff\u6362\u547d\u4ee4\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"wopian.omp"),"\uff0c\u4fdd\u5b58\u8be5\u914d\u7f6e\u6587\u4ef6\u7136\u540e\u91cd\u542f\u7ec8\u7aef\u5c31\u53ef\u4ee5\u770b\u5230\u65b0\u4e3b\u9898\u7684\u6548\u679c\u4e86\u3002"),(0,l.kt)("h2",{id:"\u66f4\u6539-windows-terminal-\u7684\u914d\u8272"},"\u66f4\u6539 Windows Terminal \u7684\u914d\u8272"),(0,l.kt)("p",null,"\u5728 Windows Terminal \u4e2d\u9ed8\u8ba4\u6709\u591a\u5957\u914d\u8272\u65b9\u6848\u53ef\u9009\uff0c\u8fd9\u91cc\u63a8\u8350\u4e00\u5957\u81ea\u5b9a\u4e49\u7684\u914d\u8272\u65b9\u6848\uff0c\u6765\u81ea\u4e8e Dracula",(0,l.kt)("sup",{parentName:"p",id:"fnref-7-848939"},(0,l.kt)("a",{parentName:"sup",href:"#fn-7-848939",className:"footnote-ref"},"7")),"\u3002"),(0,l.kt)("p",null,"\u5728 Windows Terminal \u7684\u8bbe\u7f6e\u9875\u9762\u4e2d\uff0c\u70b9\u51fb\u300c\u6253\u5f00 JSON \u6587\u4ef6\u300d\uff0c\u5728\u8be5\u6587\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"schemes"),"\u6570\u7ec4\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u914d\u8272\u65b9\u6848\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"schemes": [\n    {\n        "name": "Dracula",\n        "cursorColor": "#F8F8F2",\n        "selectionBackground": "#44475A",\n        "background": "#282A36",\n        "foreground": "#F8F8F2",\n        "black": "#21222C",\n        "blue": "#BD93F9",\n        "cyan": "#8BE9FD",\n        "green": "#50FA7B",\n        "purple": "#FF79C6",\n        "red": "#FF5555",\n        "white": "#F8F8F2",\n        "yellow": "#F1FA8C",\n        "brightBlack": "#6272A4",\n        "brightBlue": "#D6ACFF",\n        "brightCyan": "#A4FFFF",\n        "brightGreen": "#69FF94",\n        "brightPurple": "#FF92DF",\n        "brightRed": "#FF6E6E",\n        "brightWhite": "#FFFFFF",\n        "brightYellow": "#FFFFA5"\n    }\n]\n')),(0,l.kt)("p",null,"\u4fdd\u5b58\u8be5 JSON \u6587\u4ef6\uff0c\u91cd\u542f Windows Terminal\uff0c\u5728 PWSH \u7684\u5916\u89c2\u914d\u7f6e\u4e2d\u9009\u62e9\u65b0\u6dfb\u52a0\u7684 Dracula \u914d\u8272\u65b9\u6848\u3002\u524d\u6587\u4e2d\u6211\u7528\u7684\u914d\u8272\u65b9\u6848\u5c31\u662f Dracula\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20211124202122113",src:t(4853).Z,width:"1113",height:"622"})),(0,l.kt)("h2",{id:"\u5728-vs-code-\u91cc\u4f7f\u7528"},"\u5728 VS Code \u91cc\u4f7f\u7528"),(0,l.kt)("p",null,"\u5728 VS Code \u7684\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"settings.json"),"\u4e2d\u52a0\u5165\u4ee5\u4e0b\u914d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"terminal.integrated.profiles.windows": {\n  "Windows PowerShell": {\n    "path": "C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe"\n  },\n  "PWSH": {\n    "path": "pwsh"\n  }\n},\n"terminal.integrated.defaultProfile.windows": "PWSH",\n"terminal.integrated.fontFamily": "\'CaskaydiaCove NF\'"\n')),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-848939"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PowerShell/PowerShell"},"PowerShell/PowerShell: PowerShell for every system!"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1-848939",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2-848939"},(0,l.kt)("a",{parentName:"li",href:"https://ohmyposh.dev/"},"Home | Oh My Posh"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2-848939",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-3-848939"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/terminal"},"microsoft/terminal: The new Windows Terminal and the original Windows console host, all in the same place!"),(0,l.kt)("a",{parentName:"li",href:"#fnref-3-848939",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-4-848939"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/PowerShell/PSReadLine"},"PowerShell/PSReadLine: A bash inspired readline implementation for PowerShell"),(0,l.kt)("a",{parentName:"li",href:"#fnref-4-848939",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-5-848939"},(0,l.kt)("a",{parentName:"li",href:"https://scoop.sh/"},"Scoop"),(0,l.kt)("a",{parentName:"li",href:"#fnref-5-848939",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-6-848939"},(0,l.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/"},"Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher"),(0,l.kt)("a",{parentName:"li",href:"#fnref-6-848939",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-7-848939"},(0,l.kt)("a",{parentName:"li",href:"https://draculatheme.com/windows-terminal"},"Dark theme for Windows Terminal and 218+ apps \u2014 Dracula"),(0,l.kt)("a",{parentName:"li",href:"#fnref-7-848939",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},4796:function(e,n,t){n.Z=t.p+"assets/images/image-20211124184401253-0ea32b3ff08d755479164eb41020de0a.png"},8742:function(e,n,t){n.Z=t.p+"assets/images/image-20211124184424643-8b6b584028dde36f6522e53caa58a570.png"},3443:function(e,n,t){n.Z=t.p+"assets/images/image-20211124184447256-7b70ca062841364dbbbb6ca6e909c624.png"},19:function(e,n,t){n.Z=t.p+"assets/images/image-20211124184503221-03a89867715d1dbd2dea2223e3908579.png"},8106:function(e,n,t){n.Z=t.p+"assets/images/image-20211124184748158-e3d872c5ae091cb44d9da3a2d461252e.png"},3436:function(e,n,t){n.Z=t.p+"assets/images/image-20211124184925333-6e359f040612cabd1a76052df65b09a4.png"},1311:function(e,n,t){n.Z=t.p+"assets/images/image-20211124185954914-c1952873e682fa835760f73bf5661c6a.png"},1882:function(e,n,t){n.Z=t.p+"assets/images/image-20211124190601792-8bb9694b4b5e061c4f4873592a15bf27.png"},2144:function(e,n,t){n.Z=t.p+"assets/images/image-20211124194613000-7ad01e9db9b2f8dc881b311a400fd6da.png"},6662:function(e,n,t){n.Z=t.p+"assets/images/image-20211124195044478-9802c8385cc153ac1b742ba3cf35fd1b.png"},4853:function(e,n,t){n.Z=t.p+"assets/images/image-20211124202122113-466cf54a53bc5f530fd550ffc909ccd9.png"}}]);