# Switch 开关

用于在两个互斥状态（如打开/关闭）之间进行切换。

## 使用指南

### 基础用法

```tsx
import { Switch } from "pd-shad-ui"
import { Label } from "pd-shad-ui"

export default function Example() {
  return (
    <div className="pd-flex pd-items-center pd-space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">飞行模式</Label>
    </div>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `checked` | `boolean` | `false` | 是否开启 |
| `onCheckedChange` | `(checked: boolean) => void` | `-` | 状态改变时的回调 |
| `disabled` | `boolean` | `false` | 是否禁用 |
