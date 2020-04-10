import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

import { ThemeProvider } from "styled-components";
import AppRouter from "./Router";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <AppRouter isLoggedIn={false} />
    </>
  </ThemeProvider>
);
