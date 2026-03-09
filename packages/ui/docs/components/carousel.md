# Carousel 轮播图

带有左右切换按钮的轮播组件。

## 使用指南

### 基础用法

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "pd-shad-ui"

export default function Example() {
  return (
    <Carousel className="pd-w-full pd-max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="pd-p-1">
              <span className="pd-text-4xl pd-font-semibold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `opts` | `EmblaOptionsType` | - | Embla 轮播配置选项 |
| `plugins` | `EmblaPluginType[]` | - | Embla 插件 |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | 轮播方向 |
| `setApi` | `(api: CarouselApi) => void` | - | 获取 Embla API 的回调 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
