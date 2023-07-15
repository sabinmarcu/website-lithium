import {
  lighten,
} from 'polished';
import type {
  HSLColor,
  PaletteGenerator,
} from '..';
import { toHsl } from '../utils';
import { generateTextPalette } from './text';

export const generateMainPalette = {
  ...generateTextPalette,
  lighter: (color: HSLColor) => toHsl(lighten(0.045, color)),
  darker: (color: HSLColor) => toHsl(lighten(-0.068, color)),
} satisfies PaletteGenerator;
