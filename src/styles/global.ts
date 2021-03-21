import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background: #121214;
    color: #fff;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
`;
