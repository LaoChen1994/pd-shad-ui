# Sonner 提示

基于 `sonner` 的轻量级提示组件。

## 使用指南

### 基础用法

首先在布局根部添加 `Toaster` 组件。

```tsx
import { Toaster } from "pd-shad-ui"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

然后在组件中使用 `toast` 函数触发提示。

```tsx
import { toast } from "sonner"
import { Button } from "pd-shad-ui"

export default function Example() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("事件已创建", {
          description: "2023年12月3日 星期日 早上 9:00",
          action: {
            label: "撤销",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      显示提示
    </Button>
  )
}
```

## API 参考

`Toaster` 组件支持所有 `sonner` 的属性。

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `position` | `string` | `"bottom-right"` | 提示出现位置 |
| `expand` | `boolean` | `false` | 是否展开多个提示 |
| `richColors` | `boolean` | `false` | 是否使用丰富颜色 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
