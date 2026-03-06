# Skeleton 骨架屏

在内容加载过程中展示占位图形，减少用户感知的等待时间。

## 使用指南

### 基础用法

```tsx
import { Skeleton } from "pd-ui"

export default function Example() {
  return (
    <div className="pd-flex pd-items-center pd-space-x-4">
      <Skeleton className="pd-h-12 pd-w-12 pd-rounded-full" />
      <div className="pd-space-y-2">
        <Skeleton className="pd-h-4 pd-w-[250px]" />
        <Skeleton className="pd-h-4 pd-w-[200px]" />
      </div>
    </div>
  )
}
```

## API 参考

使用 `className` 自定义形状。常用类名包括 `pd-rounded-full` (圆形) 或 `pd-rounded-md` (圆角矩形)。
