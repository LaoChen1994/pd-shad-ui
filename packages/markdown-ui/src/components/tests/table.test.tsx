import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  MarkdownTable,
  MarkdownTableBody,
  MarkdownTableCell,
  MarkdownTableHead,
  MarkdownTableHeader,
  MarkdownTableRow,
} from "../table";

describe("Table Components", () => {
  it("renders table structure correctly", () => {
    render(
      <MarkdownTable>
        <MarkdownTableHeader>
          <MarkdownTableRow>
            <MarkdownTableHead>Header</MarkdownTableHead>
          </MarkdownTableRow>
        </MarkdownTableHeader>
        <MarkdownTableBody>
          <MarkdownTableRow>
            <MarkdownTableCell>Cell</MarkdownTableCell>
          </MarkdownTableRow>
        </MarkdownTableBody>
      </MarkdownTable>,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Cell")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
