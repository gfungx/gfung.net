import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useRouter } from 'next/router';
import { m, AnimatePresence } from 'framer-motion';

import { fadeIn, fadeToR, fadeToRD } from 'styles/animations';

const LandingHeader: FunctionalComponent = () => {
  const router = useRouter();
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showName ? (
        <m.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <m.h1 className="landing-super" variants={fadeIn}>
            Hey, I'm
          </m.h1>
          <m.h1 className="landing-hero" variants={fadeIn}>
            Geoffrey
          </m.h1>
        </m.div>
      ) : (
        <div onClick={() => router.push('/about')} className="cursor-pointer">
          <m.h1 className="landing-super" variants={fadeToR}>
            Let's find out more
          </m.h1>
          <m.h1 className="landing-hero" variants={fadeToRD}>
            About me
          </m.h1>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LandingHeader;
