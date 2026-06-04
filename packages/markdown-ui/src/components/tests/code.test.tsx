import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Code, Pre } from "../code";
import { resetMarkdownCodeConfig, setMarkdownCodeConfig } from "../../shared/code";
import { resetMarkdownMermaidConfig, setMarkdownMermaidConfig } from "../../shared/mermaid";

vi.mock("mermaid", () => ({
  default: {
    initialize: vi.fn(),
    render: vi.fn().mockResolvedValue({
      svg: "<svg data-testid=\"mermaid-svg\"></svg>",
    }),
  },
}));

describe("Code Components", () => {
  afterEach(() => {
    resetMarkdownCodeConfig();
    resetMarkdownMermaidConfig();
  });

  it("renders inline code correctly", () => {
    render(<Code>const x = 1</Code>);
    expect(screen.getByText("const x = 1")).toBeInTheDocument();
    expect(screen.getByText("const x = 1").tagName).toBe("CODE");
  });

  it("renders fenced code blocks with a language label", async () => {
    const { container } = render(<Code className="language-tsx">{`const Button = () => <button />;`}</Code>);

    await waitFor(() => {
      const language = screen.getByText("tsx");
      const header = container.querySelector(".pd-border-b");

      expect(language).toBeInTheDocument();
      expect(header).toContainElement(language);
      expect(header).toContainElement(screen.getByRole("button", { name: "Copy code" }));
      expect(document.querySelector(".shiki")).toBeTruthy();
    });
  });

  it("supports forcing a single theme through the shared config", async () => {
    setMarkdownCodeConfig({ defaultTheme: "light" });
    render(<Code className="language-ts">{`const version = 2;`}</Code>);

    await waitFor(() => {
      const shiki = document.querySelector(".shiki");
      expect(shiki).toBeTruthy();
      expect(shiki?.className).toContain("github-light");
    });
  });

  it("copies fenced code through the copy action", async () => {
    render(<Code className="language-json">{`{\n  "ready": true\n}`}</Code>);

    const button = await screen.findByRole("button", { name: "Copy code" });
    fireEvent.click(button);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(`{\n  "ready": true\n}`);
      expect(screen.getByRole("button", { name: "Code copied" })).toBeInTheDocument();
    });
  });

  it("renders mermaid fenced blocks through mermaid", async () => {
    const mermaid = (await import("mermaid")).default;
    setMarkdownMermaidConfig({
      mermaid: {
        theme: "dark",
        themeVariables: {
          primaryColor: "#f8fafc",
        },
      },
      className: "pd-my-6 pd-custom-mermaid",
    });

    const { container } = render(<Code className="language-mermaid">{`flowchart TD\nA --> B`}</Code>);

    await waitFor(() => {
      expect(container.querySelector("[data-testid='mermaid-svg']")).toBeTruthy();
    });

    expect(container.querySelector(".pd-custom-mermaid")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Copy code" })).not.toBeInTheDocument();
    expect(mermaid.initialize).toHaveBeenCalledWith(
      expect.objectContaining({
        theme: "dark",
        themeVariables: {
          primaryColor: "#f8fafc",
        },
      }),
    );
    expect(mermaid.render).toHaveBeenCalledWith(expect.stringMatching(/^pd-mermaid-/), "flowchart TD\nA --> B");
  });

  it("uses the pd mermaid theme by default", async () => {
    const mermaid = (await import("mermaid")).default;
    render(<Code className="language-mermaid">{`flowchart TD\nA --> B`}</Code>);

    await waitFor(() => {
      expect(mermaid.initialize).toHaveBeenCalledWith(
        expect.objectContaining({
          theme: "base",
          themeVariables: expect.objectContaining({
            primaryBorderColor: "#2563eb",
            primaryTextColor: "#0f172a",
          }),
        }),
      );
    });
  });

  it("renders Pre as a wrapper div", () => {
    const { container } = render(<Pre>block</Pre>);
    const wrapper = container.querySelector(".pd-pre-wrapper");

    expect(wrapper).toBeTruthy();
    expect(wrapper?.textContent).toBe("block");
  });
});
