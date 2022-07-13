"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5318],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=p(a),f=r,d=k["".concat(c,".").concat(f)]||k[f]||m[f]||o;return a?n.createElement(d,l(l({ref:t},s),{},{components:a})):n.createElement(d,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},72129:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=["components"],i={date:new Date("2022-06-18T00:00:00.000Z"),tags:["restic","docker","tencent-cos"]},c="\u4f7f\u7528 restic \u5b9a\u65f6\u5907\u4efd\u6587\u4ef6",p={permalink:"/blog/restic-scheduled-backup",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/restic-scheduled-backup.md",source:"@site/blog/restic-scheduled-backup.md",title:"\u4f7f\u7528 restic \u5b9a\u65f6\u5907\u4efd\u6587\u4ef6",description:"\u524d\u8a00",date:"2022-06-18T00:00:00.000Z",formattedDate:"2022\u5e746\u670818\u65e5",tags:[{label:"restic",permalink:"/blog/tags/restic"},{label:"docker",permalink:"/blog/tags/docker"},{label:"tencent-cos",permalink:"/blog/tags/tencent-cos"}],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-06-18T00:00:00.000Z",tags:["restic","docker","tencent-cos"]},prevItem:{title:"Proxmox VE \u5b89\u88c5\u540e\u914d\u7f6e",permalink:"/blog/proxmox-ve-post-installation"},nextItem:{title:"restic\uff1a\u8f7b\u91cf\u3001\u8de8\u5e73\u53f0\u7684\u589e\u91cf\u5907\u4efd\u5de5\u5177",permalink:"/blog/restic-backup-tool"}},s={authorsImageUrls:[]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u9879\u76ee\u4ecb\u7ecd",id:"\u9879\u76ee\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u542f\u52a8\u5bb9\u5668",id:"\u542f\u52a8\u5bb9\u5668",level:2},{value:"\u6d4b\u8bd5\u914d\u7f6e",id:"\u6d4b\u8bd5\u914d\u7f6e",level:2},{value:"\u66f4\u591a\u7528\u6cd5",id:"\u66f4\u591a\u7528\u6cd5",level:2}],k={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"restic \u4e0d\u4f1a\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u6ca1\u6709\u5b9a\u65f6\u5907\u4efd\u7684\u529f\u80fd\u3002\u5982\u679c\u4f60\u6709\u5b9a\u65f6\u5907\u4efd\u6587\u4ef6\u7684\u9700\u6c42\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 lobaro/restic-backup-docker \u9879\u76ee\uff0c\u8fd9\u4e2a\u9879\u76ee\u63d0\u4f9b\u4e86\u4e00\u4e2a Docker \u955c\u50cf\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u4f7f\u7528 restic \u5b9a\u65f6\u8fdb\u884c\u6587\u4ef6\u5907\u4efd\u3002"),(0,o.kt)("h2",{id:"\u9879\u76ee\u4ecb\u7ecd"},"\u9879\u76ee\u4ecb\u7ecd"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"lobaro/restic-backup-docker",(0,o.kt)("sup",{parentName:"em",id:"fnref-1-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-f2a728",className:"footnote-ref"},"1")))," \u662f\u4e00\u4e2a Docker \u955c\u50cf\uff0c\u955c\u50cf\u4e2d\u5305\u542b ",(0,o.kt)("em",{parentName:"p"},"restic",(0,o.kt)("sup",{parentName:"em",id:"fnref-2-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2-f2a728",className:"footnote-ref"},"2")))," \u548c cron\uff0c\u53ef\u4ee5\u901a\u8fc7 cron \u6765\u5b9a\u65f6\u6267\u884c restic \u7684\u5907\u4efd\u4efb\u52a1\u3002\u5bb9\u5668\u7684\u914d\u7f6e\u90fd\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u6765\u5b8c\u6210\u3002\u4f60\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff0c\u6b63\u786e\u914d\u7f6e\u540e\u5c31\u53ef\u4ee5\u5b9a\u671f\u6267\u884c restic \u7684\u5907\u4efd\u4efb\u52a1\u4e86\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u628a\u8981\u5907\u4efd\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d",(0,o.kt)("inlineCode",{parentName:"li"},"/data"),"\u76ee\u5f55\u4e0b\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u597d restic \u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e cron \u8868\u8fbe\u5f0f\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,o.kt)("p",null,"\u4e0b\u9762\u6f14\u793a\u4f7f\u7528 Docker Compose \u914d\u7f6e\u8fd0\u884c restic-backup-docker \u5bb9\u5668\uff0c\u5b9a\u65f6\u5907\u4efd\u6587\u4ef6\u5230\u817e\u8baf\u4e91 COS \u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="restic-backup-docker/docker-compose.yml" showLineNumbers',title:'"restic-backup-docker/docker-compose.yml"',showLineNumbers:!0},"version: '3'\nservices:\n  restic:\n    image: lobaro/restic-backup-docker\n    hostname: a-computer.local\n    restart: unless-stopped\n    volumes:\n      - ./excludes.txt:/var/excludes.txt:ro\n      - caddy_data:/data/caddy_data:ro\n      - mysql_data:/data/mysql_data:ro\n    environment:\n      TZ: Asia/Shanghai\n      BACKUP_CRON: 0 */6 * * *\n      RESTIC_REPOSITORY: s3:https://cos.ap-shanghai.myqcloud.com/xxxxx-xxxxxxxxxx\n      AWS_ACCESS_KEY_ID: xxxxxxxxxx\n      AWS_SECRET_ACCESS_KEY: xxxxxxxxxx\n      RESTIC_PASSWORD: xxxxxxxxxx\n      RESTIC_JOB_ARGS: --limit-upload 5000 --exclude-file /var/excludes.txt\n      RESTIC_FORGET_ARGS: --prune --keep-last 12 --keep-hourly 24 --keep-daily 7 --keep-weekly 4 --keep-monthly 12\nvolumes:\n  caddy_data:\n    external: true\n  mysql_data:\n    external: true\n")),(0,o.kt)("p",null,"\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"excludes.txt"),"\u6587\u672c\u6587\u4ef6\uff0c\u4f5c\u4e3a restic \u7684",(0,o.kt)("inlineCode",{parentName:"p"},"--exclude-file"),"\u53c2\u6570\u5185\u5bb9\u3002restic \u5728\u5907\u4efd\u8fc7\u7a0b\u4e2d\u4f1a\u5ffd\u7565\u6389\u5339\u914d\u8fd9\u4e9b\u89c4\u5219\u7684\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"#"),"\u5f00\u5934\u7684\u884c\u4f1a\u88ab\u89c6\u4e3a\u6ce8\u91ca\uff0c\u5982\u679c\u4f60\u60f3\u6392\u9664\u67d0\u4e2a\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"#"),"\u5f00\u5934\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u8bf7\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\\#"),"\u6765\u8f6c\u4e49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="restic-backup-docker/excludes.txt"',title:'"restic-backup-docker/excludes.txt"'},"*log*\n*cache*\ntmp\n\\#recycle\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"hostname"),"\u8bbe\u7f6e\u5bb9\u5668\u7684\u4e3b\u673a\u540d\uff0crestic \u5728\u8fdb\u884c\u5907\u4efd\u7684\u65f6\u5019\u4f1a\u7528\u4e0a\u4e3b\u673a\u540d\uff0c\u8868\u540d\u6b64\u6b21\u5907\u4efd\u662f\u4ece\u54ea\u53f0\u4e3b\u673a\u4e0a\u521b\u5efa\u7684\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"environment"),"\u90e8\u5206\u8fdb\u884c\u8bf4\u660e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"TZ"),"\uff0c\u8bbe\u7f6e\u5bb9\u5668\u5185\u7684\u65f6\u533a\uff0c\u683c\u5f0f\u4e3a ",(0,o.kt)("em",{parentName:"li"},"IANA time zone",(0,o.kt)("sup",{parentName:"em",id:"fnref-3-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3-f2a728",className:"footnote-ref"},"3"))),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"BACKUP_CRON"),"\uff0c\u6267\u884c\u5907\u4efd\u4efb\u52a1\u7684 cron \u8868\u8fbe\u5f0f\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"0 */6 * * *"),"\u8868\u793a\u6bcf 6 \u5c0f\u65f6\u6267\u884c\u4e00\u6b21\u3002\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b ",(0,o.kt)("em",{parentName:"li"},"\u5728\u7ebf\u5de5\u5177 ",(0,o.kt)("sup",{parentName:"em",id:"fnref-4-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4-f2a728",className:"footnote-ref"},"4")))," \u6765\u9a8c\u8bc1 cron \u8868\u8fbe\u5f0f\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RESTIC_REPOSITORY"),"\uff0crestic \u5907\u4efd\u76ee\u7684\u5730\uff0c\u8fd9\u91cc\u5907\u4efd\u5230\u817e\u8baf\u4e91\u7684 COS \u4e2d\uff0c\u817e\u8baf\u4e91 COS \u517c\u5bb9 Amazon S3 \u534f\u8bae\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("em",{parentName:"li"},"\u817e\u8baf\u4e91 COS \u6587\u6863 ",(0,o.kt)("sup",{parentName:"em",id:"fnref-5-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-5-f2a728",className:"footnote-ref"},"5")))," \u548c ",(0,o.kt)("em",{parentName:"li"},"restic \u6587\u6863 ",(0,o.kt)("sup",{parentName:"em",id:"fnref-6-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-6-f2a728",className:"footnote-ref"},"6"))),"\u3002\u5bb9\u5668\u5728\u542f\u52a8\u65f6\u5019\u4f1a\u68c0\u6d4b\u8be5\u4ed3\u5e93\u662f\u5426\u7528 restic \u521d\u59cb\u5316\u8fc7\uff0c\u5982\u679c\u6ca1\u6709\u7684\u8bdd\u5219\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4ed3\u5e93\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),"\uff0c\u817e\u8baf\u4e91 COS \u76f8\u5173\u914d\u7f6e\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),"\uff0c\u817e\u8baf\u4e91 COS \u76f8\u5173\u914d\u7f6e\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RESTIC_PASSWORD"),"\uff0crestic \u4ed3\u5e93\u7684\u5bc6\u7801\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RESTIC_JOB_ARGS"),"\uff0c\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"restic backup"),"\u547d\u4ee4\u65f6\u9644\u52a0\u7684\u989d\u5916\u53c2\u6570\uff0c\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,o.kt)("em",{parentName:"li"},"restic \u6587\u6863 ",(0,o.kt)("sup",{parentName:"em",id:"fnref-7-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-7-f2a728",className:"footnote-ref"},"7"))),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"RESTIC_FORGET_ARGS"),"\uff0c\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"restic forget"),"\u547d\u4ee4\u65f6\u9644\u52a0\u7684\u989d\u5916\u53c2\u6570\uff0c\u8be6\u60c5\u53ef\u53c2\u8003 ",(0,o.kt)("em",{parentName:"li"},"restic \u6587\u6863 ",(0,o.kt)("sup",{parentName:"em",id:"fnref-8-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-8-f2a728",className:"footnote-ref"},"8"))),"\u3002")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"volumes"),"\u90e8\u5206\u8fdb\u884c\u8bf4\u660e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"./excludes.txt:/var/excludes.txt:ro"),"\uff0c\u6302\u8f7d",(0,o.kt)("inlineCode",{parentName:"li"},"excludes.txt"),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"caddy_data:/data/caddy_data:ro"),"\uff0c\u6302\u8f7d",(0,o.kt)("inlineCode",{parentName:"li"},"caddy_data"),"\u5377\u5230\u5bb9\u5668\u5185",(0,o.kt)("inlineCode",{parentName:"li"},"/data"),"\u76ee\u5f55\u4e0b\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"mysql_data:/data/mysql_data:ro"),"\uff0c\u6302\u8f7d",(0,o.kt)("inlineCode",{parentName:"li"},"mysql_data"),"\u5377\u5230\u5bb9\u5668\u5185",(0,o.kt)("inlineCode",{parentName:"li"},"/data"),"\u76ee\u5f55\u4e0b\uff1b"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"/root:/data/root:ro"),"\uff0c\u6302\u8f7d",(0,o.kt)("inlineCode",{parentName:"li"},"/root"),"\u76ee\u5f55\u5230\u5bb9\u5668\u5185",(0,o.kt)("inlineCode",{parentName:"li"},"/data"),"\u76ee\u5f55\u4e0b\u3002")),(0,o.kt)("h2",{id:"\u542f\u52a8\u5bb9\u5668"},"\u542f\u52a8\u5bb9\u5668"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"restic-backup-docker"),"\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9a8c\u8bc1 docker-compose.yml \u6587\u4ef6\u7684\u683c\u5f0f\u662f\u5426\u6b63\u786e\ndocker-compose config\n\n# \u542f\u52a8\u5bb9\u5668\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u914d\u7f6e"},"\u6d4b\u8bd5\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u624b\u52a8\u6267\u884c\u4e00\u6b21\u5907\u4efd\u4efb\u52a1\ndocker-compose exec restic backup\n\n# \u67e5\u770b restic \u7684\u5907\u4efd\u5386\u53f2\ndocker-compose exec restic restic snapshots\n\n# \u67e5\u770b\u4e0a\u4e00\u6b21`restic backup`\u547d\u4ee4\u7684\u7ed3\u679c\ndocker-compose exec restic cat /var/log/backup-last.log\n\n# \u67e5\u770b\u6700\u8fd1\u4e00\u6b21\u5931\u8d25\u7684`restic backup`\u547d\u4ee4\u7684\u7ed3\u679c\ndocker-compose exec restic cat /var/log/backup-error-last.log\n\n# \u67e5\u770b cron \u65e5\u5fd7\ndocker-compose logs -f\ndocker-compose exec restic cat /var/log/cron.log\n\n# \u5728\u5bb9\u5668\u5185\u542f\u52a8\u4e00\u4e2a Shell\uff0c\u65b9\u9762\u6267\u884c\u5176\u4ed6\u547d\u4ee4\ndocker-compose exec restic sh\n")),(0,o.kt)("h2",{id:"\u66f4\u591a\u7528\u6cd5"},"\u66f4\u591a\u7528\u6cd5"),(0,o.kt)("p",null,"lobaro/restic-backup-docker \u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u7528\u6cd5\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5bb9\u5668\u5185\u81ea\u52a8\u6302\u8f7d NFS \u76ee\u5f55\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5bb9\u5668\u5185\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"restic mount"),"\u547d\u4ee4\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5907\u4efd\u524d\u540e\u6267\u884c\u81ea\u5b9a\u4e49\u811a\u672c\u3002")),(0,o.kt)("p",null,"\u672c\u6587\u4e2d\u5e76\u6ca1\u6709\u6db5\u76d6\u6240\u6709\u7684\u7528\u6cd5\u8bf4\u660e\uff0c\u5173\u4e8e\u66f4\u591a\u7528\u6cd5\u8bf7\u53c2\u8003 ",(0,o.kt)("em",{parentName:"p"},"lobaro/restic-backup-docker",(0,o.kt)("sup",{parentName:"em",id:"fnref-9-f2a728"},(0,o.kt)("a",{parentName:"sup",href:"#fn-9-f2a728",className:"footnote-ref"},"9"))),"\u3002"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/lobaro/restic-backup-docker"},"lobaro/restic-backup-docker - Docker Image | Docker Hub"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2-f2a728"},(0,o.kt)("a",{parentName:"li",href:"/blog/restic-backup-tool"},"restic\uff1a\u8f7b\u91cf\u3001\u8de8\u5e73\u53f0\u7684\u589e\u91cf\u5907\u4efd\u5de5\u5177"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://nodatime.org/TimeZones"},"Noda Time | Time zones"),(0,o.kt)("a",{parentName:"li",href:"#fnref-3-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-4-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://crontab.guru"},"Crontab.guru - The cron schedule expression editor"),(0,o.kt)("a",{parentName:"li",href:"#fnref-4-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-5-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/436/41284"},"\u5bf9\u8c61\u5b58\u50a8 \u5728\u517c\u5bb9 S3 \u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u4e2d\u4f7f\u7528 COS \u7684\u901a\u7528\u914d\u7f6e - \u6700\u4f73\u5b9e\u8df5 - \u6587\u6863\u4e2d\u5fc3 - \u817e\u8baf\u4e91"),(0,o.kt)("a",{parentName:"li",href:"#fnref-5-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-6-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html"},"Preparing a new repository \u2014 restic 0.13.1 documentation"),(0,o.kt)("a",{parentName:"li",href:"#fnref-6-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-7-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://restic.readthedocs.io/en/stable/040_backup.html"},"Backing up \u2014 restic 0.13.1 documentation"),(0,o.kt)("a",{parentName:"li",href:"#fnref-7-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-8-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://restic.readthedocs.io/en/stable/060_forget.html"},"Removing backup snapshots \u2014 restic 0.13.1 documentation"),(0,o.kt)("a",{parentName:"li",href:"#fnref-8-f2a728",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-9-f2a728"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lobaro/restic-backup-docker"},"lobaro/restic-backup-docker: A docker container to automate backups with restic"),(0,o.kt)("a",{parentName:"li",href:"#fnref-9-f2a728",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);