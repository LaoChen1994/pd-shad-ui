import * as React from "react";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";

export * from "./components";

export const defaultMarkdownPlugins = {
  remark: [remarkGfm, remarkMath],
  rehype: [rehypeRaw, rehypeKatex],
};

export { remarkGfm, remarkMath, rehypeRaw, rehypeKatex };
