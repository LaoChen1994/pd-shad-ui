import type { Highlighter } from "shiki";
import { createHighlighter } from "shiki";

export type MarkdownCodeThemeMode = "light" | "dark" | "auto";

export interface MarkdownCodeConfig {
  defaultTheme: MarkdownCodeThemeMode;
  lightTheme: string;
  darkTheme: string;
  languages: string[];
  copyFeedbackDuration: number;
}

export const DEFAULT_MARKDOWN_CODE_LANGUAGES = [
  "typescript",
  "javascript",
  "tsx",
  "jsx",
  "bash",
  "json",
  "markdown",
  "css",
  "html",
] as const;

export const DEFAULT_MARKDOWN_CODE_CONFIG: MarkdownCodeConfig = {
  defaultTheme: "auto",
  lightTheme: "github-light",
  darkTheme: "github-dark",
  languages: [...DEFAULT_MARKDOWN_CODE_LANGUAGES],
  copyFeedbackDuration: 2000,
};

let markdownCodeConfig: MarkdownCodeConfig = { ...DEFAULT_MARKDOWN_CODE_CONFIG };
let highlighterPromise: Promise<Highlighter> | null = null;
let highlighterCacheKey = "";

export function createMarkdownCodeConfig(
  overrides: Partial<MarkdownCodeConfig> = {},
): MarkdownCodeConfig {
  return {
    ...DEFAULT_MARKDOWN_CODE_CONFIG,
    ...overrides,
    languages: overrides.languages ? [...overrides.languages] : [...DEFAULT_MARKDOWN_CODE_CONFIG.languages],
  };
}

export function getMarkdownCodeConfig(): MarkdownCodeConfig {
  return markdownCodeConfig;
}

export function setMarkdownCodeConfig(overrides: Partial<MarkdownCodeConfig> = {}): MarkdownCodeConfig {
  markdownCodeConfig = createMarkdownCodeConfig({
    ...markdownCodeConfig,
    ...overrides,
  });
  return markdownCodeConfig;
}

export function resetMarkdownCodeConfig(): MarkdownCodeConfig {
  markdownCodeConfig = { ...DEFAULT_MARKDOWN_CODE_CONFIG };
  return markdownCodeConfig;
}

function getHighlighterCacheKey(config: MarkdownCodeConfig): string {
  return JSON.stringify({
    lightTheme: config.lightTheme,
    darkTheme: config.darkTheme,
    languages: [...config.languages].sort(),
  });
}

export function getHighlighter(config: MarkdownCodeConfig = markdownCodeConfig) {
  const cacheKey = getHighlighterCacheKey(config);

  if (!highlighterPromise || highlighterCacheKey !== cacheKey) {
    highlighterCacheKey = cacheKey;
    highlighterPromise = createHighlighter({
      themes: [config.lightTheme, config.darkTheme],
      langs: config.languages,
    });
  }

  return highlighterPromise;
}

export function extractLanguage(className = "") {
  const languageClass = className
    .split(/\s+/)
    .find((token) => token.startsWith("language-"));

  return languageClass ? languageClass.replace("language-", "") : "text";
}

export function getCodeBlockHtml(
  highlighter: Highlighter,
  code: string,
  language: string,
  config: MarkdownCodeConfig = markdownCodeConfig,
) {
  if (config.defaultTheme === "light") {
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: config.lightTheme,
    });
  }

  if (config.defaultTheme === "dark") {
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: config.darkTheme,
    });
  }

  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      light: config.lightTheme,
      dark: config.darkTheme,
    },
  });
}

export async function copyTextToClipboard(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  if (typeof document === "undefined") {
    throw new Error("Clipboard is not available in this environment.");
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  const successful = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!successful) {
    throw new Error("Unable to copy code to clipboard.");
  }
}

export function toPlainText(value: unknown): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => toPlainText(item)).join("");
  }

  if (value && typeof value === "object" && "props" in (value as Record<string, unknown>)) {
    return toPlainText((value as { props?: { children?: unknown } }).props?.children);
  }

  return "";
}
