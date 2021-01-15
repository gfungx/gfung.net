import { FunctionalComponent } from 'preact';
import { m } from 'framer-motion';

const Container: FunctionalComponent = ({ children }) => (
  <m.div
    className="flex flex-col justify-center items-start max-w-xs sm:max-w-xl lg:max-w-5xl mx-auto mb-16 mt-40 sm:mt-64"
    initial="initial"
    animate="animate"
  >
    {children}
  </m.div>
);

export default Container;
