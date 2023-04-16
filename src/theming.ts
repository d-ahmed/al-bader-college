import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
      fontFamily: 'Urbanist, sans-serif',
    },
    palette: {
      primary: {
        main: '#a2064b',
        contrastText: '#fff',
      },
      secondary: {
        main: '#c34f6a',
        contrastText: '#fff',
      },
      neutral: {
        main: '#ffffff',
        contrastText: '#000000',
      }
    },
  });
  
  declare module '@mui/material/styles' {
  
    interface Palette {
      neutral: Palette['primary'];
    }
  
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  }