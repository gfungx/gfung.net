import { FunctionalComponent } from 'preact';
import { m } from 'framer-motion';

import Container from 'components/Container';
import { fadeIn } from 'styles/animations';

const Home: FunctionalComponent = () => (
  <Container>
    <m.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} variants={fadeIn}>
      <m.h1 className="landing-super" variants={fadeIn} key="init-super">
        Hey, I'm
      </m.h1>
      <m.h1
        className="landing-hero text-5xl sm:text-8xl"
        variants={fadeIn}
        key="init-hero"
      >
        Geoffrey
      </m.h1>
      <m.p className="landing-text" variants={fadeIn} key="init-text-1">
        I'm a developer and student from Sydney, 🇦🇺. You've found my personal
        slice of the internet, where I hope to record my personal progress as a
        front-end developer ✌️.
      </m.p>
      <m.p className="landing-text" variants={fadeIn} key="init-text-2">
        🚧 This site is still under development 🚧
      </m.p>
    </m.div>
  </Container>
);

export default Home;
