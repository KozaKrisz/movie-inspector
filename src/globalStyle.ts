import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  body {
    margin: 0;
    background-color: #000000;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }
`;

export { GlobalStyle };
