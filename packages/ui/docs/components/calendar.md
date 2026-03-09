# Calendar 日历

用于显示日期，支持选择。

## 使用指南

### 基础用法

```tsx
import * as React from "react"
import { Calendar } from "pd-shad-ui"

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="pd-rounded-md pd-border"
    />
  )
}
```

## API 参考

`Calendar` 组件基于 `react-day-picker`。支持所有 `DayPicker` 的 props。

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `mode` | `single \| multiple \| range` | `single` | 选择模式 |
| `selected` | `Date \| Date[] \| DateRange` | - | 选中的日期 |
| `onSelect` | `function` | - | 选择日期时的回调 |
| `showOutsideDays` | `boolean` | `true` | 是否显示相邻月份的日期 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
