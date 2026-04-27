import type { Meta, StoryObj } from "@storybook/vue3";
import katex from "katex";
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
} from "../index";

const meta = {
  title: "Markdown/Vue",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  render: () => ({
    components: { H1, H2, P, Blockquote, Ul, Ol, Li, Code },
    template: `
      <div class="pd-max-w-3xl pd-p-8">
        <H1>Markdown typography that matches pd-shad-ui</H1>
        <P>
          Vue consumers now get the same semantic building blocks and spacing rhythm as the React side.
        </P>
        <H2>Lists and callouts</H2>
        <Blockquote>
          Use the exported component map inside your markdown pipeline when you want your content layer to inherit the design system.
        </Blockquote>
        <Ul>
          <Li>Headings, body copy, lists, and tables are aligned with the shared primitives.</Li>
          <Li>Inline code uses the same muted token treatment as React.</Li>
          <Li>Fenced code picks up the shared theme and copy behavior.</Li>
        </Ul>
        <Ol>
          <Li>Install the package.</Li>
          <Li>Wire the exported components into your markdown renderer.</Li>
          <Li>Load pd-shad-ui styles once in your app shell.</Li>
        </Ol>
        <P>Inline example: <Code>pnpm --filter pd-markdown-ui run storybook:vue</Code></P>
      </div>
    `,
  }),
};

export const TablesAndCode: Story = {
  render: () => ({
    components: {
      MarkdownTable,
      MarkdownTableBody,
      MarkdownTableCell,
      MarkdownTableHead,
      MarkdownTableHeader,
      MarkdownTableRow,
      Code,
    },
    template: `
      <div class="pd-max-w-4xl pd-space-y-8 pd-p-8">
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

        <Code class="language-ts">const release = { name: "pd-markdown-ui", version: "next" }</Code>
      </div>
    `,
  }),
};

export const MathAndGfm: Story = {
  render: () => ({
    setup() {
      const mathHtml = katex.renderToString("e^{i\\pi} + 1 = 0", {
        throwOnError: false,
        displayMode: true,
      });

      return { mathHtml };
    },
    template: `
      <div class="pd-max-w-3xl pd-space-y-8 pd-p-8">
        <div>
          <h3 class="pd-mb-4 pd-text-2xl pd-font-semibold pd-tracking-tight">Math support</h3>
          <div class="pd-rounded-lg pd-border pd-bg-card pd-p-6" v-html="mathHtml" />
        </div>

        <div>
          <h3 class="pd-mb-4 pd-text-2xl pd-font-semibold pd-tracking-tight">GFM-style content</h3>
          <ul class="pd-grid pd-gap-3 pd-rounded-lg pd-border pd-bg-card pd-p-6 pd-text-sm">
            <li class="pd-flex pd-items-center pd-gap-3">
              <input checked disabled type="checkbox" class="pd-h-4 pd-w-4" />
              <span>Task list semantics</span>
            </li>
            <li class="pd-flex pd-items-center pd-gap-3">
              <input checked disabled type="checkbox" class="pd-h-4 pd-w-4" />
              <span>Table and inline code presentation</span>
            </li>
            <li class="pd-flex pd-items-center pd-gap-3">
              <input checked disabled type="checkbox" class="pd-h-4 pd-w-4" />
              <span>Raw HTML and KaTeX ready through the default plugin bundle</span>
            </li>
          </ul>
        </div>
      </div>
    `,
  }),
};
