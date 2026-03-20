import * as React from "react";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  children?: React.ReactNode;
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
}

export const Ul = ({ children, className = "", ...props }: ListProps) => (
  <ul className={`pd-my-6 pd-ml-6 pd-list-disc [&>li]:pd-mt-2 ${className}`} {...(props as React.HTMLAttributes<HTMLUListElement>)}>
    {children}
  </ul>
);

export const Ol = ({ children, className = "", ...props }: ListProps) => (
  <ol className={`pd-my-6 pd-ml-6 pd-list-decimal [&>li]:pd-mt-2 ${className}`} {...(props as React.HTMLAttributes<HTMLOListElement>)}>
    {children}
  </ol>
);

export const Li = ({ children, className = "", ...props }: ListItemProps) => (
  <li className={`${className}`} {...props}>
    {children}
  </li>
);
