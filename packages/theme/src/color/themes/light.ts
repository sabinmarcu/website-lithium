import type { ColorsContract } from '../contract';

const colors = {
  main: 'red',
  lighter: 'red',
  darker: 'red',
};

export const lightColors = {
  primary: colors,
  secondary: colors,
  text: {
    main: 'black',
    contrast: '#ccc',
  },
  background: {
    main: 'white',
    paper: '#aaa',
  },
} satisfies ColorsContract;
