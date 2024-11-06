export const SlideIn = (delay) => {
  return {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
      },
    },
  };
};
export const overlayAnimation = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
export const SlideUp = (delay) => {
  return {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};
export const SlideDown = (delay) => {
  return {
    initial: {
      y: -50, // Start above the current position
      opacity: 0,
    },
    animate: {
      y: 0, // Move to the current position
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const SlideLeft = (delay) => {
  return {
    initial: {
      x: 400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};
export const SlideRight = (delay) => {
  return {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};