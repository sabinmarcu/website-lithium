import type {
  HSLColor,
  PaletteGenerator,
  ThemeGenerator,
} from '.';
import {
  getPaletteGeneratorContract,
  getThemeGeneratorContract,
  toHsl,
} from './utils';

describe('toHsl', () => {
  const testCases = [
    ['#000', 'hsl(0, 0%, 0%, 1)'],
    ['#fff', 'hsl(0, 0%, 100%, 1)'],
    ['rgba(0, 50, 100, 0.5)', 'hsl(210, 100%, 19.607843137254903%, 0.5)'],
    ['#0cf8', 'hsl(192, 100%, 50%, 0.53)'],
    ['hsl(192, 100%, 50%, 0.53%)', 'hsl(192, 100%, 50%, 0.53)'],
    ['hsl(192, 100%, 50%, 100%)', 'hsl(192, 100%, 50%, 1)'],
  ];

  it.each(testCases)('- %s = %s', (input, expected) => {
    expect(toHsl(input)).toBe(expected);
  });
});

const simplePaletteGenerator = {
  main: (input: HSLColor) => input,
};
const simplePaletteContract = {
  main: null,
};
const complexPaletteGenerator = {
  main: (input: HSLColor) => input,
  lighter: (input: HSLColor) => input,
  darker: (input: HSLColor) => input,
};
const complexPaletteContract = {
  main: null,
  lighter: null,
  darker: null,
};
describe('getPaletteGeneratorContract', () => {
  const testCases = [
    {
      name: 'simple',
      input: simplePaletteGenerator,
      output: simplePaletteContract,
    },
    {
      name: 'complex',
      input: complexPaletteGenerator,
      output: complexPaletteContract,
    },
  ] satisfies { name: string, input: PaletteGenerator, output: Record<string, null> }[];
  it.each(testCases)('$name', ({ input, output }) => {
    expect(getPaletteGeneratorContract(input as any)).toEqual(output);
  });
});

describe('getThemeGeneratorContract', () => {
  const testCases = [
    {
      name: 'simple',
      input: {
        primary: simplePaletteGenerator,
      },
      output: {
        primary: simplePaletteContract,
      },
    },
    {
      name: 'complex',
      input: {
        primary: simplePaletteGenerator,
        secondary: complexPaletteGenerator,
      },
      output: {
        primary: simplePaletteContract,
        secondary: complexPaletteContract,
      },
    },
  ] satisfies { name: string, input: ThemeGenerator, output: Record<string, any> }[];
  it.each(testCases)('$name', ({ input, output }) => {
    expect(getThemeGeneratorContract(input as any)).toEqual(output);
  });
});
