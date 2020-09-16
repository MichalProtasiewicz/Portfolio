import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    line-height: 1.3;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

export default GlobalStyle;
