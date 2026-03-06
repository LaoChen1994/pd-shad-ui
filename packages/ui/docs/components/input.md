# Input 输入框

用于接收用户输入文本的基础组件。

## 使用指南

### 基础用法

```tsx
import { Input } from "pd-ui"
import { Label } from "pd-ui"

export default function Example() {
  return (
    <div className="pd-grid pd-w-full pd-max-w-sm pd-items-center pd-gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
```

### 禁用状态

```tsx
<Input disabled placeholder="Disabled" />
```

### 文件上传

```tsx
<Input id="picture" type="file" />
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `type` | `string` | `text` | HTML 原生输入框类型 |
| `placeholder` | `string` | `-` | 占位符文本 |
| `disabled` | `boolean` | `false` | 是否禁用输入框 |
| `className` | `string` | `-` | 自定义类名 |

所有标准 HTML Input 属性均被透传。
