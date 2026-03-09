# Slider 滑块

允许用户在一系列值中进行选择。

## 使用指南

### 基础用法

```tsx
import { Slider } from "pd-shad-ui"

export default function Example() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="pd-w-[60%]"
    />
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `defaultValue` | `number[]` | - | 默认值 |
| `max` | `number` | `100` | 最大值 |
| `min` | `number` | `0` | 最小值 |
| `step` | `number` | `1` | 步长 |
| `onValueChange` | `function` | - | 值改变时的回调 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
