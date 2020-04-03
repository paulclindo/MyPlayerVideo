import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Da+2:400,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

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
