import type {
  HSLColor,
  ThemeGenerator,
} from '.';
import { makeGenerator } from './generate';
import { toHsl } from './utils';

describe('makeGenerator', () => {
  it('should be a function', () => {
    expect(makeGenerator).toBeInstanceOf(Function);
  });
  it('should have one parameter', () => {
    expect(makeGenerator.length).toBe(1);
  });
  describe('instance', () => {
    const generator = {
      primary: {
        main: (color: HSLColor) => color,
        contrast: () => toHsl('#000'),
      },
    } satisfies ThemeGenerator;
    let instance: any;
    beforeAll(() => {
      instance = makeGenerator(generator);
    });
    it('should be a function', () => {
      expect(instance).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(instance.length).toBe(1);
    });
    it('should generate a proper output', () => {
      expect(instance({ primary: toHsl('#0cf') })).toEqual({
        primary: {
          main: 'hsl(192, 100%, 50%, 1)',
          contrast: 'hsl(0, 0%, 0%, 1)',
        },
      });
    });
  });
});
