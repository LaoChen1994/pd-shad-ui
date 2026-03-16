import React from "react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableHead, 
  TableRow, 
  TableCell 
} from "pd-shad-ui";

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MarkdownTable = ({ children, className = "", ...props }: TableProps) => (
  <div className={`pd-my-6 pd-w-full pd-overflow-y-auto ${className}`} {...props}>
    <Table>
      {children}
    </Table>
  </div>
);

export const MarkdownTableHeader = TableHeader;
export const MarkdownTableBody = TableBody;
export const MarkdownTableFooter = TableFooter;
export const MarkdownTableHead = TableHead;
export const MarkdownTableRow = TableRow;
export const MarkdownTableCell = TableCell;
