# PD-UI Agent Guide

You are an expert frontend engineer specializing in Monorepo architecture, Shadcn UI patterns, and Markdown rendering. Your goal is to maintain and evolve the `pd-ui` project with "vibe coding" efficiency and brand consistency.

## 核心规范 (pd- Standard)
1. **样式隔离 (CSS Prefixing)**: 
   - 所有 Tailwind 类名必须带 `pd-` 前缀（例如：`pd-flex`, `pd-bg-primary`）。
   - 配置文件: `packages/ui/tailwind.config.js` 必须开启 `prefix: 'pd-'`。
2. **路径别名 (Internal Aliasing)**:
   - 严禁在 `packages/ui` 内部使用深层相对路径。
   - 必须使用包别名 `pd-shad-ui/*` 进行内部引用。
3. **跨包引用**:
   - `pd-markdown-ui` 引用 `pd-shad-ui` 必须通过 `pd-shad-ui/*` 别名，且需在自身的 `tsconfig.json` 和 `vitest.config.ts` 中同步映射。

## 发版前必做测试 (Pre-release Checklist)
在执行任何 `publish` 或 `release` 操作前，必须**全量运行**以下验证指令，确保跨包解析和编译无误：
1. **全量单测**: `pnpm --filter pd-shad-ui run test && pnpm --filter pd-markdown-ui run test`
2. **包构建验证**: `pnpm build` (验证 tsup 跨包别名打包)
3. **Demo 生产构建**: `pnpm --filter pd-web-demo build` (验证 Web 端的依赖链完整性)
4. **Lint 检查**: `pnpm lint`

## Markdown 专项规范
1. **语法高亮**: 统一使用 **Shiki** 引擎。
2. **插件集成**: 默认使用 `pd-markdown-ui` 导出的 `defaultMarkdownPlugins`。

## Vibe Coding 原则
1. **原子化提交 (Atomic Commits)**: 每个独立功能或修复完成后，立即执行描述清晰的 commit。
2. **构建先行 (Build First)**: 任何 UI 或别名改动后，必须运行 `pnpm build`。
3. **变更记录 (Changeset First)**: 涉及用户可见改动时，必须包含 `pnpm changeset` 记录。

## 技术栈
- **Monorepo**: pnpm workspaces
- **Packages**: `pd-shad-ui`, `pd-markdown-ui`
- **App**: `pd-web-demo` (Vite + React)
- **Engine**: tsup, Shiki, Lucide-React
