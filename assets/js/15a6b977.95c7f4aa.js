"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3100],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,s=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(s,c(c({ref:t},p),{},{components:r})):n.createElement(s,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,c[1]=d;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31174:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),c=["components"],d={},i="\u4f18\u96c5\u5730\u91cd\u8f7d Caddyfile",l={permalink:"/blog/2022/01/23/reload-caddyfile-gracefully",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/2022-01-23-reload-caddyfile-gracefully.md",source:"@site/blog/2022-01-23-reload-caddyfile-gracefully.md",title:"\u4f18\u96c5\u5730\u91cd\u8f7d Caddyfile",description:"\u524d\u8a00",date:"2022-01-23T00:00:00.000Z",formattedDate:"2022\u5e741\u670823\u65e5",tags:[],readingTime:1.2,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"\u5728 Linux \u4e2d\u5b89\u88c5 Homebrew",permalink:"/blog/2022/02/24/linuxbrew-the-homebrew-on-linux"},nextItem:{title:"\u4f7f\u7528 Caddy \u81ea\u52a8\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66",permalink:"/blog/2022/01/22/wildcard-certificates-with-caddy"}},p={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"Docker",id:"docker",level:2},{value:"Docker Compose",id:"docker-compose",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u4fee\u6539 Caddyfile \u4e4b\u540e\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8 Caddy \u670d\u52a1\uff0cCaddy \u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"caddy reload"),"\u547d\u4ee4\u53ef\u4ee5\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u8bb0\u5f55\u4e24\u4e2a\u811a\u672c\u7528\u4e8e\u683c\u5f0f\u5316 Caddyfile \u5e76\u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002\u811a\u672c\u7684\u5185\u5bb9\u53ef\u80fd\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4f5c\u67d0\u4e9b\u4fee\u6539\u3002"),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"\u547d\u4ee4\u542f\u52a8 Caddy \u5bb9\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u811a\u672c\u6765\u8ba9 Caddy \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002\u8be5\u811a\u672c\u5185\u5bb9\u53c2\u8003\u4e8e Caddy Docker \u955c\u50cf\u6587\u6863 ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-801bfb"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-801bfb",className:"footnote-ref"},"1")),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!bin/bash\ncaddy_container_id=$(docker ps | grep caddy | awk '{print $1;}')\ndocker exec -w /etc/caddy $caddy_container_id caddy fmt --overwrite Caddyfile\ndocker exec -w /etc/caddy $caddy_container_id caddy reload\n")),(0,o.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u547d\u4ee4\u542f\u52a8 Caddy \u5bb9\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u811a\u672c\u6765\u8ba9 Caddy \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u3002\u8be5\u811a\u672c\u9700\u8981\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u4e0b\uff0c\u5e76\u5728\u8be5\u76ee\u5f55\u4e0b\u6267\u884c\u6b64\u811a\u672c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!bin/bash\ndocker-compose exec -w /etc/caddy caddy caddy fmt --overwrite Caddyfile\ndocker-compose exec -w /etc/caddy caddy caddy reload\n")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-801bfb"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/caddy"},"Caddy - Official Image | Docker Hub"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-801bfb",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);