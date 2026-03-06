# Accordion 手风琴

用于折叠和展开层级化内容的组件。

## 使用指南

### 基础用法

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <Accordion type="single" collapsible className="pd-w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

## 组件 API

### Accordion (Root)
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `type` | `"single" \| "multiple"` | `"single"` | 展开模式 |
| `collapsible` | `boolean` | `false` | 是否允许全部折叠 |

### AccordionItem
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `value` | `string` (required) | `-` | 唯一标识符 |

### AccordionTrigger & AccordionContent
标准内容容器，遵循 Radix UI 规范。
