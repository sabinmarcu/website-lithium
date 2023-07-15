import { applyPalette } from '../generate';
import { toHsl } from '../utils';
import { generateTextPalette } from './text';

describe('generateTextPalette', () => {
  describe('shape', () => {
    const properties = Object.entries(generateTextPalette);
    it.each(properties)('- %s should be a function', (_, generator) => {
      expect(generator).toBeInstanceOf(Function);
    });
    it.each(properties)('- %s should have one parameter', (_, generator) => {
      expect(generator.length).toBe(1);
    });
  });
  describe('color tests', () => {
    const testCases = [
      [toHsl('#0cf'), {
        contrast: 'hsl(0, 0%, 100%, 1)',
        main: 'hsl(192, 100%, 50%, 1)',
      }],
      [toHsl('hsl(192, 100%, 50%, 1)'), {
        contrast: 'hsl(0, 0%, 100%, 1)',
        main: 'hsl(192, 100%, 50%, 1)',
      }],
    ] as const;
    it.each(testCases)('- %s', (input, output) => {
      expect(applyPalette(generateTextPalette, input)).toEqual(output);
    });
  });
});
