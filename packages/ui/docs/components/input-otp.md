# Input OTP 验证码输入框

具有可定制槽位和组的可访问验证码输入组件。基于 `input-otp`。

## 使用指南

### 基础用法

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "pd-shad-ui"

export default function Example() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

## API 参考

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `maxLength` | `number` | - | 验证码最大长度 |
| `render` | `function` | - | 自定义渲染函数 |

> **注意**: 所有 Tailwind 类名在库内部已自动添加 `pd-` 前缀。
