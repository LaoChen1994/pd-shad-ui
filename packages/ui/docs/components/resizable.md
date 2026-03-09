# Resizable 可调整大小布局

用于创建可由用户调整大小的布局。基于 `react-resizable-panels`。

## 使用指南

### 基础用法

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "pd-shad-ui"

export default function Example() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}>
        左侧内容
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        右侧内容
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `ResizablePanelGroup` | 面板组容器，必需 `direction` ("horizontal" 或 "vertical") |
| `ResizablePanel` | 单个可调面板 |
| `ResizableHandle` | 用于调整大小的手柄 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
