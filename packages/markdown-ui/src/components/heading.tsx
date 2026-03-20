import * as React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export const H1 = ({ children, className = "", ...props }: HeadingProps) => (
  <h1 
    className={`pd-scroll-m-20 pd-text-4xl pd-font-extrabold pd-tracking-tight lg:pd-text-5xl pd-mb-6 ${className}`}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className = "", ...props }: HeadingProps) => (
  <h2 
    className={`pd-scroll-m-20 pd-border-b pd-pb-2 pd-text-3xl pd-font-semibold pd-tracking-tight pd-first:mt-0 pd-mt-10 pd-mb-4 ${className}`}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className = "", ...props }: HeadingProps) => (
  <h3 
    className={`pd-scroll-m-20 pd-text-2xl pd-font-semibold pd-tracking-tight pd-mt-8 pd-mb-4 ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({ children, className = "", ...props }: HeadingProps) => (
  <h4 
    className={`pd-scroll-m-20 pd-text-xl pd-font-semibold pd-tracking-tight pd-mt-6 pd-mb-2 ${className}`}
    {...props}
  >
    {children}
  </h4>
);

export const H5 = ({ children, className = "", ...props }: HeadingProps) => (
  <h5 
    className={`pd-scroll-m-20 pd-text-lg pd-font-semibold pd-tracking-tight pd-mt-4 pd-mb-2 ${className}`}
    {...props}
  >
    {children}
  </h5>
);

export const H6 = ({ children, className = "", ...props }: HeadingProps) => (
  <h6 
    className={`pd-scroll-m-20 pd-text-base pd-font-semibold pd-tracking-tight pd-mt-4 pd-mb-2 ${className}`}
    {...props}
  >
    {children}
  </h6>
);
