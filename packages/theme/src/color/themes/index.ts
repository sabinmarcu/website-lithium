import type {
  ThemeMapping,
  Themes,
} from '../types';
import { darkColors } from './dark';
import { lightColors } from './light';

export const themes = {
  dark: darkColors,
  light: lightColors,
} satisfies ThemeMapping;

export const defaultTheme = 'dark' as const satisfies Themes;
