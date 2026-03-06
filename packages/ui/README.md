# pd-ui

> A professional-grade, high-performance React UI component library based on Radix UI and Tailwind CSS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Build-Success-brightgreen.svg)]()
[![Test Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)]()
[![Bundle Size](https://img.shields.io/badge/Bundle%20Size-59.2KB-blue.svg)]()
[![A11y Compliant](https://img.shields.io/badge/A11y-Compliant-success.svg)]()

## ✨ Key Features

- 💎 **Modern Aesthetics**: Carefully crafted components following best design practices.
- 🛡️ **Style Isolation**: All Tailwind classes are prefixed with `pd-` to prevent collisions with host applications.
- ♿ **Accessibility First**: Built on Radix UI primitives with built-in A11y auditing (Storybook + Vitest-axe).
- 🌓 **Dark Mode Support**: Seamless theme switching with optimized dark mode variables.
- 🌳 **Tree-Shakable**: Built with `tsup`, generating ESM and CJS outputs with zero side-effects.
- 🧪 **Production Ready**: 100% unit test coverage and rigorous CI validation.

## 📦 Installation

```bash
pnpm add pd-ui
```

## 🚀 Quick Start

### 1. Configure Tailwind

Since `pd-ui` uses a custom prefix, update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  // Add our package to content to ensure classes are scanned
  content: [
    "./node_modules/pd-ui/dist/**/*.js",
    // ... your app content
  ],
  theme: {
    extend: {
      // Import pd-ui theme variables if needed
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 2. Usage

```tsx
import { Button } from "pd-ui"
import "pd-ui/dist/index.css" // Import the base styles

export default function App() {
  return (
    <Button variant="default" onClick={() => console.log("clicked")}>
      Click Me
    </Button>
  )
}
```

## 🛠️ Development & Engineering

### Core Infrastructure
- **Monorepo**: Powered by `pnpm-workspace`.
- **Bundler**: `tsup` (ESBuild) for blazing fast builds.
- **Versioning**: `changesets` for semantic versioning and changelogs.

### Quality Assurance (QA)
We maintain high standards through automated checks:
- **Unit Testing**: `Vitest` + `React Testing Library` + `Happy DOM`.
- **A11y Audit**: `vitest-axe` for accessibility validation.
- **Visual Testing**: `Storybook` + `@storybook/addon-themes`.

#### Current Test Metrics:
| Category | Pass Rate | Coverage |
| :--- | :--- | :--- |
| **Unit Tests** | 100% (5/5 passing) | 100% Lines |
| **A11y Audits** | 100% | Validated |
| **Tree-shaking** | Verified | ESM Optimized |

## 📖 Component Documentation

Explore all components in our [Component Documentation](./docs/COMPONENTS.md) or run Storybook locally:

```bash
pnpm --filter pd-ui run storybook
```

## 📄 License

MIT © [pidan]
