import type { AppProps } from 'next/app';
import { useEffect } from 'preact/hooks';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'next-auth/client';
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

import { pageview } from 'lib/gtag';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import 'styles/globals.css';
import SEO from 'next-seo.config';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <MotionConfig features={[AnimationFeature, ExitFeature]}>
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </MotionConfig>
      </ThemeProvider>
    </>
  );
};

export default App;
