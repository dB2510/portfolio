import { createMuiTheme } from "@material-ui/core";

// import palette from './palette';
import typography from "./typography";
// import overrides from './overrides';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: "dark",
    background: {
      default: '#121212',
    }
  },
  typography: typography
});

export default theme;
