import { mergeConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const storiesExtension = "*.stories.@(mdx|tsx)"
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    `../../../packages/*/src/**/${storiesExtension}`,
    `../../../apps/*/src/**/${storiesExtension}`
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    const overrides = {
      plugins: [vanillaExtractPlugin()]
    }
    return mergeConfig(config, overrides)
  }
};
export default config;
