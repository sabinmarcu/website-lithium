import { lighten } from 'polished';
import type {
  HSLColor,
  PaletteGenerator,
} from '..';
import { toHsl } from '../utils';

export const generateBackgroundPalette = {
  main: (color: HSLColor) => color,
  paper: (color: HSLColor) => toHsl(lighten(0.15, color)),
} satisfies PaletteGenerator;
