import type { FunctionalComponent } from 'preact';

import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar: FunctionalComponent = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="nav flex justify-between sticky bg-gray-50 dark:bg-gray-900 bg-opacity-60 top-0 pt-8 pb-8 px-8 sm:px-12 z-10">
      <button
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
        aria-label="Toggle Light/Dark Mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="h-4 w-4 text-gray-800 dark:text-gray-200"
        >
          {resolvedTheme === 'dark' ? (
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
      <div className="mt-2 text-right sm:text-left">
        <Link href="/">
          <a className="text-md sm:text-lg font-bold dark:text-gray-200 p-1 sm:p-4">Home</a>
        </Link>
        <p className="inline-block text-md sm:text-lg text-gray-300 mx-1 sm:mx-0">/</p>
        <Link href="/projects">
          <a className="text-md sm:text-lg font-bold dark:text-gray-200 p-1 sm:p-4">Projects</a>
        </Link>
        <div className="block sm:inline-block">
          <p className="sm:inline-block text-md sm:text-lg text-gray-300 mx-1 sm:mx-0 hidden sm:visible">
            /
          </p>
          <Link href="/guestbook">
            <a className="font-bold text-md sm:text-lg dark:text-gray-200 p-1 sm:p-4">Guestbook</a>
          </Link>
          <p className="inline-block text-md sm:text-lg text-gray-300 mx-1 sm:mx-0">/</p>
          <Link href="/contact">
            <a className="font-bold text-md sm:text-lg dark:text-gray-200 p-1 sm:p-4">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
