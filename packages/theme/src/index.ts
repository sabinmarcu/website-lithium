import './layers';
import './reset';
import {
  colors,
} from './color';

export * from './layers';
export {
  colors,
  variants,
} from './color';

export const theme = { colors };
export type Theme = typeof theme;

export * from './components';
export * from './hooks';

export { runLazy as render } from './utils';
