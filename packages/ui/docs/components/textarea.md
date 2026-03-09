# Textarea 多行输入框

允许用户输入多行文本。

## 使用指南

### 基础用法

```tsx
import { Textarea } from "pd-shad-ui"

export default function Example() {
  return <Textarea placeholder="在这里输入您的消息。" />
}
```

### 禁用状态

```tsx
<Textarea disabled placeholder="在这里输入您的消息。" />
```

## API 参考

`Textarea` 支持所有标准 HTML `textarea` 属性。

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `placeholder` | `string` | - | 占位文本 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
