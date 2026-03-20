# pd-ui-monorepo

> 一个基于 Radix UI、Tailwind CSS 与 Shiki 构建的专业级 React UI 与 Markdown 渲染组件库。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)
[![Build Status](https://img.shields.io/badge/Build-Success-brightgreen.svg)]()
[![A11y Compliant](https://img.shields.io/badge/A11y-Compliant-success.svg)]()

## 📦 工作区成员 (Workspace Packages)

| 包名 | 描述 | 版本 |
| :--- | :--- | :--- |
| **[pd-shad-ui](./packages/ui)** | 基于 Radix UI 的核心基础组件库 | `1.1.3` |
| **[pd-markdown-ui](./packages/markdown-ui)** | 集成 Shiki 与 KaTeX 的高级 Markdown 渲染库 | `1.0.4` |

---

## ✨ 核心特性

- 🛡️ **样式隔离 (pd- Standard)**: 所有的 Tailwind 类名均带有 `pd-` 前缀（例如 `pd-flex`），确保与宿主项目样式永不冲突。
- 🚀 **专业路径别名**: 内部全面弃用相对路径，采用 `pd-shad-ui/*` 标准包别名引用，架构更健壮。
- 🎨 **高级 Markdown 渲染**: 
  - **Shiki 高亮**: VS Code 同款异步高亮引擎，预设 `github-dark` 主题。
  - **数学公式**: 完美支持 KaTeX 行内与块级公式渲染。
  - **交互增强**: 代码块内置“一键复制”按钮与自动语言识别。
- ♿ **无障碍优先**: 核心组件通过 `vitest-axe` 严格审计，符合 WCAG 标准。
- 🌳 **极致 Tree-shaking**: 原生支持 ESM/CJS，用户只需为使用的组件买单。

---

## 🚀 快速上手

### 1. 安装

```bash
pnpm add pd-shad-ui pd-markdown-ui
```

### 2. 配置 Tailwind

确保宿主项目识别 `pd-` 前缀：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  // 扫描组件库源码/产物
  content: [
    "./node_modules/pd-shad-ui/dist/**/*.js",
    "./node_modules/pd-markdown-ui/dist/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 如果你需要使用 pd-ui 的样式变量
  theme: { extend: {} },
  plugins: [require("tailwindcss-animate")],
}
```

### 3. 使用 UI 组件

```tsx
import { Button } from "pd-shad-ui"
import "pd-shad-ui/dist/index.css"

export const MyComponent = () => <Button>点击我</Button>
```

### 4. 使用 Markdown 组件

```tsx
import ReactMarkdown from 'react-markdown'
import { components, defaultMarkdownPlugins } from 'pd-markdown-ui'
import 'katex/dist/katex.min.css'

const content = "# Hello $E=mc^2$"

export const MarkdownBox = () => (
  <ReactMarkdown 
    remarkPlugins={defaultMarkdownPlugins.remark}
    rehypePlugins={defaultMarkdownPlugins.rehype}
    components={components}
  >
    {content}
  </ReactMarkdown>
)
```

---

## 🛠️ 工程化开发 (Development)

本项目采用 **Vibe Coding** 模式，通过 `AGENTS.md` 固化了开发规范。

- `pnpm dev`: 启动 Demo 演示站点。
- `pnpm run build`: 全量编译所有包（包含 Shiki 离线包处理）。
- `pnpm run test:ui`: 运行单元测试与 A11y 审计。
- `pnpm run release:ui`: 自动化 changeset 版本更新与发布。

## 📄 开源协议

MIT © [pidan]
