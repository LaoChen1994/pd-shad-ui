import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Code, Pre } from "../code";
import { resetMarkdownCodeConfig, setMarkdownCodeConfig } from "../../shared/code";

describe("Code Components", () => {
  afterEach(() => {
    resetMarkdownCodeConfig();
  });

  it("renders inline code correctly", () => {
    render(<Code>const x = 1</Code>);
    expect(screen.getByText("const x = 1")).toBeInTheDocument();
    expect(screen.getByText("const x = 1").tagName).toBe("CODE");
  });

  it("renders fenced code blocks with a language label", async () => {
    render(<Code className="language-tsx">{`const Button = () => <button />;`}</Code>);

    await waitFor(() => {
      expect(screen.getByText("tsx")).toBeInTheDocument();
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

  it("renders Pre as a wrapper div", () => {
    const { container } = render(<Pre>block</Pre>);
    const wrapper = container.querySelector(".pd-pre-wrapper");

    expect(wrapper).toBeTruthy();
    expect(wrapper?.textContent).toBe("block");
  });
});
