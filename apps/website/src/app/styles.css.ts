import { style } from '@ws/theme'
import { theme } from '@ws/theme'

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  position: 'relative',
  bottom: '0',
  left: '0',
  width: '100%',
  textAlign: 'center',
  padding: '48px',
  boxSizing: 'border-box',
  fontSize: '16px',
  '@media': {
    '(min-width: 0px) and (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    },
  },
})

export const details = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  fontSize: 'inherit',
  color: theme.colors.primary.main,
  margin: 'auto',
})

export const link = style({
  height: 'fit-content',
  color: 'inherit',
  textDecorationThickness: '1px',
  textUnderlineOffset: '3px',
})

export const git = style({
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: 'flex-end',
  color: theme.colors.text.main,
})
