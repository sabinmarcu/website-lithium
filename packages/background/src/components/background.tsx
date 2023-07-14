'use client';

import {
  useRef,
} from 'react';
import {
  Canvas,
  CanvasWrapper,
} from './canvas';
import type { RendererProperties } from '../types';
import { useRenderer } from '../hooks/useRenderer';

export function Background({
  every = 125,
  variance = 50,
  size = 4,
  speed = 1,
  tolerance = 50,
  edge = false,
}: Partial<RendererProperties>) {
  const reference = useRef<HTMLCanvasElement>(null);
  useRenderer({
    every,
    variance,
    size,
    speed,
    tolerance,
    edge,
  }, reference);
  return (
    <CanvasWrapper>
      <Canvas ref={reference} />
    </CanvasWrapper>
  );
}
