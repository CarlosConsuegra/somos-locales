import { createGlobalStyle } from 'styled-components';
import { colors, typography } from './tokens';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${colors.background.light};
    color: ${colors.textSecondary};
    line-height: ${typography.body.lineHeight};
    font-size: ${typography.body.fontSize};
    font-weight: ${typography.body.fontWeight};
  }

  h1 {
    font-size: ${typography.heading1.fontSize};
    font-weight: ${typography.heading1.fontWeight};
    line-height: ${typography.heading1.lineHeight};
    margin-bottom: 16px;
  }

  h2 {
    font-size: ${typography.heading2.fontSize};
    font-weight: ${typography.heading2.fontWeight};
    line-height: ${typography.heading2.lineHeight};
    margin-bottom: 12px;
  }

  h3 {
    font-size: ${typography.heading3.fontSize};
    font-weight: ${typography.heading3.fontWeight};
    line-height: ${typography.heading3.lineHeight};
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }

  button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;

