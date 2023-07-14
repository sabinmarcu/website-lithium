import type { ColorsContract } from '../contract';

const colors = {
  main: 'red',
  lighter: 'red',
  darker: 'red',
};

export const darkColors = {
  primary: colors,
  secondary: colors,
  text: {
    contrast: '#aaa',
    main: 'white',
  },
  background: {
    main: 'black',
    paper: '#888',
  },
} satisfies ColorsContract;
