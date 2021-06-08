import { createMuiTheme, colors } from "@material-ui/core";

import typography from "./typography";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#65007c",
    },
    secondary: {
      main: "#65007c",
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
