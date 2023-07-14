import {
  type RefObject,
  useEffect,
  useState,
} from 'react';
import { theme } from '@ws/theme';
import type { RendererProperties } from '../types';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';
import { makeRenderer } from '../renderer';

const wnd = typeof window === 'undefined' ? null : window;
export const useRenderer = (
  {
    every,
    variance,
    size,
    speed,
    tolerance,
    edge,
  }: RendererProperties,
  reference: RefObject<HTMLCanvasElement>,
) => {
  const renderOnce = usePrefersReducedMotion();
  const renderColor = theme.colors.primary.main;
  const [renderer, setRenderer] = useState<ReturnType<typeof makeRenderer>>();
  useEffect(
    () => {
      if (reference.current) {
        const newRenderer = makeRenderer(reference.current, {
          every,
          variance,
          size,
          speed,
          tolerance,
          edge,
        });
        setRenderer(newRenderer);
        if (renderOnce) {
          newRenderer.renderOnce();
          return undefined;
        }
        newRenderer.start();
        return newRenderer.stop;
      }
      return undefined;
    },
    [reference, renderOnce],
  );
  useEffect(
    () => {
      if (!renderer || !renderOnce) {
        return undefined;
      }
      const renderFunction = () => setTimeout(renderer.renderOnce, 500);
      wnd?.addEventListener('resize', renderFunction);
      return () => wnd?.removeEventListener('resize', renderFunction);
    },
    [renderer, renderOnce],
  );
  useEffect(
    () => {
      if (renderer) {
        renderer.update({
          every,
          variance,
          size,
          speed,
          tolerance,
          edge,
        });
      }
    },
    [
      renderer,
      every,
      variance,
      size,
      speed,
      tolerance,
      edge,
    ],
  );
};
