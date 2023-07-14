import type { GlobalStyleRule } from '@vanilla-extract/css';
import {
  assignVars,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css';
import { colorsContract } from './contract';
import {
  defaultTheme,
  themes,
} from './themes';
import { themeClassName } from './utils';

// Render theme colors to root scope
for (const [theme, colors] of Object.entries(themes)) {
  // Render theme colors under class and prefers scheme
  createGlobalTheme(
    `:root.${themeClassName(theme as any)}, .${themeClassName(theme as any)}`,
    colorsContract,
    colors,
  );

  const globalStyles: GlobalStyleRule = {};
  // If default theme, also render as default (if no prefers scheme present)
  if (theme === defaultTheme) {
    createGlobalTheme(':root', colorsContract, colors);
    globalStyles.vars = assignVars(colorsContract, colors);
  }
  globalStyle(':root', {
    ...globalStyles,
    '@media': {
      '(prefers-color-scheme: light)': {
        vars: assignVars(colorsContract, colors),
      },
    },
  });
}
