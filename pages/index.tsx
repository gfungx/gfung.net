import { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { useRouter } from 'next/router';
import { m, AnimatePresence } from 'framer-motion';

import Container from 'components/Container';
import { fadeIn, fadeToR } from 'styles/animations';

const pages: {
  name: string;
  emoji: string;
  path: string;
}[] = [
  { name: 'About me', emoji: '✨', path: '/about' },
  { name: 'Projects', emoji: '👨‍💻', path: '/projects' },
  { name: 'Photos', emoji: '📷', path: '/photos' }
];

const Home: FunctionalComponent = () => {
  const router = useRouter();
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        {showName ? (
          <m.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            variants={fadeIn}
          >
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
              I'm a developer and student from Sydney, 🇦🇺. You've found my
              personal slice of the internet, where I hope to record my personal
              progress as a front-end developer ✌️.
            </m.p>
            <m.p className="landing-text" variants={fadeIn} key="init-text-2">
              🚧 This site is still under development 🚧
            </m.p>
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            variants={fadeToR}
          >
            <m.h1
              className="landing-super"
              variants={fadeToR}
              key="final-super"
            >
              Let's go on a journey together
            </m.h1>
            {pages.map(page => (
              <m.h1
                onClick={() => router.push(page.path)}
                variants={fadeToR}
                key={page.name}
                className="my-4 sm:my-6 cursor-pointer"
              >
                <m.span className="landing-hero-final">{page.name}</m.span>{' '}
                <m.span className="text-3xl sm:text-5xl ml-2 pb-4">
                  {page.emoji}
                </m.span>
              </m.h1>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Home;
