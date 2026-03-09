# Navigation Menu 导航菜单

用于网站顶部的导航组件。

## 使用指南

### 基础用法

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "pd-shad-ui"

export default function Example() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>文档</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="pd-grid pd-gap-3 pd-p-6 md:pd-w-[400px] lg:pd-w-[500px]">
              <li>
                <NavigationMenuLink href="/docs">
                  什么是 pd-ui？
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `NavigationMenu` | 根组件 |
| `NavigationMenuList` | 列表容器 |
| `NavigationMenuItem` | 单个项目容器 |
| `NavigationMenuTrigger` | 展开菜单的按钮 |
| `NavigationMenuContent` | 展开的菜单内容 |
| `NavigationMenuLink` | 导航链接 |
| `NavigationMenuViewport` | 菜单内容的渲染视口 |
| `NavigationMenuIndicator` | 当前选中项的指示器 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
