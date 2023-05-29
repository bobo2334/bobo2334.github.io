"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9263],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={},s="restic\uff1a\u8f7b\u91cf\u3001\u8de8\u5e73\u53f0\u7684\u589e\u91cf\u5907\u4efd\u5de5\u5177",c={permalink:"/blog/2022/05/22/restic-a-backing-up-tool",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/2022-05-22-restic-a-backing-up-tool.md",source:"@site/blog/2022-05-22-restic-a-backing-up-tool.md",title:"restic\uff1a\u8f7b\u91cf\u3001\u8de8\u5e73\u53f0\u7684\u589e\u91cf\u5907\u4efd\u5de5\u5177",description:"\u524d\u8a00",date:"2022-05-22T00:00:00.000Z",formattedDate:"2022\u5e745\u670822\u65e5",tags:[],readingTime:12.665,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"\u4f7f\u7528 restic \u5b9a\u65f6\u5907\u4efd\u6587\u4ef6",permalink:"/blog/2022/06/18/restic-scheduled-backup"},nextItem:{title:"Gitea\uff1a\u8f7b\u91cf\u7ea7\u81ea\u5efa Git \u670d\u52a1",permalink:"/blog/2022/05/21/gitea-a-lightweight-self-hosted-git-service"}},p={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6982\u5ff5\u4ecb\u7ecd",id:"\u6982\u5ff5\u4ecb\u7ecd",level:2},{value:"\u5b89\u88c5 restic",id:"\u5b89\u88c5-restic",level:2},{value:"\u67e5\u770b\u547d\u4ee4\u5e2e\u52a9",id:"\u67e5\u770b\u547d\u4ee4\u5e2e\u52a9",level:2},{value:"\u521d\u59cb\u5316\u5b58\u50a8\u5e93",id:"\u521d\u59cb\u5316\u5b58\u50a8\u5e93",level:2},{value:"\u5907\u4efd\u6570\u636e",id:"\u5907\u4efd\u6570\u636e",level:2},{value:"\u67e5\u8be2\u5feb\u7167\u8bb0\u5f55",id:"\u67e5\u8be2\u5feb\u7167\u8bb0\u5f55",level:2},{value:"\u67e5\u770b\u5feb\u7167\u5185\u5bb9",id:"\u67e5\u770b\u5feb\u7167\u5185\u5bb9",level:2},{value:"\u6062\u590d\u6570\u636e",id:"\u6062\u590d\u6570\u636e",level:2},{value:"\u5220\u9664\u5feb\u7167",id:"\u5220\u9664\u5feb\u7167",level:2},{value:"\u591a\u673a\u5668\u5171\u7528\u5b58\u50a8\u5e93",id:"\u591a\u673a\u5668\u5171\u7528\u5b58\u50a8\u5e93",level:2},{value:"\u540e\u8bb0",id:"\u540e\u8bb0",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"restic \u662f\u4e00\u6b3e\u7528 Go \u8bed\u8a00\u5b9e\u73b0\u7684\u5907\u4efd\u5de5\u5177\uff0c\u5177\u6709\u8de8\u5e73\u53f0\u8fd0\u884c\u3001\u589e\u91cf\u5907\u4efd\u548c\u5386\u53f2\u7248\u672c\u5907\u4efd\u7684\u7279\u6027\u3002"),(0,o.kt)("p",null,"restic \u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u4f4d\u7f6e\u6216\u7f51\u7edc\u4f4d\u7f6e\u4f5c\u4e3a\u5b58\u50a8\u5e93\u3002"),(0,o.kt)("p",null,"\u6709\u5f88\u591a\u60c5\u51b5\u4f1a\u5bfc\u81f4\u6570\u636e\u4e22\u5931\uff0c\u6bd4\u5982 VPS \u63d0\u4f9b\u5546\u8dd1\u8def\u3001\u673a\u623f\u5931\u706b\u3001\u8bbe\u5907\u4e22\u5931\u4ee5\u53ca\u4eba\u5458\u8bef\u64cd\u4f5c\u7b49\uff0c\u6240\u4ee5\u6570\u636e\u5907\u4efd\u662f\u4e00\u9879\u5f88\u91cd\u8981\u7684\u5de5\u4f5c\u3002\u91cd\u8981\u6570\u636e\u5fc5\u987b\u8981\u5907\u4efd\u3002"),(0,o.kt)("h2",{id:"\u6982\u5ff5\u4ecb\u7ecd"},"\u6982\u5ff5\u4ecb\u7ecd"),(0,o.kt)("p",null,"restic \u4e0d\u76f4\u63a5\u5907\u4efd\u6587\u4ef6\uff0c\u5b83\u4f1a\u628a\u6587\u4ef6\u5206\u4e3a\u56fa\u5b9a\u5927\u5c0f\u7684\u5757\uff0c\u628a\u8fd9\u4e9b\u6587\u4ef6\u5757\u5b58\u5165\u5b58\u50a8\u5e93\u3002"),(0,o.kt)("p",null,"restic \u7684\u6bcf\u6b21\u5907\u4efd\u90fd\u79f0\u4e3a\u4e00\u4e2a\u5feb\u7167\uff0c\u5feb\u7167\u91cc\u4fdd\u5b58\u4e86\u5bf9\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u5757\u7684\u5f15\u7528\u3002\u5f53\u591a\u6b21\u5907\u4efd\u76f8\u540c\u6587\u4ef6\u7684\u65f6\u5019\u53ef\u4ee5\u5f15\u7528\u76f8\u540c\u7684\u6587\u4ef6\u5757\uff0c\u4e0d\u4f1a\u5360\u7528\u5f88\u591a\u7a7a\u95f4\uff1b\u5f53\u6587\u4ef6\u53d8\u5316\u4e0d\u5927\u7684\u65f6\u5019\uff0c\u4e5f\u4e0d\u9700\u8981\u5bf9\u53d8\u5316\u540e\u7684\u6587\u4ef6\u518d\u5b8c\u6574\u5907\u4efd\u4e00\u6b21\uff0c\u53ea\u9700\u8981\u5728\u5b58\u50a8\u5e93\u4e2d\u52a0\u5165\u53d8\u5316\u7684\u6587\u4ef6\u5757\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5 restic \u53ef\u4ee5\u505a\u5230\u589e\u91cf\u5907\u4efd\u548c\u591a\u7248\u672c\u5907\u4efd\uff0c\u5e76\u4e14\u7a7a\u95f4\u5360\u7528\u4e5f\u4e0d\u591a\u3002"),(0,o.kt)("p",null,"restic \u5728 Github",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-bacbc0"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-bacbc0",className:"footnote-ref"},"1"))," \u5f00\u6e90\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5-restic"},"\u5b89\u88c5 restic"),(0,o.kt)("p",null,"restic \u662f\u4e00\u4e2a\u5355\u6587\u4ef6\u7684\u53ef\u6267\u884c\u7a0b\u5e8f\uff0c\u6ca1\u6709\u5176\u5b83\u4f9d\u8d56\u3002\u4f60\u53ef\u4ee5\u624b\u52a8\u4ece\u5176 Github Releases",(0,o.kt)("sup",{parentName:"p",id:"fnref-2-bacbc0"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2-bacbc0",className:"footnote-ref"},"2"))," \u9875\u4e0b\u8f7d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1b\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5 restic\uff1brestic \u4e5f\u53ef\u4ee5\u901a\u8fc7 Docker \u8fd0\u884c\u3002\u5b89\u88c5\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u5176\u5b98\u65b9\u6587\u6863\u4e2d\u7684 Installation",(0,o.kt)("sup",{parentName:"p",id:"fnref-3-bacbc0"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3-bacbc0",className:"footnote-ref"},"3"))," \u90e8\u5206\u3002"),(0,o.kt)("p",null,"\u5728 restic \u6b63\u786e\u5b89\u88c5\u540e\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"restic"),"\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'\u279c ~ restic\n\nrestic is a backup program which allows saving multiple revisions of files and\ndirectories in an encrypted repository stored on different backends.\n\nUsage:\n  restic [command]\n\nAvailable Commands:\n  backup        Create a new backup of files and/or directories\n  cache         Operate on local cache directories\n  cat           Print internal objects to stdout\n  check         Check the repository for errors\n  copy          Copy snapshots from one repository to another\n  diff          Show differences between two snapshots\n  dump          Print a backed-up file to stdout\n  find          Find a file, a directory or restic IDs\n  forget        Remove snapshots from the repository\n  generate      Generate manual pages and auto-completion files (bash, fish, zsh)\n  help          Help about any command\n  init          Initialize a new repository\n  key           Manage keys (passwords)\n  list          List objects in the repository\n  ls            List files in a snapshot\n  migrate       Apply migrations\n  mount         Mount the repository\n  prune         Remove unneeded data from the repository\n  rebuild-index Build a new index\n  recover       Recover data from the repository not referenced by snapshots\n  restore       Extract the data from a snapshot\n  self-update   Update the restic binary\n  snapshots     List all snapshots\n  stats         Scan the repository and show basic statistics\n  tag           Modify tags on snapshots\n  unlock        Remove locks other processes created\n  version       Print version information\n\nFlags:\n      --cacert file                file to load root certificates from (default: use system certificates)\n      --cache-dir directory        set the cache directory. (default: use system default cache directory)\n      --cleanup-cache              auto remove old cache directories\n  -h, --help                       help for restic\n      --insecure-tls               skip TLS certificate verification when connecting to the repo (insecure)\n      --json                       set output mode to JSON for commands that support it\n      --key-hint key               key ID of key to try decrypting first (default: $RESTIC_KEY_HINT)\n      --limit-download int         limits downloads to a maximum rate in KiB/s. (default: unlimited)\n      --limit-upload int           limits uploads to a maximum rate in KiB/s. (default: unlimited)\n      --no-cache                   do not use a local cache\n      --no-lock                    do not lock the repository, this allows some operations on read-only repositories\n  -o, --option key=value           set extended option (key=value, can be specified multiple times)\n      --password-command command   shell command to obtain the repository password from (default: $RESTIC_PASSWORD_COMMAND)\n  -p, --password-file file         file to read the repository password from (default: $RESTIC_PASSWORD_FILE)\n  -q, --quiet                      do not output comprehensive progress report\n  -r, --repo repository            repository to backup to or restore from (default: $RESTIC_REPOSITORY)\n      --repository-file file       file to read the repository location from (default: $RESTIC_REPOSITORY_FILE)\n      --tls-client-cert file       path to a file containing PEM encoded TLS client certificate and private key\n  -v, --verbose n                  be verbose (specify multiple times or a level using --verbose=n, max level/times is 3)\n\nUse "restic [command] --help" for more information about a command.\n')),(0,o.kt)("h2",{id:"\u67e5\u770b\u547d\u4ee4\u5e2e\u52a9"},"\u67e5\u770b\u547d\u4ee4\u5e2e\u52a9"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic"),"\u53ca\u5176\u5b50\u547d\u4ee4\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),"\u53c2\u6570\u6765\u83b7\u53d6\u4e00\u4e9b\u5e2e\u52a9\u6587\u6863\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"restic --help\nrestic backup --help\nrestic ls --help\nrestic snapshots --help\n")),(0,o.kt)("p",null,"\u5728\u5b66\u4e60\u548c\u4f7f\u7528 restic \u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u67e5\u770b\u5176\u7ebf\u4e0a\u6587\u6863 ",(0,o.kt)("sup",{parentName:"p",id:"fnref-4-bacbc0"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4-bacbc0",className:"footnote-ref"},"4"))," \u6765\u83b7\u53d6\u5e2e\u52a9\u3002"),(0,o.kt)("h2",{id:"\u521d\u59cb\u5316\u5b58\u50a8\u5e93"},"\u521d\u59cb\u5316\u5b58\u50a8\u5e93"),(0,o.kt)("p",null,"resitc \u4e0d\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\uff0c\u5b83\u4f1a\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u83b7\u53d6\u914d\u7f6e\u9879\u3002\u6240\u4ee5\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"\u547d\u4ee4\u628a\u914d\u7f6e\u9879\u653e\u5165\u5f53\u524d Shell \u4f1a\u8bdd\u7684\u73af\u5883\u53d8\u91cf\u4e2d\u3002"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 restic \u8fdb\u884c\u6570\u636e\u5907\u4efd\u4e4b\u524d\u4f60\u9700\u8981\u5148\u786e\u5b9a\u4e00\u4e2a\u76ee\u5f55\u4f5c\u4e3a\u5b58\u50a8\u5e93\uff0c\u5e76\u7528 restic \u521d\u59cb\u5316\u8fd9\u4e2a\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u4f7f\u7528\u4e24\u4e2a\u914d\u7f6e\u9879\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RESTIC_REPOSITORY"),"\uff1a\u5b58\u50a8\u5e93\u4f4d\u7f6e\u3002\u53ef\u4ee5\u662f\u672c\u5730\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u662f\u7f51\u7edc\u4f4d\u7f6e\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RESTIC_PASSWORD"),"\uff1a\u5b58\u50a8\u5e93\u5bc6\u7801\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u5e93\u7684\u4f8b\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export RESTIC_REPOSITORY="/Volumes/extra/restic"\nexport RESTIC_PASSWORD="pass"\n')),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"\u66b4\u9732\u7684\u73af\u5883\u53d8\u91cf\u53ea\u5728\u5f53\u524d Shell \u4f1a\u8bdd\u751f\u6548\uff0c\u5f53\u4f60\u91cd\u542f Shell \u540e\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u5c31\u4e0d\u5b58\u5728\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521d\u59cb\u5316\u5b58\u50a8\u5e93\nrestic init\n")),(0,o.kt)("p",null,"\u5b58\u50a8\u5e93\u53ea\u9700\u521d\u59cb\u5316\u4e00\u6b21\uff0c\u5e76\u4e14 restic \u5bf9\u5b58\u50a8\u5e93\u76f8\u5173\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u5b58\u50a8\u5e93\u7684\u5bc6\u7801\uff0c\u4f60\u8981\u4fdd\u7ba1\u597d\u5b58\u50a8\u5e93\u5bc6\u7801\u3002"),(0,o.kt)("h2",{id:"\u5907\u4efd\u6570\u636e"},"\u5907\u4efd\u6570\u636e"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic backup"),"\u547d\u4ee4\u6765\u5907\u4efd\u6570\u636e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"restic backup [flags] FILE/DIR [FILE/DIR] ...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u9762\u7684\u547d\u4ee4\u7528\u4e8e\u628a /data \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u505a\u5907\u4efd\u3002\u6bcf\u6b21\u5907\u4efd\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u5feb\u7167\u3002\nrestic backup ~/data\n")),(0,o.kt)("h2",{id:"\u67e5\u8be2\u5feb\u7167\u8bb0\u5f55"},"\u67e5\u8be2\u5feb\u7167\u8bb0\u5f55"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic snapshots"),"\u547d\u4ee4\u6765\u67e5\u770b\u5feb\u7167\u8bb0\u5f55\uff0c\u6bcf\u4e2a\u5feb\u7167\u90fd\u6709\u4e00\u4e2a ID\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"restic snapshots [flags] [snapshotID ...]\n")),(0,o.kt)("h2",{id:"\u67e5\u770b\u5feb\u7167\u5185\u5bb9"},"\u67e5\u770b\u5feb\u7167\u5185\u5bb9"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic ls"),"\u547d\u4ee4\u6765\u67e5\u770b\u5feb\u7167\u4e2d\u7684\u5185\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"restic ls [flags] snapshotID [dir...]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5217\u51fa\u5feb\u7167\u4e2d\u7684\u6240\u6709\u76ee\u5f55\u548c\u6587\u4ef6\uff0c\u4f1a\u9012\u5f52\u5217\u51fa\u76ee\u5f55\u4e2d\u7684\u5185\u5bb9\nrestic ls 9e73578b\n\n# \u53ef\u4ee5\u7528`latest`\u4ee3\u66ff\u6700\u65b0\u7684\u5feb\u7167 ID\uff0c\u5217\u51fa\u6700\u8fd1\u7684\u4e00\u6b21\u5feb\u7167\u4e2d\u7684\u5185\u5bb9\nrestic ls latest\n\n# \u5217\u51fa\u5feb\u7167\u4e2d`/`\u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\uff0c\u4e0d\u4f1a\u9012\u5f52\u5b50\u6587\u4ef6\u5939\nrestic ls 9e73578b /\n\n# \u5217\u51fa\u5feb\u7167\u4e2d`/data`\u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\uff0c\u4e0d\u4f1a\u9012\u5f52\u5b50\u6587\u4ef6\u5939\nrestic ls 9e73578b /data\n")),(0,o.kt)("h2",{id:"\u6062\u590d\u6570\u636e"},"\u6062\u590d\u6570\u636e"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic restore"),"\u547d\u4ee4\u6765\u4ece\u5feb\u7167\u6062\u590d\u6570\u636e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"restic restore [flags] snapshotID\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6062\u590d\u5feb\u7167\u91cc\u7684\u5185\u5bb9\u81f3 ~/restore-target \u76ee\u5f55\nrestic restore -t ~/restore-target 9e73578b\n\n# \u6062\u590d\u5feb\u7167\u91cc\u7684\u5185\u5bb9\u81f3 ~/restore-target \u76ee\u5f55\uff0c\u53ea\u6062\u590d\u5feb\u7167\u4e2d\u7684 /data/file1 \u5185\u5bb9\nrestic restore -t ~/restore-target -i /data/file1 9e73578b\n")),(0,o.kt)("h2",{id:"\u5220\u9664\u5feb\u7167"},"\u5220\u9664\u5feb\u7167"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic forget"),"\u547d\u4ee4\u6765\u5220\u9664\u5feb\u7167\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"restic forget [flags] [snapshot ID] [...]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664 ID \u4e3a 9e73578b \u7684\u5feb\u7167\nrestic forget 9e73578b\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u6dd8\u6c70\u7b56\u7565\u6765\u6279\u91cf\u5220\u9664\u5386\u53f2\u5feb\u7167\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u6dd8\u6c70\u7b56\u7565\u6279\u91cf\u5220\u9664\u5feb\u7167\nrestic forget --keep-last 12 --keep-hourly 24 --keep-daily 7 --keep-weekly 4 --keep-monthly 12\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u5b9a\u4e49\u4e86\u4e00\u4e9b\u6dd8\u6c70\u7b56\u7565\uff0c\u4e0d\u6ee1\u8db3\u6b64\u7b56\u7565\u7684\u5feb\u7167\u4f1a\u88ab\u5220\u9664\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6c38\u8fdc\u4fdd\u7559\u6700\u65b0\u7684 12 \u4e2a\u5feb\u7167\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8fc7\u53bb 24 \u5c0f\u65f6\u7684\u5feb\u7167\uff0c\u6bcf\u4e2a\u5c0f\u65f6\u90fd\u4fdd\u7559\u4e00\u4e2a\u6700\u65b0\u7684\u5feb\u7167\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8fc7\u53bb\u7684 7 \u5929\uff0c\u6bcf\u5929\u90fd\u4fdd\u7559\u4e00\u4e2a\u6700\u65b0\u7684\u5feb\u7167\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8fc7\u53bb\u7684 4 \u5468\uff0c\u6bcf\u5468\u90fd\u4fdd\u7559\u4e00\u4e2a\u6700\u65b0\u7684\u5feb\u7167\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8fc7\u53bb\u7684 12 \u4e2a\u6708\uff0c\u6bcf\u4e2a\u6708\u90fd\u4fdd\u7559\u4e00\u4e2a\u6700\u65b0\u7684\u5feb\u7167\u3002")),(0,o.kt)("p",null,"\u5220\u9664\u5feb\u7167\u5e76\u4e0d\u4f1a\u91ca\u653e\u5b58\u50a8\u5e93\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u56e0\u4e3a\u5220\u9664\u5feb\u7167\u53ea\u662f\u5220\u9664\u4e86\u5bf9\u6587\u4ef6\u5757\u7684\u5f15\u7528\uff0c\u6587\u4ef6\u5757\u662f\u4e0d\u4f1a\u88ab\u5220\u9664\u7684\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic prune"),"\u547d\u4ee4\u6765\u68c0\u67e5\u6240\u6709\u7684\u6587\u4ef6\u5757\u5e76\u5220\u9664\u6ca1\u6709\u88ab\u4efb\u4f55\u5feb\u7167\u5f15\u7528\u7684\u6587\u4ef6\u5757\uff0c\u4ece\u800c\u91ca\u653e\u5b58\u50a8\u5e93\u7684\u7a7a\u95f4\u3002\u4e5f\u53ef\u4ee5\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic forget"),"\u547d\u4ee4\u65f6\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"--prune"),"\u53c2\u6570\uff0crestic \u5728\u5220\u9664\u5feb\u7167\u4e4b\u540e\u4f1a\u7d27\u8ddf\u7740\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"prune"),"\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u626b\u63cf\u6240\u6709\u6587\u4ef6\u5757\uff0c\u5220\u9664\u6ca1\u6709\u88ab\u4efb\u4f55\u4e00\u4e2a\u5feb\u7167\u5f15\u7528\u7684\u6587\u4ef6\u5757\nrestic prune\n\n# \u5728 forget \u4e4b\u540e\u81ea\u52a8\u6267\u884c prune \u547d\u4ee4\u6765\u91ca\u653e\u7a7a\u95f4\nrestic forget --prune --keep-last 12 --keep-hourly 24 --keep-daily 7 --keep-weekly 4 --keep-monthly 12\n")),(0,o.kt)("h2",{id:"\u591a\u673a\u5668\u5171\u7528\u5b58\u50a8\u5e93"},"\u591a\u673a\u5668\u5171\u7528\u5b58\u50a8\u5e93"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u591a\u4e2a\u673a\u5668\u9700\u8981\u5907\u4efd\u6570\u636e\uff0c\u53ef\u4ee5\u5171\u7528\u4e00\u4e2a\u5b58\u50a8\u5e93\u3002"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u5feb\u7167\u90fd\u6709\u4e00\u4e2a Host \u5c5e\u6027\uff0c\u5bf9\u5e94\u7740\u5b9e\u65bd\u5907\u4efd\u64cd\u4f5c\u7684\u4e3b\u673a\u540d\uff08Hostname\uff09\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b restic \u76f4\u63a5\u8bfb\u53d6\u7cfb\u7edf\u4e2d\u7684 Hostname\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"--host"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"-H"),"\u53c2\u6570\u624b\u52a8\u6307\u5b9a\u4e3b\u673a\u540d\u3002\u8be5\u53c2\u6570\u53ef\u7528\u4e8e\u8bb8\u591a\u547d\u4ee4\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"backup"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"snapshots"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"forget"),"\u7b49\u547d\u4ee4\u4e2d\u3002"),(0,o.kt)("p",null,"\u5feb\u7167\u548c\u5feb\u7167\u4e4b\u95f4\u662f\u6ca1\u6709\u7ee7\u627f\u5173\u7cfb\u7684\uff0c\u4f60\u5220\u9664\u4e4b\u524d\u7684\u5feb\u7167\u4e0d\u4f1a\u5f71\u54cd\u5230\u4e4b\u540e\u7684\u5feb\u7167\u3002"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"restic forget"),"\u547d\u4ee4\u4f7f\u7528\u6dd8\u6c70\u7b56\u7565\u5220\u9664\u5feb\u7167\u65f6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u4e3b\u673a\u540d\u4f1a\u5bf9\u5206\u522b\u5bf9\u6240\u6709\u4e3b\u673a\u4e0b\u7684\u5feb\u7167\u5206\u522b\u6267\u884c\u6dd8\u6c70\u7b56\u7565\uff1b\u5982\u679c\u6307\u5b9a\u4e86\u4e3b\u673a\u540d\u5219\u53ea\u4f1a\u5bf9\u5bf9\u5e94\u4e3b\u673a\u540d\u7684\u5feb\u7167\u6267\u884c\u6dd8\u6c70\u7b56\u7565\u3002"),(0,o.kt)("h2",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),(0,o.kt)("p",null,"\u505a\u4e86\u5907\u4efd\u4e5f\u4e0d\u662f\u4e00\u52b3\u6c38\u9038\u7684\u3002\u4f60\u53ef\u80fd\u8fd8\u9700\u8981\u5f02\u5730\u591a\u5907\u4efd\uff0c\u4ec5\u4ec5\u5907\u4efd\u5728\u672c\u5730\u662f\u4e0d\u65b9\u4fbf\u4e5f\u662f\u4e0d\u5b89\u5168\u7684\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u5bf9\u8c61\u5b58\u50a8\u670d\u4f5c\u4e3a\u5b58\u50a8\u5e93\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u57fa\u672c\u4e0a\u6240\u6709\u7684\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u5668\u90fd\u517c\u5bb9 Amazon S3 \u7684 API\uff0c\u90fd\u53ef\u4ee5\u4f5c\u4e3a restic \u7684\u5b58\u50a8\u5e93\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u5bf9\u8c61\u5b58\u50a8\u7684\u6536\u8d39\u9879\u76ee\u6709\u4e0b\u8f7d\u6d41\u91cf\u8d39\u7528\u3001API \u8c03\u7528\u8d39\u7528\u548c\u5b58\u50a8\u7a7a\u95f4\u8d39\u7528\u3002\u4e0a\u4f20\u6d41\u91cf\u4e00\u822c\u662f\u4e0d\u6536\u8d39\u7684\uff0c\u540c\u65f6 API \u8c03\u7528\u8d39\u7528\u548c\u5b58\u50a8\u7a7a\u95f4\u8d39\u7528\u90fd\u4e0d\u9ad8\u3002\u4e0b\u8f7d\u6d41\u91cf\u8d39\u7528\u6536\u8d39\u8f83\u9ad8\uff0c\u4f46\u662f\u5728\u8fdb\u884c\u5907\u4efd\u7684\u65f6\u5019\u6ca1\u6709\u591a\u5c11\u4e0b\u8f7d\u6d41\u91cf\uff0c\u5728\u7d27\u6025\u60c5\u51b5\u4e0b\u6062\u590d\u6587\u4ef6\u7684\u65f6\u5019\u53ef\u4ee5\u4e70\u9650\u65f6\u6d41\u91cf\u5305\u5305\u6765\u964d\u4f4e\u4e0b\u8f7d\u6d41\u91cf\u7684\u8d39\u7528\u3002\u82b1\u70b9\u94b1\u8d4e\u56de\u81ea\u5df1\u7684\u6570\u636e\u603b\u6bd4\u6570\u636e\u90fd\u6d88\u5931\u4e86\u8981\u597d\u3002"),(0,o.kt)("p",null,"\u6709\u4e9b\u5bf9\u8c61\u5b58\u50a8\u5728\u5185\u7f51\u7684\u4e0b\u8f7d\u6d41\u91cf\u4e5f\u4e0d\u6536\u8d39\uff0c\u6bd4\u5982\u817e\u8baf\u4e91\u7684\u5bf9\u8c61\u5b58\u50a8\u5728\u817e\u8baf\u4e91\u670d\u52a1\u5668\u4e2d\u4f7f\u7528\u7684\u8bdd\uff0c\u4e0b\u8f7d\u6d41\u91cf\u5c31\u4e0d\u8ba1\u8d39\uff0c\u53ea\u6536 API \u8c03\u7528\u7684\u8d39\u7528\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u817e\u8baf\u4e91\u7684\u670d\u52a1\u5668\u6765\u4e2d\u8f6c\u5bf9\u8c61\u5b58\u50a8\u4e2d\u7684\u5185\u5bb9\u3002\u5173\u4e8e\u6b64\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003\u300c\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939\u300d",(0,o.kt)("sup",{parentName:"p",id:"fnref-5-bacbc0"},(0,o.kt)("a",{parentName:"sup",href:"#fn-5-bacbc0",className:"footnote-ref"},"5")),"\u3002"),(0,o.kt)("p",null,"\u5728\u6570\u636e\u5907\u4efd\u5230\u5bf9\u8c61\u5b58\u50a8\u4e4b\u540e\uff0c\u53ef\u4ee5\u5b9a\u671f\u4ece\u5bf9\u8c61\u5b58\u50a8\u4e2d\u4e0b\u8f7d\u6570\u636e\u5230\u672c\u5730\u7684\u79fb\u52a8\u786c\u76d8\u4e2d\uff0c\u8fbe\u6210\u5f02\u5730\u5907\u4efd\u3002\u5b58\u50a8\u5e93\u8fc1\u79fb\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"rclone"),"\u5de5\u5177\uff0c\u628a\u5bf9\u8c61\u5b58\u50a8\u4e2d\u7684\u6240\u6709\u5185\u5bb9\u590d\u5236\u5230\u672c\u5730\u5373\u53ef\u5b8c\u6210\u8fc1\u79fb\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"rclone"),"\u53ef\u4ee5\u53ea\u590d\u5236\u6709\u53d8\u5316\u7684\u5185\u5bb9\u5e76\u4e14\u5220\u9664\u591a\u4f59\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u8981\u5b9a\u671f\u505a\u6570\u636e\u6062\u590d\u6d4b\u8bd5\uff0c\u68c0\u67e5\u5907\u4efd\u662f\u5426\u6b63\u5e38\uff0c\u662f\u5426\u80fd\u6309\u671f\u671b\u6062\u590d\u6570\u636e\u3002\u5907\u4efd\u4e0d\u6d4b\u8bd5\uff0c\u7b49\u4e8e\u6ca1\u5907\u4efd\u3002"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-bacbc0"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/restic/restic"},"restic/restic: Fast, secure, efficient backup program"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-bacbc0",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2-bacbc0"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/restic/restic/releases"},"Releases \xb7 restic/restic"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2-bacbc0",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3-bacbc0"},(0,o.kt)("a",{parentName:"li",href:"https://restic.readthedocs.io/en/stable/020_installation.html"},"Installation \u2014 restic 0.13.1 documentation"),(0,o.kt)("a",{parentName:"li",href:"#fnref-3-bacbc0",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-4-bacbc0"},(0,o.kt)("a",{parentName:"li",href:"https://restic.readthedocs.io/en/stable/index.html"},"Restic Documentation \u2014 restic 0.13.1 documentation"),(0,o.kt)("a",{parentName:"li",href:"#fnref-4-bacbc0",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-5-bacbc0"},(0,o.kt)("a",{parentName:"li",href:"/blog/2022/01/10/mount-tencent-cloud-cos"},"\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939"),(0,o.kt)("a",{parentName:"li",href:"#fnref-5-bacbc0",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);