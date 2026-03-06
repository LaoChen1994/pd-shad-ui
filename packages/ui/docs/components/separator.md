# Separator 分割线

用于分割内容块或列表项的视觉线条。

## 使用指南

### 基础用法

```tsx
import { Separator } from "pd-shad-ui"

export default function Example() {
  return (
    <div>
      <p>顶部内容</p>
      <Separator className="pd-my-4" />
      <p>底部内容</p>
    </div>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | 分割线方向 |
