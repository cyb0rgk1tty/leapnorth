"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useScrollReveal } from "@/app/lib/animations/hooks";
import { fadeInUp } from "@/app/lib/animations/variants";
import { ReactNode, CSSProperties, useState, useEffect } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  style?: CSSProperties;
}

/**
 * Animated section wrapper with scroll-triggered reveal
 * Usage: <AnimatedSection><content></AnimatedSection>
 */
export function AnimatedSection({ children, className = "", delay = 0, id, style }: AnimatedSectionProps) {
  const { ref, isInView } = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only check reduced motion after mount to avoid hydration mismatch
  const shouldReduceMotion = isMounted && prefersReducedMotion;

  if (shouldReduceMotion) {
    return <section ref={ref} className={className} id={id} style={style}>{children}</section>;
  }

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </motion.section>
  );
}
