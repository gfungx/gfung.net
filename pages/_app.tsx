import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import 'styles/globals.css';
import SEO from 'next-seo.config';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <Component {...pageProps} />
    </MotionConfig>
  </>
);

export default App;
