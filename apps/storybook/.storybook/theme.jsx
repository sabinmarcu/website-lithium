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


/** @type { import('@storybook/react').Decorator } */
const withThemeProvider = (Story, context) => {
  const body = document.body;
  useTheme(body, context.globals.theme);
  useEffect(() => {
    render();
    lazyRender(() => import('./theme.css'))();
  }, []);
  return (
    <Story {...context} />
  )
}

/** @type { import('@storybook/react').Preview["decorators"] } */
export const decorators = [withThemeProvider]
