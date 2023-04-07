# 使用 .gitattributes 来统一换行符风格

## 前言

使用`.gitattributes`定义 Git 仓库内文件的换行符样式，避免换行符混乱。

## 全新 Git 仓库

在 Git 仓库的根目录创建`.gitattributes`文件，内容如下：

```txt
* text=auto eol=lf
```

可以根据需要把`lf`改为`crlf`。

## 旧 Git 仓库转换

在完成上一个步骤之后执行下面的命令，在执行命令之前要确保本地的更改都提交了。

```bash
git rm --cached -r .
git reset --hard
```

## 参考资料

- [Git - gitattributes Documentation](https://www.git-scm.com/docs/gitattributes)
- [windows - Git replacing LF with CRLF - Stack Overflow](https://stackoverflow.com/questions/1967370/git-replacing-lf-with-crlf)
- [配置 Git 处理行结束符 - GitHub 文档](https://docs.github.com/zh/get-started/getting-started-with-git/configuring-git-to-handle-line-endings)
[.gitattributes 正确使用姿势 - 掘金](https://juejin.cn/post/7084885453920272398)
- [Gitattributes Generator](https://www.richie-bendall.ml/gitattributes-generator/)
- [gitignore.io - 为你的项目创建必要的 .gitignore 文件](https://www.toptal.com/developers/gitignore)
