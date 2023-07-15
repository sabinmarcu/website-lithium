import { style as originalStyle } from '@vanilla-extract/css';
import { framework } from '../layers/layers.css';

type OriginalParameters = Parameters<typeof originalStyle>;
export const style = (
  rules: OriginalParameters[0],
  debugId?: OriginalParameters[1],
) => originalStyle({
  '@layer': {
    [framework]: rules as any,
  },
}, debugId);
