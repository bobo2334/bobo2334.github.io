"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1853],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=l(r),m=a,f=k["".concat(u,".").concat(m)]||k[m]||s[m]||o;return r?n.createElement(f,c(c({ref:t},i),{},{components:r})):n.createElement(f,c({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},62181:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),c=["components"],p={date:new Date("2023-03-02T00:00:00.000Z")},u="\u4f7f\u7528 vackup \u5907\u4efd Docker Volume",l={permalink:"/blog/backup-docker-volume-with-vackup",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/backup-docker-volume-with-vackup.md",source:"@site/blog/backup-docker-volume-with-vackup.md",title:"\u4f7f\u7528 vackup \u5907\u4efd Docker Volume",description:"\u7b80\u4ecb",date:"2023-03-02T00:00:00.000Z",formattedDate:"2023\u5e743\u67082\u65e5",tags:[],readingTime:1.855,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-02T00:00:00.000Z"},prevItem:{title:"\u4f7f\u7528 Hysteria \u5b9e\u73b0\u53cc\u8fb9\u52a0\u901f\uff0c\u4f18\u5316 SSH \u8fde\u63a5",permalink:"/blog/bilateral-acceleration-with-hysteria-to-optimize-ssh-connections"},nextItem:{title:"\u9002\u5408\u5728\u4ee3\u7801\u548c\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528\u7684\u5b57\u4f53",permalink:"/blog/fonts-for-use-in-code-and-command-line"}},i={authorsImageUrls:[]},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2}],k={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vackup"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1-6052bd"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-6052bd",className:"footnote-ref"},"1"))," \u662f\u4e00\u4e2a Shell \u811a\u672c\uff0c\u7528\u4e8e\u5907\u4efd Docker \u5377\u4e2d\u7684\u6570\u636e\uff0c\u5b83\u4f1a\u5c06\u5377\u4e2d\u7684\u6570\u636e\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"tar"),"\u547d\u4ee4\u6253\u5305\u3002"),(0,o.kt)("p",null,"vackup \u76ee\u524d\u5df2\u6210\u4e3a Docker Desktop \u7684\u5b98\u65b9\u63d2\u4ef6\uff0c\u5982\u679c\u4f60\u4f7f\u7528 Docker Desktop \u7684\u8bdd\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u4f7f\u7528\u5b83\uff0c\u5b83\u5728\u63d2\u4ef6\u4e2d\u5fc3\u540d\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Volumes Backup & Share"),(0,o.kt)("sup",{parentName:"p",id:"fnref-2-6052bd"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2-6052bd",className:"footnote-ref"},"2")),"\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"vackup \u662f\u4e00\u4e2a Shell \u811a\u672c\uff0c\u653e\u5728\u4efb\u610f\u4f4d\u7f6e\u7686\u53ef\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),"\u547d\u4ee4\u5c06\u5176\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u7136\u540e\u8d4b\u4e88\u5176\u6267\u884c\u6743\u9650\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://raw.githubusercontent.com/BretFisher/docker-vackup/main/vackup > /usr/local/bin/vackup\nchmod +x /usr/local/bin/vackup\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u8bbf\u95ee Github \u65f6\u6709\u7f51\u7edc\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Github \u955c\u50cf\u670d\u52a1\u4e0b\u8f7d\u6b64\u811a\u672c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL  https://ghproxy.com/https://raw.githubusercontent.com/BretFisher/docker-vackup/main/vackup > /usr/local/bin/vackup\nchmod +x /usr/local/bin/vackup\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5bfc\u51fa\n# vackup export VOLUME FILE\n./vackup export xxx_data xxx_data.tgz\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5bfc\u5165\n# vackup import FILE VOLUME\n./vackup import xxx_data.tgz xxx_data\n")),(0,o.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,o.kt)("p",null,"\u811a\u672c\u5185\u5bb9\u5e76\u4e0d\u591a\uff0c\u901a\u8fc7\u9605\u8bfb\u811a\u672c\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u3002"),(0,o.kt)("p",null,"\u5728\u5bfc\u51fa\u65f6\u4f7f\u7528\u6b64\u547d\u4ee4\u521b\u5efa\u4e86\u4e00\u4e2a busybox \u5bb9\u5668\uff0c\u6302\u8f7d\u4e86\u5f53\u524d\u6587\u4ef6\u5939\u5230\u5bb9\u5668\u4e2d\uff0c\u4f7f\u7528\u5176\u4e2d\u7684 tar \u547d\u4ee4\u6765\u521b\u5efa\u5f52\u6863\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u547d\u4ee4\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"$VOLUME_NAME"),"\u662f\u6570\u636e\u5377\u540d\u79f0\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"$FILE_NAME"),"\u662f\u5bfc\u51fa\u7684\u5f52\u6863\u6587\u4ef6\u540d\u79f0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm \\\n      -v "$VOLUME_NAME":/vackup-volume \\\n      -v "$(pwd)":/vackup \\\n      busybox \\\n      tar -zcvf /vackup/"$FILE_NAME" /vackup-volume\n')),(0,o.kt)("p",null,"\u5bfc\u5165\u7684\u539f\u7406\u548c\u5bfc\u51fa\u5dee\u4e0d\u591a\uff0c\u53ea\u4e0d\u8fc7\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"tar"),"\u547d\u4ee4\u7684\u53c2\u6570\u53d8\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm \\\n      -v "$VOLUME_NAME":/vackup-volume \\\n      -v "$(pwd)":/vackup \\\n      busybox \\\n      tar -xvzf /vackup/"$FILE_NAME" -C /;\n')),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-6052bd"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/BretFisher/docker-vackup"},"BretFisher/docker-vackup: Script to easily backup and restore docker volumes"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-6052bd",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2-6052bd"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/extensions/docker/volumes-backup-extension"},"Volumes Backup & Share - Official Extension | Docker Hub"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2-6052bd",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);