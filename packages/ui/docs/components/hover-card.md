# Hover Card 悬停卡片

供视力正常的学者预览链接后面的内容。

## 使用指南

### 基础用法

```tsx
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger>@nextjs</HoverCardTrigger>
      <HoverCardContent>
        The Next.js framework – created by Vercel.
      </HoverCardContent>
    </HoverCard>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `open` | `boolean` | - | 是否打开 |
| `onOpenChange` | `function` | - | 打开状态改变时的回调 |
| `openDelay` | `number` | `700` | 打开延迟（毫秒） |
| `closeDelay` | `number` | `300` | 关闭延迟（毫秒） |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
