# pd-markdown-ui

A set of React components designed for rendering Markdown content using `pd-shad-ui` components.

## Features

- **SEO & SSG Friendly**: Built with semantic HTML elements.
- **Visual Consistency**: Leverages `pd-shad-ui` for a premium, unified look.
- **Easy Integration**: Exports a components map for seamless use with `react-markdown`.
- **Customizable**: All components accept standard React props and classNames.

## Installation

```bash
pnpm add pd-markdown-ui
```

> [!NOTE]
> This package requires `pd-shad-ui` as a workspace dependency.

## Usage

### With `react-markdown`

```tsx
import ReactMarkdown from 'react-markdown';
import { components } from 'pd-markdown-ui';

function MyMarkdown({ content }) {
  return (
    <ReactMarkdown components={components}>
      {content}
    </ReactMarkdown>
  );
}
```

### Individual Components

You can also use components individually:

```tsx
import { H1, P, MarkdownTable } from 'pd-markdown-ui';

function MyPage() {
  return (
    <div>
      <H1>Custom Page</H1>
      <P>This is a custom paragraph.</P>
    </div>
  );
}
```

## Components Included

- **Typography**: `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `Blockquote`
- **Lists**: `Ul`, `Ol`, `Li`
- **Tables**: `MarkdownTable`, `MarkdownTableHeader`, `MarkdownTableBody`, etc.
- **Code**: `Code` (inline), `Pre` (block)

## Development

- **Build**: `pnpm build`
- **Test**: `pnpm test`
- **Storybook**: `pnpm storybook`
