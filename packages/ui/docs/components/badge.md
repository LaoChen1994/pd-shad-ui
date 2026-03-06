# Badge 徽章

用于展示状态、分类或数值标记。

## 使用指南

### 基础用法

```tsx
import { Badge } from "pd-ui"

export default function Example() {
  return <Badge>Badge</Badge>
}
```

### 变体 (Variants)

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline"` | `"default"` | 徽章风格 |
