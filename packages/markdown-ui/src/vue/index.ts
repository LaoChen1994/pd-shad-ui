import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export * from "./components";
export * from "../shared/code";
export * from "../shared/mermaid";

export const defaultMarkdownPlugins = {
  remark: [remarkGfm, remarkMath],
  rehype: [rehypeKatex],
};

export const trustedMarkdownPlugins = {
  remark: [remarkGfm, remarkMath],
  rehype: [rehypeRaw, rehypeKatex],
};

export { rehypeKatex, rehypeRaw, remarkGfm, remarkMath };
