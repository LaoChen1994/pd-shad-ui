"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "pd-shad-ui/lib/utils";
import {
  copyTextToClipboard,
  extractLanguage,
  getCodeBlockHtml,
  getHighlighter,
  getMarkdownCodeConfig,
  toPlainText,
} from "../shared/code";

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export const Code = ({ children, className = "", ...props }: CodeProps) => {
  const isInline = !className.includes("language-");

  if (isInline) {
    return (
      <code
        className={cn(
          "pd-relative pd-rounded pd-bg-muted pd-px-[0.3rem] pd-py-[0.2rem] pd-font-mono pd-text-sm pd-font-semibold",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  }

  const language = extractLanguage(className);
  const code = toPlainText(children).trim();

  return <CodeBlock code={code} language={language} />;
};

interface CodeBlockProps {
  code: string;
  language: string;
}

type CopyState = "idle" | "success" | "error";

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [html, setHtml] = React.useState("");
  const [copyState, setCopyState] = React.useState<CopyState>("idle");

  React.useEffect(() => {
    const config = getMarkdownCodeConfig();
    let isMounted = true;

    getHighlighter(config)
      .then((highlighter) => {
        if (!isMounted) {
          return;
        }

        setHtml(getCodeBlockHtml(highlighter, code, language, config));
      })
      .catch(() => {
        if (isMounted) {
          setHtml("");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [code, language]);

  React.useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopyState("idle");
    }, getMarkdownCodeConfig().copyFeedbackDuration);

    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const copyToClipboard = async () => {
    try {
      await copyTextToClipboard(code);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
  };

  const copyLabel =
    copyState === "success"
      ? "Code copied"
      : copyState === "error"
        ? "Copy failed"
        : "Copy code";

  return (
    <div className="pd-group pd-relative pd-my-6 pd-overflow-hidden pd-rounded-lg pd-border pd-bg-muted">
      <div className="pd-absolute pd-right-4 pd-top-4 pd-z-10 pd-flex pd-items-center pd-gap-2 pd-opacity-0 pd-transition-opacity group-hover:pd-opacity-100 group-focus-within:pd-opacity-100">
        {copyState === "error" ? (
          <span className="pd-text-xs pd-font-medium pd-text-destructive">Copy failed</span>
        ) : null}
        <button
          type="button"
          onClick={copyToClipboard}
          className="pd-flex pd-h-8 pd-w-8 pd-items-center pd-justify-center pd-rounded-md pd-border pd-bg-background pd-text-foreground hover:pd-bg-accent"
          aria-label={copyLabel}
        >
          {copyState === "success" ? (
            <Check className="pd-h-4 pd-w-4 pd-text-green-500" />
          ) : (
            <Copy className="pd-h-4 pd-w-4" />
          )}
        </button>
      </div>

      {html ? (
        <div
          className="pd-overflow-x-auto pd-p-4 pd-text-sm [&_.shiki]:!pd-m-0 [&_.shiki]:!pd-bg-transparent [&_.shiki]:pd-min-w-full [&_.shiki>code]:pd-grid [&_.shiki_.line]:pd-min-h-[1.25rem]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="pd-overflow-x-auto pd-p-4 pd-text-sm pd-font-mono">
          <code>{code}</code>
        </pre>
      )}

      {language ? (
        <div className="pd-absolute pd-bottom-2 pd-right-4 pd-pointer-events-none pd-text-xs pd-font-mono pd-text-muted-foreground/60">
          {language}
        </div>
      ) : null}
    </div>
  );
};

export const Pre = ({ children, className = "", ...props }: PreProps) => {
  return (
    <div
      className={cn("pd-pre-wrapper", className)}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  );
};
