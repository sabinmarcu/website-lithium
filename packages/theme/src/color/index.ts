import { lazy } from '../utils';

export * from './types';
export { colorsContract as colors } from './contract';

// @ts-ignore
lazy(() => import('./render.css'));
