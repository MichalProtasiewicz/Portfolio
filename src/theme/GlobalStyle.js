import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-track {
    background-color: #6d6d6d;
    -webkit-border-radius: 7px;
    border-radius: 7px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 7px;
    border-radius: 7px;
    background: #0679c1;
}

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
