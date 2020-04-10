import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

import { ThemeProvider } from "styled-components";

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
  </ThemeProvider>
);
