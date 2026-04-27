# pd-markdown-ui

Markdown primitives for `pd-shad-ui`, with React and Vue entrypoints, Shiki-powered code blocks, and a sensible default plugin bundle for GFM, math, raw HTML, and KaTeX.

## Why use it

- Shared visual language: Markdown output matches the same typography, spacing, tables, and code treatment as `pd-shad-ui`
- Dual-framework ready: `pd-markdown-ui` for React, `pd-markdown-ui/vue` for Vue
- Better code blocks by default: Shiki highlighting, copy action, theme control, and extensible language support
- Batteries included: `defaultMarkdownPlugins` wires up `remark-gfm`, `remark-math`, `rehype-raw`, and `rehype-katex`

## Installation

```bash
pnpm add pd-markdown-ui pd-shad-ui
```

If you render math, also load KaTeX styles once in your app shell:

```tsx
import "pd-shad-ui/styles.css";
import "katex/dist/katex.min.css";
```

## Package entrypoints

- React: `pd-markdown-ui`
- Vue: `pd-markdown-ui/vue`

Both entrypoints export:

- `components`
- `defaultMarkdownPlugins`
- individual primitives such as `H1`, `P`, `Code`, `MarkdownTable`
- code highlight helpers such as `setMarkdownCodeConfig`

## React quick start

```tsx
import "pd-shad-ui/styles.css";
import "katex/dist/katex.min.css";

import ReactMarkdown from "react-markdown";
import {
  components,
  defaultMarkdownPlugins,
} from "pd-markdown-ui";

export function MarkdownArticle({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={defaultMarkdownPlugins.remark}
      rehypePlugins={defaultMarkdownPlugins.rehype}
    >
      {content}
    </ReactMarkdown>
  );
}
```

## Vue quick start

Vue markdown stacks vary more than React, so `pd-markdown-ui/vue` stays renderer-agnostic.
The usual pattern is to keep your existing parser, then map Markdown nodes to the exported Vue components.

```ts
import "pd-shad-ui/styles.css";
import "katex/dist/katex.min.css";

import {
  Code,
  H1,
  MarkdownTable,
  P,
  components,
  defaultMarkdownPlugins,
} from "pd-markdown-ui/vue";

export const markdownComponents = {
  ...components,
  h1: H1,
  p: P,
  code: Code,
  table: MarkdownTable,
};

export { defaultMarkdownPlugins };
```

If your Vue setup uses a renderer such as `@nuxt/content`, `markdown-it`, or a custom mdast pipeline, keep that renderer in place and plug these exported primitives into its component mapping layer.

## Code highlighting

`Code` and `Pre` now share one highlighter configuration layer across React and Vue.
By default the package uses:

- `github-light`
- `github-dark`
- `auto` theme mode
- a built-in set of common languages for app docs and product content

You can adjust that globally without changing every component call site:

```ts
import { setMarkdownCodeConfig } from "pd-markdown-ui";

setMarkdownCodeConfig({
  defaultTheme: "dark",
  languages: ["typescript", "tsx", "bash", "json", "md"],
});
```

Available theme modes:

- `light`
- `dark`
- `auto`

## Default plugin bundle

`defaultMarkdownPlugins` includes:

- `remark-gfm`
- `remark-math`
- `rehype-raw`
- `rehype-katex`

This gives you:

- tables
- task lists
- strikethrough
- fenced code blocks
- inline and block math
- raw HTML passthrough

## Raw HTML safety note

`rehype-raw` is intentionally included because it is useful in docs-heavy products and CMS-driven content.
That also means you should only enable it for trusted Markdown sources, or pair it with your own sanitization policy before rendering untrusted content.

## Storybook

Run the two Storybooks separately when you want to compare implementations:

```bash
pnpm --filter pd-markdown-ui run storybook:react
pnpm --filter pd-markdown-ui run storybook:vue
```

Default ports:

- React: `http://127.0.0.1:6011`
- Vue: `http://127.0.0.1:6012`

Static builds:

```bash
pnpm --filter pd-markdown-ui run build-storybook:react
pnpm --filter pd-markdown-ui run build-storybook:vue
```

## Development

```bash
pnpm --filter pd-markdown-ui run build
pnpm --filter pd-markdown-ui run test
```

For monorepo-level release validation, also run:

```bash
pnpm --filter pd-shad-ui run test
pnpm --filter pd-markdown-ui run test
pnpm build
pnpm --filter pd-web-demo build
pnpm lint
```
