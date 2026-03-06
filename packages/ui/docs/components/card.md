# Card 卡片

用于在容器内组织相关信息或功能的通用组件。

## 使用指南

### 基础用法

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "pd-shad-ui"
import { Button } from "pd-shad-ui"

export default function Example() {
  return (
    <Card className="pd-w-[350px]">
      <CardHeader>
        <CardTitle>项目详情</CardTitle>
        <CardDescription>配置您的个人项目首选项。</CardDescription>
      </CardHeader>
      <CardContent>
        <p>卡片主要内容区域。</p>
      </CardContent>
      <CardFooter className="pd-flex pd-justify-between">
        <Button variant="outline">取消</Button>
        <Button>部署</Button>
      </CardFooter>
    </Card>
  )
}
```

## 组件 API

包含 `Header`, `Title`, `Description`, `Content`, `Footer` 等子组件。
