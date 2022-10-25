"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9062],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=s(n),k=a,c=h["".concat(o,".").concat(k)]||h[k]||m[k]||l;return n?i.createElement(c,r(r({ref:t},u),{},{components:n})):i.createElement(c,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var i=n(83117),a=n(80102),l=(n(67294),n(3905)),r=["components"],p={date:new Date("2022-07-02T00:00:00.000Z"),tags:["zsh","zinit"]},o="\u4f7f\u7528 zinit \u4f5c\u4e3a zsh \u7684\u63d2\u4ef6\u7ba1\u7406\u5668",s={permalink:"/blog/zsh-with-zinit",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/zsh-with-zinit.md",source:"@site/blog/zsh-with-zinit.md",title:"\u4f7f\u7528 zinit \u4f5c\u4e3a zsh \u7684\u63d2\u4ef6\u7ba1\u7406\u5668",description:"\u524d\u8a00",date:"2022-07-02T00:00:00.000Z",formattedDate:"2022\u5e747\u67082\u65e5",tags:[{label:"zsh",permalink:"/blog/tags/zsh"},{label:"zinit",permalink:"/blog/tags/zinit"}],readingTime:8.015,hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-07-02T00:00:00.000Z",tags:["zsh","zinit"]},prevItem:{title:"\u4f7f\u7528 SDKMAN \u5728 M1 Mac \u4e0a\u5b89\u88c5 JDK",permalink:"/blog/using-sdkman-to-install-jdk-on-m1-mac"},nextItem:{title:"\u4fee\u590d PATH \u73af\u5883\u53d8\u91cf",permalink:"/blog/fix-path-environment"}},u={authorsImageUrls:[]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5907\u4efd Shell \u542f\u52a8\u6587\u4ef6",id:"\u5907\u4efd-shell-\u542f\u52a8\u6587\u4ef6",level:2},{value:"\u5b89\u88c5 zinit",id:"\u5b89\u88c5-zinit",level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:2},{value:"\u5b89\u88c5\u4e3b\u9898",id:"\u5b89\u88c5\u4e3b\u9898",level:2},{value:"\u5176\u4ed6\u4f18\u5316\u601d\u8def",id:"\u5176\u4ed6\u4f18\u5316\u601d\u8def",level:2},{value:"\u524d\u540e\u5bf9\u6bd4",id:"\u524d\u540e\u5bf9\u6bd4",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],h={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u4e4b\u524d\u4f7f\u7528 ohmyzsh \u4f5c\u4e3a zsh \u7684\u63d2\u4ef6\u7ba1\u7406\u5668\uff0c\u4f46\u662f\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u542f\u52a8\u901f\u5ea6\u592a\u6162\u4e86\u3002\u5728\u7ec8\u7aef\u542f\u52a8\u540e\u4ecd\u9700\u82b1\u8d39 1 \u81f3 2 \u79d2\u624d\u80fd\u770b\u89c1\u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u5e76\u4e14\u6211\u5f00\u542f\u7684\u63d2\u4ef6\u6570\u91cf\u4e5f\u4e0d\u591a\uff0c\u6ca1\u6709\u4ec0\u4e48\u4f18\u5316\u601d\u8def\u3002"),(0,l.kt)("p",null,"\u8fd1\u671f\u6211\u5bfb\u627e\u5230 ohmyzsh \u7684\u66ff\u4ee3\u54c1 zinit\uff0c\u5728\u7ecf\u8fc7\u4e00\u756a\u4f53\u9a8c\u4e4b\u540e\u611f\u89c9\u826f\u597d\uff0c\u542f\u52a8\u901f\u5ea6\u975e\u5e38\u5feb\uff0c\u5e76\u4e14\u6211\u4e4b\u524d\u5728 ohmyzsh \u4e2d\u9700\u8981\u7684\u529f\u80fd\u90fd\u80fd\u5b9e\u73b0\u3002"),(0,l.kt)("h2",{id:"\u5907\u4efd-shell-\u542f\u52a8\u6587\u4ef6"},"\u5907\u4efd Shell \u542f\u52a8\u6587\u4ef6"),(0,l.kt)("p",null,"\u6298\u817e\u4e4b\u524d\u5148\u5907\u4efd\u4e00\u4e0b\u76ee\u524d\u7684 Shell \u542f\u52a8\u6587\u4ef6\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},".zprofile"),"\u6587\u4ef6\uff0c\u5728\u6298\u817e\u574f\u4e86\u4e4b\u540e\u80fd\u5feb\u901f\u6062\u590d\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u4e24\u4e2a\u6587\u4ef6\u5907\u4efd\u5b8c\u6bd5\u4e4b\u540e\uff0c\u6e05\u7a7a\u8fd9\u4e24\u4e2a\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-zinit"},"\u5b89\u88c5 zinit"),(0,l.kt)("p",null,"\u5728 zsh \u4e2d\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u4e0b\u8f7d ",(0,l.kt)("em",{parentName:"p"},"zinit")," ",(0,l.kt)("sup",{parentName:"p",id:"fnref-1-6de7da"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-6de7da",className:"footnote-ref"},"1"))," \u7684\u5b89\u88c5\u811a\u672c\u5e76\u6267\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5b89\u88c5\u811a\u672c\u4f1a\u514b\u9686 zinit \u7684\u4ed3\u5e93\u81f3",(0,l.kt)("inlineCode",{parentName:"p"},"~/.local/share/zinit/zinit.git"),"\uff1b\u5e76\u4e14\u66f4\u65b0\u4f60\u7684",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),"\u6587\u4ef6\uff0c\u5728\u5176\u4e2d\u9644\u52a0\u4e0a zinit \u7684\u542f\u52a8\u547d\u4ee4\uff0c\u4ee5\u4e0b\u5185\u5bb9\u662f\u5b89\u88c5\u811a\u672c\u653e\u5165",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),"\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.zshrc\n\n### Added by Zinit's installer\nsource \"$HOME/.local/share/zinit/zinit.git/zinit.zsh\"\nautoload -Uz _zinit\n(( ${+_comps} )) && _comps[zinit]=_zinit\n### End of Zinit's installer chunk\n")),(0,l.kt)("p",null,"\u4e4b\u540e\u6253\u5f00\u4e00\u4e2a\u65b0\u7684 zsh \u4f1a\u8bdd\uff0czinit \u5c31\u751f\u6548\u4e86\u3002"),(0,l.kt)("p",null,"\u5728\u4ee5\u540e\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u66f4\u65b0 zinit\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"zinit self-update\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,l.kt)("p",null,"zinit \u5f15\u5165\u63d2\u4ef6\u7684\u8bed\u6cd5\u548c ohmyzsh \u7684\u8bed\u6cd5\u4e0d\u4e00\u6837\u3002"),(0,l.kt)("p",null,"ohmyzsh \u5728\u5f15\u5165\u81ea\u5e26\u63d2\u4ef6\u7684\u65f6\u5019\u53ea\u9700\u76f4\u63a5\u58f0\u660e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"plugins"),"\u53d8\u91cf\u4e2d\u5373\u53ef\uff1b\u5728\u5f15\u5165\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7684\u65f6\u5019\u9996\u5148\u9700\u8981\u81ea\u5df1\u4e0b\u8f7d\u63d2\u4ef6\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"~/.oh-my-zsh/custom/plugins"),"\u76ee\u5f55\u4e2d\uff0c\u7136\u540e\u518d\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"plugins"),"\u4e2d\u58f0\u660e\u3002"),(0,l.kt)("p",null,"zinit \u5728\u5f15\u5165\u63d2\u4ef6\u7684\u65f6\u5019\u4e0d\u9700\u8981\u81ea\u5df1\u624b\u52a8\u4e0b\u8f7d\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"zinit"),"\u547d\u4ee4\u58f0\u660e\u4e4b\u540e\u5728\u4e0b\u6b21 zinit \u52a0\u8f7d\u4e4b\u540e\u81ea\u52a8\u4e0b\u8f7d\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"zinit \u5f15\u5165\u63d2\u4ef6\u7684\u8bed\u6cd5\u6709\u4e24\u79cd\u3002\u786e\u4fdd\u8fd9\u4e9b\u547d\u4ee4\u5904\u4e8e zinit \u521d\u59cb\u5316\u547d\u4ee4\u4e4b\u540e\u5373\u53ef\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"load"),"\u52a0\u8f7d\u7684\u63d2\u4ef6\u4f1a\u542f\u7528\u5206\u6790\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"zinit report [plugin]"),"\u547d\u4ee4\u6765\u67e5\u770b\u63d2\u4ef6\u7684\u52a0\u8f7d\u8fc7\u7a0b\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"light"),"\u52a0\u8f7d\u7684\u63d2\u4ef6\u4e0d\u542f\u7528\u5206\u6790\u529f\u80fd\uff0c\u6027\u80fd\u6bd4",(0,l.kt)("inlineCode",{parentName:"li"},"load"),"\u597d\u3002")),(0,l.kt)("p",null,"\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"repo/plugin"),"\u4ee3\u8868\u4e86 Github \u4ed3\u5e93\u7684\u7528\u6237\u540d\u548c\u4ed3\u5e93\u540d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"zinit load  <repo/plugin> # Load with reporting/investigating.\nzinit light <repo/plugin> # Load without reporting/investigating.\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u6211\u52a0\u8f7d\u7684\u4e00\u4e9b\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"zdharma-continuum/fast-syntax-highlighting"),"\u786e\u5b9e\u6bd4 oh-my-posh \u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"zsh-syntax-highlighting"),"\u6d41\u7545\u4e0d\u5c11\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.zshrc\n\nzinit light zdharma-continuum/fast-syntax-highlighting\nzinit light zsh-users/zsh-completions\nzinit light zsh-users/zsh-autosuggestions\nzinit light sunlei/zsh-ssh\nzinit light ael-code/zsh-colored-man-pages\nzinit light MichaelAquilina/zsh-you-should-use\n")),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"snippet"),"\u547d\u4ee4\u6765\u52a0\u8f7d\u4e00\u4e2a\u6216\u591a\u4e2a\u811a\u672c\u6587\u4ef6\u3002\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u52a0\u8f7d ohmyzsh \u4ed3\u5e93\u4e2d\u7684\u63d2\u4ef6\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u63d2\u4ef6\u5904\u4e8e\u4ed3\u5e93\u7684\u5b50\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728 snippet \u547d\u4ee4\u4e4b\u540e\u4f60\u53ef\u4ee5\u52a0\u8f7d\u672c\u5730\u6216\u8fdc\u7a0b\u7684\u811a\u672c\uff0c\u76f4\u63a5\u5199\u672c\u5730\u6587\u4ef6\u5730\u5740\u6216 URL \u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5e38\u7528\u7684\u4ed3\u5e93\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u522b\u540d\uff0c\u53ef\u4ee5\u4f7f\u7528\u7684\u522b\u540d\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PZT::"),"\uff0cPrezto"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PZTM::"),"\uff0cPrezto module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OMZ::"),"\uff0cOh My Zsh"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OMZP::"),"\uff0cOMZ plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OMZL::"),"\uff0cOMZ library"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OMZT::"),"\uff0cOMZ theme")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u6211\u4ece ohmyzsh \u4e2d\u52a0\u8f7d\u7684\u63d2\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.zshrc\n\nzinit snippet OMZP::safe-paste\nzinit snippet OMZP::sudo\n")),(0,l.kt)("p",null,"\u67d0\u4e9b\u63d2\u4ef6\u4e0d\u662f\u5355\u6587\u4ef6\u7684\uff0c\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u8fd8\u9700\u8981\u52a0\u8f7d\u5176\u5b83\u6587\u4ef6\uff0c\u6b64\u65f6\u4f60\u5c31\u9700\u8981\u52a0\u8f7d\u591a\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"zinit snippet"),"\u547d\u4ee4\u4e4b\u524d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"zinit ice"),"\u547d\u4ee4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"zinit ice"),"\u547d\u4ee4\u662f\u5bf9\u4e0b\u4e00\u53e5",(0,l.kt)("inlineCode",{parentName:"p"},"zinit"),"\u547d\u4ee4\u7684\u63cf\u8ff0\uff0c\u53ea\u5bf9\u4e0b\u4e00\u53e5\u547d\u4ee4\u751f\u6548\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"zinit ice"),"\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0",(0,l.kt)("inlineCode",{parentName:"p"},"zinit snippet"),"\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u5728\u52a0\u8f7d\u63d2\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"z"),"\u7684\u65f6\u5019\uff0c\u9664\u4e86\u52a0\u8f7d",(0,l.kt)("inlineCode",{parentName:"p"},"z.plugin.zsh"),"\u4e4b\u5916\uff0c\u8be5\u6587\u4ef6\u8fd8\u52a0\u8f7d\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"z.sh"),"\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u628a\u6574\u4e2a\u5b50\u76ee\u5f55\u4e0b\u8f7d\u5230\u672c\u5730\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"zinit ice svn"),"\u8868\u793a\u4e0b\u4e00\u53e5",(0,l.kt)("inlineCode",{parentName:"p"},"zinit"),"\u547d\u4ee4\u4f7f\u7528 svn \u4e0b\u8f7d\u6574\u4e2a\u5b50\u6587\u4ef6\u5939\u5230\u672c\u5730\uff0cGithub \u517c\u5bb9 svn \u534f\u8bae\u3002\u8fd9\u6837\u5728\u4f7f\u7528 z \u63d2\u4ef6\u7684\u65f6\u5019\u5c31\u4e0d\u4f1a\u51fa\u9519\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.zshrc\n\nzinit ice svn\nzinit snippet OMZP::z\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u66f4\u65b0\u63d2\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"zinit update --parallel\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4e3b\u9898"},"\u5b89\u88c5\u4e3b\u9898"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4f7f\u7528\u4e86 powerlevel10k",(0,l.kt)("sup",{parentName:"p",id:"fnref-2-6de7da"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-6de7da",className:"footnote-ref"},"2"))," \u4e3b\u9898\uff0c\u539f\u56e0\u5c31\u662f\u5b83\u542f\u52a8\u975e\u5e38\u5feb\u3002\u76f4\u63a5\u4f7f\u7528 zinit \u52a0\u8f7d\u4e3b\u9898\u3002"),(0,l.kt)("p",null,"\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},'zinit ice depth"1"'),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"depth"),"\u662f\u4f20\u9012\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"git clone"),"\u7684\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# ~/.zshrc\n\nzinit ice depth"1"\nzinit light romkatv/powerlevel10k\n')),(0,l.kt)("p",null,"\u91cd\u65b0\u5f00\u542f\u4e00\u4e2a zsh \u4f1a\u8bdd\u4f60\u5c31\u53ef\u4ee5\u770b\u5230 powerlevel10k \u7684\u521d\u59cb\u5316\u5411\u5bfc\u3002\u6839\u636e\u5411\u5bfc\u9009\u62e9\u4f60\u559c\u6b22\u7684\u6837\u5f0f\u5373\u53ef\uff0c\u8be5\u5411\u5bfc\u4f1a\u81ea\u52a8\u4fee\u6539\u4f60\u7684",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),"\u6587\u4ef6\uff0c\u52a0\u5165\u76f8\u5173\u7684\u542f\u52a8\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5982\u679c powerlevel10k \u7684\u521d\u59cb\u5316\u5411\u5bfc\u6ca1\u6709\u51fa\u73b0\u6216\u8005\u4f60\u60f3\u91cd\u65b0\u914d\u7f6e powerlevel10k\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"p10k configure\n")),(0,l.kt)("h2",{id:"\u5176\u4ed6\u4f18\u5316\u601d\u8def"},"\u5176\u4ed6\u4f18\u5316\u601d\u8def"),(0,l.kt)("p",null,"\u9664\u4e86\u66ff\u6362\u6389 ohmyzsh \u4e4b\u5916\uff0c\u8fd8\u6709\u5f88\u591a\u4f18\u5316 zsh \u542f\u52a8\u65f6\u95f4\u7684\u601d\u8def\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 nvm \u4f5c\u4e3a\u4f60\u7684 Node.js \u7248\u672c\u7ba1\u7406\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u505c\u6b62\u4f7f\u7528 nvm\uff0c\u5bfb\u627e\u5176\u4ed6\u66ff\u4ee3\u54c1\u4ee3\u66ff\u5b83\uff0c\u56e0\u4e3a\u5b83\u5b9e\u5728\u662f\u592a\u5f71\u54cd\u542f\u52a8\u901f\u5ea6\u4e86\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 fnm\uff0c\u517c\u5bb9",(0,l.kt)("inlineCode",{parentName:"p"},".nvmrc"),"\u914d\u7f6e\u6587\u4ef6\uff1b"),(0,l.kt)("p",null,"\u5728 Shell \u542f\u52a8\u6587\u4ef6\u4e2d\u5c3d\u91cf\u4e0d\u8981\u6267\u884c\u5916\u90e8\u547d\u4ee4\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"brew --prefix"),"\u547d\u4ee4\uff0c\u56e0\u4e3a\u4f60\u4e0d\u4f1a\u7ecf\u5e38\u66f4\u6539 Homebrew \u7684\u5b89\u88c5\u4f4d\u7f6e\uff0c\u6240\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"brew --prefix"),"\u7684\u7ed3\u679c\u66ff\u6362\u6389\u8be5\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5c3d\u91cf\u5c11\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"eval"),"\u547d\u4ee4\uff0c\u6bd4\u5982\u5728\u5f15\u5165 Homebrew \u7684\u65f6\u5019\u4f1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'eval "$(/opt/homebrew/bin/brew shellenv)"'),"\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/bin/brew shellenv"),"\u547d\u4ee4\u7684\u7ed3\u679c\u5199\u5165\u542f\u52a8\u6587\u4ef6\u800c\u4e0d\u662f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"eval"),"\u547d\u4ee4\u3002\u6bd4\u5982\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u66ff\u4ee3",(0,l.kt)("inlineCode",{parentName:"p"},"eval"),"\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export HOMEBREW_PREFIX="/opt/homebrew";\nexport HOMEBREW_CELLAR="/opt/homebrew/Cellar";\nexport HOMEBREW_REPOSITORY="/opt/homebrew";\nexport PATH="/opt/homebrew/bin:/opt/homebrew/sbin${PATH+:$PATH}";\nexport MANPATH="/opt/homebrew/share/man${MANPATH+:$MANPATH}:";\nexport INFOPATH="/opt/homebrew/share/info:${INFOPATH:-}";\nFPATH="/opt/homebrew/share/zsh/site-functions:${FPATH}"\n')),(0,l.kt)("h2",{id:"\u524d\u540e\u5bf9\u6bd4"},"\u524d\u540e\u5bf9\u6bd4"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"time"),"\u547d\u4ee4\u5bf9\u6bd4\u4e00\u4e0b\u5206\u522b\u4f7f\u7528 ohmyzsh \u548c\u4f7f\u7528 zinit \u7684 zsh \u52a0\u8f7d\u901f\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ohmyzsh\n/usr/bin/time zsh -i -c exit\n        0.37 real         0.18 user         0.12 sys\n\n# zinit\n/usr/bin/time zsh -i -c exit\n        0.12 real         0.07 user         0.03 sys\n")),(0,l.kt)("p",null,"\u6700\u7ec8\u53d1\u73b0\u4e24\u8005\u5b9e\u9645\u5dee\u8ddd\u5e76\u4e0d\u5927\uff0c\u63d0\u5347\u4f53\u9a8c\u5927\u90e8\u5206\u662f powerlevel10k \u4e3b\u9898\u7684\u529f\u52b3\uff0c\u4f60\u5728\u542f\u52a8 zsh \u4e4b\u540e\u7684\u77ac\u95f4\u5c31\u80fd\u770b\u89c1\u547d\u4ee4\u63d0\u793a\u7b26\u3002"),(0,l.kt)("p",null,"zinit \u8fd8\u53ef\u4ee5\u914d\u7f6e Turbo Mode\uff0c\u53ef\u4ee5\u8ba9\u63d2\u4ef6\u61d2\u52a0\u8f7d\uff0c\u5bf9\u4e8e\u52a0\u8f7d\u65f6\u95f4\u957f\u7684\u63d2\u4ef6\u975e\u5e38\u6709\u7528\u3002\u4e0d\u8fc7\u6211\u5728\u4f7f\u7528\u4e2d\u5e76\u6ca1\u6709\u914d\u7f6e\u61d2\u52a0\u8f7d\uff0c\u5373\u4f7f\u8fd9\u6837\uff0czinit \u7684\u52a0\u8f7d\u901f\u5ea6\u8fd8\u662f\u6bd4 ohmyzsh \u5feb\u7684\u3002"),(0,l.kt)("p",null,"\u6682\u65f6\u5c31\u5148\u7528 zinit \u548c powerlevel10k \u4e3b\u9898\u7684\u7ec4\u5408\u5427\uff0c\u611f\u89c9\u4e0d\u9519\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.aloxaf.com/2019/11/zplugin_tutorial/"},"\u52a0\u901f\u4f60\u7684 zsh \u2014\u2014 \u6700\u5f3a zsh \u63d2\u4ef6\u7ba1\u7406\u5668 zplugin/zinit \u6559\u7a0b - Aloxaf's Blog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/unixorn/awesome-zsh-plugins"},"unixorn/awesome-zsh-plugins: A collection of ZSH frameworks, plugins, themes and tutorials.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/gustavohellwig/gh-zsh"},"gustavohellwig/gh-zsh"))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-6de7da"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/zdharma-continuum/zinit"},"zdharma-continuum/zinit: \ud83c\udf3b Flexible and fast ZSH plugin manager"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1-6de7da",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2-6de7da"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/romkatv/powerlevel10k#zim"},"romkatv/powerlevel10k: A Zsh theme"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2-6de7da",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);