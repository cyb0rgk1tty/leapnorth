/**
 * Reusable Framer Motion Animation Variants
 * Import and use these in motion components throughout the site
 */

import { Variants } from "framer-motion";
import { ANIMATION_DURATION, EASING } from "./config";

// ============================================================================
// FADE ANIMATIONS
// ============================================================================

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: ANIMATION_DURATION.normal, ease: EASING.easeOut }
  },
  exit: {
    opacity: 0,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.slow, ease: EASING.easeOut }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.slow, ease: EASING.easeOut }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION_DURATION.slow, ease: EASING.easeOut }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION_DURATION.slow, ease: EASING.easeOut }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

// ============================================================================
// SCALE ANIMATIONS
// ============================================================================

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION_DURATION.normal, ease: EASING.easeOut }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

export const scaleUp: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: { duration: ANIMATION_DURATION.slow, ease: EASING.easeOut }
  },
  exit: {
    scale: 0,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

// ============================================================================
// SLIDE ANIMATIONS
// ============================================================================

export const slideInFromBottom: Variants = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION.slower, ease: EASING.easeOut }
  },
  exit: {
    y: 60,
    opacity: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
};

export const slideInFromTop: Variants = {
  initial: { y: -60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION.slower, ease: EASING.easeOut }
  },
  exit: {
    y: -60,
    opacity: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
};

export const slideInFromLeft: Variants = {
  initial: { x: -60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION.slower, ease: EASING.easeOut }
  },
  exit: {
    x: -60,
    opacity: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
};

export const slideInFromRight: Variants = {
  initial: { x: 60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION.slower, ease: EASING.easeOut }
  },
  exit: {
    x: 60,
    opacity: 0,
    transition: { duration: ANIMATION_DURATION.normal }
  }
};

// ============================================================================
// STAGGER ANIMATIONS
// ============================================================================

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION_DURATION.slow }
  }
};

// ============================================================================
// HOVER ANIMATIONS
// ============================================================================

export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: ANIMATION_DURATION.fast, ease: EASING.easeOut }
  }
};

export const hoverLift: Variants = {
  rest: { y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgb(14 165 233 / 0.2)",
    transition: { duration: ANIMATION_DURATION.normal, ease: EASING.easeOut }
  }
};

export const hoverGlow: Variants = {
  rest: { boxShadow: "0 0 0 0 rgb(14 165 233 / 0)" },
  hover: {
    boxShadow: "0 0 30px 0 rgb(14 165 233 / 0.5)",
    transition: { duration: ANIMATION_DURATION.normal }
  }
};

// ============================================================================
// PAGE TRANSITIONS
// ============================================================================

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.slow,
      ease: EASING.easeOut,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: ANIMATION_DURATION.normal }
  }
};

// ============================================================================
// MODAL/DRAWER ANIMATIONS
// ============================================================================

export const modalVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: ANIMATION_DURATION.fast }
  }
};

export const drawerVariants: Variants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut
    }
  },
  exit: {
    x: "100%",
    transition: { duration: ANIMATION_DURATION.normal }
  }
};

// ============================================================================
// SPECIAL EFFECTS
// ============================================================================

export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: ANIMATION_DURATION.slow, ease: EASING.easeOut }
  }
};

export const blur: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: ANIMATION_DURATION.slow }
  }
};
