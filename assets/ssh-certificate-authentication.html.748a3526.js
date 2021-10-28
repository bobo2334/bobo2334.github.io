import{r as e,o as n,c as s,a,b as t,F as l,e as o}from"./app.d44b7d2d.js";const r={},i=a("h1",{id:"ssh-密钥登录",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ssh-密钥登录","aria-hidden":"true"},"#"),o(" SSH 密钥登录")],-1),u=a("h2",{id:"前言",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),o(" 前言")],-1),c=a("blockquote",null,[a("p",null,[o("SSH 默认采用密码登录，这种方法有很多缺点，简单的密码不安全，复杂的密码不容易记忆，每次手动输入也很麻烦。密钥登录是比密码登录更好的解决方案。"),a("sup",{class:"footnote-ref"},[a("a",{href:"#footnote1"},"[1]"),a("a",{class:"footnote-anchor",id:"footnote-ref1"})])])],-1),d=a("h2",{id:"生成秘钥",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#生成秘钥","aria-hidden":"true"},"#"),o(" 生成秘钥")],-1),h=a("p",null,[o("可以用 OpenSSH 中的 "),a("code",null,"ssh-keygen"),o(" 命令行工具来生成秘钥。 "),a("code",null,"-t"),o(" 参数指定了加密方式，通常为 "),a("code",null,"ras"),o(" 或 "),a("code",null,"dsa"),o(" 。")],-1),p=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,"ssh-keygen -t rsa\n")]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])],-1),b=a("p",null,[o("生成的密钥文件默认就会是 "),a("code",null,"~/.ssh/id_rsa"),o(" （私钥）和 "),a("code",null,"~/.ssh/id_rsa.pub"),o(" （公钥）。")],-1),f=a("p",null,[o("也可以用 PuTTY 中提供的 PuTTY Key Generator（puttygen.exe）"),a("sup",{class:"footnote-ref"},[a("a",{href:"#footnote2"},"[2]"),a("a",{class:"footnote-anchor",id:"footnote-ref2"})]),o(" 来用可视化用户界面来生成秘钥文件。")],-1),m=a("p",null,[a("img",{src:"/assets/image-20210816230720070.01f6a3a0.png",alt:"image-20210816230720070"})],-1),g=a("h2",{id:"把公钥放在服务器上",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#把公钥放在服务器上","aria-hidden":"true"},"#"),o(" 把公钥放在服务器上")],-1),k=a("p",null,[o("用户公钥保存在 "),a("code",null,"~/.ssh/authorized_keys"),o(" 文件中，如果该文件不存在，你可以手动创建一个。")],-1),x=a("p",null,"然后将公钥的文本内容放入其中，每行一个。",-1),y=a("h2",{id:"关闭密码登录",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#关闭密码登录","aria-hidden":"true"},"#"),o(" 关闭密码登录")],-1),_=a("p",null,[o("编辑 "),a("code",null,"/etc/ssh/sshd_config"),o(" 文件，找到对应的配置项并修改。")],-1),S=a("div",{class:"language-conf ext-conf line-numbers-mode"},[a("pre",{class:"language-conf"},[a("code",null,"# 不允许密码直接登录\nPasswordAuthentication no\n# 不允许空密码登录\nPermitEmptyPasswords\n# 不允许交互式密码登录\nChallengeResponseAuthentication no\n# 不允许 root 用户使用密码登录\nPermitRootLogin prohibit-password\n# 使用秘钥登录\nPubkeyAuthentication yes\n")]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br")])],-1),v=a("p",null,[o("重启 "),a("code",null,"sshd"),o(" ，让配置生效。")],-1),w=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),o(" systemctl restart sshd\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])],-1),H=a("h2",{id:"测试配置是否生效",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#测试配置是否生效","aria-hidden":"true"},"#"),o(" 测试配置是否生效")],-1),P=a("p",null,[o("使用 "),a("code",null,"ssh"),o(" 命令连接远程服务器，使用 "),a("code",null,"-i"),o(" 参数传递私钥文件。")],-1),T=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"ssh"),o(" -i ."),a("span",{class:"token punctuation"},"\\"),o("centos7"),a("span",{class:"token punctuation"},"\\"),o(".vagrant"),a("span",{class:"token punctuation"},"\\"),o("machines"),a("span",{class:"token punctuation"},"\\"),o("default"),a("span",{class:"token punctuation"},"\\"),o("virtualbox"),a("span",{class:"token punctuation"},"\\"),o("private_key vagrant@192.168.33.12\n")])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])],-1),A=a("h2",{id:"参考资料",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),o(" 参考资料")],-1),C={href:"https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server",target:"_blank",rel:"noopener noreferrer"},L=o("How To Configure SSH Key-Based Authentication on a Linux Server | DigitalOcean"),O={href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/sec-using_openssh_certificate_authentication",target:"_blank",rel:"noopener noreferrer"},R=o("14.3. Using OpenSSH Certificate Authentication Red Hat Enterprise Linux 6 | Red Hat Customer Portal"),Y=a("hr",{class:"footnotes-sep"},null,-1),D={class:"footnotes"},E={class:"footnotes-list"},K={id:"footnote1",class:"footnote-item"},j={href:"https://wangdoc.com/ssh/key.html",target:"_blank",rel:"noopener noreferrer"},q=o("SSH 密钥登录 - SSH 教程 - 网道"),z=o(),B=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),F={id:"footnote2",class:"footnote-item"},G={href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"},U=o("Download PuTTY: latest release (0.76)"),I=o(),J=a("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);r.render=function(o,r){const M=e("OutboundLink");return n(),s(l,null,[i,u,c,d,h,p,b,f,m,g,k,x,y,_,S,v,w,H,P,T,A,a("ul",null,[a("li",null,[a("a",C,[L,t(M)])]),a("li",null,[a("a",O,[R,t(M)])])]),Y,a("section",D,[a("ol",E,[a("li",K,[a("p",null,[a("a",j,[q,t(M)]),z,B])]),a("li",F,[a("p",null,[a("a",G,[U,t(M)]),I,J])])])])],64)};export{r as default};
