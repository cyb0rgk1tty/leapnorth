# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Leap North Agency Website** - A high-performance marketing agency website built with Next.js 14+, focusing on exceptional UX, fast loading times (<2s), and modern dark theme aesthetics inspired by ThatLot, KOTA, and LeftClick AI.

**Agency Name:** Leap North
**Tagline:** "True North. True Growth."
**Status:** Planning Phase Complete - Ready to Build
**Target:** 95+ Lighthouse score, sub-2-second load times, WCAG 2.1 AA accessibility

---

## Tech Stack

### Core Technologies
- **Framework:** Next.js 14+ with App Router (TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui + CSS Modules
- **Animations:** Framer Motion (60fps target, GPU-accelerated)
- **Content:** MDX for blog (with potential Sanity CMS later)
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4

### Key Dependencies
- **UI Components:** shadcn/ui (Radix UI primitives)
  - 58 core components available
  - Copy/paste integration (not npm package)
  - Dark theme optimized
- **Animations:** Framer Motion
  - 60+ reusable variants (see `/lib/animations/variants.ts`)
  - Custom hooks for scroll, parallax, counters
- **Forms:** React Hook Form + Zod validation
- **Carousel:** embla-carousel-react
- **Charts:** recharts (for metrics visualization)
- **Notifications:** sonner (toast notifications)

### Image Generation
- **Tool:** fal AI MCP with model `fal-ai/bytedance/seedream/v4/text-to-image`
- **Purpose:** Generate all website images (55 total planned)
- **Strategy:** Dark theme optimized prompts, minimalist aesthetic
- **Video:** Use placeholders with play button overlays

---

## Project Structure (When Built)

```
/var/www/agency/
├── app/                          # Next.js 14 App Router
│   ├── (routes)/                 # Route groups
│   │   ├── page.tsx              # Homepage
│   │   ├── services/             # Services pages
│   │   ├── case-studies/         # Portfolio
│   │   ├── about/                # About page
│   │   ├── blog/                 # Blog with MDX
│   │   └── contact/              # Contact form
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   └── animated/             # Framer Motion wrappers
│   │       ├── AnimatedSection.tsx
│   │       ├── AnimatedCard.tsx
│   │       ├── AnimatedButton.tsx
│   │       └── NumberCounter.tsx
│   ├── lib/                      # Utilities
│   │   ├── animations/           # Animation system
│   │   │   ├── config.ts         # Animation constants
│   │   │   ├── variants.ts       # 60+ reusable variants
│   │   │   └── hooks.ts          # Custom hooks
│   │   └── utils.ts              # General utilities
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles + dark theme
├── public/                       # Static assets
│   └── images/                   # AI-generated images
│       ├── hero/
│       ├── services/
│       ├── case-studies/
│       └── blog/
├── content/                      # MDX blog posts
└── planning/                     # Project documentation (current)
    ├── initial_prd.md            # Complete requirements
    ├── shadcn_components.md      # Component selection
    ├── framer_motion_animations.md  # Animation guide
    └── image_generation_guide.md    # AI image prompts
```

---

## Architecture & Design System

### Dark Theme Configuration
**Primary Colors:**
- Background: `#0a0a0a` (deep black)
- Foreground: `#f5f5f5` (off-white)
- Primary Accent: `#0EA5E9` (electric blue - LeftClick AI inspired)
- Primary Hover: `#0284C7` (darker blue)
- Primary Light: `#38BDF8` (lighter blue for accents)
- Cyan Accent: `#06B6D4` (secondary CTAs)
- Secondary: `#1a1a1a` (slightly lighter black)
- Border: `#2a2a2a`

**Theme Preset:** Slate or Zinc (from shadcn/ui themes)

**Complete CSS Variables:**
```css
--background: #0a0a0a;
--foreground: #f5f5f5;
--primary: #0EA5E9;           /* Electric blue */
--primary-foreground: #ffffff;
--secondary: #1a1a1a;
--accent: #2a2a2a;
--border: #2a2a2a;
--ring: #0EA5E9;              /* Focus rings */
```

### Typography System
- **Headings:** Inter Tight or Poppins (weights 600-900)
  - H1: 3.5-6rem (56-96px)
  - H2: 2.5-4rem (40-64px)
  - H3: 1.75-2.5rem (28-40px)
- **Body:** Inter or Helvetica (weights 400-600)
  - Base: 1rem (16px)
  - Large: 1.125rem (18px)
- **Code:** JetBrains Mono

### Animation System (Framer Motion)

**Core Variants:**
Located in `/lib/animations/variants.ts`:
- Fade: `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- Scale: `scaleIn`, `scaleUp`
- Slide: `slideInFromBottom/Top/Left/Right`
- Stagger: `staggerContainer`, `staggerItem`
- Hover: `hoverScale`, `hoverLift`, `hoverGlow`
- Transitions: `pageTransition`, `modalVariants`, `drawerVariants`

**Custom Hooks:**
Located in `/lib/animations/hooks.ts`:
- `useScrollReveal()` - Scroll-triggered reveals
- `useParallax()` - Parallax effects
- `useScrollProgress()` - Progress indicators
- `useCounter()` - Animated number counters (replaces CounterUp.js)

**Usage Pattern:**
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

### Component Strategy

**shadcn/ui Components (58 core):**
- **Must-Have (18):** button, card, form, input, textarea, select, label, badge, avatar, navigation-menu, sheet, separator, skeleton, spinner, sonner, dialog, tooltip
- **Should-Have (13):** carousel, chart, accordion, tabs, hover-card, popover, pagination, table, alert, progress, breadcrumb, collapsible, scroll-area
- **Nice-to-Have (15+):** sidebar, command, calendar, drawer, toggle, etc.

**Installation:**
```bash
npx shadcn@latest init  # Initialize with slate/zinc theme
npx shadcn@latest add button card carousel navigation-menu form input textarea select
```

**Animated Wrappers:**
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

**Prompt Template (Electric Blue Theme):**
```
"[Subject] + minimalist composition + deep black background (#0a0a0a) + electric blue (#0EA5E9) and cyan (#06B6D4) accents + high contrast + cinematic lighting + professional quality + modern tech theme + sleek and futuristic --no bright lighting, white background, cluttered, text, pink, warm colors"
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

## Development Workflow (When Project is Built)

### Setup Commands
```bash
# Install dependencies
npm install

# Install Framer Motion
npm install framer-motion

# Initialize shadcn/ui
npx shadcn@latest init

# Install essential components
npx shadcn@latest add button card form input textarea select label badge avatar navigation-menu sheet separator skeleton spinner sonner dialog tooltip
```

### Development Commands
```bash
# Development server (on port 3002 to avoid conflicts)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

**Port Configuration:**
This project uses **port 3002** to avoid conflicts with other projects on the server:
- Port 3000: Other Next.js project
- Port 3001: loopedin or similar
- Port 3004: Another project
- **Port 3002: Leap North Agency** ← This project

Configure in `package.json`:
```json
{
  "scripts": {
    "dev": "next dev -p 3002",
    "start": "next start -p 3002"
  }
}
```

Or create `.env.local`:
```
PORT=3002
```

### Performance Testing
```bash
# Run Lighthouse audit
npm run lighthouse

# Check bundle size
npm run analyze
```

---

## Key Implementation Principles

### Performance Requirements
- **Lighthouse Score:** 95+ across all categories
- **Core Web Vitals:**
  - LCP: <2.5s
  - FID: <100ms
  - CLS: <0.1
- **Bundle Size:** <500KB (gzipped)
- **Animation:** 60fps minimum (GPU-accelerated)

### Accessibility
- WCAG 2.1 AA compliance mandatory
- Respect reduced motion preferences:
  ```typescript
  import { useReducedMotion } from "framer-motion";
  const shouldReduceMotion = useReducedMotion();
  ```
- All shadcn/ui components are accessible by default (Radix UI)

### Image Optimization
- Use Next.js Image component for all images
- Generate images with fal AI (dark theme optimized)
- WebP format with multiple srcSet sizes
- Lazy load below the fold

### Progressive Enhancement & Graceful Degradation
- **Do NOT require WebGL for core functionality** (learned from KOTA site analysis)
- Ensure site works in headless browsers (for testing/SEO)
- Provide fallbacks for advanced features
- Test in Playwright/headless environments
- Core content must be accessible without JavaScript dependencies

### Animation Best Practices
- Use `transform` and `opacity` only (GPU-accelerated)
- Implement `viewport={{ once: true }}` for scroll animations
- Stagger children with 100-150ms delays
- Always provide reduced motion alternative

### Content Structure
- MDX for blog posts in `/content/` directory
- Frontmatter for metadata
- Code blocks with syntax highlighting
- Component embedding in posts

---

## Planning Documentation

All comprehensive guides are in `/planning/`:

1. **`initial_prd.md`** (60+ pages)
   - Complete project requirements
   - Competitive analysis (4 sites)
   - Feature requirements by page
   - 10-phase implementation roadmap
   - SEO and performance specs

2. **`shadcn_components.md`** (45+ pages)
   - All 449 components cataloged
   - Priority levels (must/should/nice-to-have)
   - Installation commands by phase
   - Dark theme configuration
   - Component-feature mapping

3. **`framer_motion_animations.md`** (80+ pages)
   - 60+ reusable animation variants
   - Custom hooks and utilities
   - Page-by-page animation guide
   - Performance optimization
   - Complete code examples

4. **`image_generation_guide.md`** (70+ pages)
   - 55 images with AI prompts
   - Dark theme optimized templates
   - Image specifications table
   - Video placeholder strategy
   - Prompt engineering guidelines

5. **`branding_summary.md`** (Complete brand guidelines)
   - Finalized brand identity (Leap North, "True North. True Growth.")
   - Complete color palette with CSS variables
   - Typography system and design principles
   - Usage examples and content guidelines

6. **`website_analysis_findings.md`** (Playwright MCP analysis)
   - Visual analysis of all 4 inspiration sites
   - Critical discovery: LeftClick AI uses light theme, NOT dark
   - Port conflict analysis (use port 3002)
   - Updated design inspiration hierarchy
   - WebGL avoidance recommendations

---

## Important Notes

### Project Status
**Planning Phase Complete** - No code exists yet. All architecture, tech stack, and design decisions have been finalized:

**Branding Finalized:**
- ✅ Agency Name: **Leap North**
- ✅ Tagline: **"True North. True Growth."**
- ✅ Primary Color: **Electric Blue (#0EA5E9)**
- ✅ Dark Theme: Black background (#0a0a0a) with blue accents
- ⏳ Logo: To be AI-generated in Phase 5
- ⏳ Content: To be generated during build (realistic placeholder content)

**Ready to Build:** All technical decisions made, content will be generated during development.

### Implementation Order
1. Initialize Next.js 14+ with TypeScript
2. Set up Tailwind CSS + dark theme
3. Initialize shadcn/ui (slate or zinc preset)
4. Install Framer Motion + create animation system
5. Install essential shadcn components (18 must-have)
6. Build homepage with animations
7. Generate images with fal AI MCP
8. Continue with remaining pages per roadmap

### Design Inspiration
Study these sites for aesthetic reference (verified with Playwright MCP analysis):
- **ThatLot** (https://thatlot.co.uk/) - **PRIMARY DARK THEME INSPIRATION** - True black background (#0a0a0a), bold typography, premium aesthetic, sophisticated hover effects
- **LeftClick AI** (https://leftclick.ai/) - **LAYOUT & TYPOGRAPHY REFERENCE** - Professional B2B structure, service presentation, content hierarchy (NOTE: Uses light theme, NOT dark - reference for layout/structure only)
- **Bad Marketing** (https://www.badmarketing.com/) - **RESULTS & ANIMATION REFERENCE** - Number counters, metrics display, results-driven messaging, dark theme with red accents
- **KOTA** (https://kota.co.uk/) - Scroll animations, grid layouts (NOTE: Site requires WebGL - ensure our site degrades gracefully without it)

### Critical Dependencies
- fal AI MCP must be configured for image generation
- Google Analytics 4 for tracking
- Cal.com or Calendly for consultation booking
- SendGrid or Resend for form emails

### Video Strategy
Create **placeholders** instead of actual videos:
- Use AI-generated still images
- Add play button overlay with shadcn/ui Button
- Include "Coming Soon" Badge
- Or use animated graphics as alternative

---

## Quick Reference

### Key Files to Create First
1. `/lib/animations/config.ts` - Animation constants
2. `/lib/animations/variants.ts` - Reusable variants
3. `/lib/animations/hooks.ts` - Custom hooks
4. `/app/components/animated/AnimatedSection.tsx` - Wrapper component
5. `/app/globals.css` - Dark theme configuration

### Essential Commands
```bash
npx shadcn@latest init              # Setup shadcn/ui
npx shadcn@latest add [component]   # Add component
npm install framer-motion           # Install animations
npm run dev                         # Start development
npm run build && npm start          # Production build
```

### Common Animation Pattern
```typescript
// Scroll-triggered section reveal
<AnimatedSection>
  <h2>Content here</h2>
</AnimatedSection>

// Staggered grid
<motion.div variants={staggerContainer} initial="initial" whileInView="animate">
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      <AnimatedCard>{item}</AnimatedCard>
    </motion.div>
  ))}
</motion.div>
```

### Image Generation Example
```typescript
// Generate hero background
mcp__fal-ai__generate-image({
  model: "fal-ai/bytedance/seedream/v4/text-to-image",
  prompt: "Abstract geometric wireframe structures, minimalist composition, deep black background, hot pink and electric blue gradients, cinematic lighting, high contrast, modern 3D render, technology theme --no bright lighting, white background, text",
  image_size: "landscape_16_9",
  num_images: 3
})
```

---

**Last Updated:** 2025-11-11
**Project Phase:** Planning Complete, Ready for Implementation
