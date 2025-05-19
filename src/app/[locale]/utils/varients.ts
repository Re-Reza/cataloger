import type { Variants } from "motion/react";

export const factoryVarient: Variants = {
  hidden: {
    opacity: 0,
    // scale: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    // scale: 1,
    x: 0,
    transition: {
      type: "spring",
      ease: [0, 0.71, 0.2, 1.01],
      // bounce: 0.4,
      duration: 1.3,
    },
  },
};

export const logoVarient: Variants = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0, 0.71, 0.2, 1.01],
      type: "spring",
      // bounce: 0.4,
      duration: 1.3,
    },
  },
};

export const HorizontalSlideAppear: (
  initialX: number | string,
  duration: number,
  delay: number
) => Variants = (initialX, duration, delay) => {
  return {
    hidden: {
      opacity: 0,
      x: initialX,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        type: "spring",
        // bounce: 0.4,
        duration: duration,
        delay: delay,
      },
    },
  };
};

export const topicVarient: Variants = {
  hidden: {
    opacity: 0,
    // y: 100,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      type: "spring",
      // bounce: 0.4,
      duration: 3,
    },
  },
};

export const circleAnimate: Variants = {
  // circlate: {
  //   rotate: 360,
  //   transition: { duration: 2, repeat: 2, ease: "linear" },
  // },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      // bounce: 0.4,
      duration: 1.3,
    },
  },
};

export const borderMotion: Variants = {
  hidden: {
    // borderWidth: 0,
    borderColor: "rgba(0,0,0,.001)",
  },
  visible: {
    // borderWidth: "2px",
    borderColor: "var(--lightBlue)",
    transition: {
      type: "spring",
      // bounce: 0.4,
      duration: 3,
    },
  },
};

export const bottomTotop: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      // bounce: 0.4,
      duration: 1.5,
    },
  },
};

export const opacityAppear: (
  delay: number,
  duration: number | string
) => Variants = (delay, duration) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration,
      },
    },
  };
};
