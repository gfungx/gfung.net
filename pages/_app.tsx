import { DefaultSeo } from 'next-seo';

import SEO from 'next-seo.config';
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import type { AppProps } from 'next/app';
import 'styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <Component {...pageProps} />
    </MotionConfig>
  </>
);

export default App;
