import Head from 'next/head';
import { EmotionCache } from '@emotion/react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'src/firebase/servises/auth';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from 'src/Redux';
import createEmotionCache from '@theme/createEmotionCache';
import ThemeProvider from '@theme/ThemeProvider';
import theme from '@theme';
import type { AppProps } from 'next/app';

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const clientEmotionCache = createEmotionCache();

const MyApp: React.FC<MyAppProps> = props => {
  const { Component, emotionCache = clientEmotionCache, pageProps } = props;
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      const publicPath = ['/auth', '/register'];
      if (!user && !publicPath.includes(router.pathname)) {
        router.replace('/auth');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <Head>
        <title>MyKomunalka</title>
        <meta name="description" content="Komunalka" />
      </Head>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={theme} emotionCache={emotionCache}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </LocalizationProvider>
      </Provider>
    </>
  );
};

export default MyApp;
