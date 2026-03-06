# Select 选择器

用于从一系列选项中选择一个值的下拉列表。

## 使用指南

### 基础用法

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "pd-ui"

export default function Example() {
  return (
    <Select>
      <SelectTrigger className="pd-w-[180px]">
        <SelectValue placeholder="选择框架" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="next">Next.js</SelectItem>
        <SelectItem value="svelte">SvelteKit</SelectItem>
        <SelectItem value="astro">Astro</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

## API 参考

### Select
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `defaultValue` | `string` | `-` | 默认选中的值 |
| `value` | `string` | `-` | 受控状态下的值 |
| `onValueChange` | `(value: string) => void` | `-` | 值改变时的回调 |

### SelectItem
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `value` | `string` (required) | `-` | 选项对应的唯一值 |
| `disabled` | `boolean` | `false` | 是否禁用该选项 |
