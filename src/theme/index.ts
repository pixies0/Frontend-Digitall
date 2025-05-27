import type { MantineColorsTuple } from '@mantine/core';
import { createTheme } from '@mantine/core';

const severanceGreen: MantineColorsTuple = [
  '#e0f2e5',
  '#b3dfc1',
  '#85cd9c',
  '#57ba78',
  '#2aa754',
  '#09832e', // base
  '#086f28',
  '#065c22',
  '#05491b',
  '#033714',
];

const severanceRed: MantineColorsTuple = [
  '#ffe5e5',
  '#ffb8b8',
  '#ff8a8a',
  '#ff5c5c',
  '#ff2e2e',
  '#ff0000', // base
  '#cc0000',
  '#990000',
  '#660000',
  '#330000',
];

export const theme = createTheme({
  colors: {
    severanceGreen,
    severanceRed,
  },
  primaryColor: 'severanceGreen',
  primaryShade: { light: 5, dark: 6 },

  fontFamily: 'Inter, sans-serif',

  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem' },
      h2: { fontSize: '2rem' },
      h3: { fontSize: '1.75rem' },
    },
  },

  components: {
    Button: {
      styles: (theme, params) => ({
        root: {
          borderRadius: 8,
        },
      }),
    },
  },
});
