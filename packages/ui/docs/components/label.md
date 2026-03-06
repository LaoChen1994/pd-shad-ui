# Label 标签

为表单元素提供易读的名称或描述。

## 使用指南

### 基础用法

```tsx
import { Label } from "pd-shad-ui"
import { Input } from "pd-shad-ui"

export default function Example() {
  return (
    <div>
      <Label htmlFor="email">您的邮箱</Label>
      <Input type="email" id="email" />
    </div>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `htmlFor` | `string` | `-` | 关联的表单控件 ID |
