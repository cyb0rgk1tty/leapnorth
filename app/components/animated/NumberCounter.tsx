"use client";

import { useCounter } from "@/app/lib/animations/hooks";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface NumberCounterProps {
  end: number;
  duration?: number;
  start?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/**
 * Animated number counter
 * Usage: <NumberCounter end={1000} suffix="+" />
 */
export function NumberCounter({
  end,
  duration = 2,
  start = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = ""
}: NumberCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  const count = useCounter(hasStarted ? end : start, { duration, start });

  const formattedCount = decimals > 0
    ? count.toFixed(decimals)
    : Math.round(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
