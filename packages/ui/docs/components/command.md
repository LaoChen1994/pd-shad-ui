# Command 命令
一个快速且可组合的项目列表，具有过滤和搜索功能。基于 `cmdk`。

## 使用指南

### 基础用法

```tsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "pd-shad-ui"

export default function Example() {
  return (
    <Command className="pd-rounded-lg pd-border pd-shadow-md">
      <CommandInput placeholder="输入命令..." />
      <CommandList>
        <CommandEmpty>未找到结果。</CommandEmpty>
        <CommandGroup heading="建议">
          <CommandItem>日历</CommandItem>
          <CommandItem>表情符号</CommandItem>
          <CommandItem>计算器</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="设置">
          <CommandItem>
            <span>个人资料</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>计费</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `Command` | 根组件 |
| `CommandInput` | 搜索输入框 |
| `CommandList` | 结果列表容器 |
| `CommandEmpty` | 无结果时的显示内容 |
| `CommandGroup` | 分组容器 |
| `CommandItem` | 单个项目 |
| `CommandSeparator` | 分隔线 |
| `CommandShortcut` | 快捷键提示 |
| `CommandDialog` | 包装在对话框中的命令列表 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
