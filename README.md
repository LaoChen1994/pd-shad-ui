# pd-ui

Build polished product UIs faster with a design-system-friendly component stack for React, Vue, and rich Markdown rendering.

![License: MIT](https://img.shields.io/badge/license-MIT-111111.svg)
[![Monorepo](https://img.shields.io/badge/monorepo-pnpm-F69220.svg)](https://pnpm.io/)
[![React](https://img.shields.io/badge/react-supported-61DAFB.svg)](https://react.dev/)
[![Vue](https://img.shields.io/badge/vue-supported-42B883.svg)](https://vuejs.org/)
[![Tailwind](https://img.shields.io/badge/tailwind-pd--prefixed-06B6D4.svg)](https://tailwindcss.com/)

`pd-ui` is a frontend monorepo focused on one thing: helping teams ship consistent UI without fighting style collisions, accessibility regressions, or documentation drift.

It currently includes:
- `pd-shad-ui`: a component library built on Radix primitives and Tailwind CSS
- `pd-markdown-ui`: a Markdown rendering layer with Shiki-based syntax highlighting and rich content support

## Why pd-ui

- `pd-` prefixed Tailwind classes: safer embedding into existing apps and design systems
- React and Vue support: one visual language, two framework surfaces
- Accessibility-first primitives: built on top of Radix with testing and Storybook validation
- Monorepo-friendly architecture: clear package boundaries, alias discipline, and release workflow
- Markdown rendering that feels production-ready: code highlighting, math support, and better content ergonomics

## Packages

| Package | Description | Docs |
| --- | --- | --- |
| `pd-shad-ui` | Shared UI components for React and Vue | [packages/ui/README.md](./packages/ui/README.md) |
| `pd-markdown-ui` | Markdown UI components and plugin presets | `packages/markdown-ui` |
| `pd-web-demo` | Local demo app for manual verification | `apps/web` |

## Quick Start

### Install

```bash
pnpm add pd-shad-ui pd-markdown-ui
```

### Use the UI package in React

```tsx
import { Button } from "pd-shad-ui"
import "pd-shad-ui/styles.css"

export function App() {
  return <Button>Ship UI faster</Button>
}
```

### Use the UI package in Vue

```ts
import { Button } from "pd-shad-ui/vue"
import "pd-shad-ui/styles.css"
```

### Use the Markdown package

```tsx
import ReactMarkdown from "react-markdown"
import { components, defaultMarkdownPlugins } from "pd-markdown-ui"
import "katex/dist/katex.min.css"

const markdown = `
# Hello pd-ui

\`\`\`ts
console.log("highlighted by shiki")
\`\`\`
`

export function MarkdownPreview() {
  return (
    <ReactMarkdown
      remarkPlugins={defaultMarkdownPlugins.remark}
      rehypePlugins={defaultMarkdownPlugins.rehype}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  )
}
```

## Monorepo Structure

```text
pd-ui/
├─ apps/
│  └─ web
├─ packages/
│  ├─ markdown-ui
│  └─ ui
└─ AGENTS.md
```

## Local Development

### Install dependencies

```bash
pnpm install
```

### Common commands

```bash
pnpm dev
pnpm build
pnpm build:ui
pnpm test:ui
pnpm lint
```

### Storybook

`pd-shad-ui` now provides separate Storybook entrypoints for framework-by-framework validation:

```bash
pnpm --filter pd-shad-ui run storybook:react
pnpm --filter pd-shad-ui run storybook:vue
```

Default ports:
- React Storybook: `http://127.0.0.1:6007`
- Vue Storybook: `http://127.0.0.1:6008`

## Design Principles

- Style isolation over accidental global coupling
- API consistency across frameworks where it makes sense
- Practical accessibility over checkbox-driven abstraction
- Strong local verification before release

## Contributing

If you are working inside this repo, read [AGENTS.md](./AGENTS.md) first. It captures the project rules around:

- Tailwind prefixing
- internal package aliasing
- cross-package imports
- pre-release verification
- changeset expectations

## License

MIT
