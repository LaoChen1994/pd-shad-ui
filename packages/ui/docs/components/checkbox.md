# Checkbox 复选框

允许用户从一组选项中选择一个或多个项目。

## 使用指南

### 基础用法

```tsx
import { Checkbox } from "pd-shad-ui"
import { Label } from "pd-shad-ui"

export default function Example() {
  return (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">接受服务条款</Label>
    </div>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `checked` | `boolean \| "indeterminate"` | `false` | 是否选中 |
| `onCheckedChange` | `(checked: boolean) => void` | `-` | 选中状态改变时的回调 |
| `disabled` | `boolean` | `false` | 是否禁用 |
