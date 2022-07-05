---
date: 2022-07-05
tags:
    - gpg
---

# 使用 GPG 签名和加密

## 前言

> GNU Privacy Guard（GnuPG 或 GPG）是一个密码学软件，用于加密、签名通信内容及管理非对称密码学的密钥。GnuPG 是自由软件，遵循 IETF 订定的 OpenPGP 技术标准设计，并与 PGP 保持兼容。

<!-- more -->

## 安装

在 macOS 上可以使用 Homebrew 安装。

```bash
brew install --cask gpg-suite
```

在 Debian 上可以使用 apt 安装。

```bash
apt install gunpg
```

## 创建自己的公钥和私钥

- `--full-gen-key`：使用完整向导创建密钥

```bash
gpg --full-gen-key

gpg (GnuPG/MacGPG2) 2.2.34; Copyright (C) 2022 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
  (14) Existing key from card
# 选择 4，只生成一个主私钥，后面再生成子私钥使用
Your selection? 4
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
# 主私钥永不过期
Key is valid for? (0) 0
Key does not expire at all
# y
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

# uid 名称
Real name: Bug-Proof
# uid 电子邮件
Email address: bug-proof@example.org
# uid 备注
Comment: for test only
You selected this USER-ID:
    "Bug-Proof (for test only) <bug-proof@example.org>"

# O
Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: revocation certificate stored as '/Users/x/.gnupg/openpgp-revocs.d/8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272.rev'
public and secret key created and signed.

Note that this key cannot be used for encryption.  You may want to use
the command "--edit-key" to generate a subkey for this purpose.
pub   rsa4096/0x7DCE475DEA06B272 2022-07-04 [SC]
      Key fingerprint = 8A8F B3D3 C4C8 1471 E7D0  DBA7 7DCE 475D EA06 B272
uid                              Bug-Proof (for test only) <bug-proof@example.org>
```

## 列出密钥

- `-k`，`--list-keys`：列出公钥
- `-K`，`--list-secret-keys`：列出私钥
- `--keyid-format long`：显示完整的 keyid

```
# 列出公钥
gpg --keyid-format long -k

/Users/x/.gnupg/pubring.kbx
-------------------------------
pub   rsa4096/7DCE475DEA06B272 2022-07-04 [SC]
      8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
uid                 [ultimate] Bug-Proof (for test only) <bug-proof@example.org>
```

```
# 列出私钥
gpg --keyid-format long -K

/Users/x/.gnupg/pubring.kbx
-------------------------------
sec   rsa4096/7DCE475DEA06B272 2022-07-04 [SC]
      8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
uid                 [ultimate] Bug-Proof (for test only) <bug-proof@example.org>
```

下表是结果中的一些关键词解释。

| 缩写  | 原文                | 解释             |
| ----- | ------------------- | ---------------- |
| `pub` | public key          | 公钥             |
| `sec` | secret key          | 私钥             |
| `uid` | user identification | 用户信息         |
| `sub` | public subkey       | 子公钥           |
| `ssb` | secret subkey       | 子私钥           |
| `S`   | Sign             | 表示可以用于签名 |
| `C`   | Certify       | 可以用于认证     |
| `E`   | Encrypt          | 加密             |
| `A`   | Authenticate      | 认证             |

## 管理密钥和子密钥

主私钥不应该直接使用，主私钥只用来管理主密钥和子密钥，使用子私钥来解密和签名。

```bash
gpg --edit-key Bug-Proof
gpg --edit-key 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
```

- `--edit-key`：后跟用户名或者指纹

之后会进入交互式命令行，在其中可以使用命令来对密钥进行管理。

- `addkey`，增加子密钥
- `key <n>`，后跟密钥 ID，有些单体命令需要提前选择要操作的 key，使用`key 0`取消选择，`key *`选择所有
    - `expire`，更改子密钥的过期时间
    - `delkey`，删除子密钥
    - `revkey`，吊销子密钥
    - `change-usage`，更改子密钥用户
- `expire`，如果没有选择子密钥，此命令更改主密钥的过期时间
- `trust`，更改此密钥的信任级别
- `passwd`，更改主密钥密码
- `change-usage`，更改主密钥用途
- `save`，保存更改
- `quit`，退出

## 生成子密钥

```bash
gpg --edit-key 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272

gpg (GnuPG/MacGPG2) 2.2.34; Copyright (C) 2022 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  rsa4096/7DCE475DEA06B272
     created: 2022-07-04  expires: never       usage: SC
     trust: ultimate      validity: ultimate
[ultimate] (1). Bug-Proof (for test only) <bug-proof@example.org>

# addkey 创建子密钥
gpg> addkey
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
  (14) Existing key from card
# 创建一个 RSA 格式的子密钥，仅用于签名
Your selection? 4
RSA keys may be between 1024 and 4096 bits long.
# 密钥长度，默认 3072
What keysize do you want? (3072)
Requested keysize is 3072 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
# 设置过期时间 1 年
Key is valid for? (0) 1y
Key expires at Wed Jul  5 19:51:48 2023 CST
# y
Is this correct? (y/N) y
# y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  rsa4096/7DCE475DEA06B272
     created: 2022-07-04  expires: never       usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa3072/D45B326AA437793B
     created: 2022-07-05  expires: 2023-07-05  usage: S
[ultimate] (1). Bug-Proof (for test only) <bug-proof@example.org>

# addkey 创建子密钥
gpg> addkey
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
  (14) Existing key from card
# 创建一个 RSA 格式的子密钥，仅用于签名
Your selection? 6
RSA keys may be between 1024 and 4096 bits long.
# 密钥长度，默认 3072
What keysize do you want? (3072)
Requested keysize is 3072 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
# 设置过期时间 1 年
Key is valid for? (0) 1y
Key expires at Wed Jul  5 19:52:02 2023 CST
# y
Is this correct? (y/N) y
# y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  rsa4096/7DCE475DEA06B272
     created: 2022-07-04  expires: never       usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa3072/D45B326AA437793B
     created: 2022-07-05  expires: 2023-07-05  usage: S
ssb  rsa3072/E7728368B3AAB2B7
     created: 2022-07-05  expires: 2023-07-05  usage: E
[ultimate] (1). Bug-Proof (for test only) <bug-proof@example.org>

gpg> save
```

## 管理 uid

- `adduid`，增加用户信息
- `uid <n>`，后跟 uid 索引，选择某个 uid 操作，使用`uid 0`取消选择，`uid *`选择所有
- `save`，保存修改

## 上传公钥到公开服务器

除非必要，不要上传公钥到公开的公钥服务器，上传之后就不能删除了，只能进行修改和吊销，你的用户名和电子邮件地址所有人都能看到。

## 签名和验证

签名的使用场景是确保自己发送给别人的信息在传输过程中不被修改。签名使用自己的私钥，接收者用我的公钥进行验证。

- `-s`,`--sign`：签名
- `--clear-sing`：签名和原文放一起，都是 ASCII 形式
- `-b`，`--detach-sign`：签名和文件分离
- `--verify`：验证
- `-a`，`--armor`：输出 ASCII 内容，而不是二进制内容
- `-u`，`--local-user`：指定使用某个私钥签名

准备一个文件`message.txt`作为测试文件，其内容如下。

```
Hello
```

```bash
# 签名，会生成 message.txt.gpg 文件
# 发送的时候两个文件一起发送
gpg -u D45B326AA437793B -s message.txt

# 验证
# 验证的时候要把原文和签名放在一起
gpg --verify message.txt.gpg
gpg: Signature made Tue Jul  5 20:29:49 2022 CST
gpg:                using RSA key 589AFC0EF76D48A4C1165E63D45B326AA437793B
gpg: Good signature from "Bug-Proof (for test only) <bug-proof@example.org>" [ultimate]
```

```bash
# 签名，会生成 message.txt.asc，是文本文件，签名和原文放在一起
# 发送的时候只用发送 message.txt.asc
gpg -u D45B326AA437793B --clear-sign message.txt
cat message.txt.asc
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

Hello
-----BEGIN PGP SIGNATURE-----

iQGzBAEBCAAdFiEEWJr8DvdtSKTBFl5j1FsyaqQ3eTsFAmLELz8ACgkQ1FsyaqQ3
eTvY2Av/XCDbRdK8kM4r5PRnALVKYGsVVJC84JPfxa7iPG1/1bUtRMZm69aGMApa
sm0CHDElRTwVZf3orIZ2u/Ahmlrdne9GULa3FkZGSZ5DY9xGHCbk7zmIJJXwTJZw
7as6uexU5Qb3sEA+RrbhanDv6Q36LS0772MwB/ijcHppakbxUPPLhdZOSAjm+0s6
Qy6JYW6iTjaXMcxS4xCPJ4LGFDeV6uOjuDNfBOL3ZdyT/jgIFm5LW5Sb4xiFn/gk
RZit0xga38RgczmBWWOCj8TMoSz7VBuHWNl+5OlcGrE5Fnemv2p1BkcZ47tTfm1T
SF+bWMUsgRLvH15kUtfweQ58BDX2dZWb3SrAjMwACoRDMZ314grPXJE/Tl5ZXvc4
7wtCI+g7E7eqNJ3w3kWqb2LNo1BuWAjiaaHmTJ7gmGtG6VqX1Muk2JyyWr49LyZA
YHQFXVfVYBmih5FgrU3l7mKWfTv+niVRp6JQXxtXnbH1SOwZdnz+HKR2UEf2IwRD
+HyHkNcH
=w3M/
-----END PGP SIGNATURE-----
# 验证
gpg --verify message.txt.asc
gpg: Signature made Tue Jul  5 20:31:59 2022 CST
gpg:                using RSA key 589AFC0EF76D48A4C1165E63D45B326AA437793B
gpg: Good signature from "Bug-Proof (for test only) <bug-proof@example.org>" [ultimate]
gpg: WARNING: not a detached signature; file 'message.txt' was NOT verified!
```

```bash
# 签名，生成 message.txt.sig，签名文件是二进制的
gpg -u D45B326AA437793B -b message.txt

# 验证
gpg --verify message.txt.sig
gpg: assuming signed data in 'message.txt'
gpg: Signature made Tue Jul  5 20:40:21 2022 CST
gpg:                using RSA key 589AFC0EF76D48A4C1165E63D45B326AA437793B
gpg: Good signature from "Bug-Proof (for test only) <bug-proof@example.org>" [ultimate]
```

```bash
# 签名，生成 message.txt.asc，只存放签名不存放原文
gpg -u D45B326AA437793B -a -b message.txt
cat message.txt.asc
-----BEGIN PGP SIGNATURE-----

iQGzBAABCAAdFiEEWJr8DvdtSKTBFl5j1FsyaqQ3eTsFAmLEO5QACgkQ1FsyaqQ3
eTtA/AwAtYnst04ORGPaBnq/Rz7QLjg+L0FlNFL3+BELAjaPfYAmxjW/rsKQIS6B
r7JVXZsIs9EwzVMQFA6EI0NY1pOomAz4szzf/jqipJT3TadXjyh1Wx3Js/+xdOhm
aUboz2aHxeEDvq2g1bF3nbOQ8kE1TJTZUX7fGD6BeFnCF2HVkHb1MEBzZ9xCJGFE
njVF52gP/GFInHPUuIa2GCeEtGv/Dsr5IjODqZwohxVJq0rGvhBGTcmGv/6pOeLp
B4g7uauqGv6QZtiK5gf4BfrPyeGXVHiSD2V5mKOSKRi0gTaUTf0UEl1UehpWOfdo
vwX0CnidD5uxzqMhPP5o587eLx9DczFw4IsscjflSSbBp7eW5t6EXm+KPkOj22vc
qpc81dQQfXCm1FjOHedmfyJLPt+RXOM53KBHT6CaNUUzWx2a4x4kbsfC0auzMbXU
nye9hARzbSNvMD6cRqY/y0yAsYK/6ilXeX5qKwwXA/D0IFl0md8eZfsOQqYPA3E3
JJWVt5Hw
=ESB9
-----END PGP SIGNATURE-----
# 验证
gpg --verify message.txt.asc
gpg: assuming signed data in 'message.txt'
gpg: Signature made Tue Jul  5 21:24:36 2022 CST
gpg:                using RSA key 589AFC0EF76D48A4C1165E63D45B326AA437793B
gpg: Good signature from "Bug-Proof (for test only) <bug-proof@example.org>" [ultimate]
```

## 加密和解密

加密用接收者的公钥，解密用接收者的私钥。

- `-e`，`--encrypt`：加密
- `-c`，`--symmetric`：对称加密
- `-d`，`--decrypt`：解密
- `-r`，`--recipient`：指定接收者公钥
- `-a`，`--armor`：输出 ASCII 内容，而不是二进制内容
- `-o`，`--output`：指定输出文件名，而不是输出到标准输出

```bash
# 加密，生成 message.txt.gpg，内容为二进制格式
gpg -r 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272 -e message.txt

# 加密，生成 message.txt.asc，内容为文本格式
gpg -r 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272 -a -e message.txt
```

```bash
# 解密，输出到屏幕
gpg -d message.txt.gpg
gpg -d message.txt.asc

# 解密，输出到文件
gpg -d message.txt.gpg -o message-decrypted.txt
gpg -d message.txt.asc -o message-decrypted.txt
```

## 对称加密

GPG 除了可以使用密钥进行非对称加密，还可以使用对称加密，即加密和解密都用同一个密码，不需要密钥。

- `-c`，`--symmetric`：对称加密
- `--cipher-algo`：选择加密算法，默认是 AES-128

```bash
# 对称加密，会有弹窗提示你输入密码，生成 message.txt.gpg
gpg --symmetric message.txt
# 对称加密，会有弹窗提示你输入密码，生成 message.txt.asc
gpg -a --symmetric message.txt
```

```bash
# 解密
gpg -d message.txt.gpg
gpg -d message.txt.asc
```

## 签名并加密

```bash
# 签名并加密，输出 message.txt.asc，文本文件
gpg -u D45B326AA437793B -r 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272 -a -s -e message.txt

# 解密并验证
gpg -d message.txt.asc -o message-decrypted.txt
```

## 导出密钥

下面的命令用于导出公钥。导出的公钥不仅仅是主公钥，还包括所有子密钥的公钥。

```bash
gpg -a -o bug-proof.pub --export 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
```

下面的命令用于导出主私钥。在备份的时候记得把吊销证书一起备份了。

要在密钥指纹后加上叹号`!`，不然会连子密钥的私钥一起导出了。

```bash
# 导出主密钥
gpg -a -o bug-proof.sec --export-secret-keys 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272!
# 导出主密钥和子密钥
gpg -a -o bug-proof.all.sec --export-secret-keys 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
```

下面的命令用于单独导出子私钥。要在密钥指纹后加上叹号`!`，不然所有子密钥的私钥一起导出了。

```bash
gpg -a -o bug-proof.s.ssb --export-secret-subkeys D45B326AA437793B!
gpg -a -o bug-proof.e.ssb --export-secret-subkeys E7728368B3AAB2B7!
```

## 删除密钥

```bash
# 删除主私钥
gpg --delete-secret-keys 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272!

# 删除子私钥
gpg --delete-secret-keys D45B326AA437793B!
gpg --delete-secret-keys E7728368B3AAB2B7!

# 删除公钥
gpg --delete-keys 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
```

## 导入密钥

```bash
# 导入公钥
gpg --import bug-proof.pub
# 导入主私钥
gpg --import bug-proof.sec
# 导入子私钥
gpg --import bug-proof.s.ssb
# 导入子私钥
gpg --import bug-proof.e.ssb
```

## 生成吊销证书

在你忘记主密钥的密码，或者失去主密钥控制权的时候可以使用吊销证书来吊销密钥。吊销之后会生成一个新的公钥，其中包含了吊销信息，你需要把这个公钥发布到你一贯发布公钥的地方，通知其他人此密钥已吊销。

- `-o`，`--output`：指定输出文件名，而不是输出到标准输出
- `--gen-revoke`，`--generate-revocation`：生成吊销证书

```bash
gpg -o bug-proof.revoke.cert --gen-revoke 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272

sec  rsa4096/7DCE475DEA06B272 2022-07-04 Bug-Proof (for test only) <bug-proof@example.org>
# y
Create a revocation certificate for this key? (y/N) y
Please select the reason for the revocation:
  0 = No reason specified
  1 = Key has been compromised
  2 = Key is superseded
  3 = Key is no longer used
  Q = Cancel
(Probably you want to select 1 here)
# 选择吊销原因
Your decision? 0
Enter an optional description; end it with an empty line:
# 自己写吊销原因，可以不写
>
Reason for revocation: No reason specified
(No description given)
# y
Is this okay? (y/N) y
ASCII armored output forced.
Revocation certificate created.

Please move it to a medium which you can hide away; if Mallory gets
access to this certificate he can use it to make your key unusable.
It is smart to print this certificate and store it away, just in case
your media become unreadable.  But have some caution:  The print system of
your machine might store the data and make it available to others!
```

## 吊销密钥

吊销密钥只需要公钥和吊销证书，把公钥和吊销证书合并之后公钥会发生变化，发布新公钥即可对其他人表明已吊销证书。

这个步骤是吊销整个密钥，如果需要吊销子密钥的话可以在`--edit-key`命令中完成。

吊销密钥的步骤如下。

1. 导出吊销证书，这一步要提前做，把吊销证书和私钥单独保存
2. 导入吊销证书，和现有的公钥合并
3. 导出合并之后的公钥
4. 发布公钥
5. 其他人导入你的新公钥就知道你的密钥已经吊销了

```bash
# 上一步已经提前导出了吊销证书
gpg --import bug-proof.revoke.cert
# 查看证书列表，会看到 revoked 标记
gpg --keyid-format long -k
/Users/x/.gnupg/pubring.kbx
-------------------------------
pub   rsa4096/7DCE475DEA06B272 2022-07-04 [SC] [revoked: 2022-07-05]
      8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
uid                 [ revoked] Bug-Proof (for test only) <bug-proof@example.org>
# 导出新公钥
gpg -a -o bug-proof.revoked.pub --export 8A8FB3D3C4C81471E7D0DBA77DCE475DEA06B272
```

## 最佳实践

主私钥只用来管理主密钥和子密钥，日常的签名和加密用途只用子密钥，可以为不同用途分别生成不同的子密钥。

主密钥平时不导入到本地，而是保存在其他地方。

同时也要记得生成吊销证书并保存，主密钥可以丢，吊销证书一定不能丢。

## GPG 和 Git

因为 Git 设置中的 username 和 email 都是可以随意修改的，所以并不一定能保证某个 Git 提交是真的你做的。

设置 Git，使用子密钥签名。

```bash
git config --global user.signingkey D45B326AA437793B
```

```bash
# 签名提交
git commit -S -m "commit message"
# 签名合并提交
git merge -S  signed-branch
# 验证提交
git log --show-signature

# 签名标签
git tag -s v1.5 -m 'my signed 1.5 tag'
# 验证标签
git tag -v <tag-name>
```

## 什么情况下需要更新公钥

1. 密钥吊销之后
2. 更改主密钥的有效期之后
3. 修改 uid 信息之后
4. 对子密钥进行修改之后

## 参考资料

- [Gnu 隐私卫士 (GnuPG) 袖珍 HOWTO (中文版)](https://www.gnupg.org/howtos/zh/index.html)
- [2021 年，用更现代的方法使用 PGP（上） - C 的博客 |UlyC](https://ulyc.github.io/2021/01/13/2021%E5%B9%B4-%E7%94%A8%E6%9B%B4%E7%8E%B0%E4%BB%A3%E7%9A%84%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8PGP-%E4%B8%8A/)
- [2021 年，用更现代的方法使用 PGP（中） - C 的博客 |UlyC](https://ulyc.github.io/2021/01/18/2021%E5%B9%B4-%E7%94%A8%E6%9B%B4%E7%8E%B0%E4%BB%A3%E7%9A%84%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8PGP-%E4%B8%AD/)
- [2021 年，用更现代的方法使用 PGP（下） - C 的博客 |UlyC](https://ulyc.github.io/2021/01/26/2021%E5%B9%B4-%E7%94%A8%E6%9B%B4%E7%8E%B0%E4%BB%A3%E7%9A%84%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8PGP-%E4%B8%8B/)
- [GPG 使用笔记](https://blog.creedowl.com/posts/gpg/)
- [GnuPG 学习笔记 - FBICLOUD](https://blog.fbicloud.com/gpg-help/)
- [Signing commits with GPG | GitLab](https://docs.gitlab.com/ee/user/project/repository/gpg_signed_commits/)
- [Git - 签署工作](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E7%AD%BE%E7%BD%B2%E5%B7%A5%E4%BD%9C)
