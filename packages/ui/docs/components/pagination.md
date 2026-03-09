# Pagination 分页

显示分页列表。

## 使用指南

### 基础用法

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "pd-shad-ui"

export default function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `Pagination` | 根容器 (`nav`) |
| `PaginationContent` | 项目列表容器 (`ul`) |
| `PaginationItem` | 分页项 (`li`) |
| `PaginationLink` | 分页链接，支持 `isActive` 属性 |
| `PaginationPrevious` | "上一页" 链接 |
| `PaginationNext` | "下一页" 链接 |
| `PaginationEllipsis` | 省略号占位符 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
