"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1478],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return f}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return a?t.createElement(d,i(i({ref:n},c),{},{components:a})):t.createElement(d,i({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48476:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var t=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],o={date:new Date("2022-07-02T00:00:00.000Z"),tags:["java","sdkman"]},s="\u4f7f\u7528 SDKMAN \u5728 M1 Mac \u4e0a\u5b89\u88c5 JDK",u={permalink:"/blog/using-sdkman-to-install-jdk-on-m1-mac",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/using-sdkman-to-install-jdk-on-m1-mac.md",source:"@site/blog/using-sdkman-to-install-jdk-on-m1-mac.md",title:"\u4f7f\u7528 SDKMAN \u5728 M1 Mac \u4e0a\u5b89\u88c5 JDK",description:"\u524d\u8a00",date:"2022-07-02T00:00:00.000Z",formattedDate:"2022\u5e747\u67082\u65e5",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"sdkman",permalink:"/blog/tags/sdkman"}],readingTime:3.785,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-07-02T00:00:00.000Z",tags:["java","sdkman"]},prevItem:{title:"SSH \u7aef\u53e3\u8f6c\u53d1",permalink:"/blog/ssh-port-forwarding"},nextItem:{title:"\u4f7f\u7528 zinit \u4f5c\u4e3a zsh \u7684\u63d2\u4ef6\u7ba1\u7406\u5668",permalink:"/blog/zsh-with-zinit"}},c={authorsImageUrls:[]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],m={toc:p};function f(e){var n=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"SDKMAN \u662f\u4e00\u7cfb\u5217 Bash \u811a\u672c\uff0c\u53ef\u4ee5\u7528\u6765\u7ba1\u7406\u5404\u4e2a\u7248\u672c\u7684 JDK\u3002\u5728 M1 \u82af\u7247\u7684 Mac \u4e2d\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5b89\u88c5 ARM \u7248\u672c\u7684 JDK\uff0c\u5e76\u5728\u5404\u4e2a\u7248\u672c\u4e4b\u95f4\u5207\u6362\u3002"),(0,l.kt)("p",null,"SDKMAN \u4e5f\u53ef\u4ee5\u7528\u6765\u5b89\u88c5\u5176\u4ed6\u5de5\u5177\uff0c\u5982 Maven\u3001Gradle \u7b49\uff0c\u4f46\u662f\u76ee\u524d\u6211\u7528\u4e0d\u4e0a\uff0c\u6211\u53ea\u7528\u5b83\u6765\u7ba1\u7406 JDK\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"SDKMAN")," ",(0,l.kt)("sup",{parentName:"p",id:"fnref-1-a8b51a"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-a8b51a",className:"footnote-ref"},"1"))," \u662f\u4e00\u7cfb\u5217 Bash \u811a\u672c\uff0c\u6240\u4ee5\u6709 Bash \u73af\u5883\u7684\u7cfb\u7edf\u5c31\u80fd\u8fd0\u884c SDKMAN\uff0c\u6bd4\u5982 Linux\u3001macOS\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u7684\u5b89\u88c5\u811a\u672c\u6765\u5b89\u88c5 SDKMAN\u3002\u6539\u811a\u672c\u4f1a\u628a SDKMAN \u7684\u76f8\u5173\u811a\u672c\u4e0b\u8f7d\u81f3",(0,l.kt)("inlineCode",{parentName:"p"},"~/.sdkman"),"\u6587\u4ef6\u5939\u4e2d\u3002\u4e4b\u540e\u5b83\u4f1a\u4fee\u6539\u4f60\u7684 Shell \u542f\u52a8\u6587\u4ef6\uff0c\u5c06 SDKMAN \u7684\u521d\u59cb\u5316\u547d\u4ee4\u653e\u5165\u5176\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s "https://get.sdkman.io" | bash\n')),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 Shell \u542f\u52a8\u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),"/",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),"/...\uff09\u6ca1\u6709\u88ab\u9644\u52a0 SDKMAN \u7684\u521d\u59cb\u5316\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u653e\u5165\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'source "$HOME/.sdkman/bin/sdkman-init.sh"\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"\u91cd\u65b0\u6253\u5f00\u4e00\u4e2a\u65b0\u7684 Shell \u4f1a\u8bdd\uff0c\u5982\u679c\u4f60\u6b63\u786e\u5b8c\u6210\u4e86\u5b89\u88c5\u8fc7\u7a0b\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u6267\u884c\u547d\u4ee4",(0,l.kt)("inlineCode",{parentName:"p"},"sdk"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5217\u51fa\u53ef\u4ee5\u5b89\u88c5\u7684 JDK \u53d1\u884c\u7248\nsdk ls java\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"================================================================================\nAvailable Java Versions for macOS ARM 64bit\n================================================================================\n Vendor        | Use | Version      | Dist    | Status     | Identifier\n--------------------------------------------------------------------------------\n Corretto      |     | 18.0.1       | amzn    |            | 18.0.1-amzn\n               |     | 17.0.3.6.1   | amzn    |            | 17.0.3.6.1-amzn\n               |     | 11.0.15.9.1  | amzn    |            | 11.0.15.9.1-amzn\n               |     | 8.332.08.1   | amzn    |            | 8.332.08.1-amzn\n Gluon         |     | 22.1.0.1.r17 | gln     |            | 22.1.0.1.r17-gln\n               |     | 22.1.0.1.r11 | gln     |            | 22.1.0.1.r11-gln\n GraalVM       |     | 22.1.0.r17   | grl     | installed  | 22.1.0.r17-grl\n               |     | 22.1.0.r11   | grl     |            | 22.1.0.r11-grl\n Java.net      |     | 20.ea.4      | open    |            | 20.ea.4-open\n               |     | 20.ea.3      | open    |            | 20.ea.3-open\n               |     | 19.ea.29     | open    |            | 19.ea.29-open\n               |     | 19.ea.28     | open    |            | 19.ea.28-open\n               |     | 18.0.1.1     | open    |            | 18.0.1.1-open\n Liberica      |     | 18.0.1.1.fx  | librca  |            | 18.0.1.1.fx-librca\n               |     | 18.0.1.1     | librca  |            | 18.0.1.1-librca\n               |     | 17.0.3.1.fx  | librca  |            | 17.0.3.1.fx-librca\n               |     | 17.0.3.1     | librca  |            | 17.0.3.1-librca\n               |     | 11.0.15.1.fx | librca  |            | 11.0.15.1.fx-librca\n               |     | 11.0.15.1    | librca  |            | 11.0.15.1-librca\n               |     | 8.0.333.fx   | librca  |            | 8.0.333.fx-librca\n               |     | 8.0.333      | librca  |            | 8.0.333-librca\n Microsoft     |     | 17.0.3       | ms      |            | 17.0.3-ms\n               |     | 11.0.15      | ms      |            | 11.0.15-ms\n Oracle        |     | 18.0.1       | oracle  |            | 18.0.1-oracle\n               |     | 17.0.3       | oracle  |            | 17.0.3-oracle\n SapMachine    |     | 18.0.1.1     | sapmchn |            | 18.0.1.1-sapmchn\n               |     | 17.0.3       | sapmchn |            | 17.0.3-sapmchn\n               |     | 17.0.3.0.1   | sapmchn |            | 17.0.3.0.1-sapmchn\n               |     | 17.0.2       | sapmchn |            | 17.0.2-sapmchn\n Semeru        |     | 18.0.1.1     | sem     |            | 18.0.1.1-sem\n               |     | 17.0.3       | sem     |            | 17.0.3-sem\n               |     | 11.0.15      | sem     |            | 11.0.15-sem\n Temurin       |     | 18.0.1       | tem     |            | 18.0.1-tem\n               |     | 17.0.3       | tem     |            | 17.0.3-tem\n               |     | 11.0.15      | tem     |            | 11.0.15-tem\n Zulu          |     | 18.0.1       | zulu    |            | 18.0.1-zulu\n               |     | 18.0.1.fx    | zulu    |            | 18.0.1.fx-zulu\n               |     | 17.0.3       | zulu    | installed  | 17.0.3-zulu\n               |     | 17.0.3.fx    | zulu    |            | 17.0.3.fx-zulu\n               |     | 11.0.15      | zulu    | installed  | 11.0.15-zulu\n               |     | 11.0.15.fx   | zulu    |            | 11.0.15.fx-zulu\n               | >>> | 8.0.332      | zulu    | installed  | 8.0.332-zulu\n               |     | 8.0.332.fx   | zulu    |            | 8.0.332.fx-zulu\n================================================================================\nOmit Identifier to install default version 17.0.3-tem:\n    $ sdk install java\nUse TAB completion to discover available versions\n    $ sdk install java [TAB]\nOr install a specific version by Identifier:\n    $ sdk install java 17.0.3-tem\nHit Q to exit this list view\n================================================================================\n(END)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 zulu jdk 8.0.332\nsdk install java 8.0.332-zulu\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u628a 8.0.332-zulu \u52a0\u5165\u73af\u5883\u53d8\u91cf\nsdk use java 8.0.332-zulu\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u73b0\u5728\u4f7f\u7528\u7684\u54ea\u4e2a JDK\nsdk current java\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5378\u8f7d 8.0.332-zulu\nsdk uninstall java 8.0.332-zulu\n")),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-a8b51a"},(0,l.kt)("a",{parentName:"li",href:"https://sdkman.io/"},"Home - SDKMAN! the Software Development Kit Manager"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1-a8b51a",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);