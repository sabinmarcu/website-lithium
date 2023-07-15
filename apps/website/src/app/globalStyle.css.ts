import { globalStyle } from '@vanilla-extract/css';
import {
  theme,
} from '@ws/theme';

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  background: theme.colors.background.main,
  color: theme.colors.text.main,
  padding: '0 16px',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
});

globalStyle('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100%',
  maxWidth: '720px',
  margin: '0 auto',
  overflow: 'hidden',
});
