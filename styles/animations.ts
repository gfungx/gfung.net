export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const fadeToR = {
  initial: { opacity: 0, x: -40 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
