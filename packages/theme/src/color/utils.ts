import type { Themes } from '.';

export const themeClassName = <
  Variant extends Themes,
>(
  variant: Variant,
): `theme-variant-${Variant}` => (
  `theme-variant-${variant}`
);
