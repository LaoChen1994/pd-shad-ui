import { Check, Copy } from "lucide-vue-next";
import { computed, defineComponent, h, ref, watch, type VNode } from "vue";
import { cn } from "pd-shad-ui/vue";
import {
  copyTextToClipboard,
  extractLanguage,
  getCodeBlockHtml,
  getHighlighter,
  getMarkdownCodeConfig,
} from "../../shared/code";

function extractVueText(nodes: VNode[] | undefined): string {
  if (!nodes) {
    return "";
  }

  return nodes
    .map((node) => {
      if (typeof node.children === "string") {
        return node.children;
      }

      if (Array.isArray(node.children)) {
        return extractVueText(node.children as VNode[]);
      }

      if (node.children && typeof node.children === "object") {
        const slotChildren = (node.children as { default?: (() => VNode[]) | undefined }).default?.();
        return extractVueText(slotChildren);
      }

      return "";
    })
    .join("");
}

const CodeBlock = defineComponent({
  name: "CodeBlock",
  props: {
    language: { type: String, required: true },
    code: { type: String, required: true },
  },
  setup(props) {
    const html = ref("");
    const copyState = ref<"idle" | "success" | "error">("idle");
    let feedbackTimeout: number | null = null;

    const renderCode = async () => {
      const config = getMarkdownCodeConfig();

      try {
        const highlighter = await getHighlighter(config);
        html.value = getCodeBlockHtml(highlighter, props.code, props.language, config);
      } catch {
        html.value = "";
      }
    };

    watch(
      () => [props.code, props.language],
      () => {
        void renderCode();
      },
      { immediate: true },
    );

    watch(copyState, (value) => {
      if (feedbackTimeout !== null) {
        window.clearTimeout(feedbackTimeout);
        feedbackTimeout = null;
      }

      if (value === "idle") {
        return;
      }

      feedbackTimeout = window.setTimeout(() => {
        copyState.value = "idle";
      }, getMarkdownCodeConfig().copyFeedbackDuration);
    });

    const copyLabel = computed(() => {
      if (copyState.value === "success") {
        return "Code copied";
      }

      if (copyState.value === "error") {
        return "Copy failed";
      }

      return "Copy code";
    });

    const copyToClipboard = async () => {
      try {
        await copyTextToClipboard(props.code);
        copyState.value = "success";
      } catch {
        copyState.value = "error";
      }
    };

    return () =>
      h("div", { class: "pd-my-6 pd-overflow-hidden pd-rounded-lg pd-border pd-bg-muted/70" }, [
        h("div", { class: "pd-flex pd-min-h-10 pd-items-center pd-justify-between pd-gap-3 pd-border-b pd-bg-muted pd-px-4 pd-py-2" }, [
          h("span", { class: "pd-font-mono pd-text-xs pd-font-medium pd-uppercase pd-text-muted-foreground" }, props.language || "text"),
          h("div", { class: "pd-flex pd-items-center pd-gap-2" }, [
            copyState.value === "error"
              ? h("span", { class: "pd-text-xs pd-font-medium pd-text-destructive" }, "Copy failed")
              : null,
            h(
              "button",
              {
                type: "button",
                onClick: copyToClipboard,
                class: "pd-flex pd-h-7 pd-w-7 pd-items-center pd-justify-center pd-rounded-md pd-border pd-bg-background pd-text-foreground pd-transition-colors hover:pd-bg-accent",
                "aria-label": copyLabel.value,
              },
              [copyState.value === "success" ? h(Check, { class: "pd-h-4 pd-w-4 pd-text-green-500" }) : h(Copy, { class: "pd-h-4 pd-w-4" })],
            ),
          ]),
        ]),
        html.value
          ? h("div", {
              class: "pd-overflow-x-auto pd-p-4 pd-text-sm [&_.shiki]:!pd-m-0 [&_.shiki]:!pd-bg-transparent [&_.shiki]:pd-min-w-full [&_.shiki>code]:pd-grid [&_.shiki_.line]:pd-min-h-[1.25rem]",
              innerHTML: html.value,
            })
          : h("pre", { class: "pd-overflow-x-auto pd-p-4 pd-text-sm pd-font-mono" }, [h("code", null, props.code)]),
      ]);
  },
});

export const Code = defineComponent({
  name: "Code",
  props: { class: { type: String, default: "" } },
  setup(props, { slots, attrs }) {
    return () => {
      const isInline = !props.class.includes("language-");

      if (isInline) {
        return h(
          "code",
          {
            ...attrs,
            class: cn(
              "pd-relative pd-rounded pd-bg-muted pd-px-[0.3rem] pd-py-[0.2rem] pd-font-mono pd-text-sm pd-font-semibold",
              props.class,
            ),
          },
          slots.default?.(),
        );
      }

      return h(CodeBlock, {
        language: extractLanguage(props.class),
        code: extractVueText(slots.default?.()).trim(),
      });
    };
  },
});

export const Pre = defineComponent({
  name: "Pre",
  props: { class: { type: String, default: "" } },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn("pd-pre-wrapper", props.class),
        },
        slots.default?.(),
      );
  },
});
