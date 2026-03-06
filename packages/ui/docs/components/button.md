# Button 按钮

用于触发特定操作的基础组件。

## 使用指南

### 基础用法

```tsx
import { Button } from "pd-ui"

export default function Example() {
  return <Button>点击我</Button>
}
```

### 按钮变体 (Variants)

支持多种视觉风格以适应不同的业务场景。

```tsx
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### 尺寸 (Sizes)

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `variant` | `default \| destructive \| outline \| secondary \| ghost \| link` | `default` | 按钮风格变体 |
| `size` | `default \| sm \| lg \| icon` | `default` | 按钮尺寸 |
| `asChild` | `boolean` | `false` | 是否改变渲染的底层元素（配合 Radix Slot 使用） |
| `disabled` | `boolean` | `false` | 是否禁用按钮 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。如果你需要覆盖样式，请确保你的 Tailwind 配置能够识别这些类名。
