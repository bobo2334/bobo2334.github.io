---
tags: [ssh]
---

# 通过代理连接 SSH 服务器

## 正文

下面的命令用于通过 SOCKS5 代理连接到 SSH 服务器。其中`127.0.0.1:7890`是本地 SOCKS5 代理的地址和端口号。

```bash
ssh -oProxyCommand="nc -x 127.0.0.1:7890 %h %p" root@198.198.198.198
```

## 参考资料

- [透过代理连接 SSH [Lainme's Blog]](https://www.lainme.com/doku.php/blog/2011/01/%E9%80%8F%E8%BF%87%E4%BB%A3%E7%90%86%E8%BF%9E%E6%8E%A5ssh)
