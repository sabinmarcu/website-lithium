import type { ColorsContract } from '../contract';

export const darkColors = {
  primary: {
    main: '#41a7fc',
    darker: '#4471A0',
    lighter: '#DAF3FF',
  },
  secondary: {
    main: '#F37BA6',
    lighter: '#FFE3F2',
    darker: '#B74572'
  },
  text: {
    contrast: '#3D4756',
    main: '#F1FAFF',
  },
  background: {
    main: '#3D4756',
    paper: '#A1ACBD',
  },
} satisfies ColorsContract;
