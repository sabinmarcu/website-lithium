import {
  themes,
  type Themes,
} from './types';

export const themePrefix = 'theme-variant'

export const themeClassName = <
  Variant extends Themes,
>(
  variant: Variant,
): `${typeof themePrefix}-${Variant}` => (
  `${themePrefix}-${variant}`
);

export const isTheme = (input: any): input is Themes => (
  themes.includes(input)
);
