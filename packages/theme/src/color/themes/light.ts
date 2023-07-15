import { generateTheme } from './generator';
import type { ColorsContract } from '../contract';
import { toHsl } from '../core/utils';

export const lightColors = generateTheme({
  primary: toHsl('hsl(210, 79%, 46%)'),
  secondary: toHsl('hsl(291, 64%, 42%)'),
  text: toHsl('hsl(0, 0%, 0%)'),
  background: toHsl('hsl(0, 0%, 90%)'),
}) satisfies ColorsContract;
