import { generateTheme } from './generator';
import type { ColorsContract } from '../contract';
import { toHsl } from '../core/utils';

export const darkColors = generateTheme({
  primary: toHsl('hsl(207, 90%, 77%)'),
  secondary: toHsl('hsl(291, 47%, 71%)'),
  text: toHsl('hsl(0, 0%, 80%)'),
  background: toHsl('hsl(0, 0%, 20%)'),
}) satisfies ColorsContract;
