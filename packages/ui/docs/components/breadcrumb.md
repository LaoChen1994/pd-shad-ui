# Breadcrumb 面包屑

显示当前页面在层级结构中的位置，并允许向上导航。

## 使用指南

### 基础用法

```tsx
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "pd-shad-ui"

export default function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">首页</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">组件</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>面包屑</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

### 带省略号

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>当前页</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `Breadcrumb` | 根组件 |
| `BreadcrumbList` | 项目列表容器 (`ol`) |
| `BreadcrumbItem` | 面包屑项目 (`li`) |
| `BreadcrumbLink` | 链接项目 |
| `BreadcrumbPage` | 当前页面显示项目 |
| `BreadcrumbSeparator` | 分隔符 |
| `BreadcrumbEllipsis` | 省略号占位符 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
