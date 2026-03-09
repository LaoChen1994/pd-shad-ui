# Toggle 开关

一个可以切换开/关状态的按钮。

## 使用指南

### 基础用法

```tsx
import { Toggle } from "pd-shad-ui"
import { Bold } from "lucide-react"

export default function Example() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="pd-h-4 pd-w-4" />
    </Toggle>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `variant` | `"default" \| "outline"` | `"default"` | 按钮变体风格 |
| `size` | `"default" \| "sm" \| "lg"` | `"default"` | 按钮尺寸 |
| `pressed` | `boolean` | - | 是否处于开启状态 |
| `onPressedChange` | `function` | - | 状态改变时的回调 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
