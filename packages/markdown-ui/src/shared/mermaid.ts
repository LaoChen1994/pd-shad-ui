import type { MermaidConfig } from "mermaid";

export interface MarkdownMermaidConfig {
  mermaid: MermaidConfig;
  className: string;
  errorClassName: string;
}

export const DEFAULT_MARKDOWN_MERMAID_CONFIG: MarkdownMermaidConfig = {
  mermaid: {
    startOnLoad: false,
    securityLevel: "strict",
    theme: "base",
    themeVariables: {
      primaryColor: "#f8fafc",
      primaryTextColor: "#0f172a",
      primaryBorderColor: "#2563eb",
      lineColor: "#2563eb",
      secondaryColor: "#ecfeff",
      tertiaryColor: "#fef3c7",
      fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
    },
    flowchart: {
      htmlLabels: false,
    },
  },
  className:
    "pd-my-6 pd-overflow-x-auto pd-rounded-lg pd-border pd-bg-background pd-p-4 pd-text-center [&_svg]:pd-mx-auto [&_svg]:pd-max-w-full",
  errorClassName:
    "pd-my-6 pd-overflow-x-auto pd-rounded-lg pd-border pd-border-destructive/40 pd-bg-destructive/5 pd-p-4 pd-font-mono pd-text-sm pd-text-destructive",
};

let markdownMermaidConfig: MarkdownMermaidConfig = {
  ...DEFAULT_MARKDOWN_MERMAID_CONFIG,
  mermaid: { ...DEFAULT_MARKDOWN_MERMAID_CONFIG.mermaid },
};

export const createMarkdownMermaidConfig = (
  overrides: Partial<MarkdownMermaidConfig> = {},
): MarkdownMermaidConfig => ({
  ...DEFAULT_MARKDOWN_MERMAID_CONFIG,
  ...overrides,
  mermaid: {
    ...DEFAULT_MARKDOWN_MERMAID_CONFIG.mermaid,
    ...overrides.mermaid,
  },
});

export const getMarkdownMermaidConfig = (): MarkdownMermaidConfig => markdownMermaidConfig;

export const setMarkdownMermaidConfig = (
  overrides: Partial<MarkdownMermaidConfig> = {},
): MarkdownMermaidConfig => {
  markdownMermaidConfig = createMarkdownMermaidConfig({
    ...markdownMermaidConfig,
    ...overrides,
    mermaid: {
      ...markdownMermaidConfig.mermaid,
      ...overrides.mermaid,
    },
  });
  return markdownMermaidConfig;
};

export const resetMarkdownMermaidConfig = (): MarkdownMermaidConfig => {
  markdownMermaidConfig = createMarkdownMermaidConfig();
  return markdownMermaidConfig;
};

export const renderMermaidDiagram = async (id: string, code: string): Promise<string> => {
  const mermaid = (await import("mermaid")).default;
  mermaid.initialize(getMarkdownMermaidConfig().mermaid);
  const result = await mermaid.render(id, code);
  return result.svg;
};
