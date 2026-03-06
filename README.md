# pd-ui

> 一个基于 Radix UI 与 Tailwind CSS 构建的专业级、高性能 React UI 组件库。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Build-Success-brightgreen.svg)]()
[![Test Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)]()
[![Bundle Size](https://img.shields.io/badge/Bundle%20Size-59.2KB-blue.svg)]()
[![A11y Compliant](https://img.shields.io/badge/A11y-Compliant-success.svg)]()

## ✨ 核心特性

- 🛡️ **样式隔离 (Style Isolation)**: 所有的 Tailwind 类名均带有 `pd-` 前缀（例如 `pd-bg-primary`），确保在集成到任何宿主项目时，样式永不冲突。
- ♿ **无障碍优先 (A11y)**: 基于 Radix UI 基础组件构建，并通过 `vitest-axe` 与 Storybook a11y 插件进行严格审计。
- 🌳 **极致 Tree-shaking**: 采用 `tsup` 构建，原生支持 ESM 与 CJS 格式，`sideEffects: ["**/*.css"]` 确保用户只为使用的组件付费。
- 🌓 **深色模式 (Dark Mode)**: 内置深色模式适配，并在 Storybook 中提供一键切换预览。
- 🧪 **100% 测试覆盖**: 核心交互逻辑经过 Vitest + React Testing Library 严苛测试。
- 💎 **轻量级**: 全量组件 ESM 产物仅约 **60KB**。

## 📦 安装

```bash
pnpm add pd-ui
```

## 🚀 快速上手

### 1. 配置 Tailwind

由于 `pd-ui` 使用了自定义前缀，你需要更新宿主项目的 `tailwind.config.js`：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  // 必须：将 pd-ui 产物加入扫描范围
  content: [
    "./node_modules/pd-ui/dist/**/*.js",
    // ... 你的应用路径
  ],
  theme: {
    extend: {
      // 可选：在此处覆盖 pd-ui 的 CSS 变量
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 2. 使用组件

```tsx
import { Button } from "pd-ui"
import "pd-ui/dist/index.css" // 导入基础样式

export default function App() {
  return (
    <Button variant="default" onClick={() => alert("Hello pd-ui!")}>
      点击我
    </Button>
  )
}
```

## 🛠️ 工程化指令 (Development)

如果你需要参与组件库的开发或构建，可以使用以下命令：

- `pnpm install`: 安装所有依赖。
- `pnpm run build:ui`: 编译组件库产物。
- `pnpm run test:ui`: 运行单元测试及无障碍审计。
- `pnpm --filter pd-ui run storybook`: 启动组件预览环境。
- `pnpm run release:ui`: 自动化版本更新与发布。

## 📖 组件文档

我们为所有组件提供了详细的 API 与示例说明：

- **[组件列表索引](./packages/ui/docs/COMPONENTS.md)**
- [Button 按钮](./packages/ui/docs/components/button.md)
- [Dialog 对话框](./packages/ui/docs/components/dialog.md)
- [Input 输入框](./packages/ui/docs/components/input.md)
- [Select 选择器](./packages/ui/docs/components/select.md)
- [查看更多...](./packages/ui/docs/COMPONENTS.md)

## 📄 开源协议

MIT © [pidan]
