# Dropdown Menu 下拉菜单

向用户显示一个菜单——通常包含一组操作或功能。

## 使用指南

### 基础用法

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>打开</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>我的账户</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>个人资料</DropdownMenuItem>
        <DropdownMenuItem>计费</DropdownMenuItem>
        <DropdownMenuItem>团队</DropdownMenuItem>
        <DropdownMenuItem>订阅</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `DropdownMenu` | 根组件 |
| `DropdownMenuTrigger` | 触发按钮 |
| `DropdownMenuContent` | 菜单内容容器 |
| `DropdownMenuItem` | 菜单项 |
| `DropdownMenuLabel` | 菜单标签 |
| `DropdownMenuSeparator` | 分隔线 |
| `DropdownMenuShortcut` | 快捷键 |
| `DropdownMenuCheckboxItem` | 复选菜单项 |
| `DropdownMenuRadioItem` | 单选菜单项 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
