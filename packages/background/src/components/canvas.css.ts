import {
  globalStyle,
  style,
} from '@vanilla-extract/css';
import { theme } from '@ws/theme';

export const canvasWrapperStyles = style({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vw',
  zIndex: 0,
  transition: 'all 300ms linear',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    '(print)': {
      display: 'none',
    },
  },
  background: theme.colors.background.main,
  color: theme.colors.text.main,
  opacity: 0.3,
  filter: 'blur(7px)',
});

export const canvasStyles = style({
  width: '100vw',
  height: '100vh',
  color: theme.colors.text.main,
});

globalStyle(`${canvasWrapperStyles} ~ *`, {
  position: 'relative',
});
