'use client';

import {
  useEffect,
  useMemo,
} from 'react';
import type { Variants } from '../color';
import { themePrefix } from '../color/utils';
import { useThemeVariantProvider } from './useThemeProvider';

export const useTheme = (
  element: string | HTMLElement,
  variant: Variants,
) => {
  const renderElement = useMemo(
    () => (typeof element === 'string'
      ? document.querySelector(element)
      : element),
    [element],
  );
  const theme = useThemeVariantProvider(variant);
  useEffect(
    () => {
      if (!renderElement) return undefined;
      const classList = [...renderElement.classList].filter((it) => it.startsWith(themePrefix));
      for (const className of classList) {
        renderElement.classList.remove(className);
      }
      if (theme) {
        renderElement.classList.add(theme);
      }
      return undefined;
    },
    [renderElement, theme],
  );
};
