import type { Preview } from "@storybook/vue3";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../../ui/src/globals.css";
import "katex/dist/katex.min.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "padded",
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
