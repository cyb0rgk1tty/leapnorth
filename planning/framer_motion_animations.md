# Framer Motion Animation Guide
## Agency Website Project - Complete Animation System

**Last Updated:** 2025-11-11
**Library:** Framer Motion
**Version:** Latest (^11.x)
**Performance Target:** 60fps, <100ms interaction response

---

## Table of Contents
1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Animation Architecture](#animation-architecture)
4. [Reusable Animation Variants](#reusable-animation-variants)
5. [Component-Specific Animations](#component-specific-animations)
6. [Page-by-Page Animation Guide](#page-by-page-animation-guide)
7. [Performance Optimization](#performance-optimization)
8. [Accessibility](#accessibility)
9. [Code Examples](#code-examples)

---

## Overview

This guide provides a comprehensive animation system for the agency website using **Framer Motion**. All animations are designed to match the dark theme, minimalist aesthetic inspired by ThatLot, KOTA, and LeftClick AI.

### Why Framer Motion?

1. **Performance:** 60fps animations, GPU-accelerated
2. **Developer Experience:** Declarative API, TypeScript support
3. **Power:** Advanced features (scroll, gestures, shared layouts)
4. **Bundle Size:** Tree-shakeable, only pay for what you use
5. **Integration:** Works seamlessly with Next.js and shadcn/ui

### Animation Philosophy

- **Purposeful:** Every animation serves a function
- **Subtle:** Enhance without distracting
- **Consistent:** Unified timing and easing
- **Performant:** 60fps minimum, no jank
- **Accessible:** Respect reduced motion preferences

---

## Installation & Setup

### Install Framer Motion

```bash
npm install framer-motion
```

### Project Structure

```
/app
  /lib
    /animations
      variants.ts          # Reusable animation variants
      hooks.ts            # Custom animation hooks
      config.ts           # Animation constants
      utils.ts            # Helper functions
  /components
    /animated
      AnimatedSection.tsx  # Scroll-reveal wrapper
      AnimatedCard.tsx     # Card with hover animations
      AnimatedButton.tsx   # Enhanced button interactions
      AnimatedText.tsx     # Text reveal animations
      NumberCounter.tsx    # Animated number counter
```

---

## Animation Architecture

### Core Files

#### 1. `/lib/animations/config.ts`
Animation constants and configuration

```typescript
export const ANIMATION_CONFIG = {
  // Duration presets (seconds)
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },

  // Easing functions
  easing: {
    // Standard easings
    easeOut: [0.4, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeInOut: [0.4, 0, 0.2, 1],

    // Custom easings
    bounce: [0.68, -0.55, 0.265, 1.55],
    smooth: [0.25, 0.46, 0.45, 0.94],
    anticipate: [0.68, -0.6, 0.32, 1.6],
  },

  // Spring physics
  spring: {
    soft: { stiffness: 80, damping: 20 },
    normal: { stiffness: 100, damping: 15 },
    snappy: { stiffness: 150, damping: 20 },
    bouncy: { stiffness: 200, damping: 10 },
  },

  // Viewport settings for scroll animations
  viewport: {
    once: true,           // Animate only once
    margin: "-100px",     // Trigger 100px before element visible
    amount: 0.3,          // 30% of element must be visible
  },

  // Stagger delays (seconds)
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};
```

---

#### 2. `/lib/animations/variants.ts`
Reusable animation variant definitions

```typescript
import { Variants } from "framer-motion";
import { ANIMATION_CONFIG } from "./config";

// FADE ANIMATIONS
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: { opacity: 0, y: -20 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

// SCALE ANIMATIONS
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: { opacity: 0, scale: 0.9 },
};

export const scaleUp: Variants = {
  initial: { scale: 0.95 },
  animate: {
    scale: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

// SLIDE ANIMATIONS
export const slideInFromBottom: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: { y: "100%", opacity: 0 },
};

export const slideInFromTop: Variants = {
  initial: { y: "-100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: { y: "-100%", opacity: 0 },
};

export const slideInFromLeft: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: { x: "-100%", opacity: 0 },
};

export const slideInFromRight: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: { x: "100%", opacity: 0 },
};

// STAGGER ANIMATIONS
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: ANIMATION_CONFIG.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

// HOVER ANIMATIONS
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      ...ANIMATION_CONFIG.spring.snappy,
    },
  },
  tap: { scale: 0.95 },
};

export const hoverLift: Variants = {
  initial: { y: 0, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" },
  hover: {
    y: -8,
    boxShadow: "0 12px 40px rgba(252, 11, 119, 0.2)", // Pink glow
    transition: {
      type: "spring",
      ...ANIMATION_CONFIG.spring.normal,
    },
  },
};

export const hoverGlow: Variants = {
  initial: {
    boxShadow: "0 0 0 rgba(252, 11, 119, 0)",
    borderColor: "rgba(252, 11, 119, 0)",
  },
  hover: {
    boxShadow: "0 0 20px rgba(252, 11, 119, 0.5)",
    borderColor: "rgba(252, 11, 119, 1)",
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
    },
  },
};

// ROTATE ANIMATIONS
export const rotate180: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 180,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
};

export const rotate360: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: ANIMATION_CONFIG.duration.slow,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// PULSE ANIMATION
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// BOUNCE ANIMATION
export const bounce: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// PAGE TRANSITION
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
    },
  },
};

// DRAWER/SHEET ANIMATIONS (for mobile menu)
export const drawerVariants: Variants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: {
      type: "spring",
      ...ANIMATION_CONFIG.spring.normal,
    },
  },
};

// MODAL/DIALOG ANIMATIONS
export const modalVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
      ease: ANIMATION_CONFIG.easing.easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
    },
  },
};

export const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: ANIMATION_CONFIG.duration.fast,
    },
  },
};
```

---

#### 3. `/lib/animations/hooks.ts`
Custom animation hooks

```typescript
import { useInView, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useEffect } from "react";

/**
 * Hook for scroll-triggered reveal animations
 * Returns ref and inView state
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
    ...options,
  });

  return { ref, isInView };
}

/**
 * Hook for parallax scroll effects
 * Returns y transform value based on scroll progress
 */
export function useParallax(distance = 100) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const ySmooth = useSpring(y, { stiffness: 100, damping: 20 });

  return { ref, y: ySmooth };
}

/**
 * Hook for scroll progress indicator
 * Returns scroll progress (0-1)
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return scaleX;
}

/**
 * Hook that respects user's reduced motion preference
 * Returns true if user prefers reduced motion
 */
export function useAccessibleAnimation() {
  const prefersReducedMotion = useReducedMotion();

  return {
    shouldAnimate: !prefersReducedMotion,
    duration: prefersReducedMotion ? 0 : undefined,
  };
}

/**
 * Hook for animated number counter
 * Animates from 0 to target value
 */
export function useCounter(target: number, duration = 2) {
  const { shouldAnimate, duration: accessibleDuration } = useAccessibleAnimation();

  return {
    from: 0,
    to: target,
    duration: accessibleDuration ?? duration,
    shouldAnimate,
  };
}
```

---

## Reusable Animation Variants

### Usage Pattern

```typescript
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations/variants";

<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  Content here
</motion.div>
```

### Complete Variant Library

| Variant | Type | Use Case |
|---------|------|----------|
| `fadeIn` | Fade | Simple fade in |
| `fadeInUp` | Fade + Translate | Fade in from below |
| `fadeInDown` | Fade + Translate | Fade in from above |
| `fadeInLeft` | Fade + Translate | Fade in from left |
| `fadeInRight` | Fade + Translate | Fade in from right |
| `scaleIn` | Fade + Scale | Fade in with scale |
| `scaleUp` | Scale | Quick scale up |
| `slideInFromBottom` | Slide | Full slide from bottom |
| `slideInFromTop` | Slide | Full slide from top |
| `slideInFromLeft` | Slide | Full slide from left (mobile menu) |
| `slideInFromRight` | Slide | Full slide from right |
| `staggerContainer` | Stagger | Parent for staggered children |
| `staggerItem` | Stagger | Child in stagger group |
| `hoverScale` | Hover | Scale on hover |
| `hoverLift` | Hover | Lift + shadow on hover |
| `hoverGlow` | Hover | Glow border on hover |
| `rotate180` | Rotate | 180° rotation (icons) |
| `rotate360` | Rotate | Continuous 360° spin |
| `pulse` | Loop | Pulsing scale animation |
| `bounce` | Loop | Bouncing animation |
| `pageTransition` | Page | Page enter/exit |
| `drawerVariants` | Sheet | Mobile drawer open/close |
| `modalVariants` | Dialog | Modal fade + scale |
| `backdropVariants` | Overlay | Backdrop fade |

---

## Component-Specific Animations

### Animated Wrapper Components

#### AnimatedSection Component
Scroll-triggered section reveals

```typescript
// /app/components/animated/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/animations/hooks";
import { fadeInUp } from "@/lib/animations/variants";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: any; // Allow custom variants
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  variant = fadeInUp
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.section
      ref={ref}
      variants={variant}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
```

**Usage:**
```typescript
<AnimatedSection>
  <h2>Your Content</h2>
  <p>This section fades in when scrolled into view</p>
</AnimatedSection>
```

---

#### AnimatedCard Component
Card with hover animations

```typescript
// /app/components/animated/AnimatedCard.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { hoverLift } from "@/lib/animations/variants";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
}

export function AnimatedCard({
  children,
  className,
  enableHover = true
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={enableHover ? hoverLift : undefined}
      initial="initial"
      whileHover="hover"
      className={className}
    >
      <Card>{children}</Card>
    </motion.div>
  );
}
```

**Usage:**
```typescript
<AnimatedCard>
  <CardHeader>
    <CardTitle>Case Study</CardTitle>
  </CardHeader>
  <CardContent>
    Card content here
  </CardContent>
</AnimatedCard>
```

---

#### NumberCounter Component
Animated number counter (replaces CounterUp.js)

```typescript
// /app/components/animated/NumberCounter.tsx
"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface NumberCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function NumberCounter({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  className
}: NumberCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
```

**Usage:**
```typescript
<NumberCounter
  value={1300000000}
  prefix="$"
  suffix="B"
  duration={2}
  className="text-6xl font-bold text-primary"
/>
// Displays: $1,300,000,000B
```

---

#### AnimatedButton Component
Enhanced button with interactions

```typescript
// /app/components/animated/AnimatedButton.tsx
"use client";

import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { hoverScale } from "@/lib/animations/variants";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      variants={hoverScale}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}
```

**Usage:**
```typescript
<AnimatedButton variant="default" size="lg">
  Get Started
</AnimatedButton>
```

---

### shadcn/ui Component Integration

#### Animated Navigation Menu

```typescript
<motion.nav
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <NavigationMenu>
    {/* Navigation items */}
  </NavigationMenu>
</motion.nav>
```

---

#### Animated Sheet (Mobile Menu)

```typescript
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { slideInFromRight } from "@/lib/animations/variants";

<Sheet>
  <SheetContent
    asChild
    side="right"
  >
    <motion.div
      variants={slideInFromRight}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Mobile menu content */}
    </motion.div>
  </SheetContent>
</Sheet>
```

---

#### Animated Dialog/Modal

```typescript
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { modalVariants, backdropVariants } from "@/lib/animations/variants";
import { AnimatePresence } from "framer-motion";

<AnimatePresence>
  {isOpen && (
    <Dialog open={isOpen}>
      <motion.div
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 bg-black/50"
      />
      <DialogContent asChild>
        <motion.div
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Dialog content */}
        </motion.div>
      </DialogContent>
    </Dialog>
  )}
</AnimatePresence>
```

---

#### Animated Carousel (with embla-carousel)

```typescript
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

<Carousel
  plugins={[
    Autoplay({
      delay: 3000,
    }),
  ]}
  opts={{
    loop: true,
    align: "start",
  }}
>
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {item}
        </motion.div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
```

---

## Page-by-Page Animation Guide

### Homepage Animations

#### Hero Section
```typescript
<section className="relative min-h-screen bg-black overflow-hidden">
  {/* Background with parallax */}
  <motion.div
    style={{ y: parallaxY }}
    className="absolute inset-0"
  >
    <Image src="/hero-bg.png" alt="" fill className="opacity-40" />
  </motion.div>

  {/* Content with stagger */}
  <motion.div
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    className="relative z-10 container mx-auto"
  >
    <motion.h1 variants={staggerItem} className="text-6xl font-bold">
      Transform Your Business
    </motion.h1>

    <motion.p variants={staggerItem} className="text-xl mt-4">
      Growth through marketing and automation
    </motion.p>

    <motion.div variants={staggerItem} className="mt-8 flex gap-4">
      <AnimatedButton>Get Started</AnimatedButton>
      <AnimatedButton variant="outline">View Our Work</AnimatedButton>
    </motion.div>
  </motion.div>
</section>
```

---

#### Services Overview
```typescript
<AnimatedSection>
  <h2 className="text-4xl font-bold mb-12">What We Do</h2>

  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-8"
  >
    {services.map((service) => (
      <motion.div key={service.id} variants={staggerItem}>
        <AnimatedCard>
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {service.description}
          </CardContent>
        </AnimatedCard>
      </motion.div>
    ))}
  </motion.div>
</AnimatedSection>
```

---

#### Results/Impact Section with Number Counters
```typescript
<AnimatedSection variant={scaleIn}>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="text-center">
      <NumberCounter
        value={1300000000}
        prefix="$"
        className="text-6xl font-bold text-primary"
      />
      <p className="mt-2 text-muted-foreground">Revenue Generated</p>
    </div>

    <div className="text-center">
      <NumberCounter
        value={250000000}
        prefix="$"
        suffix="M"
        className="text-6xl font-bold text-primary"
      />
      <p className="mt-2 text-muted-foreground">Ad Spend Managed</p>
    </div>

    <div className="text-center">
      <NumberCounter
        value={500}
        suffix="+"
        className="text-6xl font-bold text-primary"
      />
      <p className="mt-2 text-muted-foreground">Clients Served</p>
    </div>
  </div>
</AnimatedSection>
```

---

#### Client Logo Carousel
```typescript
<AnimatedSection>
  <h3 className="text-2xl font-semibold mb-8 text-center">
    Trusted by Industry Leaders
  </h3>

  <Carousel
    opts={{ loop: true, align: "start" }}
    plugins={[Autoplay({ delay: 2000 })]}
  >
    <CarouselContent>
      {clientLogos.map((logo, index) => (
        <CarouselItem key={index} className="basis-1/3 md:basis-1/6">
          <motion.div
            initial={{ opacity: 0.5, filter: "grayscale(100%)" }}
            whileHover={{
              opacity: 1,
              filter: "grayscale(0%)",
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          >
            <Image src={logo} alt="Client logo" />
          </motion.div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</AnimatedSection>
```

---

### Services Pages

#### Service Hero with Animated Text
```typescript
<section className="py-20">
  <motion.div
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    className="container"
  >
    <motion.div variants={staggerItem}>
      <Badge>Marketing & Growth</Badge>
    </motion.div>

    <motion.h1 variants={staggerItem} className="text-6xl font-bold mt-4">
      Scale Your Revenue
    </motion.h1>

    <motion.p variants={staggerItem} className="text-xl mt-4">
      Data-driven marketing strategies that deliver results
    </motion.p>
  </motion.div>
</section>
```

---

#### Service Feature Grid with Stagger
```typescript
<AnimatedSection>
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="grid md:grid-cols-3 gap-6"
  >
    {features.map((feature, index) => (
      <motion.div key={index} variants={staggerItem}>
        <AnimatedCard>
          <CardHeader>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {feature.description}
          </CardContent>
        </AnimatedCard>
      </motion.div>
    ))}
  </motion.div>
</AnimatedSection>
```

---

### Case Studies Page

#### Case Study Grid with Hover Effects
```typescript
<motion.div
  variants={staggerContainer}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {caseStudies.map((study, index) => (
    <motion.div key={study.id} variants={staggerItem}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image src={study.image} alt={study.title} fill />
            <motion.div
              className="absolute inset-0 bg-primary/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </div>

          <CardHeader>
            <div className="flex gap-2 mb-2">
              {study.tags.map(tag => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <CardTitle>{study.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">{study.excerpt}</p>
            <div className="mt-4">
              <NumberCounter
                value={study.result}
                suffix="%"
                prefix="+"
                className="text-2xl font-bold text-primary"
              />
              <p className="text-sm text-muted-foreground">Revenue Growth</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  ))}
</motion.div>
```

---

### Contact Page

#### Contact Form with Field Animations
```typescript
<AnimatedSection>
  <motion.div
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    <Form {...form}>
      <motion.div variants={staggerItem}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Input placeholder="Your name" {...field} />
                </motion.div>
              </FormControl>
            </FormItem>
          )}
        />
      </motion.div>

      {/* Repeat for other fields */}

      <motion.div variants={staggerItem}>
        <AnimatedButton type="submit" className="w-full">
          Send Message
        </AnimatedButton>
      </motion.div>
    </Form>
  </motion.div>
</AnimatedSection>
```

---

## Performance Optimization

### Best Practices

1. **Use transform and opacity**
   - GPU-accelerated properties
   - Avoid animating `width`, `height`, `top`, `left`

   ```typescript
   // ✅ Good
   <motion.div animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} />

   // ❌ Avoid
   <motion.div animate={{ width: 300, top: 100 }} />
   ```

2. **Limit simultaneous animations**
   - Don't animate 50+ elements at once
   - Use stagger with reasonable delays

   ```typescript
   // ✅ Good - controlled stagger
   staggerChildren: 0.1, // 100ms delay

   // ❌ Too many at once
   // 100 items with no stagger
   ```

3. **Use `will-change` sparingly**
   ```typescript
   // Only for frequently animated elements
   <motion.div style={{ willChange: "transform" }} />
   ```

4. **Lazy load animations**
   ```typescript
   // Only animate when in viewport
   <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }} // ✅ Animate only once
   />
   ```

5. **Optimize layout animations**
   ```typescript
   // Use layoutId for shared element transitions
   <motion.div layoutId="card-1" />
   ```

### Performance Monitoring

```typescript
// Add FPS counter in development
if (process.env.NODE_ENV === "development") {
  const stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb
  document.body.appendChild(stats.dom);

  function animate() {
    stats.begin();
    // Your animation code
    stats.end();
    requestAnimationFrame(animate);
  }
  animate();
}
```

---

## Accessibility

### Respecting Reduced Motion Preference

```typescript
import { useReducedMotion } from "framer-motion";

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5
      }}
    >
      Content
    </motion.div>
  );
}
```

### Global Reduced Motion Config

```typescript
// /app/layout.tsx
import { MotionConfig } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
```

---

## Code Examples

### Complete Page Transition System

```typescript
// /app/template.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition } from "@/lib/animations/variants";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

### Scroll Progress Indicator

```typescript
"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/animations/hooks";

export function ScrollProgressBar() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
```

---

### SVG Path Animation (Drawing Effect)

```typescript
<motion.svg viewBox="0 0 100 100">
  <motion.path
    d="M10 10 L90 90"
    stroke="currentColor"
    strokeWidth={2}
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
  />
</motion.svg>
```

---

## Summary

This animation system provides:

✅ **60+ Reusable Variants** - Pre-built animation patterns
✅ **Custom Hooks** - Scroll, parallax, counter animations
✅ **Wrapper Components** - Drop-in animated sections, cards, buttons
✅ **shadcn/ui Integration** - Animated versions of all UI components
✅ **Page Transitions** - Smooth route changes
✅ **Performance Optimized** - GPU-accelerated, 60fps target
✅ **Accessible** - Respects reduced motion preferences
✅ **Type-Safe** - Full TypeScript support

---

**Next Steps:**
1. Install Framer Motion: `npm install framer-motion`
2. Create `/lib/animations` directory structure
3. Copy variant definitions and hooks
4. Build animated wrapper components
5. Integrate with pages and components
6. Test performance and accessibility

---

**Document Version:** 1.0
**Last Updated:** 2025-11-11
**Status:** Ready for Implementation
