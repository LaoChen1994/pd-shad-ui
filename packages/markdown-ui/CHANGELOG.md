# pd-markdown-ui

## 1.1.0

### Minor Changes

- f10d295: feat: add Vue support

### Patch Changes

- Updated dependencies [f10d295]
  - pd-shad-ui@1.2.0

## 1.0.5

### Patch Changes

- Consolidated fixes for path aliasing, unit testing configuration, and brand consistency.
  Corrected cross-package dependencies between pd-markdown-ui and pd-shad-ui.
- Updated dependencies
  - pd-shad-ui@1.1.4

## 1.0.4

### Patch Changes

- - **pd-shad-ui**: Refactored all internal relative imports to use the professional `pd-shad-ui/*` path alias.
  - **pd-markdown-ui**: Integrated **Shiki** for VS Code-grade syntax highlighting and added support for **Math (LaTeX)** rendering via KaTeX.
  - **pd-markdown-ui**: Added "Copy to Clipboard" functionality and language labels to code blocks.
  - **Project-wide**: Synchronized `pd-` CSS prefixing across the app and packages for better style isolation.
  - **DX**: Updated `AGENTS.md` and project skills with the new "pd- Standard" for consistent vibe coding.
- Updated dependencies
  - pd-shad-ui@1.1.3

## 1.0.3

### Patch Changes

- fix: resolve monorepo dependency issues, component type errors, and normalization of React imports.
  Includes fixes for Resizable, Pagination, and Zod date validation.
- Updated dependencies
  - pd-shad-ui@1.1.2

## 1.0.2

### Patch Changes

- ca4c6cd: Add integration examples in `apps/web` demonstrating `pd-markdown-ui` with `react-markdown` and `remark-gfm`.
  Includes a new `MarkdownExample` component showcasing typography, lists, code blocks, and tables.

## 1.0.1

### Patch Changes

- fix: update build configuration to support CJS and MJS
- Updated dependencies
  - pd-shad-ui@1.1.1

## 1.1.0

### Minor Changes

- fbbc3b8: Initial release of pd-markdown-ui with modular components, unit tests, and Storybook support. Reuses components from pd-shad-ui for visual consistency.
