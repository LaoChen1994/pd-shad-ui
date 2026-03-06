# Tabs 标签页

用于在同一个视图内切换不同内容的面板。

## 使用指南

### 基础用法

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "pd-ui"

export default function Example() {
  return (
    <Tabs defaultValue="account" className="pd-w-[400px]">
      <TabsList>
        <TabsTrigger value="account">账户</TabsTrigger>
        <TabsTrigger value="password">密码</TabsTrigger>
      </TabsList>
      <TabsContent value="account">管理您的账户设置。</TabsContent>
      <TabsContent value="password">在此处更改您的密码。</TabsContent>
    </Tabs>
  )
}
```

## API 参考

### Tabs
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `defaultValue` | `string` | `-` | 默认选中的标签值 |
| `activationMode` | `"automatic" \| "manual"` | `"automatic"` | 激活模式 |

### TabsTrigger
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `value` | `string` (required) | `-` | 标签对应的唯一值 |
