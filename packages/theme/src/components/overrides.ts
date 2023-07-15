import { style as originalStyle } from '@vanilla-extract/css';
import { layers } from '../layers';

type OriginalParameters = Parameters<typeof originalStyle>;
export const style = (
  rules: OriginalParameters[0],
  debugId?: OriginalParameters[1],
) => originalStyle({
  '@layer': {
    [layers.framework]: rules as any,
  },
}, debugId);
