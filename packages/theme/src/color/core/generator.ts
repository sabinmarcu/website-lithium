import type { ThemeGenerator } from './types';
import { generateBackgroundPalette } from './generators/background';
import { generateMainPalette } from './generators/main';
import { generateTextPalette } from './generators/text';

export const themeGenerator = {
  primary: generateMainPalette,
  secondary: generateMainPalette,
  text: generateTextPalette,
  background: generateBackgroundPalette,
} satisfies ThemeGenerator;
