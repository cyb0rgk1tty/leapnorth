"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hoverLift } from "@/app/lib/animations/variants";
import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Animated card with hover lift effect
 * Usage: <AnimatedCard><card content></AnimatedCard>
 */
export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only check reduced motion after mount to avoid hydration mismatch
  const shouldReduceMotion = isMounted && prefersReducedMotion;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={hoverLift}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
