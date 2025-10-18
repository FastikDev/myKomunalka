import type { FC, ReactNode } from 'react';
import type { Theme } from '@mui/material';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@emotion/react';
import { CacheProvider, EmotionCache } from '@emotion/react';

import GlobalStyle from './GlobalStyle';

type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
  emotionCache: EmotionCache;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme, emotionCache }) => {
  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={theme}>
        <StyledComponentProvider theme={theme}>
          <GlobalStyle />
          {children}
        </StyledComponentProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
