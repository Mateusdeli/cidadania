import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Open Sans" sans-serif;
  }

  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button {
    outline: 0;
  }
`;

export default GlobalStyle