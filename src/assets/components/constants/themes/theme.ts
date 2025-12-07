import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { typography } from "../typography";
import { 
  deepNavy, navyCard, goldMain, goldBright, 
  textPrimary, textSecondary, 
  headerBg, cardBg, goldBorderTransparent, goldHoverBg,
  goldShadowHover, cardShadow 
} from './colors';


let theme = createTheme({
  typography,
  palette: {
    mode: 'dark', 
    primary: {
      main: goldMain, 
      contrastText: '#000000', 
    },
    secondary: {
      main: navyCard,
    },
    background: {
      default: deepNavy,
      paper: navyCard, 
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
   
    divider: goldBorderTransparent,
  },

  components: {

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: headerBg, // 0.95 opacity navy
          backdropFilter: 'blur(8px)', // Adds a nice glass effect
          boxShadow: 'none',
          borderBottom: `1px solid ${goldBorderTransparent}`,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: cardBg, // 0.6 opacity navy
          backdropFilter: 'blur(4px)',
          border: `1px solid ${goldBorderTransparent}`,
          boxShadow: cardShadow,
          borderRadius: '12px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: goldShadowHover, // Gold glow on hover
            borderColor: goldMain,
          },
        },
      },
    },
  
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: goldMain,
          color: deepNavy,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: goldBright,
            boxShadow: goldShadowHover,
          },
        },
        outlinedPrimary: {
          borderColor: goldMain,
          color: goldMain,
          '&:hover': {
            backgroundColor: goldHoverBg,
            borderColor: goldBright,
          },
        },
      },
    },
   
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "80px",
        },
      },
    },
  
  },
});

theme = responsiveFontSizes(theme);

export default theme;