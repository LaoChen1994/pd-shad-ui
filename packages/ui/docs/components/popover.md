# Popover 气泡卡片

在某个元素旁边显示浮动内容。

## 使用指南

### 基础用法

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <Popover>
      <PopoverTrigger>打开气泡</PopoverTrigger>
      <PopoverContent>
        这里是气泡卡片的内容。
      </PopoverContent>
    </Popover>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `align` | `"start" \| "center" \| "end"` | `"center"` | 内容对齐方式 |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | 内容显示方位 |
| `sideOffset` | `number` | `4` | 与触发元素的间距 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
