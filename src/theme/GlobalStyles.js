import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts[0]};
  }

  *, *:after, *:before{
    box-sizing: inherit;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    width: 100%; 
  }

  a {
      outline:none;
  }

  #app {
    overflow-x: hidden;
  }

`;
