import type { Simplify } from 'type-fest';
import type {
  PaletteGenerator,
  ContractOfPaletteGenerator,
  ThemeGenerator,
  ContractOfThemeGenerator,
  InputOfThemeGenerator,
} from './types';

const generatorTest = {
  main: (color) => color,
  contrast: (color) => color,
} satisfies PaletteGenerator;

type GeneratorTestContract = ContractOfPaletteGenerator<typeof generatorTest>;
//    ^? type GeneratorTestContract = {
//           main: null;
//           contrast: null;
//       }

type GeneratorTestContractString = ContractOfPaletteGenerator<typeof generatorTest, string>;
//    ^? type GeneratorTestContractString = {
//           main: string;
//           contrast: string;
//       }

const themeTest = {
  primary: generatorTest,
  secondary: generatorTest,
} satisfies ThemeGenerator;

type ThemeTestContract = Simplify<ContractOfThemeGenerator<typeof themeTest>>;
//     ^? type ThemeTestContract = {
//            primary: ContractOfPaletteGenerator<{
//                main: (color: HSLColor) => HSLColor;
//                contrast: (color: HSLColor) => HSLColor;
//            }, null>;
//            secondary: ContractOfPaletteGenerator<...>;
//        }

type ThemeTestContractPrimary = Simplify<ThemeTestContract['primary']>;
//      ^? type ThemeTestContractPrimary = {
//             main: null;
//             contrast: null;
//         }
//

type ThemeTestContractString = Simplify<ContractOfThemeGenerator<typeof themeTest, string>>;
//     ^? type ThemeTestContractString = {
//            primary: ContractOfPaletteGenerator<{
//                main: (color: HSLColor) => HSLColor;
//                contrast: (color: HSLColor) => HSLColor;
//            }, string>;
//            secondary: ContractOfPaletteGenerator<...>;
//        }

type ThemeTestSontractStringPrimary = Simplify<ThemeTestContractString['primary']>;
//      ^? type ThemeTestSontractStringPrimary = {
//             main: string;
//             contrast: string;
//         }

type InputOfThemeGeneratorTest = InputOfThemeGenerator<typeof themeTest>;
//      ^? type InputOfThemeGeneratorTest = {
//             primary: HSLColor;
//             secondary: HSLColor;
//         }
