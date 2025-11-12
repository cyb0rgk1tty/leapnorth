"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hoverLift } from "@/app/lib/animations/variants";
import { ReactNode } from "react";
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
  const shouldReduceMotion = useReducedMotion();

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
