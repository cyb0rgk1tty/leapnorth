/**
 * Animation Configuration Constants
 * Centralized animation timing and easing configuration
 */

// Animation durations in seconds
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2,
} as const;

// Easing functions
export const EASING = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  smooth: [0.25, 0.46, 0.45, 0.94],
} as const;

// Spring configurations
export const SPRING = {
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
  },
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 10,
  },
} as const;

// Stagger delays in seconds
export const STAGGER_DELAY = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

// Viewport settings for scroll animations
export const VIEWPORT = {
  once: true,
  amount: 0.3, // 30% of element must be visible
  margin: "0px 0px -100px 0px", // Trigger slightly before element enters viewport
} as const;
