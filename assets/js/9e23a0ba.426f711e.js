"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4609],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return m}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),d=k(a),m=l,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=d;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var k=2;k<r;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2746:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return c}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],u={},p="\u5907\u4efd\u5de5\u5177",k={unversionedId:"drafts/backing-up-tools",id:"drafts/backing-up-tools",title:"\u5907\u4efd\u5de5\u5177",description:"\u5bf9\u6bd4\ud800\udd02",source:"@site/docs/drafts/backing-up-tools.md",sourceDirName:"drafts",slug:"/drafts/backing-up-tools",permalink:"/docs/drafts/backing-up-tools",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows \u8f6f\u4ef6\u5217\u8868",permalink:"/docs/bookmarks/windows-software-list"},next:{title:"Markdown \u6e32\u67d3\u6d4b\u8bd5",permalink:"/docs/drafts/markdown-render-test"}},o={},c=[{value:"\u5bf9\u6bd4\ud800\udd02",id:"\u5bf9\u6bd4",level:2},{value:"restic",id:"restic",level:2},{value:"borg",id:"borg",level:2},{value:"duplicati",id:"duplicati",level:2},{value:"bup",id:"bup",level:2},{value:"backup",id:"backup",level:2},{value:"duplicacy",id:"duplicacy",level:2},{value:"duplicity",id:"duplicity",level:2},{value:"kopia",id:"kopia",level:2},{value:"attic",id:"attic",level:2},{value:"rdiff-backup",id:"rdiff-backup",level:2},{value:"gobackup",id:"gobackup",level:2}],d={toc:c};function m(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5907\u4efd\u5de5\u5177"},"\u5907\u4efd\u5de5\u5177"),(0,r.kt)("h2",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4\ud800\udd02"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7f16\u7a0b\u8bed\u8a00"),(0,r.kt)("th",{parentName:"tr",align:null},"Docker"),(0,r.kt)("th",{parentName:"tr",align:null},"\u589e\u91cf\u5907\u4efd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u52a0\u5bc6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u591a\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u4efd\u5230\u672c\u5730"),(0,r.kt)("th",{parentName:"tr",align:null},"S3"),(0,r.kt)("th",{parentName:"tr",align:null},"One Drive"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duplicati"),(0,r.kt)("td",{parentName:"tr",align:null},"C#"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restic"),(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud800\udd02")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autorestic"),(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duplicacy"),(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duplicity"),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backup"),(0,r.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attic"),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rdiff-backup"),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borg"),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kopia"),(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud800\udd02")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gobackup"),(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud800\udd02"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud800\udd02")))),(0,r.kt)("h2",{id:"restic"},"restic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/restic/restic"},"restic/restic: Fast, secure, efficient backup program")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://restic.net/"},"restic \xb7 Backups done right!")),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5177\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cupcakearmy/autorestic"},"cupcakearmy/autorestic: Config driven, easy backup cli for restic."))),(0,r.kt)("h2",{id:"borg"},"borg"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/borgbackup/borg"},"borgbackup/borg: Deduplicating archiver with compression and authenticated encryption.")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://borgbackup.readthedocs.io/en/stable/"},"Borg Documentation \u2014 Borg - Deduplicating Archiver 1.1.17 documentation")),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5177\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/borgmatic-collective/borgmatic"},"borgmatic-collective/borgmatic: Simple, configuration-driven backup software for servers and workstations"))),(0,r.kt)("h2",{id:"duplicati"},"duplicati"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/duplicati/duplicati"},"duplicati/duplicati: Store securely encrypted backups in the cloud!")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://duplicati.readthedocs.io/en/latest/"},"Duplicati 2 User's Manual"))),(0,r.kt)("p",null,"\u597d\u7528\uff0c\u4f46\u662f\u5185\u5b58\u5360\u7528\u9ad8\u3002\u5907\u4efd\u4efb\u52a1\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},".json"),"\u914d\u7f6e\u6587\u4ef6\u3002\u5907\u4efd\u76ee\u7684\u5730\u591a\u6837\uff0c\u652f\u6301 S3 API\uff0c\u4f46\u662f\u5728\u4f7f\u7528\u963f\u91cc\u4e91 OOS \u65f6\u51fa\u9519\uff1b\u652f\u6301\u817e\u8baf\u4e91 COS\u3002"),(0,r.kt)("h2",{id:"bup"},"bup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bup/bup"},"bup/bup: Very efficient backup system based on the git packfile format, providing fast incremental saves and global deduplication (among and within files, including virtual machine images). Current release is 0.31, and the development branch is master. Please post problems or patches to the mailing list for discussion (see the end of the README below).")),(0,r.kt)("li",{parentName:"ul"},"\u5de5\u5177\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tobru/bupper"},"tobru/bupper: bupper - a bup backup profile manager"))),(0,r.kt)("h2",{id:"backup"},"backup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/backup/backup"},"backup/backup: Easy full stack backup operations on UNIX-like systems.")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://backup.github.io/backup/v4/"},"Overview \xb7 Backup Documentation"))),(0,r.kt)("h2",{id:"duplicacy"},"duplicacy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gilbertchen/duplicacy"},"gilbertchen/duplicacy: A new generation cloud backup tool"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/duplicati/duplicati"},"https://github.com/duplicati/duplicati"),")"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gilbertchen/duplicacy/wiki"},"Home \xb7 gilbertchen/duplicacy Wiki"))),(0,r.kt)("h2",{id:"duplicity"},"duplicity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/duplicity/duplicity"},"duplicity / duplicity \xb7 GitLab")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://duplicity.gitlab.io/duplicity-web/index.html"},"duplicity: Main"))),(0,r.kt)("h2",{id:"kopia"},"kopia"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kopia/kopia"},"kopia/kopia: Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a")),(0,r.kt)("h2",{id:"attic"},"attic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jborg/attic"},"jborg/attic: Deduplicating backup program")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a")),(0,r.kt)("h2",{id:"rdiff-backup"},"rdiff-backup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rdiff-backup/rdiff-backup"},"rdiff-backup/rdiff-backup: Reverse differential backup tool, over a network or locally.")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a")),(0,r.kt)("h2",{id:"gobackup"},"gobackup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/huacnlee/gobackup"},"huacnlee/gobackup: \ud83d\uddc4 Simple tool for backup your databases, files to FTP / SCP / S3 storages.")),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863\uff1a")))}m.isMDXComponent=!0}}]);