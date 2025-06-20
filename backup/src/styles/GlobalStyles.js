import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --somos-locales: #FFD600;
    --black: #262623;
    --white: #FFFFFF;
    --sec: #ec4899;
    --gray: #a8a29e;
    --input-border: #d5d7da;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--white);
    color: var(--black);
    line-height: 1.5;
    font-size: 16px;
    font-weight: normal;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none;
  }
`;

export default GlobalStyles;
