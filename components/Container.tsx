import { FunctionalComponent } from 'preact';
import { m as motion } from 'framer-motion';

import { stagger } from 'styles/animations';

const Container: FunctionalComponent = ({ children }) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <motion.div
      className="flex flex-col justify-center items-start max-w-xs sm:max-w-xl lg:max-w-5xl mx-auto mb-16 mt-64"
      variants={stagger}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default Container;
