import { render, useTheme, variants } from '@ws/theme';
import { lazyRender } from '@ws/theme/src/utils';
import { useEffect } from 'react';

/** @type { import('@storybook/react').Preview["globalTypes"] } */
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global Theme",
    defaultValue: 'system',
    toolbar: {
      icon: 'lightning',
      items: variants,
      dynaimcTitle: true,
    }
  }
}

render();
lazyRender(() => import('./theme.css'))();

/** @type { import('@storybook/react').Decorator } */
const withThemeProvider = (Story, context) => {
  const body = document.body;
  useTheme(body, context.globals.theme);
  return (
    <Story {...context} />
  )
}

/** @type { import('@storybook/react').Preview["decorators"] } */
export const decorators = [withThemeProvider]
