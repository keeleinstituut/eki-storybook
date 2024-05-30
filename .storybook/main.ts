import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@whitespace/storybook-addon-html",
    "storybook-addon-pseudo-states",
    "@storybook/preset-scss",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};

export default config;
