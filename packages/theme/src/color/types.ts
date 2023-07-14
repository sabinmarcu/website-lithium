import type { ColorsContract } from './contract';

export const themes = ['light', 'dark'] as const;
export const variants = ['system', ...themes] as const;

export type Themes = typeof themes[number];
export type Variants = typeof variants[number];
export type ThemeMapping = Record<Themes, ColorsContract>;
