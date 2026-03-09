# Menubar 菜单栏

通常位于应用程序窗口顶部的水平菜单栏，包含下拉菜单。

## 使用指南

### 基础用法

```tsx
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "pd-shad-ui"

export default function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            新建标签页 <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>新建窗口</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>分享</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>打印</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>编辑</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>撤销</MenubarItem>
          <MenubarItem>重做</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `Menubar` | 根容器 |
| `MenubarMenu` | 单个菜单项容器 |
| `MenubarTrigger` | 触发按钮 |
| `MenubarContent` | 菜单内容容器 |
| `MenubarItem` | 菜单项 |
| `MenubarSeparator` | 分隔线 |
| `MenubarShortcut` | 快捷键 |
| `MenubarLabel` | 菜单标签 |
| `MenubarCheckboxItem` | 复选菜单项 |
| `MenubarRadioItem` | 单选菜单项 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
