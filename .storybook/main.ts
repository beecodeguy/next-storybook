import type { StorybookConfig } from "@storybook/nextjs";
import * as path from "path";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "storybook-tailwind-dark-mode",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      image: {
        loading: "eager",
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
