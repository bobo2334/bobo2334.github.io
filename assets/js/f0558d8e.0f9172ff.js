"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2917],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=i(n),u=o,d=f["".concat(c,".").concat(u)]||f[u]||m[u]||a;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],l={date:new Date("2022-06-18T00:00:00.000Z"),tags:["tencent-cos","docker","s3fs"]},c="\u4f7f\u7528 s3fs \u6302\u8f7d\u817e\u8baf\u4e91 COS \u4e2d\u7684\u5185\u5bb9",i={permalink:"/blog/mount-tencent-cos-using-s3fs",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/mount-tencent-cos-using-s3fs.md",source:"@site/blog/mount-tencent-cos-using-s3fs.md",title:"\u4f7f\u7528 s3fs \u6302\u8f7d\u817e\u8baf\u4e91 COS \u4e2d\u7684\u5185\u5bb9",description:"\u524d\u8a00",date:"2022-06-18T00:00:00.000Z",formattedDate:"2022\u5e746\u670818\u65e5",tags:[{label:"tencent-cos",permalink:"/blog/tags/tencent-cos"},{label:"docker",permalink:"/blog/tags/docker"},{label:"s3fs",permalink:"/blog/tags/s-3-fs"}],truncated:!0,authors:[],frontMatter:{date:"2022-06-18T00:00:00.000Z",tags:["tencent-cos","docker","s3fs"]},prevItem:{title:"\u5728 Proxmox VE \u4e2d\u5b89\u88c5\u7fa4\u6656 DSM",permalink:"/blog/install-synology-dsm-in-proxmox-ve"},nextItem:{title:"Proxmox VE \u5b89\u88c5\u540e\u914d\u7f6e",permalink:"/blog/proxmox-ve-post-installation"}},p={authorsImageUrls:[]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u9879\u76ee\u4ecb\u7ecd",id:"\u9879\u76ee\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}],f={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u4e4b\u524d\u5199\u8fc7\u4e00\u7bc7\u6587\u7ae0\u5173\u4e8e\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5185\u5bb9\u5230\u672c\u5730\uff0c\u5176\u4e2d\u4f7f\u7528\u5230\u4e86\u4e00\u6b3e\u540d\u4e3a cosfs \u7684\u8f6f\u4ef6\uff0c\u540e\u6765\u6211\u53d1\u73b0\u8be5\u8f6f\u4ef6\u662f s3fs \u7684\u4e00\u4e2a\u5206\u652f\u3002\u5e76\u4e14\u817e\u8baf\u4e91 COS \u517c\u5bb9 S3 \u7684 API\uff0c\u6240\u4ee5\u7d22\u6027\u76f4\u63a5\u7528 s3fs \u7b97\u4e86\u3002"),(0,a.kt)("p",null,"\u4e4b\u524d\u90a3\u7bc7\u6587\u7ae0\u4e2d\u4e5f\u7f3a\u5931\u4e86\u5f00\u673a\u81ea\u52a8\u6302\u8f7d\u7684\u90e8\u5206\uff0c\u6211\u6700\u8fd1\u53d1\u73b0\u4e86\u4e00\u4e2a\u5185\u542b s3fs \u7684 Docker \u955c\u50cf\uff0c\u53ef\u4ee5\u901a\u8fc7 Docker \u5bb9\u5668\u81ea\u52a8\u542f\u52a8\u6765\u5b9e\u73b0\u5f00\u673a\u81ea\u52a8\u6302\u8f7d\u3002"),(0,a.kt)("h2",{id:"\u9879\u76ee\u4ecb\u7ecd"},"\u9879\u76ee\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"docker-s3fs-client",(0,a.kt)("sup",{parentName:"em",id:"fnref-1-6b4b23"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1-6b4b23",className:"footnote-ref"},"1")))," \u63d0\u4f9b\u4e86\u5185\u5d4c s3fs \u7684 Docker \u955c\u50cf\uff0c\u8be5\u955c\u50cf\u53ef\u4ee5\u628a\u8fdc\u7a0b\u7684 Amazon S3 \u4ed3\u5e93\u7684\u5185\u5bb9\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u3002"),(0,a.kt)("p",null,"\u817e\u8baf\u4e91 COS \u517c\u5bb9 Amazon S3 \u7684 API\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528 s3fs \u6302\u8f7d\u817e\u8baf\u4e91 COS \u4e2d\u7684\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u4f7f\u7528 Docker Compose \u6765\u914d\u7f6e\u5e76\u90e8\u7f72 docker-s3fs-client \u5bb9\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="s3fs/docker-compose.yml"',title:'"s3fs/docker-compose.yml"'},"version: '3.8'\nservices:\n  s3fs:\n    image: efrecon/s3fs\n    restart: unless-stopped\n    cap_add:\n      - SYS_ADMIN\n    security_opt:\n      - 'apparmor:unconfined'\n    devices:\n      - /dev/fuse\n    volumes:\n      - /mnt/s3fs:/opt/s3fs/bucket:rshared\n    environment:\n      AWS_S3_BUCKET: xxxx-xxxxxx\n      AWS_S3_ACCESS_KEY_ID: xxxxxxxxxxxxxxxxxx\n      AWS_S3_SECRET_ACCESS_KEY: xxxxxxxxxxxxxxxxxx\n      AWS_S3_URL: https://cos.ap-shanghai.myqcloud.com\n")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"volumes"),"\u90e8\u5206\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/s3fs:/opt/s3fs/bucket:rshared"),"\u610f\u5473\u628a\u5bbf\u4e3b\u673a",(0,a.kt)("inlineCode",{parentName:"p"},"mnt/s3fs"),"\u6587\u4ef6\u5939\u6302\u8f7d\u5230\u5bb9\u5668\u91cc\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u63d0\u524d\u624b\u52a8\u521b\u5efa\u8be5\u6587\u4ef6\u5939\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/s3fs/bucket"),"\u662f\u56fa\u5b9a\u7684\uff0c\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"rshared"),"\u4e5f\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u4e2d\u914d\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u770b\u540d\u79f0\u4e00\u822c\u90fd\u77e5\u9053\u4ec0\u4e48\u610f\u601d\uff0c\u5728\u6302\u8f7d\u817e\u8baf\u4e91 COS \u7684\u65f6\u5019\u53ef\u4ee5\u53c2\u8003\u5176 ",(0,a.kt)("em",{parentName:"p"},"\u76f8\u5173\u6587\u6863 ",(0,a.kt)("sup",{parentName:"em",id:"fnref-2-6b4b23"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2-6b4b23",className:"footnote-ref"},"2"))),"\u3002"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8\u5bb9\u5668\uff0c\u6ce8\u610f\u5728\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"s3fs"),"\u6587\u4ef6\u5939\u4e2d\u6267\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u6b63\u786e\u7684\u8bdd\uff0c\u5bb9\u5668\u6b63\u5e38\u542f\u52a8\u540e\u5c31\u80fd\u5728\u5bbf\u4e3b\u673a\u4e2d\u6b63\u5e38\u8bbf\u95ee\u817e\u8baf\u4e91 COS \u7684\u5185\u5bb9\u4e86\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u4e0a\u9762\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u5728\u5bbf\u4e3b\u673a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"mnt/s3fs"),"\u76ee\u5f55\u4e2d\u8bbf\u95ee\u88ab\u6302\u8f7d\u7684\u817e\u8baf\u4e91 COS \u7684\u5185\u5bb9\u3002\u5982\u679c\u4e0d\u80fd\u6b63\u786e\u8bbf\u95ee\u8bf7\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\u6392\u67e5\u9519\u8bef\u3002"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1-6b4b23"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/efrecon/docker-s3fs-client"},"efrecon/docker-s3fs-client: Alpine-based s3fs client: mount from container, make available to other containers"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1-6b4b23",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2-6b4b23"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/436/41284"},"\u5bf9\u8c61\u5b58\u50a8 \u5728\u517c\u5bb9 S3 \u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u4f7f\u7528 COS \u7684\u901a\u7528\u914d\u7f6e - \u6700\u4f73\u5b9e\u8df5 - \u6587\u6863\u4e2d\u5fc3 - \u817e\u8baf\u4e91"),(0,a.kt)("a",{parentName:"li",href:"#fnref-2-6b4b23",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);