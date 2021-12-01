import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import { Provider } from 'next-auth/client';
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import 'styles/globals.css';
import SEO from 'next-seo.config';

const App = ({ Component, pageProps }: AppProps) => (
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

export default App;
