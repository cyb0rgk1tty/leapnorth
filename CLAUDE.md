# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Leap North Agency Website** - A high-performance marketing agency website built with Next.js 14+, focusing on exceptional UX, fast loading times (<2s), and modern dark theme aesthetics.

**Agency Name:** Leap North
**Tagline:** "True North. True Growth."
**Status:** Production Ready - Deployed
**Target:** 95+ Lighthouse score, sub-2-second load times, WCAG 2.1 AA accessibility

---

## Frontend Development

**IMPORTANT:** For any frontend changes, UI modifications, styling updates, or design work, use the **frontend subagent** (Task tool with subagent_type='Explore' or 'Plan').

The frontend subagent should:
1. Read `/var/www/leapnorth/FRONTEND_STYLE_GUIDE.md` for design system details
2. Follow the established color palette (crimson red #DC143C on dark #0a0a0a), typography, and animation patterns
3. Use existing shadcn/ui components and Framer Motion wrappers in `/app/components/animated/`

This keeps the main context window lean while ensuring design consistency.

---

## Tech Stack

### Core Technologies
- **Framework:** Next.js 14+ with App Router (TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui + CSS Modules
- **Animations:** Framer Motion (60fps target, GPU-accelerated)
- **Content:** MDX for blog
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4

### Key Dependencies
- **UI Components:** shadcn/ui (Radix UI primitives) - 58 core components
- **Animations:** Framer Motion - 60+ reusable variants in `/lib/animations/`
- **Forms:** React Hook Form + Zod validation
- **Carousel:** embla-carousel-react
- **Charts:** recharts
- **Notifications:** sonner

---

## Project Structure

```
/var/www/leapnorth/
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                  # Homepage
│   ├── services/                 # Services pages
│   ├── case-studies/             # Portfolio
│   ├── about/                    # About page
│   ├── blog/                     # Blog with MDX
│   ├── contact/                  # Contact form
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── animated/             # Framer Motion wrappers
│   │   └── home/                 # Homepage-specific (particle system)
│   └── lib/                      # Utilities
│       ├── animations/           # Animation variants & hooks
│       └── utils.ts              # General utilities
├── public/images/                # Static assets
├── content/                      # MDX blog posts
└── planning/                     # Project documentation
```

---

## Development Workflow

### Development Commands
```bash
npm run dev      # Development server (port 3002)
npm run build    # Production build
npm start        # Production server
npm run lint     # Linting
```

**Port Configuration:** This project uses **port 3002** to avoid conflicts.

### Performance Testing
```bash
npm run lighthouse  # Run Lighthouse audit
npm run analyze     # Check bundle size
```

---

## Key Implementation Principles

### Performance Requirements
- **Lighthouse Score:** 95+ across all categories
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
- **Bundle Size:** <500KB (gzipped)

### Progressive Enhancement
- Do NOT require WebGL for core functionality
- Ensure site works in headless browsers (for testing/SEO)
- Provide fallbacks for advanced features
- Core content must be accessible without JavaScript

### Content Structure
- MDX for blog posts in `/content/` directory
- Frontmatter for metadata
- Code blocks with syntax highlighting

---

## Planning Documentation

All comprehensive guides are in `/planning/`:
- `initial_prd.md` - Complete requirements & roadmap
- `shadcn_components.md` - Component selection & installation
- `framer_motion_animations.md` - Animation guide
- `image_generation_guide.md` - AI image prompts
- `branding_summary.md` - Brand guidelines

---

## Project Status

**Completed:**
- Agency Name: **Leap North** with tagline **"True North. True Growth."**
- Primary Color: **Crimson Red (#DC143C)** on dark background (#0a0a0a)
- Full website with blog, case studies, services, contact form
- Custom particle system with cursor interaction
- SEO: Sitemap, robots.txt, JSON-LD structured data
- Contact form with Resend email integration

---

## Critical Dependencies
- fal AI MCP for image generation
- Google Analytics 4 for tracking
- Resend for form emails

---

**Last Updated:** 2025-11-26
