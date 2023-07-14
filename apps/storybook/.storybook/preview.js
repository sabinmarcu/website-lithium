// @ts-check 

import {
  decorators as themeDecorators,
  globalTypes as themeGlobalTypes,
} from './theme'

/** @type { import('@storybook/react').Preview["parameters"] } */
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  };

/** @type { import('@storybook/react').Preview["globalTypes"] } */
export const globalTypes = {
  ...themeGlobalTypes
}

/** @type { import('@storybook/react').Preview["decorators"] } */
export const decorators = [ 
  ...themeDecorators || [],
]
