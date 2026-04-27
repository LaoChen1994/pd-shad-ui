import type { Meta, StoryObj } from "@storybook/react";
import ReactMarkdown from "react-markdown";
import {
  Blockquote,
  Code,
  H1,
  H2,
  Li,
  MarkdownTable,
  MarkdownTableBody,
  MarkdownTableCell,
  MarkdownTableHead,
  MarkdownTableHeader,
  MarkdownTableRow,
  Ol,
  P,
  Ul,
  components,
  defaultMarkdownPlugins,
} from "./index";

const markdownSample = `# Shipping notes

We upgraded **pd-markdown-ui** with a safer default plugin bundle.

> Markdown content now stays aligned with pd-shad-ui styles.

## Highlights

- GFM tables and task lists
- KaTeX math support
- Shared React / Vue code block rendering

### Release snippet

\`inline code\` still uses the compact token style.

\`\`\`tsx
export function Button() {
  return <button className="pd-rounded-md">Ship it</button>;
}
\`\`\`

| Package | Status |
| --- | --- |
| pd-shad-ui | ready |
| pd-markdown-ui | upgraded |

- [x] Storybook parity
- [x] Vue test coverage

Euler identity: $e^{i\\pi} + 1 = 0$
`;

const meta = {
  title: "Markdown/React",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  render: () => (
    <div className="pd-max-w-3xl pd-p-8">
      <H1>Markdown typography that matches pd-shad-ui</H1>
      <P>
        This package gives us semantic markdown building blocks without drifting away from the design system.
      </P>
      <H2>Lists and callouts</H2>
      <Blockquote>Use the exported component map when you want markdown output to share the same visual language as the rest of the app.</Blockquote>
      <Ul>
        <Li>Ordered and unordered lists stay readable</Li>
        <Li>Inline code uses a compact muted token style</Li>
        <Li>Tables inherit the same border and spacing treatment</Li>
      </Ul>
      <Ol>
        <Li>Install the package.</Li>
        <Li>Pass the exported `components` map into your markdown renderer.</Li>
        <Li>Keep `pd-shad-ui/styles.css` loaded in your app shell.</Li>
      </Ol>
      <P>
        Inline example: <Code>pnpm --filter pd-markdown-ui run storybook:react</Code>
      </P>
    </div>
  ),
};

export const TablesAndCode: Story = {
  render: () => (
    <div className="pd-max-w-4xl pd-space-y-8 pd-p-8">
      <MarkdownTable>
        <MarkdownTableHeader>
          <MarkdownTableRow>
            <MarkdownTableHead>Capability</MarkdownTableHead>
            <MarkdownTableHead>Status</MarkdownTableHead>
            <MarkdownTableHead>Why it matters</MarkdownTableHead>
          </MarkdownTableRow>
        </MarkdownTableHeader>
        <MarkdownTableBody>
          <MarkdownTableRow>
            <MarkdownTableCell>Shared highlighting</MarkdownTableCell>
            <MarkdownTableCell>Ready</MarkdownTableCell>
            <MarkdownTableCell>React and Vue now render fenced code with the same theme rules.</MarkdownTableCell>
          </MarkdownTableRow>
          <MarkdownTableRow>
            <MarkdownTableCell>Copy feedback</MarkdownTableCell>
            <MarkdownTableCell>Ready</MarkdownTableCell>
            <MarkdownTableCell>Copy success and failure states are both surfaced.</MarkdownTableCell>
          </MarkdownTableRow>
        </MarkdownTableBody>
      </MarkdownTable>

      <Code className="language-ts">{`const release = { name: "pd-markdown-ui", version: "next" }`}</Code>
    </div>
  ),
};

export const FullMarkdownDocument: Story = {
  render: () => (
    <div className="pd-max-w-3xl pd-p-8">
      <ReactMarkdown
        components={components}
        remarkPlugins={defaultMarkdownPlugins.remark}
        rehypePlugins={defaultMarkdownPlugins.rehype}
      >
        {markdownSample}
      </ReactMarkdown>
    </div>
  ),
};
