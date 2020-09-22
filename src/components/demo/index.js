import React, { Component } from "react";

import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import RegistrationScreen from "./components/registration";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffe664",
      light: "#fcf6d6"
    },
    secondary: {
      main: "#343754"
    },
    error: {
      main: "#dd0000"
    }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 16
      }
    }
  }
});

class Demo extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <RegistrationScreen />
      </MuiThemeProvider>
    );
  }
}

export default Demo;
