# Dialog 对话框

在当前页面正上方弹出的模态框，用于显示重要信息或进行二次确认。

## 使用指南

### 基础用法

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "pd-shad-ui"
import { Button } from "pd-shad-ui"

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">打开对话框</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认删除？</DialogTitle>
          <DialogDescription>
            此操作无法撤销，将永久删除您的项目数据。
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

## API 参考

### DialogContent
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `onOpenAutoFocus` | `(e: Event) => void` | `-` | 打开时自动聚焦回调 |
| `onCloseAutoFocus` | `(e: Event) => void` | `-` | 关闭时自动聚焦回调 |

### DialogTrigger
使用 `asChild` 属性可以将事件绑定到自定义的按钮组件上。
