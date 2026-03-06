# Progress 进度条

展示任务进度的视觉组件。

## 使用指南

### 基础用法

```tsx
import { Progress } from "pd-ui"

export default function Example() {
  return <Progress value={33} className="pd-w-[60%]" />
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `value` | `number` | `0` | 进度值 (0-100) |
| `max` | `number` | `100` | 最大值 |
