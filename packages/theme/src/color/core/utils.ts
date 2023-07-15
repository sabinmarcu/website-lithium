import { parseToHsl } from 'polished';
import type { HslaColor } from 'polished/lib/types/color';
import type {
  HSLColor,
  PaletteGenerator,
  ContractOfPaletteGenerator,
  ThemeGenerator,
  ContractOfThemeGenerator,
} from './types';

export const toHsl = (color: string): HSLColor => {
  const {
    hue,
    saturation,
    lightness,
    alpha,
  } = parseToHsl(color) as HslaColor;
  return `hsl(${hue}, ${Number.parseInt(`${saturation * 100}`, 10)}%, ${Number.parseInt(`${lightness * 100}`, 10)}%, ${alpha === undefined ? 1 : alpha})`;
};

export const getPaletteGeneratorContract = <
  Generator extends PaletteGenerator,
>(
  generator: Generator,
): ContractOfPaletteGenerator<Generator> => (
  Object.fromEntries(
    Object.keys(generator)
      .map((key) => [key, null]),
  ) as any
);

export const getThemeGeneratorContract = <
  Generator extends ThemeGenerator,
>(
  generator: Generator,
): ContractOfThemeGenerator<Generator> => (
  Object.fromEntries(
    Object.entries(generator)
      .map(([key, value]) => [key, getPaletteGeneratorContract(value)]),
  ) as any
);
