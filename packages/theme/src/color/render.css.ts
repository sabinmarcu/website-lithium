import type { GlobalStyleRule } from '@vanilla-extract/css';
import {
  assignVars,
} from '@vanilla-extract/css';
import { colorsContract } from './contract';
import {
  defaultTheme,
  themes,
} from './themes';
import { themeClassName } from './utils';
import { frameworkGlobalStyle as globalStyle } from '../overrides';

// Render theme colors to root scope
for (const [theme, colors] of Object.entries(themes)) {
  // Render theme colors under class and prefers scheme
  globalStyle(
    `.${themeClassName(theme as any)}`,
    {
      vars: assignVars(colorsContract, colors),
    },
  );

  const globalStyles: GlobalStyleRule = {};
  // If default theme, also render as default (if no prefers scheme present)
  if (theme === defaultTheme) {
    globalStyles.vars = assignVars(colorsContract, colors);
  }

  const prefersQuery = `(prefers-color-scheme: ${theme})`;
  globalStyle(':root', {
    ...globalStyles,
    '@media': {
      [prefersQuery]: {
        vars: assignVars(colorsContract, colors),
      },
    },
  });
}
