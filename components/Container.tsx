import type { FunctionalComponent } from 'preact';
import { NextSeo } from 'next-seo';
import { m, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';

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
  margin = 'max-w-xs sm:max-w-md lg:max-w-2xl mt-24 sm:mt-40',
  variants = fadeIn
}) => {
  const { theme, setTheme } = useTheme();

  return (
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
      <m.div
        className={`flex flex-col justify-center items-start mx-auto mb-16 ${styles} ${margin}`}
        initial="initial"
        animate="animate"
      >
        <m.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} variants={variants}>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="bg-gray-200 dark:bg-gray-800 rounded absolute top-8 left-8 sm:top-12 sm:left-12 p-3 h-10 w-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>
          {children}
        </m.div>
      </m.div>
    </>
  );
};

export default Container;
