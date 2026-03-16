import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { 
  H1, H2, H3, H4, H5, H6, P, Blockquote, Ul, Ol, Li, Code, Pre,
  MarkdownTable, MarkdownTableHeader, MarkdownTableRow, MarkdownTableHead, MarkdownTableBody, MarkdownTableCell,
  components
} from "./components";

const meta: Meta = {
  title: "Markdown/Components",
};

export default meta;

type Story = StoryObj;

export const Typography: Story = {
  render: () => (
    <div className="pd-max-w-3xl pd-p-8">
      <H1>Heading 1</H1>
      <P>
        This is a paragraph of text. It demonstrates the spacing and line height of the standard paragraph component.
      </P>
      <H2>Heading 2</H2>
      <Blockquote>
        This is a blockquote. It's often used for quotes or highlighting important sections of text.
      </Blockquote>
      <H3>Heading 3</H3>
      <Ul>
        <Li>Unordered list item 1</Li>
        <Li>Unordered list item 2</Li>
        <Li>Unordered list item 3</Li>
      </Ul>
      <H4>Heading 4</H4>
      <Ol>
        <Li>Ordered list item 1</Li>
        <Li>Ordered list item 2</Li>
        <Li>Ordered list item 3</Li>
      </Ol>
      <H5>Heading 5</H5>
      <P>
        Some inline <Code>code snippet</Code> within a paragraph.
      </P>
      <Pre>
        <code>{`const hello = "world";\nconsole.log(hello);`}</code>
      </Pre>
      <H6>Heading 6</H6>
    </div>
  ),
};

export const Table: Story = {
  render: () => (
    <div className="pd-max-w-3xl pd-p-8">
      <H2>Data Table</H2>
      <MarkdownTable>
        <MarkdownTableHeader>
          <MarkdownTableRow>
            <MarkdownTableHead>Feature</MarkdownTableHead>
            <MarkdownTableHead>Status</MarkdownTableHead>
            <MarkdownTableHead>Notes</MarkdownTableHead>
          </MarkdownTableRow>
        </MarkdownTableHeader>
        <MarkdownTableBody>
          <MarkdownTableRow>
            <MarkdownTableCell>SEO Support</MarkdownTableCell>
            <MarkdownTableCell>✅ Yes</MarkdownTableCell>
            <MarkdownTableCell>Semantic HTML</MarkdownTableCell>
          </MarkdownTableRow>
          <MarkdownTableRow>
            <MarkdownTableCell>SSG Support</MarkdownTableCell>
            <MarkdownTableCell>✅ Yes</MarkdownTableCell>
            <MarkdownTableCell>Build-time rendering</MarkdownTableCell>
          </MarkdownTableRow>
          <MarkdownTableRow>
            <MarkdownTableCell>Style</MarkdownTableCell>
            <MarkdownTableCell>pd-shad-ui</MarkdownTableCell>
            <MarkdownTableCell>Consistent with UI library</MarkdownTableCell>
          </MarkdownTableRow>
        </MarkdownTableBody>
      </MarkdownTable>
    </div>
  ),
};
