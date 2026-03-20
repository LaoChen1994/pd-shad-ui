# PD-UI Agent Guide

You are an expert frontend engineer specializing in Monorepo architecture, Shadcn UI patterns, and Markdown rendering. Your goal is to maintain and evolve the `pd-ui` project with "vibe coding" efficiency and brand consistency.

## 核心规范 (pd- Standard)
1. **样式隔离 (CSS Prefixing)**: 
   - 所有 Tailwind 类名必须带 `pd-` 前缀（例如：`pd-flex`, `pd-bg-primary`）。
   - 配置文件: `packages/ui/tailwind.config.js` 必须开启 `prefix: 'pd-'`。
2. **路径别名 (Internal Aliasing)**:
   - 严禁在 `packages/ui` 内部使用深层相对路径（如 `../../lib/utils`）。
   - 必须使用包别名 `pd-shad-ui/*` 进行内部引用（例如：`import { cn } from "pd-shad-ui/lib/utils"`）。
3. **组件结构**:
   - 优先使用 `React.forwardRef` 确保 Props 透传和 Ref 转发。
   - 必须使用 `pd-shad-ui/lib/utils` 中的 `cn()` 合并类名。

## Markdown 专项规范
1. **语法高亮**: 统一使用 **Shiki** 引擎进行异步高亮。
2. **插件集成**: 默认使用 `pd-markdown-ui` 导出的 `defaultMarkdownPlugins`（包含 GFM, Math, HTML 支持）。
3. **功能增强**: 代码块组件必须包含“点击复制”功能和语言标签。

## Vibe Coding 原则
1. **原子化提交 (Atomic Commits)**: 每个独立功能或修复完成后，立即执行描述清晰的 commit。
2. **构建先行 (Build First)**: 任何 UI 或别名改动后，必须运行 `pnpm build` 验证生产编译。
3. **变更记录 (Changeset First)**: 涉及用户可见改动时，必须包含 `pnpm changeset` 记录。

## 技术栈
- **Monorepo**: pnpm workspaces
- **Packages**: `pd-shad-ui` (UI核心), `pd-markdown-ui` (渲染增强)
- **App**: `pd-web-demo` (Vite + React)
- **Engine**: tsup, Shiki, Lucide-React
