import React from "react";

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export const Code = ({ children, className = "", ...props }: CodeProps) => (
  <code 
    className={`pd-relative pd-rounded pd-bg-muted pd-px-[0.3rem] pd-py-[0.2rem] pd-font-mono pd-text-sm pd-font-semibold ${className}`}
    {...props}
  >
    {children}
  </code>
);

export const Pre = ({ children, className = "", ...props }: PreProps) => (
  <pre 
    className={`pd-mb-4 pd-mt-6 pd-overflow-x-auto pd-rounded-lg pd-border pd-bg-muted pd-p-4 pd-font-mono pd-text-sm ${className}`}
    {...props}
  >
    {children}
  </pre>
);
