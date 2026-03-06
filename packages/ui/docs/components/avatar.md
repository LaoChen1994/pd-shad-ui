# Avatar 头像

用于展示用户或实体的图形代表。

## 使用指南

### 基础用法

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "pd-shad-ui"

export default function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

## API 参考

### Avatar
基础容器，支持 `className` 自定义尺寸（默认为 `pd-h-10 pd-w-10`）。

### AvatarImage
头像图片组件，加载失败时会自动隐藏并显示 `AvatarFallback`。

### AvatarFallback
回退显示组件，通常用于显示用户姓名的首字母。
