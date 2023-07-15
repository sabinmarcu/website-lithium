import { createGlobalThemeContract } from '@vanilla-extract/css';
import type { Simplify } from 'type-fest';
import { getThemeGeneratorContract } from './core/utils';
import { themeGenerator } from './core/generator';
import type { ContractOfThemeGenerator } from './core';

export type Primitive = string | boolean | number | null | undefined;

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

export const colorsContract = createGlobalThemeContract(
  getThemeGeneratorContract(themeGenerator),
  (_, path) => ['palette', ...path].join('-'),
);

export type ColorsContract = Simplify<MapLeafNodes<typeof colorsContract, string>>;
export type Colors = Simplify<ContractOfThemeGenerator<typeof themeGenerator, string>>;
