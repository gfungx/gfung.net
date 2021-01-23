import { FunctionalComponent } from 'preact';
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
    margin="max-w-xs sm:max-w-xl lg:max-w-5xl mt-40 sm:mt-64"
  >
    <m.h1 className="text-lg sm:text-3xl font-bold text-gray-800 pb-3" variants={fadeIn}>
      Hey, I'm
    </m.h1>
    <m.h1
      className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-primaryDark pb-2 mb-2 text-5xl sm:text-8xl"
      variants={fadeIn}
      key="init-hero"
    >
      Geoffrey
    </m.h1>
    <m.p className="landing-text" variants={fadeIn}>
      I'm a developer and student from Sydney, 🇦🇺. You've found my personal slice of the internet,
      where I hope to record my personal progress as a front-end developer ✌️
    </m.p>
    <m.p className="landing-text" variants={fadeIn}>
      🚧 This site is still under development 🚧
    </m.p>
  </Container>
);

export default Home;
