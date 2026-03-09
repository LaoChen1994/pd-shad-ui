# Aspect Ratio 宽高比

用于在特定比例下显示内容。

## 使用指南

### 基础用法

```tsx
import { AspectRatio } from "pd-shad-ui"

export default function Example() {
  return (
    <div className="pd-w-[450px]">
      <AspectRatio ratio={16 / 9} className="pd-bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcd27f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="pd-h-full pd-w-full pd-rounded-md pd-object-cover"
        />
      </AspectRatio>
    </div>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `ratio` | `number` | `1` | 期望的比例 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
