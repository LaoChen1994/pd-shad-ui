# Context Menu 右键菜单

通过右键点击触发的菜单。

## 使用指南

### 基础用法

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="pd-flex pd-h-[150px] pd-w-[300px] pd-items-center pd-justify-center pd-rounded-md pd-border pd-border-dashed pd-text-sm">
        在此处右键点击
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>返回</ContextMenuItem>
        <ContextMenuItem>重载</ContextMenuItem>
        <ContextMenuItem inset>检查</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `ContextMenu` | 根组件 |
| `ContextMenuTrigger` | 触发区域 |
| `ContextMenuContent` | 菜单内容容器 |
| `ContextMenuItem` | 菜单项 |
| `ContextMenuLabel` | 菜单标签 |
| `ContextMenuSeparator` | 分隔线 |
| `ContextMenuShortcut` | 快捷键 |
| `ContextMenuCheckboxItem` | 复选菜单项 |
| `ContextMenuRadioItem` | 单选菜单项 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
