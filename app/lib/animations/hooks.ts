/**
 * Custom Framer Motion Hooks
 * Reusable hooks for common animation patterns
 */

import { useEffect, useState, useRef } from "react";
import { useInView, useScroll, useTransform, useSpring, useReducedMotion, MotionValue } from "framer-motion";

// ============================================================================
// SCROLL REVEAL HOOK
// ============================================================================

/**
 * Hook for scroll-triggered reveals
 * Returns ref and inView state
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    ...options
  });

  return { ref, isInView };
}

// ============================================================================
// PARALLAX HOOK
// ============================================================================

/**
 * Hook for parallax scroll effects
 * @param offset - How much to offset (e.g., 100 for 100px parallax)
 */
export function useParallax(offset: number = 100) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return y;
}

// ============================================================================
// SCROLL PROGRESS HOOK
// ============================================================================

/**
 * Hook for scroll progress indicator
 * Returns progress from 0 to 1
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return scaleX;
}

// ============================================================================
// COUNTER ANIMATION HOOK
// ============================================================================

/**
 * Hook for animated number counters
 * @param end - Target number
 * @param duration - Animation duration in seconds (default: 2)
 * @param start - Starting number (default: 0)
 */
export function useCounter(end: number, options: { duration?: number; start?: number } = {}) {
  const { duration = 2, start = 0 } = options;
  const [count, setCount] = useState(start);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(end);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(start + (end - start) * easeOut);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start, shouldReduceMotion]);

  return count;
}

// ============================================================================
// MOUSE POSITION HOOK
// ============================================================================

/**
 * Hook for tracking mouse position
 * Useful for cursor-following effects
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}

// ============================================================================
// SCROLL DIRECTION HOOK
// ============================================================================

/**
 * Hook for detecting scroll direction
 * Returns 'up' or 'down'
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (scrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [lastScrollY]);

  return scrollDirection;
}

// ============================================================================
// VIEWPORT SIZE HOOK
// ============================================================================

/**
 * Hook for responsive viewport size
 */
export function useViewportSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
