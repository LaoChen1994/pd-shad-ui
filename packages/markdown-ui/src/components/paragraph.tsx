import React from "react";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode;
}

export const P = ({ children, className = "", ...props }: ParagraphProps) => (
  <p className={`pd-leading-7 [&:not(:first-child)]:pd-mt-6 pd-mb-4 ${className}`} {...props}>
    {children}
  </p>
);

export const Blockquote = ({ children, className = "", ...props }: BlockquoteProps) => (
  <blockquote className={`pd-mt-6 pd-border-l-2 pd-pl-6 pd-italic ${className}`} {...props}>
    {children}
  </blockquote>
);
