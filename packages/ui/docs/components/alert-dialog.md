# Alert Dialog 警示对话框

中断用户操作以显示重要内容，并要求用户确认的对话框。

## 使用指南

### 基础用法

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>打开</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>您确定吗？</AlertDialogTitle>
          <AlertDialogDescription>
            此操作无法撤销。这将永久删除您的帐户并从我们的服务器中删除您的数据。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction>继续</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `AlertDialog` | 根组件 |
| `AlertDialogTrigger` | 触发对话框的按钮 |
| `AlertDialogContent` | 对话框内容容器 |
| `AlertDialogHeader` | 对话框头部 |
| `AlertDialogFooter` | 对话框底部（通常包含操作按钮） |
| `AlertDialogTitle` | 对话框标题 |
| `AlertDialogDescription` | 对话框描述文本 |
| `AlertDialogAction` | 确认操作按钮 |
| `AlertDialogCancel` | 取消操作按钮 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
