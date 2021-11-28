# Markdown 渲染测试

## Autolink

If the `autolink` extension is enabled the URL https://www.github.com is displayed as a link.

## Emoji

Using the `emoji` extension you can replace the `:smile:` with :smile:.

You can choose to use the standard emoji font or the GitHub images.
Multibyte emoji are also supported, so `:it:` equivalent to the code `\u1f1ee\u1f1f9` must be rendered as the Italian flag :it:.

## Inline images

The `inline image` extension embed the local image inside the HTML output. **Is required for view local images in the Quick Look preview.**

![Minion](markdown-render-test.assets/minion.png)

## Table
| Option | Description                                                  |
| -----: | :----------------------------------------------------------- |
|   data | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
|    ext | extension to be used for dest files.                         |

## Strikethrough
You can choose to recognize the single tilde \~ on ~test~ or only the double tilde \~\~ on ~~another test~~.

## Syntax Highlight

This fenced block uses the php syntax highlight:

```java
public static <K,V> Map<K,V> synchronizedMap(Map<K,V> m) {
    return new SynchronizedMap<>(m);
}
```

## Task list
* [x] step 1
* [ ] step 2
* [ ] step 3

## Footnotes

The `smart quote` option format the quote as "curly" [^1].

[^1]: If the option `footnotes` is enabled this text is rendered as a foot note. Footnotes is not recognized in the github pages.

## Mermaid

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

## PlantUML

```puml
@startuml
participant participant as Foo
actor       actor       as Foo1
boundary    boundary    as Foo2
control     control     as Foo3
entity      entity      as Foo4
database    database    as Foo5
collections collections as Foo6
queue       queue       as Foo7
Foo -> Foo1 : To actor
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7 : To queue
@enduml
```

```plantuml
@startuml
participant participant as Foo
actor       actor       as Foo1
boundary    boundary    as Foo2
control     control     as Foo3
entity      entity      as Foo4
database    database    as Foo5
collections collections as Foo6
queue       queue       as Foo7
Foo -> Foo1 : To actor
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7 : To queue
@enduml
```

## Tex

$c = \sqrt{a^{2}+b_{xy}^{2}+e^{x}}$

$$
c = \sqrt{a^{2}+b_{xy}^{2} +e^{x}}
$$
