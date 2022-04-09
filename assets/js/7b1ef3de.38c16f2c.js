"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8519],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(b,l(l({ref:n},u),{},{components:t})):r.createElement(b,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6439:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={date:new Date("2022-02-25T00:00:00.000Z"),tags:["nodejs","linux"]},i="Nodebrew\uff1aNode.js \u5b89\u88c5\u4ee5\u53ca\u7248\u672c\u5207\u6362",s={permalink:"/blog/nodebrew-the-nodejs-version-manager",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/nodebrew-the-nodejs-version-manager.md",source:"@site/blog/nodebrew-the-nodejs-version-manager.md",title:"Nodebrew\uff1aNode.js \u5b89\u88c5\u4ee5\u53ca\u7248\u672c\u5207\u6362",description:"\u524d\u8a00",date:"2022-02-25T00:00:00.000Z",formattedDate:"2022\u5e742\u670825\u65e5",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"linux",permalink:"/blog/tags/linux"}],truncated:!0,authors:[],frontMatter:{date:"2022-02-25T00:00:00.000Z",tags:["nodejs","linux"]},prevItem:{title:"Scoop\uff1a\u7528 aria2 \u52a0\u901f\u4e0b\u8f7d",permalink:"/blog/scoop-with-aria2-for-multi-thread-download"},nextItem:{title:"Linuxbrew\uff1aLinux \u4e0a\u7684 Homebrew",permalink:"/blog/linuxbrew-the-homebrew-on-linux"}},u={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b89\u88c5\u4f4d\u7f6e",id:"\u5b89\u88c5\u4f4d\u7f6e",level:3},{value:"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5",id:"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5",level:3},{value:"\u901a\u8fc7 Homebrew \u6765\u5b89\u88c5",id:"\u901a\u8fc7-homebrew-\u6765\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u5728\u8bb8\u591a Linux \u5305\u7ba1\u7406\u5668\u4e2d Node.js \u7684\u7248\u672c\u6bd4\u8f83\u6df7\u4e71\uff0c\u6216\u8005\u5728\u5b98\u65b9\u8f6f\u4ef6\u4ed3\u5e93\u4e2d\u4e0d\u5b58\u5728 Node.js \u8f6f\u4ef6\u5305\uff1b\u81ea\u5df1\u52a8\u624b\u5b89\u88c5\u53c8\u6bd4\u8f83\u7e41\u7410\uff1b\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u9700\u8981\u5207\u6362 Node.js \u7248\u672c\u5c31\u66f4\u9ebb\u70e6\u4e86\uff0c\u8fd9\u65f6 Nodebrew",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002"),(0,o.kt)("p",null,"Nodebrew \u662f Node.js \u7248\u672c\u7ba1\u7406\u5668\uff0c\u7528 Perl \u7f16\u5199\uff0c\u53ef\u4ee5\u7b80\u5316\u4f60\u5173\u4e8e Node.js \u5b89\u88c5\u3001\u5378\u8f7d\u3001\u7248\u672c\u7ba1\u7406\u7b49\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"Nodebrew \u6ca1\u6709\u4e3a Windows \u800c\u8bbe\u8ba1\uff0c\u4e0d\u652f\u6301\u5728 Windows \u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"Nodebrew \u7684\u5b89\u88c5\u8fc7\u7a0b\u5c31\u662f\u628a Perl \u811a\u672c\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u7136\u540e\u5c06\u5176\u6240\u5728\u7684\u76ee\u5f55\u52a0\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"\u4e2d\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u4f4d\u7f6e"},"\u5b89\u88c5\u4f4d\u7f6e"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,o.kt)("inlineCode",{parentName:"p"},"NODEBREW_ROOT"),"\u6765\u6307\u5b9a Nodebrew \u7684\u5b89\u88c5\u4f4d\u7f6e\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u7701\u7565\u8fd9\u4e00\u6b65\u9aa4\uff0c\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u73af\u5883\u53d8\u91cf\uff0cNodebrew \u4f1a\u9ed8\u8ba4\u5b89\u88c5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.nodebrew"),"\u3002"),(0,o.kt)("h3",{id:"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5"},"\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u5b89\u88c5"),(0,o.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u4e0b\u8f7d Nodebrew \u5230\u672c\u5730\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L git.io/nodebrew | perl - setup\n")),(0,o.kt)("p",null,"\u4e4b\u540e\u4f60\u8fd8\u9700\u8981\u5c06\u5176\u52a0\u5165\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"\u4e2d\u3002\u4f60\u9700\u8981\u5c06\u4e0b\u9762\u7684\u547d\u4ee4\uff08\u4e8c\u9009\u4e00\uff09\u52a0\u5165\u5230\u4f60\u7684 Shell \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/profile"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"~/.profile"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u7b49\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Node.js \u5b89\u88c5\u5728\u7528\u6237\u76ee\u5f55\uff0c\u6bcf\u4e2a\u7528\u6237\u72ec\u7acb\nexport PATH=$HOME/.nodebrew/current/bin:$PATH\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Node.js \u5b89\u88c5\u5728\u7edf\u4e00\u76ee\u5f55\uff0c\u6240\u6709\u7528\u6237\u5171\u7528\n# \u8bf7\u4fee\u6539 NODEBREW_ROOT \u4e3a\u4f60\u671f\u671b\u7684\u5b89\u88c5\u4f4d\u7f6e\nexport NODEBREW_ROOT=/somewhere\nexport PATH=$NODEBREW_ROOT/current/bin:$PATH\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u5c31\u662f\u4f60\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u4fee\u6539\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u3002\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u91cd\u65b0\u767b\u5f55\u7ec8\u7aef\u6765\u4f7f\u914d\u7f6e\u751f\u6548\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source /etc/profile\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u521d\u59cb\u5316 Nodebrew \u6587\u4ef6\u5939\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nodebrew setup_dirs\n")),(0,o.kt)("h3",{id:"\u901a\u8fc7-homebrew-\u6765\u5b89\u88c5"},"\u901a\u8fc7 Homebrew \u6765\u5b89\u88c5"),(0,o.kt)("p",null,"Homebrew",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u662f\u4e00\u4e2a\u5305\u7ba1\u7406\u5668\uff0c\u7531 Ruby \u7f16\u5199\uff0c\u53ef\u4ee5\u5728 macOS \u6216 Linux \u5e73\u53f0\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"brew"),"\u547d\u4ee4\u5b89\u88c5 Nodebrew\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install nodebrew\n")),(0,o.kt)("p",null,"\u4e4b\u540e\u4f60\u8fd8\u9700\u8981\u5c06\u5176\u52a0\u5165\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"\u4e2d\u3002\u4f60\u9700\u8981\u5c06\u4e0b\u9762\u7684\u547d\u4ee4\uff08\u4e8c\u9009\u4e00\uff09\u52a0\u5165\u5230\u4f60\u7684 Shell \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/profile"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"~/.profile"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc"),"\u7b49\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Node.js \u5b89\u88c5\u5728\u7528\u6237\u76ee\u5f55\uff0c\u6bcf\u4e2a\u7528\u6237\u72ec\u7acb\nexport PATH=$HOME/.nodebrew/current/bin:$PATH\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Node.js \u5b89\u88c5\u5728\u7edf\u4e00\u76ee\u5f55\uff0c\u6240\u6709\u7528\u6237\u5171\u7528\nexport NODEBREW_ROOT=$HOMEBREW_PREFIX/var/nodebrew\nexport PATH=$NODEBREW_ROOT/current/bin:$PATH\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u5c31\u662f\u4f60\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u4fee\u6539\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u3002\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u91cd\u65b0\u767b\u5f55\u7ec8\u7aef\u6765\u4f7f\u914d\u7f6e\u751f\u6548\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source /etc/profile\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u521d\u59cb\u5316 Nodebrew \u6587\u4ef6\u5939\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nodebrew setup_dirs\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u5b89\u88c5\u5e76\u4f7f\u7528\u6700\u65b0\u7a33\u5b9a\u7248\u7684 Node.js\u3002\u4e4b\u540e",(0,o.kt)("inlineCode",{parentName:"p"},"node"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),"\u547d\u4ee4\u5c31\u53ef\u4ee5\u7528\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nodebrew install stable\nnodebrew use stable\n")),(0,o.kt)("p",null,"\u66f4\u591a\u4f7f\u7528\u5e2e\u52a9\u8bf7\u53c2\u8003\u5176 Github \u4ed3\u5e93 ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u9875\u9762\u548c\u547d\u4ee4\u884c\u4e2d\u63d0\u4f9b\u7684\u8bf4\u660e\u4fe1\u606f\u3002"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hokaccha/nodebrew"},"hokaccha/nodebrew: Node.js version manager"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"The Missing Package Manager for macOS (or Linux) \u2014 Homebrew"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);