# Tooltip 文字提示

当用户将鼠标悬停在某个元素上时，显示的包含有用信息的弹出窗口。

## 使用指南

### 基础用法

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>悬停我</TooltipTrigger>
        <TooltipContent>
          <p>添加到库</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `TooltipProvider` | 必需的包装组件，通常放在 App 根部 |
| `Tooltip` | 根容器 |
| `TooltipTrigger` | 触发元素 |
| `TooltipContent` | 提示内容 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
