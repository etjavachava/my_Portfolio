import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { typography } from "./typography";

let theme = createTheme({
  typography,

  palette:{
  
    primary:{
      main:'#9D4EDD'
    },

  },
   components: {
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