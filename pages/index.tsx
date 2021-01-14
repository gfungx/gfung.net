import { FunctionalComponent } from 'preact';
import { m as motion } from 'framer-motion';

import { fadeIn } from 'styles/animations';
import Container from 'components/Container';

const Home: FunctionalComponent = () => (
  <Container>
    <motion.h1
      className="text-lg sm:text-3xl font-bold text-gray-800 pb-3"
      variants={fadeIn}
    >
      Hey, I'm
    </motion.h1>
    <motion.h1
      className="text-5xl sm:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryLight to-primaryDark pb-2 mb-2 mobile:mb-1"
      variants={fadeIn}
    >
      Geoffrey
    </motion.h1>
    <motion.p className="text-xs sm:text-lg text-gray-700" variants={fadeIn}>
      I'm a developer and student from Sydney, 🇦🇺. You've found my personal
      slice of the internet, where I hope to record my personal progress as a
      front-end developer ✌️. This site is still under development.
    </motion.p>
  </Container>
);

export default Home;
