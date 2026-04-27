# pd-shad-ui

Accessible, themeable UI components for React and Vue, built with Radix primitives and Tailwind CSS.

![License: MIT](https://img.shields.io/badge/license-MIT-111111.svg)
[![React](https://img.shields.io/badge/react-supported-61DAFB.svg)](https://react.dev/)
[![Vue](https://img.shields.io/badge/vue-supported-42B883.svg)](https://vuejs.org/)
[![Tailwind](https://img.shields.io/badge/tailwind-pd--prefixed-06B6D4.svg)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/storybook-dual%20runtime-FF4785.svg)](https://storybook.js.org/)

`pd-shad-ui` is the core UI package inside `pd-ui`. It is designed for teams that want:

- clean, reusable product UI primitives
- safer Tailwind integration in host apps
- React and Vue implementations that stay visually aligned
- a Storybook workflow that makes cross-framework review easier

## Highlights

- `pd-` prefixed Tailwind classes to reduce style collisions
- React entrypoint and Vue entrypoint in the same package
- accessibility-minded primitives built on Radix
- shared variant patterns for more consistent styling across frameworks
- distributable ESM/CJS outputs plus shared CSS entry

## Installation

```bash
pnpm add pd-shad-ui
```

## Quick Start

### Import the base styles

```ts
import "pd-shad-ui/styles.css"
```

### React usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "pd-shad-ui"
import "pd-shad-ui/styles.css"

export function ExampleCard() {
  return (
    <Card className="pd-w-[360px]">
      <CardHeader>
        <CardTitle>pd-shad-ui</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get started</Button>
      </CardContent>
    </Card>
  )
}
```

### Vue usage

```ts
import "pd-shad-ui/styles.css"
import { Button, Card, CardContent, CardHeader, CardTitle } from "pd-shad-ui/vue"
```

```vue
<template>
  <Card class="pd-w-[360px]">
    <CardHeader>
      <CardTitle>pd-shad-ui</CardTitle>
    </CardHeader>
    <CardContent>
      <Button>Get started</Button>
    </CardContent>
  </Card>
</template>
```

## Tailwind Setup

Because this package uses a custom `pd-` prefix, make sure your app scans the package output and includes the animation plugin if you use the provided motion classes.

```ts
import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/pd-shad-ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
```

## Package Entry Points

| Use case | Import |
| --- | --- |
| React components | `pd-shad-ui` |
| Vue components | `pd-shad-ui/vue` |
| Shared CSS | `pd-shad-ui/styles.css` |
| Utility helpers | `pd-shad-ui/lib/utils` |

## Storybook

React and Vue run in separate Storybook instances so you can validate both surfaces independently.

### React Storybook

```bash
pnpm --filter pd-shad-ui run storybook:react
```

Open: `http://127.0.0.1:6007`

### Vue Storybook

```bash
pnpm --filter pd-shad-ui run storybook:vue
```

Open: `http://127.0.0.1:6008`

### Static builds

```bash
pnpm --filter pd-shad-ui run build-storybook:react
pnpm --filter pd-shad-ui run build-storybook:vue
```

## Development

```bash
pnpm --filter pd-shad-ui run build
pnpm --filter pd-shad-ui run test
```

## Notes for Contributors

Inside this repo, the package follows a few important rules:

- all Tailwind utilities must use the `pd-` prefix
- internal imports should prefer `pd-shad-ui/*` aliases
- user-visible changes should come with a changeset
- framework parity matters, especially for shared component APIs

For the full engineering rules, read [AGENTS.md](../../AGENTS.md).

## License

MIT
