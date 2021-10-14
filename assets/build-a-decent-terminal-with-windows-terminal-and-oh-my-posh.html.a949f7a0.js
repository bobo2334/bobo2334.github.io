import{r as e,o as n,c as s,a as o,b as a,F as l,e as t}from"./app.af09c0fa.js";const r={},c=o("h1",{id:"用-windows-terminal-和-oh-my-posh-打造一个好用的终端",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#用-windows-terminal-和-oh-my-posh-打造一个好用的终端","aria-hidden":"true"},"#"),t(" 用 Windows Terminal 和 oh-my-posh 打造一个好用的终端")],-1),p=o("p",null,"2021-11-14 备注",-1),i=t("oh-my-posh 项目已被重构，现在由 Go 语言实现，仓库地址为"),u={href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"},d=t(" Github"),h=t("。"),f=t("文章中所使用的版本现已被重命名为 oh-my-posh2，由 PowerShell 实现，仓库地址为"),m={href:"https://github.com/JanDeDobbeleer/oh-my-posh2",target:"_blank",rel:"noopener noreferrer"},b=t(" Github"),k=t("。"),g=o("h2",{id:"前言",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),t(" 前言")],-1),w=o("p",null,[t("Windows 中自带的终端使用体验确实说不上好，尝试了许多组合也感觉都不顺手。这次试试微软亲自出的 Windows Terminal"),o("sup",{class:"footnote-ref"},[o("a",{href:"#footnote1"},"[1]"),o("a",{class:"footnote-anchor",id:"footnote-ref1"})]),t("，再加上 oh-my-posh"),o("sup",{class:"footnote-ref"},[o("a",{href:"#footnote2"},"[2]"),o("a",{class:"footnote-anchor",id:"footnote-ref2"})]),t(" 插件。")],-1),y=o("h2",{id:"正文",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#正文","aria-hidden":"true"},"#"),t(" 正文")],-1),P=o("h3",{id:"安装-windows-terminal",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#安装-windows-terminal","aria-hidden":"true"},"#"),t(" 安装 Windows Terminal")],-1),S=o("p",null,[t("Windows Terminal 提供多种安装方式，你可以在 Microsoft Store 中安装；可以自行在该项目的 Github 仓库"),o("sup",{class:"footnote-ref"},[o("a",{href:"#footnote1"},"[1:1]"),o("a",{class:"footnote-anchor",id:"footnote-ref1:1"})]),t("中上下载安装程序；虽然官方文档未提及，但是你也可以用 Scoop"),o("sup",{class:"footnote-ref"},[o("a",{href:"#footnote3"},"[3]"),o("a",{class:"footnote-anchor",id:"footnote-ref3"})]),t(" 安装：")],-1),x=o("div",{class:"language-powershell ext-powershell line-numbers-mode"},[o("pre",{class:"language-powershell"},[o("code",null,[t("scoop install windows"),o("span",{class:"token operator"},"-"),t("terminal\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),v=o("h3",{id:"安装-oh-my-posh",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#安装-oh-my-posh","aria-hidden":"true"},"#"),t(" 安装 oh-my-posh")],-1),C=o("p",null,"oh-my-posh 是针对 Windows PowerShell 设计的主题引擎，类似于 zsh 和 Oh My Zsh 的关系。它可以让你的命令行更强大。",-1),T=o("p",null,"打开 PowerShell，输入以下命令安装：",-1),W=o("div",{class:"language-powershell ext-powershell line-numbers-mode"},[o("pre",{class:"language-powershell"},[o("code",null,[o("span",{class:"token function"},"Install-Module"),t(" posh"),o("span",{class:"token operator"},"-"),t("git "),o("span",{class:"token operator"},"-"),t("Scope CurrentUser\n"),o("span",{class:"token function"},"Install-Module"),t(" oh"),o("span",{class:"token operator"},"-"),t("my"),o("span",{class:"token operator"},"-"),t("posh "),o("span",{class:"token operator"},"-"),t("Scope CurrentUser\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br")])],-1),F=o("p",null,"安装完成之后还更改 PowerShell 的用户配置，让它每次启动的时候自动加载 oh-my-posh 插件；执行以下命令：",-1),I=o("div",{class:"language-powershell ext-powershell line-numbers-mode"},[o("pre",{class:"language-powershell"},[o("code",null,[o("span",{class:"token keyword"},"if"),t(),o("span",{class:"token punctuation"},"("),o("span",{class:"token operator"},"!"),o("span",{class:"token punctuation"},"("),o("span",{class:"token function"},"Test-Path"),t(),o("span",{class:"token operator"},"-"),t("Path "),o("span",{class:"token variable"},"$PROFILE"),t(),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},")"),t(),o("span",{class:"token punctuation"},"{"),t(),o("span",{class:"token function"},"New-Item"),t(),o("span",{class:"token operator"},"-"),o("span",{class:"token function"},"Type"),t(" File "),o("span",{class:"token operator"},"-"),t("Path "),o("span",{class:"token variable"},"$PROFILE"),t(),o("span",{class:"token operator"},"-"),t("Force "),o("span",{class:"token punctuation"},"}"),t("\nnotepad "),o("span",{class:"token variable"},"$PROFILE"),t("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br")])],-1),D=o("p",null,"不出意外的话接下来会出现记事本，你需要在里面写上以下内容：",-1),G=o("div",{class:"language-powershell ext-powershell line-numbers-mode"},[o("pre",{class:"language-powershell"},[o("code",null,[o("span",{class:"token function"},"Import-Module"),t(" posh"),o("span",{class:"token operator"},"-"),t("git\n"),o("span",{class:"token function"},"Import-Module"),t(" oh"),o("span",{class:"token operator"},"-"),t("my"),o("span",{class:"token operator"},"-"),t("posh\n"),o("span",{class:"token function"},"Set-Theme"),t(" Paradox\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br")])],-1),O=o("p",null,"保存该文件，重新打开 PowerShell 你就能看到一个发生改变了的 PowerShell 。",-1),j=o("p",null,[o("img",{src:"/assets/vMcBOyiREC-1024x523.a535b86f.png",alt:"img"})],-1),L=o("p",null,[t("oh-my-posh 提供了几组预设的主题供你选择，你可以通过 "),o("code",null,"Set-Theme"),t(" 命令来更改当前主题，可选的值有 "),o("code",null,"Agnoster"),t(" / "),o("code",null,"Paradox"),t(" / "),o("code",null,"Sorin"),t(" / "),o("code",null,"Darkblood"),t(" / "),o("code",null,"Avit"),t(" / "),o("code",null,"Honukai"),t(" / "),o("code",null,"Fish"),t(" / "),o("code",null,"Robbyrussell"),t(" 。")],-1),M=o("p",null,[o("img",{src:"/assets/sA8iXJPC2j.35a9a998.png",alt:"img"})],-1),A=o("p",null,[t("这个主题设置只在当前会话生效，为了每次启动 PowerShell 的时候都能加载你想要的主题，你还需要修改以下用户配置文件，就像上一个步骤中做的一样，只需要修改 "),o("code",null,"Set-Theme"),t(" 命令的部分即可。")],-1),R=o("h3",{id:"用上微软的-cascadia-code-字体",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#用上微软的-cascadia-code-字体","aria-hidden":"true"},"#"),t(" 用上微软的 Cascadia Code 字体")],-1),_=o("p",null,"或许你已经发现了有些字符显示不正常，那是因为默认的字体没有内嵌这些字符的形状，你还需要换一个字体。",-1),E=o("p",null,[t("微软的另一个开源项目，Cascadia Code"),o("sup",{class:"footnote-ref"},[o("a",{href:"#footnote4"},"[4]"),o("a",{class:"footnote-anchor",id:"footnote-ref4"})]),t(" 就是一款适用于终端和代码展示的字体，你可以使用 Scoop 来安装它；安装字体的时候需要使用到管理员权限，你可以使用 "),o("code",null,"sudo"),t(" 命令，或者用管理员权限重新打开 PowerShell，再执行安装。")],-1),J=o("p",null,[t("在安装之前，你可能需要添加一下 "),o("code",null,"nerd-fonts"),t(" 仓库，因为字体软件的元信息都存放于这个仓库中。")],-1),B=o("div",{class:"language-powershell ext-powershell line-numbers-mode"},[o("pre",{class:"language-powershell"},[o("code",null,[t("scoop bucket add nerd"),o("span",{class:"token operator"},"-"),t("fonts\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),N=o("p",null,"在 Scoop 的仓库中存在着好几个版本的 Cascadia Code，其中：",-1),U=o("ul",null,[o("li",null,[o("code",null,"Cascadia-Code"),t(" 是原版不带 Powerline 字符的；")]),o("li",null,[o("code",null,"Cascadia-PL"),t(" 是微软出品的，自带 Powerline 字符的；")]),o("li",null,[o("code",null,"CascadiaCode-NF"),t(" 是 Nerd Fonts"),o("sup",{class:"footnote-ref"},[o("a",{href:"#footnote5"},"[5]"),o("a",{class:"footnote-anchor",id:"footnote-ref5"})]),t(" 项目出品的，后期补丁了大量 Powerline 字符。")])],-1),$=o("p",null,[t("没有特殊需求的话可以选择官方出的轻量级的 "),o("code",null,"Cascadia-PL"),t(" ，执行以下命令：")],-1),H=o("div",{class:"language-powershell ext-powershell line-numbers-mode"},[o("pre",{class:"language-powershell"},[o("code",null,[t("sudo scoop install Cascadia"),o("span",{class:"token operator"},"-"),t("PL\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br")])],-1),K=o("p",null,"安装完成之后还需设置以下，指定 Windows Terminal 使用该字体。",-1),X=o("p",null,[t("目前 Windows Terminal 没有专门的设置界面，所有的配置项都在 "),o("code",null,"profiles.json"),t(" 配置文件里；在配置文件的对应地方设置 "),o("code",null,"fontFace"),t(" 的值为 "),o("code",null,"Cascadia Code PL"),t(" ：")],-1),q=o("div",{class:"language-json ext-json line-numbers-mode"},[o("pre",{class:"language-json"},[o("code",null,[o("span",{class:"token comment"},"// ..."),t("\n"),o("span",{class:"token property"},'"defaults"'),o("span",{class:"token operator"},":"),t("\n"),o("span",{class:"token punctuation"},"{"),t("\n    "),o("span",{class:"token comment"},"// Put settings here that you want to apply to all profiles"),t("\n    "),o("span",{class:"token property"},'"fontFace"'),o("span",{class:"token operator"},":"),t(),o("span",{class:"token string"},'"Cascadia Code PL"'),t("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),t("\n"),o("span",{class:"token comment"},"// ..."),t("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br"),o("span",{class:"line-number"},"4"),o("br"),o("span",{class:"line-number"},"5"),o("br"),o("span",{class:"line-number"},"6"),o("br"),o("span",{class:"line-number"},"7"),o("br")])],-1),z=o("p",null,"保存配置文件后就能使配置文件生效；此时所有字符应该能正常显示了。",-1),Z=o("p",null,[o("img",{src:"/assets/vjPXgPO7AB-1024x523.fc80c9b4.png",alt:"img"})],-1),Q=o("h3",{id:"集成-git-bash",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#集成-git-bash","aria-hidden":"true"},"#"),t(" 集成 Git Bash")],-1),V=o("p",null,[t("首先将 Git 安装目录下的 "),o("code",null,"bin"),t(" 目录加入 "),o("code",null,"Path"),t(" 环境变量，如果你是用 Scoop 安装的 Git，则可以忽略此步骤，因为 Scoop 已经帮你完成了这个工作；然后修改 Windows Terminal 的配置文件，在 "),o("code",null,"profiles"),t(" -> "),o("code",null,"list"),t(" 中新增一条配置：")],-1),Y=o("div",{class:"language-json ext-json line-numbers-mode"},[o("pre",{class:"language-json"},[o("code",null,[o("span",{class:"token comment"},"// ..."),t("\n"),o("span",{class:"token property"},'"list"'),o("span",{class:"token operator"},":"),t("\n"),o("span",{class:"token punctuation"},"["),t("\n\n    "),o("span",{class:"token punctuation"},"{"),t("\n        "),o("span",{class:"token property"},'"guid"'),o("span",{class:"token operator"},":"),t(),o("span",{class:"token string"},'"{61c54bbd-c2c6-5271-96e7-009a87ff4411}"'),o("span",{class:"token punctuation"},","),t("\n        "),o("span",{class:"token property"},'"name"'),o("span",{class:"token operator"},":"),t(),o("span",{class:"token string"},'"Git Bash"'),o("span",{class:"token punctuation"},","),t("\n        "),o("span",{class:"token property"},'"commandline"'),o("span",{class:"token operator"},":"),t(),o("span",{class:"token string"},'"bash.exe"'),o("span",{class:"token punctuation"},","),t("\n        "),o("span",{class:"token property"},'"hidden"'),o("span",{class:"token operator"},":"),t(),o("span",{class:"token boolean"},"false"),o("span",{class:"token punctuation"},","),t("\n        "),o("span",{class:"token property"},'"startingDirectory"'),t(),o("span",{class:"token operator"},":"),t(),o("span",{class:"token string"},'"%USERPROFILE%"'),t("\n    "),o("span",{class:"token punctuation"},"}"),t("\n"),o("span",{class:"token punctuation"},"]"),t("\n"),o("span",{class:"token comment"},"// ..."),t("\n")])]),o("div",{class:"line-numbers"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br"),o("span",{class:"line-number"},"4"),o("br"),o("span",{class:"line-number"},"5"),o("br"),o("span",{class:"line-number"},"6"),o("br"),o("span",{class:"line-number"},"7"),o("br"),o("span",{class:"line-number"},"8"),o("br"),o("span",{class:"line-number"},"9"),o("br"),o("span",{class:"line-number"},"10"),o("br"),o("span",{class:"line-number"},"11"),o("br"),o("span",{class:"line-number"},"12"),o("br"),o("span",{class:"line-number"},"13"),o("br")])],-1),ee=o("p",null,"注意 JSON 的语法格式，在列表中不要少加或者多加逗号。保存配置文件之后就能在 Windows Terminal 中快捷启动 Git Bash 了。",-1),ne=o("p",null,[o("img",{src:"/assets/SI7S9fkaKG-1024x523.d69ae1fc.png",alt:"img"})],-1),se=o("h2",{id:"后记",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#后记","aria-hidden":"true"},"#"),t(" 后记")],-1),oe=o("p",null,"新的 Windows Terminal 使用体验还是挺不错的，颜值也 OK，折腾一下也挺好用的。",-1),ae=o("hr",{class:"footnotes-sep"},null,-1),le={class:"footnotes"},te={class:"footnotes-list"},re={id:"footnote1",class:"footnote-item"},ce={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},pe=t("microsoft/terminal: The new Windows Terminal and the original Windows console host, all in the same place!"),ie=t(),ue=o("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),de=t(),he=o("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"↩︎",-1),fe={id:"footnote2",class:"footnote-item"},me={href:"https://github.com/JanDeDobbeleer/oh-my-posh2",target:"_blank",rel:"noopener noreferrer"},be=t("JanDeDobbeleer/oh-my-posh2: A prompt theming engine for Powershell"),ke=t(),ge=o("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),we={id:"footnote3",class:"footnote-item"},ye={href:"https://github.com/lukesampson/scoop",target:"_blank",rel:"noopener noreferrer"},Pe=t("lukesampson/scoop: A command-line installer for Windows."),Se=t(),xe=o("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),ve={id:"footnote4",class:"footnote-item"},Ce={href:"https://github.com/microsoft/cascadia-code",target:"_blank",rel:"noopener noreferrer"},Te=t("microsoft/cascadia-code: This is a fun, new monospaced font that includes programming ligatures and is designed to enhance the modern look and feel of the Windows Terminal."),We=t(),Fe=o("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),Ie={id:"footnote5",class:"footnote-item"},De={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},Ge=t("ryanoasis/nerd-fonts: Iconic font aggregator, collection, & patcher. 3,600+ icons, 50+ patched fonts: Hack, Source Code Pro, more. Glyph collections: Font Awesome, Material Design Icons, Octicons, & more"),Oe=t(),je=o("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1);r.render=function(t,r){const Le=e("OutboundLink");return n(),s(l,null,[c,o("blockquote",null,[p,o("p",null,[i,o("a",u,[d,a(Le)]),h]),o("p",null,[f,o("a",m,[b,a(Le)]),k])]),g,w,y,P,S,x,v,C,T,W,F,I,D,G,O,j,L,M,A,R,_,E,J,B,N,U,$,H,K,X,q,z,Z,Q,V,Y,ee,ne,se,oe,ae,o("section",le,[o("ol",te,[o("li",re,[o("p",null,[o("a",ce,[pe,a(Le)]),ie,ue,de,he])]),o("li",fe,[o("p",null,[o("a",me,[be,a(Le)]),ke,ge])]),o("li",we,[o("p",null,[o("a",ye,[Pe,a(Le)]),Se,xe])]),o("li",ve,[o("p",null,[o("a",Ce,[Te,a(Le)]),We,Fe])]),o("li",Ie,[o("p",null,[o("a",De,[Ge,a(Le)]),Oe,je])])])])],64)};export{r as default};
