import { DefaultSeo } from 'next-seo';

import SEO from 'next-seo.config';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import type { AppProps } from 'next/app';
import 'styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default App;
