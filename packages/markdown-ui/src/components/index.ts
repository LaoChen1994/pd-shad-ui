import * as React from "react";
export * from "./heading";
export * from "./table";
export * from "./list";
export * from "./code";
export * from "./paragraph";

import { H1, H2, H3, H4, H5, H6 } from "./heading";
import { MarkdownTable, MarkdownTableHeader, MarkdownTableBody, MarkdownTableFooter, MarkdownTableRow, MarkdownTableHead, MarkdownTableCell } from "./table";
import { Ul, Ol, Li } from "./list";
import { Code, Pre } from "./code";
import { P, Blockquote } from "./paragraph";

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
