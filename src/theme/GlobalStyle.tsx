import type { Theme } from '@mui/system';
import { createGlobalStyle, ThemeProps } from 'styled-components';

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
  html,
  body,
  #root {
    height: 100%;
    font-size: 14px;
  }

  button, input, select {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export default GlobalStyle;
