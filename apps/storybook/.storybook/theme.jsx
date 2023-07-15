import { useTheme, variants } from '@ws/theme';
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

let themeCssImported = false;

/** @type { import('@storybook/react').Decorator } */
const withThemeProvider = (Story, context) => {
  const body = document.body;
  useTheme(body, context.globals.theme);
  useEffect(() => {
    if (!themeCssImported) {
      import('./theme.css')
      themeCssImported = true;
    }
  }, []);
  return (
    <Story {...context} />
  )
}

/** @type { import('@storybook/react').Preview["decorators"] } */
export const decorators = [withThemeProvider]
