import type { FunctionalComponent } from 'preact';
import Link from 'next/link';
import { m } from 'framer-motion';

import Container from 'components/Container';
import { fadeIn } from 'styles/animations';

const title = 'Home';
const description =
  'Front-end developer specialising in Javascript, student and professional procrasinator.';
const url = 'https://gfung.net';

const Home: FunctionalComponent = () => (
  <Container
    SEO={{ title, description, url }}
    margin="max-w-xs sm:max-w-xl lg:max-w-5xl mt-28 sm:mt-52"
  >
    <m.h1
      className="text-lg sm:text-3xl font-bold text-gray-800 dark:text-gray-200 pb-3"
      variants={fadeIn}
    >
      👋 Hey, I'm
    </m.h1>
    <m.h1
      className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-primaryDark pb-2 mb-2 text-5xl sm:text-8xl"
      variants={fadeIn}
    >
      Geoffrey
    </m.h1>
    <m.p className="text-sm sm:text-xl text-gray-700 dark:text-gray-200 mt-4" variants={fadeIn}>
      Welcome! I'm a student and developer from Sydney, 🇦🇺 and this is the small slice of the
      internet that I call my own. I'm still deciding what to put on here, but in the meantime, come
      and sign my{' '}
      <Link href="/guestbook">
        <span className="underline cursor-pointer">guestbook</span>
      </Link>
      . ✨
    </m.p>
  </Container>
);

export default Home;
