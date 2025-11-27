# Leap North Frontend Style Guide

This document contains the complete design system and frontend guidelines for the Leap North website. **Frontend subagents should read this file** when making UI changes.

---

## Design System

### Dark Theme Configuration

**Primary Colors:**
- Background: `#0a0a0a` (deep black)
- Foreground: `#f5f5f5` (off-white)
- Primary Accent: `#DC143C` (crimson red - Canadian theme)
- Primary Hover: `#B01030` (dark crimson)
- Primary Light: `#E84A5F` (light crimson for accents/glow)
- Secondary: `#1a1a1a` (slightly lighter black)
- Border: `#2a2a2a`

**Theme Preset:** Zinc (from shadcn/ui themes)

**Complete CSS Variables:**
```css
--background: #0a0a0a;
--foreground: #f5f5f5;
--primary: #DC143C;           /* Crimson red */
--primary-foreground: #ffffff;
--secondary: #1a1a1a;
--accent: #2a2a2a;
--border: #2a2a2a;
--ring: #DC143C;              /* Focus rings */
```

---

### Typography System

- **Headings:** Inter Tight or Poppins (weights 600-900)
  - H1: 3.5-6rem (56-96px)
  - H2: 2.5-4rem (40-64px)
  - H3: 1.75-2.5rem (28-40px)
- **Body:** Inter or Helvetica (weights 400-600)
  - Base: 1rem (16px)
  - Large: 1.125rem (18px)
- **Code:** JetBrains Mono

---

## Animation System (Framer Motion)

### Core Variants
Located in `/lib/animations/variants.ts`:
- Fade: `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- Scale: `scaleIn`, `scaleUp`
- Slide: `slideInFromBottom/Top/Left/Right`
- Stagger: `staggerContainer`, `staggerItem`
- Hover: `hoverScale`, `hoverLift`, `hoverGlow`
- Transitions: `pageTransition`, `modalVariants`, `drawerVariants`

### Custom Hooks
Located in `/lib/animations/hooks.ts`:
- `useScrollReveal()` - Scroll-triggered reveals
- `useParallax()` - Parallax effects
- `useScrollProgress()` - Progress indicators
- `useCounter()` - Animated number counters (replaces CounterUp.js)

### Usage Pattern
```typescript
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/variants";

<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  {children}
</motion.div>
```

### Common Animation Patterns

**Scroll-triggered section reveal:**
```typescript
<AnimatedSection>
  <h2>Content here</h2>
</AnimatedSection>
```

**Staggered grid:**
```typescript
<motion.div variants={staggerContainer} initial="initial" whileInView="animate">
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      <AnimatedCard>{item}</AnimatedCard>
    </motion.div>
  ))}
</motion.div>
```

### Animation Best Practices
- Use `transform` and `opacity` only (GPU-accelerated)
- Implement `viewport={{ once: true }}` for scroll animations
- Stagger children with 100-150ms delays
- Always provide reduced motion alternative

---

## Custom Particle System

**Interactive Canvas Background** (Hero Section):
Located in `/app/components/home/algorithmic/`:
- `AlgorithmicBackground.tsx` - Main component orchestrator
- `ParticleSystem.ts` - Core physics engine with 40-100 particles
- `CursorInteraction.ts` - Mouse/touch tracking with velocity calculation
- `config.ts` - Device-specific configuration (desktop/tablet/mobile)
- `utils.ts` - Math utilities (distance, lerp, clamp, etc.)

**Features:**
- Crimson red particles with fluid repulsion physics
- Document-wide cursor tracking (works even over content)
- Velocity-based force (faster cursor = stronger push, 1-6x multiplier)
- Particle-to-particle connection lines that brighten near cursor
- Alpha boost for particles near cursor
- Adaptive quality based on device (100/60/40 particles)
- IntersectionObserver for pausing when off-screen
- Smooth friction (0.86) for long drift trails
- 60 FPS target with requestAnimationFrame
- Respects prefers-reduced-motion
- No pointer-events blocking (content remains interactive)

**Configuration (Optimized for Subtle Repulsion):**
```typescript
cursorRadius: 450px (desktop)
repulsionStrength: 0.65 (30% increase from default)
friction: 0.86 (allows longer particle drift)
forceExponent: 1.8 (smoother acceleration curve)
velocityMultiplier: 1-6x (responsive to cursor speed)
```

---

## Component Strategy

### shadcn/ui Components (58 core)
- **Must-Have (18):** button, card, form, input, textarea, select, label, badge, avatar, navigation-menu, sheet, separator, skeleton, spinner, sonner, dialog, tooltip
- **Should-Have (13):** carousel, chart, accordion, tabs, hover-card, popover, pagination, table, alert, progress, breadcrumb, collapsible, scroll-area
- **Nice-to-Have (15+):** sidebar, command, calendar, drawer, toggle, etc.

**Installation:**
```bash
npx shadcn@latest init  # Initialize with slate/zinc theme
npx shadcn@latest add button card carousel navigation-menu form input textarea select
```

### Animated Wrappers
Custom components in `/app/components/animated/` that wrap shadcn/ui with Framer Motion:
- `AnimatedSection` - Scroll-reveal sections
- `AnimatedCard` - Cards with hover lift effect
- `AnimatedButton` - Enhanced button interactions
- `NumberCounter` - Animated number counter with spring physics

---

## Image Generation Workflow

**Total Images Required:** 55 images (Priority 1: 11, Priority 2: 25, Priority 3: 19)

**Using fal AI MCP:**
```typescript
mcp__fal-ai__generate-image({
  model: "fal-ai/bytedance/seedream/v4/text-to-image",
  prompt: "your dark-theme-optimized prompt here",
  image_size: "landscape_16_9",  // or appropriate size
  num_images: 3,  // Generate variations
  guidance_scale: 3.5,
  enable_safety_checker: true
})
```

**Prompt Template (Crimson Red Theme):**
```
"[Subject] + minimalist composition + deep black background (#0a0a0a) + crimson red (#DC143C) accents + high contrast + cinematic lighting + professional quality + modern tech theme + sleek and futuristic --no bright lighting, white background, cluttered, text, warm colors"
```

**Image Categories:**
- Hero backgrounds (5-7): `landscape_16_9`
- Service illustrations (2-4): `square_hd` or `landscape_4_3`
- Case study images (3-5 per): `landscape_4_3`
- Blog featured images (5-10): `landscape_4_3`
- Icons/patterns (10-15): `square` or `landscape_16_9`

**Optimization:**
All images generated as PNG, then optimized with Next.js Image component (auto WebP conversion, responsive sizes)

---

## Design Inspiration

Study these sites for aesthetic reference:
- **ThatLot** (https://thatlot.co.uk/) - **PRIMARY DARK THEME INSPIRATION** - True black background (#0a0a0a), bold typography, premium aesthetic, sophisticated hover effects
- **LeftClick AI** (https://leftclick.ai/) - **LAYOUT & TYPOGRAPHY REFERENCE** - Professional B2B structure, service presentation, content hierarchy (NOTE: Uses light theme, NOT dark - reference for layout/structure only)
- **Bad Marketing** (https://www.badmarketing.com/) - **RESULTS & ANIMATION REFERENCE** - Number counters, metrics display, results-driven messaging, dark theme with red accents
- **KOTA** (https://kota.co.uk/) - Scroll animations, grid layouts (NOTE: Site requires WebGL - ensure our site degrades gracefully without it)

---

## Accessibility

- WCAG 2.1 AA compliance mandatory
- Respect reduced motion preferences:
  ```typescript
  import { useReducedMotion } from "framer-motion";
  const shouldReduceMotion = useReducedMotion();
  ```
- All shadcn/ui components are accessible by default (Radix UI)

---

**Last Updated:** 2025-11-26
