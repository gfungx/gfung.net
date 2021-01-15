import { FunctionalComponent } from 'preact';
import { m } from 'framer-motion';

import Container from 'components/Container';
import LandingHeader from 'components/LandingHeader';
import { fadeIn } from 'styles/animations';

const Home: FunctionalComponent = () => (
  <Container>
    <LandingHeader />
    <m.p className="landing-text" variants={fadeIn}>
      I'm a developer and student from Sydney, 🇦🇺. You've found my personal
      slice of the internet, where I hope to record my personal progress as a
      front-end developer ✌️.
    </m.p>
    <m.p className="landing-text" variants={fadeIn}>
      🚧 This site is still under development 🚧
    </m.p>
  </Container>
);

export default Home;
