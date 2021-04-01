import { createMuiTheme, colors } from "@material-ui/core";

import typography from "./typography";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7a007d",
    },
    secondary: {
      main: "#7a007d",
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
  },
  typography,
});

export default theme;
