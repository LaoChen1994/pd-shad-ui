"use client"

import * as React from "react"
import { cn } from "pd-shad-ui/lib/utils"
import { Check, Copy } from "lucide-react"
import { createHighlighter, type Highlighter } from "shiki"

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

// Global highlighter instance to avoid re-initializing
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark", "github-light"],
      langs: ["typescript", "javascript", "tsx", "jsx", "bash", "json", "markdown", "css", "html"],
    });
  }
  return highlighterPromise;
}

export const Code = ({ children, className = "", ...props }: CodeProps) => {
  const isInline = !className.includes("language-");
  
  if (isInline) {
    return (
      <code 
        className={cn(
          "pd-relative pd-rounded pd-bg-muted pd-px-[0.3rem] pd-py-[0.2rem] pd-font-mono pd-text-sm pd-font-semibold",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }

  const language = className.replace("language-", "");
  return <CodeBlock language={language} code={String(children).trim()} />;
};

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock = ({ language, code }: CodeBlockProps) => {
  const [html, setHtml] = React.useState<string>("");
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;
    getHighlighter().then((highlighter) => {
      if (isMounted) {
        const highlighted = highlighter.codeToHtml(code, {
          lang: language,
          theme: "github-dark",
        });
        setHtml(highlighted);
      }
    });
    return () => { isMounted = false; };
  }, [code, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pd-group pd-relative pd-my-6 pd-overflow-hidden pd-rounded-lg pd-border pd-bg-muted">
      <div className="pd-absolute pd-right-4 pd-top-4 pd-z-10 pd-opacity-0 pd-transition-opacity group-hover:pd-opacity-100">
        <button
          onClick={copyToClipboard}
          className="pd-flex pd-h-8 pd-w-8 pd-items-center pd-justify-center pd-rounded-md pd-border pd-bg-background pd-text-foreground hover:pd-bg-accent"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="pd-h-4 pd-w-4 pd-text-green-500" />
          ) : (
            <Copy className="pd-h-4 pd-w-4" />
          )}
        </button>
      </div>
      
      {html ? (
        <div 
          className="pd-overflow-x-auto pd-p-4 pd-text-sm [&>pre]:!pd-bg-transparent [&>pre]:!pd-p-0"
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      ) : (
        <pre className="pd-overflow-x-auto pd-p-4 pd-text-sm pd-font-mono">
          <code>{code}</code>
        </pre>
      )}
      
      {language && (
        <div className="pd-absolute pd-bottom-2 pd-right-4 pd-text-xs pd-font-mono pd-text-muted-foreground/50 pd-pointer-events-none">
          {language}
        </div>
      )}
    </div>
  );
};

export const Pre = ({ children, className = "" }: PreProps) => {
  // We use our custom CodeBlock instead of the default Pre/Code combo for syntax highlighting
  // react-markdown passes the code block as Pre > Code
  return (
    <div className={cn("pd-pre-wrapper", className)}>
      {children}
    </div>
  );
};
