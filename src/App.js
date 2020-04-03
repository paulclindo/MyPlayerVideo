import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import data from "../api.json";
import { THEME } from "./theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/Error/ErrorFallback";

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Home data={data} />
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
