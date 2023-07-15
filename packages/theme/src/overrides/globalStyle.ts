import { globalStyle as originalGlobalStyle } from '@vanilla-extract/css';
import { layers } from '../layers';

export type OriginalParameters = Parameters<typeof originalGlobalStyle>;
export const globalStyle = (
  selector: OriginalParameters[0],
  rule: OriginalParameters[1],
) => originalGlobalStyle(selector, {
  '@layer': {
    [layers.app]: rule,
  },
});

export const resetGlobalStyle = (
  selector: OriginalParameters[0],
  rule: OriginalParameters[1],
) => originalGlobalStyle(selector, {
  '@layer': {
    [layers.reset]: rule,
  },
});

export const frameworkGlobalStyle = (
  selector: OriginalParameters[0],
  rule: OriginalParameters[1],
) => originalGlobalStyle(selector, {
  '@layer': {
    [layers.framework]: rule,
  },
});
