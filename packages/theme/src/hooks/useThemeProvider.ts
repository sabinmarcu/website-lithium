import {
  type Themes,
  type Variants,
} from '../color';
import {
  isTheme,
  themeClassName,
} from '../color/utils';

export const useThemeProvider = (theme: Themes) => themeClassName(theme);
export const useThemeVariantProvider = (variant: Variants) => (
  isTheme(variant) ? themeClassName(variant) : ''
);
