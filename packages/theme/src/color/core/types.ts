export type HSLAColor = `hsl(${number}, ${number}%, ${number}%, ${number})`;
export type HSLBaseColor = `hsl(${number}, ${number}%, ${number}%)`;
export type HSLColor = HSLAColor | HSLBaseColor;

export type ColorGenerator = (input: HSLColor) => HSLColor;

export type PaletteGenerator = Record<string, ColorGenerator>;
export type ContractOfPaletteGenerator<
  Generator extends PaletteGenerator,
  Leaf extends any = null,
> = { [Key in keyof Generator]: Leaf };

export type ThemeGenerator = Record<string, PaletteGenerator>;
export type ContractOfThemeGenerator<
  Generator extends ThemeGenerator,
  Leaf extends any = null,
> = { [Key in keyof Generator]: ContractOfPaletteGenerator<Generator[Key], Leaf> };

export type InputOfThemeGenerator<
  Generator extends ThemeGenerator,
  Leaf = HSLColor,
> = { [Key in keyof Generator]: Leaf };
