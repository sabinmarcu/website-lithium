import { createGlobalThemeContract } from '@vanilla-extract/css';
import type { Simplify } from 'type-fest';

export type Primitive = string | boolean | number | null | undefined;
export type MapLeafNodesToTreePath<
  Input,
  Separator extends string = '-',
  Previous extends string = Separator,
> = {
  [Property in keyof Input]: Input[Property] extends Primitive
    ? `${Previous}${Separator}${Property & string}`
    : Input[Property] extends Record<string | number, any>
      ? MapLeafNodesToTreePath<
        Input[Property],
        Separator,
        `${Previous}${Separator}${Property & string}`
      >
      : never;
};

export type MapLeafNodes<
  Input,
  Value,
> = {
  [Property in keyof Input]: Input[Property] extends Primitive
    ? Value
    : Input[Property] extends Record<string | number, any>
      ? MapLeafNodes<Input[Property], Value>
      : never;
};

const colorContract = {
  main: null,
  lighter: null,
  darker: null,
};

export const rawColorsContract = {
  primary: colorContract,
  secondary: colorContract,
  text: {
    main: null,
    contrast: null,
  },
  background: {
    main: null,
    paper: null,
  },
};

export const colorsContract = createGlobalThemeContract(
  rawColorsContract,
  (_, path) => path.join('-'),
);

export type ColorsContract = Simplify<MapLeafNodes<typeof colorsContract, string>>;
export type Colors = Simplify<MapLeafNodesToTreePath<typeof colorsContract, '-'>>;
