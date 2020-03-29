import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home';
import data from '../api.json';
import { THEME } from './theme';
import { GlobalStyle } from './theme/GlobalStyles';

const App = () => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    <Home data={data} />
  </ThemeProvider>
);

export default App;
