import type { FunctionalComponent } from 'preact';
import Link from 'next/link';

import Toggle from 'components/Navbar/Toggle';

const Navbar: FunctionalComponent = () => (
  <nav className="nav flex justify-between sticky bg-gray-50 dark:bg-gray-900 bg-opacity-60 top-0 pt-8 pb-8 px-8 sm:px-12 z-10">
    <Toggle />
    <div className="mt-2">
      <Link href="/projects">
        <a className="text-md sm:text-lg font-bold dark:text-gray-200 p-1 sm:p-4">Projects</a>
      </Link>
      <p className="inline-block text-md sm:text-lg text-gray-300 mx-1 sm:mx-0">/</p>
      <Link href="/guestbook">
        <a className="font-bold text-md sm:text-lg dark:text-gray-200 p-1 sm:p-4">Guestbook</a>
      </Link>
      <p className="inline-block text-md sm:text-lg text-gray-300 mx-1 sm:mx-0">/</p>
      <Link href="/">
        <a className="font-bold text-md sm:text-lg dark:text-gray-200 p-1 sm:p-4">Home</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
