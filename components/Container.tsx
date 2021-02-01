import type { FunctionalComponent } from 'preact';

import { NextSeo } from 'next-seo';
import { m, Variants } from 'framer-motion';

import Navbar from 'components/Navbar';
import { fadeIn } from 'styles/animations';

type ContainerProps = {
  SEO: {
    title: string;
    description: string;
    url: string;
  };
  styles?: string;
  margin?: string;
  variants?: Variants;
};

const Container: FunctionalComponent<ContainerProps> = ({
  children,
  SEO: { title, description, url },
  styles = '',
  margin = 'max-w-xs sm:max-w-md lg:max-w-2xl mt-8 sm:mt-16',
  variants = fadeIn
}) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        title,
        description,
        url
      }}
    />
    <Navbar />
    <m.div
      className={`flex flex-col justify-center items-start mx-auto mb-16 ${styles} ${margin}`}
      initial="initial"
      animate="animate"
    >
      <m.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} variants={variants}>
        {children}
      </m.div>
    </m.div>
  </>
);

export default Container;
