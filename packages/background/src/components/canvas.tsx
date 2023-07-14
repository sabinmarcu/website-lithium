import { forwardRef } from 'react';
import type {
  HTMLProps,
  PropsWithChildren,
} from 'react';
import {
  canvasStyles,
  canvasWrapperStyles,
} from './canvas.css';

export const Canvas = forwardRef<HTMLCanvasElement, HTMLProps<HTMLCanvasElement>>(
  (properties, reference) => <canvas className={canvasStyles} ref={reference} {...properties} />,
);
export const CanvasWrapper = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLProps<HTMLDivElement>>
>(
  ({ children, ...properties }, reference) => (
    <div className={canvasWrapperStyles} ref={reference} {...properties}>{children}</div>
  ),
);
