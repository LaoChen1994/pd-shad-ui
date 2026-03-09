# Scroll Area 滚动区域

增强原生滚动，支持自定义跨浏览器滚动条样式。基于 `radix-ui`。

## 使用指南

### 基础用法

```tsx
import { ScrollArea } from "pd-shad-ui"

export default function Example() {
  return (
    <ScrollArea className="pd-h-[200px] pd-w-[350px] pd-rounded-md pd-border pd-p-4">
      这里是很长的滚动内容...
    </ScrollArea>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `type` | `"auto" \| "always" \| "scroll" \| "hover"` | `"hover"` | 滚动条显示方式 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
