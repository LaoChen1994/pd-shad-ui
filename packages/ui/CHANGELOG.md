# pd-shad-ui

## 2.0.0

### Major Changes

- fe746b2: Fix prefixed Tailwind state utilities in `pd-shad-ui`, restore valid `use client` directives for client-only components, publish a documented `styles.css` entry for package consumers, and add Vue form primitives for closer React/Vue API parity.

## 1.2.0

### Minor Changes

- f10d295: feat: add Vue support

## 1.1.4

### Patch Changes

- Consolidated fixes for path aliasing, unit testing configuration, and brand consistency.
  Corrected cross-package dependencies between pd-markdown-ui and pd-shad-ui.

## 1.1.3

### Patch Changes

- - **pd-shad-ui**: Refactored all internal relative imports to use the professional `pd-shad-ui/*` path alias.
  - **pd-markdown-ui**: Integrated **Shiki** for VS Code-grade syntax highlighting and added support for **Math (LaTeX)** rendering via KaTeX.
  - **pd-markdown-ui**: Added "Copy to Clipboard" functionality and language labels to code blocks.
  - **Project-wide**: Synchronized `pd-` CSS prefixing across the app and packages for better style isolation.
  - **DX**: Updated `AGENTS.md` and project skills with the new "pd- Standard" for consistent vibe coding.

## 1.1.2

### Patch Changes

- fix: resolve monorepo dependency issues, component type errors, and normalization of React imports.
  Includes fixes for Resizable, Pagination, and Zod date validation.

## 1.1.1

### Patch Changes

- fix: update build configuration to support CJS and MJS

## 1.1.0

### Minor Changes

- Comprehensive update for the UI component library:
  - Added detailed documentation and usage guides for 23 components.
  - Implemented 39 new unit test suites, achieving ~92% code coverage.
  - Added Storybook stories for all 40 components and removed default examples.
  - Fixed style issues related to the `pd-` prefix in `tailwind-merge` and CSS variables scoping.
  - Resolved Storybook build errors by aligning addon versions and fixing component imports.
  - Improved accessibility for multiple components including `Slider` and `InputOTP`.

## 0.1.1

### Patch Changes

- initial release
