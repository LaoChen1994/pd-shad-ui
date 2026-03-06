# Sheet 侧边栏

从屏幕边缘滑出的覆盖层面板，常用于移动端导航或侧边属性配置。

## 使用指南

### 基础用法

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "pd-shad-ui"
import { Button } from "pd-shad-ui"

export default function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">打开侧边栏</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>侧边标题</SheetTitle>
          <SheetDescription>在此处配置您的偏好设置。</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
```

## API 参考

### SheetContent
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"right"` | 面板滑出的方向 |
