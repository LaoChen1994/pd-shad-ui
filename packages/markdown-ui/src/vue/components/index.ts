export * from "./code";
export * from "./heading";
export * from "./list";
export * from "./paragraph";
export * from "./table";

import { Code, Pre } from "./code";
import { H1, H2, H3, H4, H5, H6 } from "./heading";
import { Li, Ol, Ul } from "./list";
import { Blockquote, P } from "./paragraph";
import {
  MarkdownTable,
  MarkdownTableBody,
  MarkdownTableCell,
  MarkdownTableFooter,
  MarkdownTableHead,
  MarkdownTableHeader,
  MarkdownTableRow,
} from "./table";

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: MarkdownTable,
  thead: MarkdownTableHeader,
  tbody: MarkdownTableBody,
  tfoot: MarkdownTableFooter,
  tr: MarkdownTableRow,
  th: MarkdownTableHead,
  td: MarkdownTableCell,
  pre: Pre,
  code: Code,
};

export type MarkdownComponents = typeof components;
