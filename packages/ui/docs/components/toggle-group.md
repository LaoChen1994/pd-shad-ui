# Toggle Group 开关组

一组可以切换开/关状态的按钮。

## 使用指南

### 基础用法

```tsx
import { ToggleGroup, ToggleGroupItem } from "pd-shad-ui"
import { Bold, Italic, Underline } from "lucide-react"

export default function Example() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="pd-h-4 pd-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="pd-h-4 pd-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="pd-h-4 pd-w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `type` | `"single" \| "multiple"` | `"single"` | 选择模式 |
| `variant` | `"default" \| "outline"` | `"default"` | 按钮变体风格 |
| `size` | `"default" \| "sm" \| "lg"` | `"default"` | 按钮尺寸 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
