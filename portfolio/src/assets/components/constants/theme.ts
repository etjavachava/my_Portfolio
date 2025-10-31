import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { typography } from "./typography";
import { Palette } from "@mui/icons-material";
let theme = createTheme({
  typography,

  palette:{
  
    primary:{
      main:'#9D4EDD'
    },

  }
});

theme = responsiveFontSizes(theme);

export default theme;