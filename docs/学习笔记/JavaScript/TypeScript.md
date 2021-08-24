# TypeScript

## 基本类型

在声明变量时指定类型。如果在声明时直接赋值则TS会自动推断类型。

```typescript
let a: number;
let b = true;
```

| 类型    | 例子 | 描述                               |
| ------- | ---- | ---------------------------------- |
| number  |      | 数字                               |
| string  |      | 字符串                             |
| boolean |      | 布尔值                             |
| 字面量  |      | 限制类型和值就只能是当前字面量本身 |
| any     |      | 任意类型                           |
| unknown |      | 类型安全的any                      |
| void    |      | 没有值或undefined                  |
| never   |      | 没有值，不能是任何值               |
| object  |      | 任意JavaScript对象                 |
| array   |      | 数组                               |
| tuple   |      | 固定长度数组                       |
| enum    |      | 枚举                               |

可以使用`|`来连接多个类型。

```typescript
let a: "male" | "female"
let b: number | boolean
```

