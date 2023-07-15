import type {
  ContractOfThemeGenerator,
  HSLColor,
  InputOfThemeGenerator,
  PaletteGenerator,
  ThemeGenerator,
} from '.';

export const applyPalette = <
  Generator extends PaletteGenerator,
>(paletteGenerator: Generator, input: HSLColor) => Object.fromEntries(
  Object.entries(paletteGenerator)
    .map(([colorKey, colorGenerator]) => [colorKey, colorGenerator(input)]),
);

export const makeGenerator = <
  Generator extends ThemeGenerator,
>(
  generator: Generator,
) => (
  input: InputOfThemeGenerator<Generator, HSLColor>,
): ContractOfThemeGenerator<Generator, string> => (
  Object.fromEntries(
    Object.entries(generator)
      .map(([key, paletteGenerator]) => [
        key,
        applyPalette(paletteGenerator, input[key]),
      ]),
  ) as any
);
