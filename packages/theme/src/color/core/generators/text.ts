import {
  parseToHsl,
} from 'polished';
import type {
  HSLColor,
  PaletteGenerator,
} from '..';
import {
  black,
  white,
} from '../constants';

export const generateTextPalette = {
  main: (color: HSLColor) => color,
  contrast: (color: HSLColor) => {
    const hsl = parseToHsl(color);
    const { lightness } = hsl;
    return lightness > 0.5 ? black : white;
  },
} satisfies PaletteGenerator;
