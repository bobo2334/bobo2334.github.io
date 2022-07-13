"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6905],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=l,h=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34682:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),i=["components"],o={date:new Date("2022-06-27T00:00:00.000Z"),tags:["linux","shell"]},u="\u4fee\u590d PATH \u73af\u5883\u53d8\u91cf",p={permalink:"/blog/fix-path-environment",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/fix-path-environment.md",source:"@site/blog/fix-path-environment.md",title:"\u4fee\u590d PATH \u73af\u5883\u53d8\u91cf",description:"\u524d\u8a00",date:"2022-06-27T00:00:00.000Z",formattedDate:"2022\u5e746\u670827\u65e5",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"shell",permalink:"/blog/tags/shell"}],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-06-27T00:00:00.000Z",tags:["linux","shell"]},prevItem:{title:"\u4f7f\u7528 zinit \u4f5c\u4e3a zsh \u7684\u63d2\u4ef6\u7ba1\u7406\u5668",permalink:"/blog/zsh-with-zinit"},nextItem:{title:"\u8ba1\u7b97 zsh \u542f\u52a8\u65f6\u95f4",permalink:"/blog/calculating-zsh-startup-time"}},c={authorsImageUrls:[]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4e34\u65f6\u4fee\u590d",id:"\u4e34\u65f6\u4fee\u590d",level:2},{value:"\u6392\u67e5\u9519\u8bef",id:"\u6392\u67e5\u9519\u8bef",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],f={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u6298\u817e Shell \u7684\u65f6\u5019\u641e\u574f\u4e86 PATH \u73af\u5883\u53d8\u91cf\uff0c\u5bfc\u81f4\u6240\u6709\u547d\u4ee4\u90fd\u627e\u4e0d\u5230\u3002"),(0,a.kt)("h2",{id:"\u4e34\u65f6\u4fee\u590d"},"\u4e34\u65f6\u4fee\u590d"),(0,a.kt)("p",null,"\u5728 Shell \u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5728\u6b64\u6b21\u4f1a\u8bdd\u4e2d\u8bbe\u7f6e PATH\u3002\u8fd9\u6837\u4e00\u4e9b\u57fa\u7840\u5de5\u5177\u5c31\u80fd\u5de5\u4f5c\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin\n")),(0,a.kt)("h2",{id:"\u6392\u67e5\u9519\u8bef"},"\u6392\u67e5\u9519\u8bef"),(0,a.kt)("p",null,"\u4ece Shell \u542f\u52a8\u6587\u4ef6\u4e2d\u6392\u67e5\u9519\u8bef\uff0c\u770b\u770b\u6700\u8fd1\u4fee\u6539\u4e86\u4ec0\u4e48\uff0c\u4ee5\u53ca\u4ec0\u4e48\u547d\u4ee4\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230 PATH \u53d8\u91cf\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Bash\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u6392\u67e5\u4e0b\u9762\u7684\u6587\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/profile"),(0,a.kt)("li",{parentName:"ul"},"/etc/bash.bashrc"),(0,a.kt)("li",{parentName:"ul"},"/etc/profile.d/*"),(0,a.kt)("li",{parentName:"ul"},"~/.profile"),(0,a.kt)("li",{parentName:"ul"},"~/.bashrc")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Zsh\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u6392\u67e5\u4e0b\u9762\u7684\u6587\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/etc/zprofile"),(0,a.kt)("li",{parentName:"ul"},"/etc/zshrc"),(0,a.kt)("li",{parentName:"ul"},"~/.zprofile"),(0,a.kt)("li",{parentName:"ul"},"~/.zshrc")),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/u012102306/article/details/51036561"},"linux \u4e0b\u73af\u5883\u53d8\u91cf PATH \u8bbe\u7f6e\u9519\u8bef\u7684\u8865\u6551","_","\u94ed\u970f\u7684\u535a\u5ba2-CSDN \u535a\u5ba2","_","linux \u73af\u5883\u53d8\u91cf\u4fee\u590d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html"},"Bash Startup Files (Bash Reference Manual)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apple.stackexchange.com/questions/388622/zsh-zprofile-zshrc-zlogin-what-goes-where"},"macos - ZSH: .zprofile, .zshrc, .zlogin - What goes where? - Ask Different"))))}m.isMDXComponent=!0}}]);