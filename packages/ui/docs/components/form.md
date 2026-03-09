# Form 表单

使用 `react-hook-form` 和 `zod` 构建具有最佳实践的表单。

## 使用指南

### 基础用法

```tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "pd-shad-ui"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "pd-shad-ui"
import { Input } from "pd-shad-ui"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "用户名必须至少包含 2 个字符。",
  }),
})

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pd-space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>用户名</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                这是您的公开显示名称。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提交</Button>
      </form>
    </Form>
  )
}
```

## API 参考

| 组件 | 说明 |
| :--- | :--- |
| `Form` | 提供表单上下文的包装组件 |
| `FormField` | 处理字段状态和注册的组件 |
| `FormItem` | 字段容器，提供 ID 上下文 |
| `FormLabel` | 字段标签 |
| `FormControl` | 字段控制器的插槽 |
| `FormDescription` | 字段辅助说明文字 |
| `FormMessage` | 字段校验错误信息 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
