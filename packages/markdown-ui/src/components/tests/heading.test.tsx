import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { H1, H2 } from "../heading";

describe("Heading Components", () => {
  it("renders H1 correctly", () => {
    render(<H1>Title</H1>);
    const element = screen.getByText("Title");
    expect(element.tagName).toBe("H1");
    expect(element).toHaveClass("pd-text-4xl");
  });

  it("renders H2 correctly", () => {
    render(<H2>SubTitle</H2>);
    const element = screen.getByText("SubTitle");
    expect(element.tagName).toBe("H2");
    expect(element).toHaveClass("pd-text-3xl");
  });

  it("renders with custom className", () => {
    render(<H1 className="custom">Title</H1>);
    expect(screen.getByText("Title")).toHaveClass("custom");
  });
});
