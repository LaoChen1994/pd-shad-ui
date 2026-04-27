import type { StorybookConfig } from "@storybook/vue3-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/vue/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = [
      ...(Array.isArray(config.resolve.alias) ? config.resolve.alias : []),
      {
        find: "pd-shad-ui",
        replacement: path.resolve(__dirname, "../src"),
      },
    ];
    return config;
  },
};

export default config;
