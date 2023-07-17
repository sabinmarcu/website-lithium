import {
  reset,
  framework,
  app,
} from './layers.css';

export const layers = {
  reset,
  framework,
  app,
} as const;

export const layersOrder = [
  reset,
  framework,
  app,
] as const;
