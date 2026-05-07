import { createApp, h, nextTick, type Component, type VNodeChild } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { resetMarkdownCodeConfig, setMarkdownCodeConfig } from "../../shared/code";
import { Code, Pre } from "../components/code";
import { components } from "../components";
import { H1 } from "../components/heading";
import { Li, Ol, Ul } from "../components/list";
import { Blockquote, P } from "../components/paragraph";
import { MarkdownTable, MarkdownTableBody, MarkdownTableCell, MarkdownTableHead, MarkdownTableHeader, MarkdownTableRow } from "../components/table";

const mountedApps: Array<() => void> = [];

function mountComponent(
  component: Component,
  options: {
    props?: Record<string, unknown>;
    slots?: Record<string, () => VNodeChild>;
  } = {},
) {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const app = createApp({
    render() {
      return h(component, options.props ?? {}, options.slots ?? {});
    },
  });

  app.mount(container);
  const unmount = () => {
    app.unmount();
    container.remove();
  };
  mountedApps.push(unmount);

  return { container, unmount };
}

afterEach(() => {
  while (mountedApps.length > 0) {
    mountedApps.pop()?.();
  }
  resetMarkdownCodeConfig();
});

describe("Vue markdown components", () => {
  it("renders headings and paragraphs", async () => {
    const { container } = mountComponent(H1, {
      slots: {
        default: () => "Vue markdown heading",
      },
    });

    mountComponent(P, {
      slots: {
        default: () => "Paragraph body",
      },
    });

    await nextTick();

    expect(container.querySelector("h1")?.textContent).toBe("Vue markdown heading");
    expect(document.body.textContent).toContain("Paragraph body");
  });

  it("renders lists and blockquotes with expected structure", async () => {
    mountComponent(Blockquote, {
      slots: {
        default: () => "A shared callout",
      },
    });
    mountComponent(Ul, {
      slots: {
        default: () => [h(Li, null, { default: () => "One" }), h(Li, null, { default: () => "Two" })],
      },
    });
    mountComponent(Ol, {
      slots: {
        default: () => [h(Li, null, { default: () => "First" })],
      },
    });

    await nextTick();

    expect(document.querySelector("blockquote")?.textContent).toBe("A shared callout");
    expect(document.querySelectorAll("ul li")).toHaveLength(2);
    expect(document.querySelectorAll("ol li")).toHaveLength(1);
  });

  it("renders table primitives", async () => {
    mountComponent(MarkdownTable, {
      slots: {
        default: () => [
          h(MarkdownTableHeader, null, {
            default: () => h(MarkdownTableRow, null, {
              default: () => h(MarkdownTableHead, null, { default: () => "Package" }),
            }),
          }),
          h(MarkdownTableBody, null, {
            default: () => h(MarkdownTableRow, null, {
              default: () => h(MarkdownTableCell, null, { default: () => "pd-markdown-ui" }),
            }),
          }),
        ],
      },
    });

    await nextTick();

    expect(document.querySelector("table")).toBeTruthy();
    expect(document.body.textContent).toContain("pd-markdown-ui");
  });

  it("renders inline code", async () => {
    mountComponent(Code, {
      slots: {
        default: () => "const x = 1",
      },
    });

    await nextTick();

    const code = document.querySelector("code");
    expect(code?.textContent).toBe("const x = 1");
    expect(code?.className).toContain("pd-bg-muted");
  });

  it("renders fenced code and copy feedback", async () => {
    mountComponent(Code, {
      props: { class: "language-ts" },
      slots: {
        default: () => "const shipped = true;",
      },
    });

    await vi.waitFor(() => {
      expect(document.querySelector(".shiki")).toBeTruthy();
      expect(document.body.textContent).toContain("ts");
    });

    const header = document.querySelector(".pd-border-b");
    const button = document.querySelector("button[aria-label='Copy code']") as HTMLButtonElement | null;
    expect(header?.textContent).toContain("ts");
    expect(header?.contains(button)).toBe(true);
    expect(button).toBeTruthy();
    button?.click();

    await vi.waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith("const shipped = true;");
      expect(document.querySelector("button[aria-label='Code copied']")).toBeTruthy();
    });
  });

  it("respects shared theme overrides", async () => {
    setMarkdownCodeConfig({ defaultTheme: "light" });
    mountComponent(Code, {
      props: { class: "language-ts" },
      slots: {
        default: () => "const version = 2;",
      },
    });

    await vi.waitFor(() => {
      expect(document.querySelector(".shiki.github-light")).toBeTruthy();
    });
  });

  it("keeps the component export map aligned", () => {
    expect(components.h1).toBe(H1);
    expect(components.p).toBe(P);
    expect(components.code).toBe(Code);
    expect(components.pre).toBe(Pre);
  });
});
