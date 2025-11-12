# Leap North Agency - Complete Task List

**Project:** Leap North Agency Website
**Status:** 60-65% Complete (Grade A-)
**Last Updated:** 2025-11-11
**Target Launch:** 4-6 weeks from now

---

## Executive Summary

### Current State
- ✅ **Phase 1 (Foundation):** 100% Complete
- ⚠️ **Phase 2 (Design System):** 80% Complete (missing 22 components)
- ✅ **Phase 3 (Core Pages):** 90% Complete
- ⚠️ **Phase 4 (Blog):** 30% Complete (UI done, infrastructure missing)
- ⚠️ **Phase 5 (Content):** 15% Complete (branding done, need images/copy)
- ❌ **Phase 6 (Performance):** 0% Complete
- ⚠️ **Phase 7 (SEO):** 50% Complete (structure done, implementation missing)
- ❌ **Phase 8 (Testing):** 0% Complete
- ❌ **Phase 9 (Launch Prep):** 0% Complete
- ❌ **Phase 10 (Launch):** 0% Complete

### Key Metrics
- **Files Created:** 60+
- **Lines of Code:** 5,000+
- **Components Built:** 16 custom + 9 shadcn/ui
- **Pages Complete:** 6/6 core pages
- **Images Generated:** 3/55 (5%)
- **Security Vulnerabilities:** 0
- **Test Coverage:** 0%

### Immediate Priorities
1. Complete blog infrastructure (MDX setup)
2. Install missing must-have components (9)
3. Generate critical images (15-20)
4. Write initial content (case studies + blog posts)
5. Implement contact form backend

---

## Phase 4: Blog Implementation (HIGH PRIORITY)

**Status:** 30% Complete
**Estimated Time:** 1-2 weeks
**Priority:** HIGH

### 4.1 MDX Configuration & Setup

- [ ] **Install MDX dependencies**
  ```bash
  npm install next-mdx-remote gray-matter reading-time remark remark-gfm rehype-highlight rehype-slug rehype-autolink-headings
  ```
  - Priority: CRITICAL
  - Time: 30 minutes
  - Dependencies: None

- [ ] **Create MDX utilities**
  - File: `/app/lib/mdx.ts`
  - Functions: `getPostBySlug()`, `getAllPosts()`, `getMDXContent()`
  - Priority: CRITICAL
  - Time: 1-2 hours
  - Dependencies: MDX packages installed

- [ ] **Configure remark and rehype plugins**
  - File: `/app/lib/mdx-plugins.ts`
  - Plugins: GFM, syntax highlighting, slug generation, autolink headings
  - Priority: HIGH
  - Time: 1 hour
  - Dependencies: MDX utilities created

### 4.2 Blog Post Infrastructure

- [ ] **Create blog post layout component**
  - File: `/app/blog/[slug]/layout.tsx`
  - Features: Reading time, author, date, share buttons
  - Priority: HIGH
  - Time: 2-3 hours
  - Dependencies: MDX configured

- [ ] **Create blog post page template**
  - File: `/app/blog/[slug]/page.tsx`
  - Features: Dynamic routing, MDX rendering, TOC, related posts
  - Priority: HIGH
  - Time: 3-4 hours
  - Dependencies: Blog layout created

- [ ] **Create table of contents component**
  - File: `/app/components/blog/TableOfContents.tsx`
  - Features: Auto-generated from headings, sticky position, scroll spy
  - Priority: MEDIUM
  - Time: 2-3 hours
  - Dependencies: Blog post page created

- [ ] **Create related posts component**
  - File: `/app/components/blog/RelatedPosts.tsx`
  - Features: Algorithm based on tags/categories, card display
  - Priority: MEDIUM
  - Time: 1-2 hours
  - Dependencies: Multiple blog posts exist

- [ ] **Create blog category/tag filtering**
  - File: `/app/components/blog/CategoryFilter.tsx`
  - Features: Filter by category, tag, search
  - Priority: MEDIUM
  - Time: 2-3 hours
  - Dependencies: Tabs component installed

### 4.3 Blog Content Structure

- [ ] **Create content directory structure**
  ```
  /content/
    └── blog/
        ├── getting-started-with-marketing-automation.mdx
        ├── ai-in-digital-marketing.mdx
        ├── case-study-saas-growth.mdx
        └── ...
  ```
  - Priority: HIGH
  - Time: 30 minutes
  - Dependencies: None

- [ ] **Define frontmatter schema**
  ```yaml
  title: string
  description: string
  date: YYYY-MM-DD
  author: string
  category: string
  tags: string[]
  image: string
  readingTime: number (auto-calculated)
  published: boolean
  ```
  - Priority: HIGH
  - Time: 30 minutes
  - Dependencies: None

### 4.4 Additional Blog Features

- [ ] **Install pagination component**
  ```bash
  npx shadcn@latest add pagination
  ```
  - Priority: HIGH
  - Time: 15 minutes
  - Dependencies: None

- [ ] **Implement blog pagination**
  - File: `/app/blog/page.tsx` (update)
  - Features: 9 posts per page, prev/next navigation
  - Priority: HIGH
  - Time: 1-2 hours
  - Dependencies: Pagination component installed

- [ ] **Add blog search functionality**
  - File: `/app/components/blog/BlogSearch.tsx`
  - Features: Client-side search by title, description, content
  - Priority: MEDIUM
  - Time: 2-3 hours
  - Dependencies: None

- [ ] **Create syntax highlighting theme**
  - File: `/app/globals.css` (update)
  - Theme: Dark theme compatible code blocks
  - Priority: MEDIUM
  - Time: 30 minutes
  - Dependencies: rehype-highlight installed

- [ ] **Add social share buttons**
  - File: `/app/components/blog/ShareButtons.tsx`
  - Platforms: Twitter, LinkedIn, Facebook, Copy link
  - Priority: LOW
  - Time: 1-2 hours
  - Dependencies: None

---

## Phase 5: Content Creation & Branding (HIGH PRIORITY)

**Status:** 15% Complete
**Estimated Time:** 1-2 weeks
**Priority:** HIGH

### 5.1 AI Image Generation (52 Images Remaining)

#### Priority 1: Hero & Core Images (15-20 images)

- [ ] **Generate hero backgrounds (2-4 more)**
  - Current: 3 images ✅
  - Needed: 2-4 more variations
  - Model: `fal-ai/bytedance/seedream/v4/text-to-image`
  - Size: `landscape_16_9`
  - Prompt: "Abstract geometric wireframe structures + minimalist composition + deep navy background (#0a0f1e) + electric blue (#0EA5E9) and cyan (#06B6D4) gradients + cinematic lighting + high contrast + modern tech theme --no bright lighting, white background, text"
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Generate service page illustrations (4-6 images)**
  - Marketing Services illustration
  - Automation Services illustration
  - Social Media Marketing icon
  - Email Marketing icon
  - PPC/SEM icon
  - Workflow Automation icon
  - Size: `square_hd` or `landscape_4_3`
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Generate about page images (4-6 images)**
  - Team collaboration illustration
  - Company values graphics (3-4)
  - Awards/certification badges
  - Size: `landscape_4_3`
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Generate contact page graphics (2-3 images)**
  - Contact hero image
  - Location/office illustration
  - Communication concept graphic
  - Size: `landscape_4_3`
  - Priority: MEDIUM
  - Time: 30 minutes

#### Priority 2: Case Study Images (15-20 images)

- [ ] **Case Study 1: SaaS Growth (3-5 images)**
  - Hero image
  - Results dashboard visualization
  - Before/after comparison graphics
  - Technology stack illustration
  - Size: `landscape_4_3`
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Case Study 2: E-commerce Transformation (3-5 images)**
  - Hero image
  - Funnel visualization
  - Conversion rate graphics
  - Customer journey map
  - Size: `landscape_4_3`
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Case Study 3: B2B Lead Generation (3-5 images)**
  - Hero image
  - Lead scoring visualization
  - Pipeline growth chart
  - Automation workflow diagram
  - Size: `landscape_4_3`
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Additional case studies (6-10 images)**
  - 2-3 more case studies with 2-3 images each
  - Priority: MEDIUM
  - Time: 2-3 hours

#### Priority 3: Blog & Supporting Images (10-15 images)

- [ ] **Blog featured images (5-10 images)**
  - Marketing automation concept
  - AI in marketing illustration
  - Growth hacking graphics
  - Analytics dashboard
  - Content marketing visual
  - SEO concept graphic
  - Social media strategy
  - Email marketing visual
  - PPC advertising concept
  - Conversion optimization
  - Size: `landscape_4_3`
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Abstract patterns & backgrounds (5-10 images)**
  - Section backgrounds
  - Pattern overlays
  - Texture elements
  - Decorative graphics
  - Size: `landscape_16_9` or `square_hd`
  - Priority: LOW
  - Time: 1-2 hours

### 5.2 Logo & Brand Assets

- [ ] **Design or AI-generate logo**
  - Concept: "Leap North" with minimalist aesthetic
  - Colors: Electric blue (#0EA5E9) on navy (#0a0f1e)
  - Variations: Full logo, icon only, light/dark versions
  - Formats: SVG, PNG (multiple sizes)
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Create favicon set**
  - Sizes: 16x16, 32x32, 180x180, 192x192, 512x512
  - Format: PNG + ICO
  - Files: `/app/icon.png`, `/app/apple-icon.png`, `/public/favicon.ico`
  - Priority: MEDIUM
  - Time: 1 hour

- [ ] **Generate Open Graph images**
  - Default OG image for homepage
  - Template for dynamic page OG images
  - Size: 1200x630px
  - Priority: MEDIUM
  - Time: 1 hour

### 5.3 Copywriting - Homepage

- [ ] **Write finalized hero section copy**
  - Headline (current: "Transform Clicks Into Revenue")
  - Subheadline (current: "Data-driven marketing automation...")
  - CTA copy
  - Priority: HIGH
  - Time: 1-2 hours

- [ ] **Write stats section copy**
  - Verify/update numbers (150+ projects, 98% satisfaction, 50+ team)
  - Add context for each stat
  - Priority: MEDIUM
  - Time: 30 minutes

- [ ] **Write services overview copy**
  - Marketing services description
  - Automation services description
  - Each service card description (6 services)
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Write client testimonials (3-5 real quotes)**
  - Client name, company, position
  - Testimonial text (2-3 sentences)
  - Results achieved
  - Priority: HIGH
  - Time: 2-3 hours (if gathering real testimonials)

- [ ] **Write final CTA section copy**
  - Headline and description
  - Button text
  - Priority: MEDIUM
  - Time: 30 minutes

### 5.4 Copywriting - Services Page

- [ ] **Write services hero section**
  - Headline and subheadline
  - Overview paragraph
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Write detailed marketing services content**
  - Social Media Marketing (200-300 words)
  - Email Marketing (200-300 words)
  - PPC & SEM (200-300 words)
  - Benefits and features for each
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Write detailed automation services content**
  - Workflow Automation (200-300 words)
  - CRM Integration (200-300 words)
  - Analytics & Reporting (200-300 words)
  - Benefits and features for each
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Write process/methodology section**
  - 4-6 steps in the process
  - Description for each step
  - Priority: MEDIUM
  - Time: 1-2 hours

### 5.5 Copywriting - About Page

- [ ] **Write company story/mission**
  - Origin story (200-300 words)
  - Mission statement
  - Vision statement
  - Values (3-5 core values with descriptions)
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Write team member bios (5-10 people)**
  - Name, position, photo
  - Bio (100-150 words each)
  - Expertise/specialization
  - Social links
  - Priority: HIGH
  - Time: 3-5 hours

- [ ] **Write methodology section**
  - Approach to projects
  - What makes Leap North different
  - Client collaboration process
  - Priority: MEDIUM
  - Time: 1-2 hours

- [ ] **Write awards/certifications section**
  - List of certifications
  - Awards received
  - Industry recognition
  - Priority: LOW
  - Time: 1 hour

### 5.6 Copywriting - Case Studies (3-5 Full Case Studies)

- [ ] **Case Study 1: SaaS Company Growth**
  - Client background (100-150 words)
  - Challenge (150-200 words)
  - Solution (200-300 words)
  - Results with specific metrics (150-200 words)
  - Client testimonial
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Case Study 2: E-commerce Transformation**
  - Same structure as above
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Case Study 3: B2B Lead Generation**
  - Same structure as above
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Case Studies 4-5 (Optional)**
  - Additional case studies
  - Priority: MEDIUM
  - Time: 6-8 hours

### 5.7 Copywriting - Blog Posts (5-10 Posts)

- [ ] **Blog Post 1: "Getting Started with Marketing Automation"**
  - 1,500-2,000 words
  - Introduction to marketing automation
  - Benefits and use cases
  - Implementation guide
  - Priority: HIGH
  - Time: 4-6 hours

- [ ] **Blog Post 2: "How AI is Transforming Digital Marketing in 2025"**
  - 1,500-2,000 words
  - Current AI trends in marketing
  - Tools and technologies
  - Case examples
  - Priority: HIGH
  - Time: 4-6 hours

- [ ] **Blog Post 3: "10 Email Marketing Best Practices"**
  - 1,200-1,500 words
  - Actionable tips
  - Examples and templates
  - Common mistakes to avoid
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Blog Post 4: "Building High-Converting Landing Pages"**
  - 1,500-2,000 words
  - Design principles
  - Copywriting tips
  - A/B testing strategies
  - Priority: MEDIUM
  - Time: 4-5 hours

- [ ] **Blog Post 5: "Social Media Marketing Strategy Guide"**
  - 1,500-2,000 words
  - Platform-specific strategies
  - Content calendar planning
  - Measurement and analytics
  - Priority: MEDIUM
  - Time: 4-5 hours

- [ ] **Blog Posts 6-10 (Additional Content)**
  - Topics: SEO, PPC, CRO, Content Marketing, Analytics
  - 1,200-2,000 words each
  - Priority: LOW
  - Time: 15-20 hours total

### 5.8 Meta Descriptions & SEO Copy

- [ ] **Write meta descriptions for all pages (6 pages)**
  - Homepage (155-160 characters)
  - Services (155-160 characters)
  - Case Studies (155-160 characters)
  - About (155-160 characters)
  - Blog (155-160 characters)
  - Contact (155-160 characters)
  - Priority: HIGH
  - Time: 1-2 hours

- [ ] **Write alt text for all images (55 images)**
  - Descriptive alt text for accessibility
  - Include keywords where appropriate
  - Priority: MEDIUM
  - Time: 2-3 hours

---

## Phase 2 Completion: Install Missing Components (HIGH PRIORITY)

**Status:** 80% Complete
**Estimated Time:** 2-3 hours
**Priority:** HIGH

### Must-Have Components (9 Missing)

- [ ] **Install Select component**
  ```bash
  npx shadcn@latest add select
  ```
  - Use case: Form dropdowns, filtering
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Dialog component**
  ```bash
  npx shadcn@latest add dialog
  ```
  - Use case: Modals, confirmations, lightboxes
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Tooltip component**
  ```bash
  npx shadcn@latest add tooltip
  ```
  - Use case: Information tooltips, help text
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Skeleton component**
  ```bash
  npx shadcn@latest add skeleton
  ```
  - Use case: Loading states
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Sonner (Toast Notifications)**
  ```bash
  npx shadcn@latest add sonner
  ```
  - Use case: Success/error messages, form feedback
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Sheet component**
  ```bash
  npx shadcn@latest add sheet
  ```
  - Use case: Mobile drawer menu (better than current implementation)
  - Priority: MEDIUM
  - Time: 5 minutes

- [ ] **Install Form component**
  ```bash
  npx shadcn@latest add form
  ```
  - Use case: Enhanced form wrapper (optional, already using React Hook Form)
  - Priority: MEDIUM
  - Time: 5 minutes

- [ ] **Install Hover Card component**
  ```bash
  npx shadcn@latest add hover-card
  ```
  - Use case: Enhanced tooltips with rich content
  - Priority: LOW
  - Time: 5 minutes

- [ ] **Install Spinner/Loading component**
  - Note: May need custom implementation or third-party
  - Use case: Loading indicators
  - Priority: MEDIUM
  - Time: 30 minutes

### Should-Have Components (13 Missing)

- [ ] **Install Carousel component**
  ```bash
  npx shadcn@latest add carousel
  ```
  - Use case: Client logos, testimonials, image galleries
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Chart component**
  ```bash
  npx shadcn@latest add chart
  ```
  - Use case: Case study metrics visualization
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Accordion component**
  ```bash
  npx shadcn@latest add accordion
  ```
  - Use case: FAQ section, expandable content
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Tabs component**
  ```bash
  npx shadcn@latest add tabs
  ```
  - Use case: Content organization, blog filtering
  - Priority: HIGH
  - Time: 5 minutes

- [ ] **Install Popover component**
  ```bash
  npx shadcn@latest add popover
  ```
  - Use case: Contextual menus, dropdown content
  - Priority: MEDIUM
  - Time: 5 minutes

- [ ] **Install Pagination component**
  ```bash
  npx shadcn@latest add pagination
  ```
  - Use case: Blog post navigation
  - Priority: HIGH (listed in Phase 4 also)
  - Time: 5 minutes

- [ ] **Install Table component**
  ```bash
  npx shadcn@latest add table
  ```
  - Use case: Data display, pricing tables
  - Priority: MEDIUM
  - Time: 5 minutes

- [ ] **Install Alert component**
  ```bash
  npx shadcn@latest add alert
  ```
  - Use case: Important messages, warnings
  - Priority: MEDIUM
  - Time: 5 minutes

- [ ] **Install Progress component**
  ```bash
  npx shadcn@latest add progress
  ```
  - Use case: Loading progress, skill bars
  - Priority: LOW
  - Time: 5 minutes

- [ ] **Install Breadcrumb component**
  ```bash
  npx shadcn@latest add breadcrumb
  ```
  - Use case: Navigation breadcrumbs
  - Priority: MEDIUM
  - Time: 5 minutes

- [ ] **Install Collapsible component**
  ```bash
  npx shadcn@latest add collapsible
  ```
  - Use case: Expandable sections
  - Priority: LOW
  - Time: 5 minutes

- [ ] **Install Scroll Area component**
  ```bash
  npx shadcn@latest add scroll-area
  ```
  - Use case: Custom scrollbars
  - Priority: LOW
  - Time: 5 minutes

- [ ] **Install Command component**
  ```bash
  npx shadcn@latest add command
  ```
  - Use case: Command palette, search
  - Priority: LOW
  - Time: 5 minutes

### Implement Components in Pages

- [ ] **Replace custom mobile menu with Sheet component**
  - File: `/app/components/Header.tsx`
  - Priority: MEDIUM
  - Time: 1 hour
  - Dependencies: Sheet component installed

- [ ] **Add client logo carousel to homepage**
  - File: `/app/page.tsx` or new component
  - Priority: HIGH
  - Time: 1-2 hours
  - Dependencies: Carousel component installed

- [ ] **Add FAQ accordion to services page**
  - File: `/app/services/page.tsx`
  - Priority: MEDIUM
  - Time: 1-2 hours
  - Dependencies: Accordion component installed

- [ ] **Implement toast notifications for contact form**
  - File: `/app/contact/page.tsx`
  - Priority: HIGH
  - Time: 30 minutes
  - Dependencies: Sonner installed

- [ ] **Add loading skeletons to blog page**
  - File: `/app/blog/page.tsx`
  - Priority: MEDIUM
  - Time: 1 hour
  - Dependencies: Skeleton component installed

- [ ] **Add charts to case studies**
  - File: `/app/case-studies/[slug]/page.tsx` (when created)
  - Priority: HIGH
  - Time: 2-3 hours
  - Dependencies: Chart component installed

---

## Phase 6: Performance Optimization (MEDIUM PRIORITY)

**Status:** 0% Complete
**Estimated Time:** 1 week
**Priority:** MEDIUM

### 6.1 Production Build & Analysis

- [ ] **Run production build**
  ```bash
  npm run build
  ```
  - Check for build errors
  - Review build output and sizes
  - Priority: HIGH
  - Time: 15 minutes
  - Dependencies: All pages complete

- [ ] **Analyze bundle size**
  ```bash
  npm install @next/bundle-analyzer
  ```
  - Configure in `next.config.ts`
  - Identify large dependencies
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Identify and fix bundle bloat**
  - Tree-shake unused code
  - Code splitting improvements
  - Dynamic imports for heavy components
  - Priority: HIGH
  - Time: 2-4 hours
  - Dependencies: Bundle analysis complete

### 6.2 Image Optimization

- [ ] **Optimize all AI-generated images**
  - Convert PNG to WebP/AVIF
  - Generate multiple sizes
  - Compress images (TinyPNG, Squoosh)
  - Priority: HIGH
  - Time: 2-3 hours
  - Dependencies: All images generated

- [ ] **Implement responsive images**
  - Add `sizes` prop to all Image components
  - Use appropriate srcSet
  - Implement blur placeholders
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Lazy load below-the-fold images**
  - Ensure `loading="lazy"` on appropriate images
  - Priority images should use `priority` prop
  - Priority: MEDIUM
  - Time: 1 hour

### 6.3 Code Optimization

- [ ] **Refactor client components to server components**
  - Identify pages using unnecessary "use client"
  - Extract Framer Motion to smaller client components
  - Priority: HIGH
  - Time: 4-6 hours

- [ ] **Implement code splitting**
  - Dynamic imports for heavy components
  - Route-based code splitting
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Optimize JavaScript execution**
  - Remove console.logs (already configured)
  - Minimize third-party scripts
  - Defer non-critical JavaScript
  - Priority: MEDIUM
  - Time: 2-3 hours

### 6.4 Rendering Strategy

- [ ] **Configure Static Site Generation (SSG)**
  - Identify pages that can be static
  - Implement `generateStaticParams` for dynamic routes
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Implement Incremental Static Regeneration (ISR)**
  - Configure revalidation for blog posts
  - Set appropriate revalidation times
  - Priority: MEDIUM
  - Time: 1-2 hours

- [ ] **Optimize server components**
  - Minimize data fetching waterfalls
  - Implement streaming where appropriate
  - Priority: MEDIUM
  - Time: 2-3 hours

### 6.5 Performance Testing

- [ ] **Run Lighthouse audit**
  ```bash
  npm install -g lighthouse
  lighthouse http://localhost:3002 --view
  ```
  - Target: 95+ score in all categories
  - Priority: HIGH
  - Time: 30 minutes
  - Dependencies: Production build

- [ ] **Measure Core Web Vitals**
  - LCP target: <2.5s
  - FID target: <100ms
  - CLS target: <0.1
  - Use Chrome DevTools, PageSpeed Insights
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Test on various devices and connections**
  - Mobile devices (iOS, Android)
  - Desktop browsers (Chrome, Firefox, Safari, Edge)
  - Slow 3G, Fast 3G, 4G connections
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Fix performance issues**
  - Address Lighthouse recommendations
  - Optimize bottlenecks
  - Improve Core Web Vitals
  - Priority: HIGH
  - Time: Variable (4-8 hours estimated)

### 6.6 Additional Optimizations

- [ ] **Implement loading skeletons**
  - Add to all pages with loading states
  - Use Skeleton component
  - Priority: MEDIUM
  - Time: 2-3 hours
  - Dependencies: Skeleton component installed

- [ ] **Add service worker (optional)**
  - Offline support
  - Asset caching
  - Priority: LOW
  - Time: 4-6 hours

- [ ] **Optimize font loading**
  - Verify `display: swap` is working
  - Consider font subsetting
  - Priority: LOW
  - Time: 1-2 hours

---

## Phase 7: SEO & Analytics Implementation (MEDIUM PRIORITY)

**Status:** 50% Complete
**Estimated Time:** 3-5 days
**Priority:** MEDIUM

### 7.1 Analytics Configuration

- [ ] **Set up Google Analytics 4**
  - Create GA4 property
  - Get measurement ID
  - Add to `.env.local`:
    ```
    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
    ```
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Test Analytics integration**
  - Verify pageviews are tracked
  - Set up custom events
  - Test in development and production
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Set up event tracking**
  - Button clicks (CTAs)
  - Form submissions
  - Scroll depth
  - Link clicks
  - Priority: MEDIUM
  - Time: 2-3 hours

### 7.2 SEO Implementation

- [ ] **Create robots.txt**
  - File: `/app/robots.ts` (Next.js 15 convention)
  - Allow all crawlers
  - Link to sitemap
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Generate sitemap.xml**
  - File: `/app/sitemap.ts` (Next.js 15 convention)
  - Include all pages and blog posts
  - Dynamic generation
  - Priority: HIGH
  - Time: 1-2 hours

- [ ] **Implement structured data (JSON-LD)**
  - Organization schema
  - WebSite schema
  - Service schema for service pages
  - Article schema for blog posts
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Add canonical URLs**
  - Implement in metadata for all pages
  - Prevent duplicate content issues
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Finalize meta descriptions**
  - Ensure all pages have unique descriptions
  - 155-160 characters optimal
  - Include target keywords
  - Priority: HIGH
  - Time: 1-2 hours
  - Dependencies: Copywriting complete

- [ ] **Optimize page titles**
  - Verify title template in layout.tsx
  - Ensure all pages have unique titles
  - Include target keywords
  - Priority: HIGH
  - Time: 1 hour

### 7.3 Search Console & Indexing

- [ ] **Set up Google Search Console**
  - Verify domain ownership
  - Submit sitemap
  - Monitor indexing status
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Set up Bing Webmaster Tools**
  - Verify site
  - Submit sitemap
  - Priority: MEDIUM
  - Time: 30 minutes

### 7.4 Social Media Optimization

- [ ] **Verify Open Graph tags**
  - Test with Facebook Sharing Debugger
  - Ensure images display correctly
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Verify Twitter Card tags**
  - Test with Twitter Card Validator
  - Ensure images display correctly
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Add social share functionality**
  - Share buttons on blog posts
  - Share count (optional)
  - Priority: LOW
  - Time: 2-3 hours

### 7.5 Additional SEO Features

- [ ] **Implement breadcrumb navigation**
  - Add to all pages
  - Include in structured data
  - Priority: MEDIUM
  - Time: 2-3 hours
  - Dependencies: Breadcrumb component installed

- [ ] **Add internal linking strategy**
  - Link related blog posts
  - Link to relevant service pages
  - Footer links optimized
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Create 404 page content**
  - Already exists, verify content is helpful
  - Add suggestions for next steps
  - Priority: LOW
  - Time: 30 minutes

---

## Phase 8: Testing & QA (HIGH PRIORITY before launch)

**Status:** 0% Complete
**Estimated Time:** 1-2 weeks
**Priority:** HIGH (before launch)

### 8.1 Testing Framework Setup

- [ ] **Install testing dependencies**
  ```bash
  npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
  ```
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Configure Vitest**
  - File: `vitest.config.ts`
  - Set up DOM environment
  - Configure test paths
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Install Playwright for E2E testing**
  ```bash
  npm install -D @playwright/test
  npx playwright install
  ```
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Configure Playwright**
  - File: `playwright.config.ts`
  - Set up browsers
  - Configure base URL (http://localhost:3002)
  - Priority: HIGH
  - Time: 1 hour

### 8.2 Unit Testing

- [ ] **Write tests for utility functions**
  - File: `/app/lib/utils.test.ts`
  - Test `cn()` function
  - Test any custom utilities
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Write tests for animation hooks**
  - Files: `/app/lib/animations/hooks.test.ts`
  - Test `useCounter()`, `useScrollReveal()`, etc.
  - Priority: LOW
  - Time: 3-4 hours

- [ ] **Write tests for MDX utilities**
  - File: `/app/lib/mdx.test.ts`
  - Test post parsing, frontmatter extraction
  - Priority: MEDIUM
  - Time: 2-3 hours
  - Dependencies: MDX utilities created

### 8.3 Component Testing

- [ ] **Write tests for UI components**
  - Button, Card, Input, Textarea components
  - Test rendering, interactions, accessibility
  - Priority: MEDIUM
  - Time: 4-6 hours

- [ ] **Write tests for animated components**
  - AnimatedSection, AnimatedCard, NumberCounter
  - Test animation triggers, reduced motion
  - Priority: LOW
  - Time: 3-4 hours

- [ ] **Write tests for form validation**
  - Contact form validation logic
  - Error handling
  - Priority: HIGH
  - Time: 2-3 hours

### 8.4 E2E Testing

- [ ] **Write E2E test for homepage**
  - Test navigation, hero section, CTAs
  - Test animations and interactions
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Write E2E test for contact form**
  - Test form submission
  - Test validation errors
  - Test success message
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Write E2E test for blog**
  - Test blog post listing
  - Test reading a blog post
  - Test search/filtering (when implemented)
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Write E2E test for navigation**
  - Test all navigation links
  - Test mobile menu
  - Test footer links
  - Priority: HIGH
  - Time: 1-2 hours

### 8.5 Cross-Browser & Device Testing

- [ ] **Test on Chrome (Desktop)**
  - All pages and interactions
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Test on Firefox (Desktop)**
  - All pages and interactions
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Test on Safari (Desktop)**
  - All pages and interactions
  - Test webkit-specific issues
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Test on Edge (Desktop)**
  - All pages and interactions
  - Priority: MEDIUM
  - Time: 1-2 hours

- [ ] **Test on mobile Safari (iOS)**
  - Responsive design
  - Touch interactions
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Test on mobile Chrome (Android)**
  - Responsive design
  - Touch interactions
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Test on various screen sizes**
  - 320px (small mobile)
  - 375px (iPhone)
  - 768px (tablet)
  - 1024px (small desktop)
  - 1440px (desktop)
  - 1920px+ (large desktop)
  - Priority: HIGH
  - Time: 2-3 hours

### 8.6 Accessibility Testing

- [ ] **Run Lighthouse accessibility audit**
  - Target: 95+ score
  - Fix any issues
  - Priority: HIGH
  - Time: 1-2 hours

- [ ] **Test with screen readers**
  - NVDA (Windows)
  - JAWS (Windows)
  - VoiceOver (macOS/iOS)
  - TalkBack (Android)
  - Priority: HIGH
  - Time: 3-4 hours

- [ ] **Test keyboard navigation**
  - Tab through all interactive elements
  - Test focus indicators
  - Test keyboard shortcuts
  - Priority: HIGH
  - Time: 1-2 hours

- [ ] **Test color contrast**
  - Use WAVE or axe DevTools
  - Ensure WCAG 2.1 AA compliance
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Test with reduced motion**
  - Enable prefers-reduced-motion
  - Verify animations are reduced/removed
  - Priority: MEDIUM
  - Time: 1 hour

### 8.7 Performance Testing

- [ ] **Load testing**
  - Use k6 or Artillery
  - Test under various load conditions
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Test on slow connections**
  - Slow 3G simulation
  - Fast 3G simulation
  - Verify loading states work
  - Priority: HIGH
  - Time: 1-2 hours

### 8.8 Security Testing

- [ ] **Run security audit**
  ```bash
  npm audit
  ```
  - Ensure 0 vulnerabilities
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Test form security**
  - XSS prevention
  - SQL injection prevention
  - CSRF protection
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Test security headers**
  - Use securityheaders.com
  - Verify all headers are set correctly
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Test HTTPS configuration**
  - SSL certificate valid
  - No mixed content warnings
  - Priority: HIGH (production only)
  - Time: 30 minutes

---

## Phase 9: Launch Preparation (HIGH PRIORITY before launch)

**Status:** 0% Complete
**Estimated Time:** 1 week
**Priority:** HIGH (before launch)

### 9.1 Backend Implementation

- [ ] **Create contact form API route**
  - File: `/app/api/contact/route.ts`
  - Handle POST request
  - Validate form data server-side
  - Return appropriate responses
  - Priority: CRITICAL
  - Time: 2-3 hours

- [ ] **Set up email service (SendGrid or Resend)**
  - Create account
  - Get API key
  - Add to `.env.local`:
    ```
    EMAIL_API_KEY=xxxxx
    EMAIL_FROM=noreply@leapnorth.com
    EMAIL_TO=hello@leapnorth.com
    ```
  - Priority: CRITICAL
  - Time: 1-2 hours

- [ ] **Implement email sending**
  - Create email template
  - Send email on form submission
  - Handle errors gracefully
  - Priority: CRITICAL
  - Time: 2-3 hours

- [ ] **Test email delivery**
  - Test in development
  - Test in production
  - Test error scenarios
  - Priority: HIGH
  - Time: 1 hour

### 9.2 Deployment Setup

- [ ] **Create Vercel account (if not exists)**
  - Sign up at vercel.com
  - Priority: HIGH
  - Time: 15 minutes

- [ ] **Connect Git repository**
  - Push code to GitHub/GitLab/Bitbucket
  - Connect to Vercel
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Configure Vercel project**
  - Set up environment variables
  - Configure build settings
  - Set up preview environments
  - Priority: HIGH
  - Time: 1 hour

- [ ] **Set up custom domain**
  - Purchase domain (if not already owned)
  - Add domain to Vercel
  - Configure DNS records
  - Priority: HIGH
  - Time: 1-2 hours (+ DNS propagation time)

- [ ] **Configure SSL certificate**
  - Vercel auto-provisions Let's Encrypt
  - Verify certificate is active
  - Priority: HIGH
  - Time: 30 minutes (automated)

### 9.3 Environment Variables

- [ ] **Set production environment variables**
  - `NEXT_PUBLIC_GA_ID` (Google Analytics)
  - `EMAIL_API_KEY` (SendGrid/Resend)
  - `EMAIL_FROM` (sender email)
  - `EMAIL_TO` (recipient email)
  - Any other secrets
  - Priority: CRITICAL
  - Time: 30 minutes

- [ ] **Verify environment variables are not committed**
  - Check `.env.local` is in `.gitignore`
  - Remove any secrets from code
  - Priority: CRITICAL
  - Time: 15 minutes

### 9.4 Integrations

- [ ] **Set up Cal.com or Calendly**
  - Create account
  - Configure availability
  - Get embed code or link
  - Add to contact page
  - Priority: MEDIUM
  - Time: 1-2 hours

- [ ] **Set up monitoring (optional but recommended)**
  - Sentry for error tracking
  - LogRocket for session replay
  - Vercel Analytics for performance
  - Priority: MEDIUM
  - Time: 2-3 hours

### 9.5 Legal & Compliance

- [ ] **Create Privacy Policy page**
  - File: `/app/privacy/page.tsx`
  - Cover data collection, usage, cookies
  - GDPR and CCPA compliance
  - Priority: HIGH
  - Time: 2-3 hours (+ legal review)

- [ ] **Create Terms of Service page**
  - File: `/app/terms/page.tsx`
  - Cover service usage, limitations
  - Priority: HIGH
  - Time: 2-3 hours (+ legal review)

- [ ] **Create Cookie Policy (if needed)**
  - File: `/app/cookies/page.tsx`
  - Explain cookie usage
  - Priority: MEDIUM (if using non-essential cookies)
  - Time: 1-2 hours

- [ ] **Implement cookie consent banner (if needed)**
  - Only if using non-essential cookies
  - Use react-cookie-consent or similar
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Add links to legal pages in footer**
  - Update `/app/components/Footer.tsx`
  - Priority: HIGH
  - Time: 15 minutes

### 9.6 Backup & Recovery

- [ ] **Set up backup strategy**
  - Code: Already in Git
  - Content: Backup MDX files
  - Database: N/A (static site)
  - Images: Backup to cloud storage
  - Priority: MEDIUM
  - Time: 1-2 hours

- [ ] **Document recovery procedures**
  - How to roll back deployment
  - How to restore from backup
  - Priority: LOW
  - Time: 1 hour

### 9.7 Final Pre-Launch Checklist

- [ ] **Run full production build**
  ```bash
  npm run build
  ```
  - Verify no errors
  - Priority: CRITICAL
  - Time: 15 minutes

- [ ] **Test production build locally**
  ```bash
  npm start
  ```
  - Test all functionality
  - Priority: CRITICAL
  - Time: 1-2 hours

- [ ] **Run all tests**
  ```bash
  npm test
  npm run test:e2e
  ```
  - Ensure all tests pass
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Run final Lighthouse audit**
  - Target: 95+ in all categories
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Content review**
  - Proofread all copy
  - Check for typos, broken links
  - Verify all images load
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Cross-functional review**
  - Get stakeholder approval
  - Get feedback from team
  - Priority: HIGH
  - Time: Variable

---

## Phase 10: Launch & Post-Launch (LAUNCH DAY)

**Status:** 0% Complete
**Estimated Time:** Ongoing
**Priority:** N/A

### 10.1 Launch Day Tasks

- [ ] **Deploy to production**
  - Push to main/production branch
  - Vercel auto-deploys
  - Priority: CRITICAL
  - Time: 15 minutes

- [ ] **Verify deployment**
  - Check all pages load
  - Test all functionality
  - Verify environment variables work
  - Priority: CRITICAL
  - Time: 1-2 hours

- [ ] **Update DNS (if needed)**
  - Point domain to Vercel
  - Wait for DNS propagation
  - Priority: HIGH
  - Time: 5 minutes (+ 24-48h propagation)

- [ ] **Submit sitemap to Google Search Console**
  - Verify sitemap is accessible
  - Submit for indexing
  - Priority: HIGH
  - Time: 15 minutes

- [ ] **Submit sitemap to Bing Webmaster Tools**
  - Verify sitemap is accessible
  - Submit for indexing
  - Priority: MEDIUM
  - Time: 15 minutes

- [ ] **Test in production environment**
  - Test all pages
  - Test contact form with real email
  - Test analytics tracking
  - Priority: CRITICAL
  - Time: 1-2 hours

### 10.2 Monitoring & Maintenance

- [ ] **Set up uptime monitoring**
  - UptimeRobot, Pingdom, or similar
  - Get alerts for downtime
  - Priority: HIGH
  - Time: 30 minutes

- [ ] **Monitor analytics**
  - Check Google Analytics daily
  - Review user behavior
  - Identify issues
  - Priority: HIGH
  - Time: Ongoing (30 min/day)

- [ ] **Monitor error logs**
  - Check Vercel logs
  - Check Sentry (if configured)
  - Fix critical errors
  - Priority: HIGH
  - Time: Ongoing

- [ ] **Monitor performance**
  - Check Vercel Analytics
  - Monitor Core Web Vitals
  - Address performance regressions
  - Priority: MEDIUM
  - Time: Ongoing (weekly)

### 10.3 Post-Launch Improvements

- [ ] **Gather user feedback**
  - Add feedback mechanism
  - Survey first users
  - Identify pain points
  - Priority: HIGH
  - Time: Ongoing

- [ ] **Implement feedback**
  - Fix bugs reported by users
  - Add requested features
  - Improve UX based on feedback
  - Priority: HIGH
  - Time: Ongoing

- [ ] **Content updates**
  - Publish new blog posts regularly
  - Add new case studies
  - Update service offerings
  - Priority: HIGH
  - Time: Ongoing

- [ ] **SEO optimization**
  - Monitor search rankings
  - Optimize underperforming pages
  - Build backlinks
  - Priority: MEDIUM
  - Time: Ongoing

### 10.4 Marketing & Promotion

- [ ] **Set up social media profiles**
  - LinkedIn, Twitter, Facebook, Instagram
  - Match branding
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Launch announcement**
  - Blog post about launch
  - Social media posts
  - Email to existing contacts
  - Priority: HIGH
  - Time: 2-3 hours

- [ ] **Content calendar**
  - Plan blog post schedule
  - Plan social media content
  - Priority: MEDIUM
  - Time: 2-3 hours

- [ ] **Outreach campaign**
  - Contact potential clients
  - Partner with complementary businesses
  - Priority: MEDIUM
  - Time: Ongoing

---

## Quick Reference: Installation Commands

### Must-Have Components (Batch Install)
```bash
npx shadcn@latest add select dialog tooltip skeleton sonner sheet form hover-card
```

### Should-Have Components (Batch Install)
```bash
npx shadcn@latest add carousel chart accordion tabs popover pagination table alert progress breadcrumb collapsible scroll-area command
```

### MDX & Blog Dependencies
```bash
npm install next-mdx-remote gray-matter reading-time remark remark-gfm rehype-highlight rehype-slug rehype-autolink-headings
```

### Testing Dependencies
```bash
npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test
```

### Email Service (choose one)
```bash
npm install @sendgrid/mail  # SendGrid
npm install resend          # Resend
```

### Monitoring (optional)
```bash
npm install @sentry/nextjs  # Error tracking
```

---

## Priority Matrix

### CRITICAL (Must do before launch)
1. Create contact form API route
2. Set up email service
3. Deploy to Vercel
4. Test production environment
5. Set up custom domain
6. Configure environment variables

### HIGH PRIORITY (Week 1-2)
1. Complete blog infrastructure (MDX)
2. Install missing must-have components (9)
3. Generate critical images (15-20)
4. Write initial content (3 case studies + 3-5 blog posts)
5. Implement toast notifications for forms
6. Run production build and Lighthouse audit
7. Write meta descriptions for all pages

### MEDIUM PRIORITY (Week 3-4)
1. Install should-have components (13)
2. Generate remaining images (32-37)
3. Write additional blog posts (5-10)
4. Performance optimization
5. Complete SEO implementation (sitemap, robots.txt, structured data)
6. Cross-browser testing
7. Set up monitoring

### LOW PRIORITY (Nice to have)
1. Service worker implementation
2. Advanced analytics events
3. Social share functionality
4. Additional blog features (search, advanced filtering)
5. More animated components

---

## Timeline Estimate

### Week 1-2: Blog & Critical Content
- Day 1-2: MDX configuration and blog infrastructure
- Day 3-4: Install missing components
- Day 5-7: Generate critical images (15-20)
- Day 8-14: Write 3 case studies + 3-5 blog posts

### Week 3: Backend & Optimization
- Day 15-16: Contact form API + email integration
- Day 17-18: Performance optimization
- Day 19-20: SEO implementation (sitemap, robots, structured data)
- Day 21: Production build testing

### Week 4-5: Testing & QA
- Day 22-23: Set up testing framework
- Day 24-26: Write and run tests
- Day 27-28: Cross-browser testing
- Day 29-30: Accessibility testing
- Day 31-35: Bug fixes

### Week 6: Launch Preparation
- Day 36-37: Generate remaining images
- Day 38-39: Legal pages (Privacy, Terms)
- Day 40-41: Set up Vercel deployment
- Day 42: Final pre-launch checklist and review

### Launch Day (Day 43)
- Deploy to production
- Verify all functionality
- Submit sitemaps
- Monitor and celebrate!

---

## Completion Tracking

### Overall Progress: 60-65%

**Phase Completion:**
- [x] Phase 1: Foundation (100%)
- [x] Phase 2: Design System (80% - need components)
- [x] Phase 3: Core Pages (90%)
- [ ] Phase 4: Blog (30%)
- [ ] Phase 5: Content (15%)
- [ ] Phase 6: Performance (0%)
- [ ] Phase 7: SEO (50%)
- [ ] Phase 8: Testing (0%)
- [ ] Phase 9: Launch Prep (0%)
- [ ] Phase 10: Launch (0%)

**Component Count:**
- ✅ Installed: 9/31 shadcn/ui components
- ⏳ Remaining: 22 components

**Image Count:**
- ✅ Generated: 3/55 images
- ⏳ Remaining: 52 images

**Content Count:**
- ⏳ Case Studies: 0/3-5
- ⏳ Blog Posts: 0/5-10
- ⏳ Team Bios: 0/5-10

---

## Notes & Recommendations

### Development Best Practices
1. **Test as you go:** Don't wait until Phase 8 to start testing
2. **Commit frequently:** Small, focused commits make debugging easier
3. **Use branches:** Feature branches for major changes
4. **Document decisions:** Update CLAUDE.md with important changes
5. **Performance first:** Consider performance impact of every feature

### Content Strategy
1. **Quality over quantity:** 3 excellent case studies > 10 mediocre ones
2. **SEO-focused:** Research keywords before writing content
3. **Authentic testimonials:** Real client testimonials build trust
4. **Regular updates:** Plan to publish 1-2 blog posts per month post-launch

### Image Generation Tips
1. **Generate variations:** Create 3-5 variations of each image, pick the best
2. **Consistent style:** Use similar prompts for visual consistency
3. **Dark theme optimization:** Always include dark background in prompts
4. **High resolution:** Generate at 2x intended display size

### Launch Strategy
1. **Soft launch first:** Deploy to production but don't announce publicly
2. **Monitor closely:** Watch for errors and performance issues
3. **Gather feedback:** Get 5-10 trusted people to test before public launch
4. **Iterate quickly:** Fix critical issues within 24-48 hours

---

**Document Version:** 1.0
**Created:** 2025-11-11
**Next Review:** After Phase 4 completion

---

## Appendix: Key File Locations

### Configuration Files
- `/var/www/agency/package.json` - Dependencies and scripts
- `/var/www/agency/next.config.ts` - Next.js configuration
- `/var/www/agency/tailwind.config.ts` - Tailwind CSS configuration
- `/var/www/agency/tsconfig.json` - TypeScript configuration
- `/var/www/agency/.env.local` - Environment variables (not in Git)

### Core Application Files
- `/app/layout.tsx` - Root layout with metadata
- `/app/page.tsx` - Homepage
- `/app/globals.css` - Global styles and theme
- `/app/components/Header.tsx` - Site header
- `/app/components/Footer.tsx` - Site footer

### Animation System
- `/app/lib/animations/config.ts` - Animation constants
- `/app/lib/animations/variants.ts` - Reusable animation variants
- `/app/lib/animations/hooks.ts` - Custom animation hooks

### Pages
- `/app/services/page.tsx` - Services page
- `/app/case-studies/page.tsx` - Case studies listing
- `/app/about/page.tsx` - About page
- `/app/blog/page.tsx` - Blog listing
- `/app/contact/page.tsx` - Contact form

### Planning Documentation
- `/planning/initial_prd.md` - Product requirements
- `/planning/shadcn_components.md` - Component guide
- `/planning/framer_motion_animations.md` - Animation guide
- `/planning/image_generation_guide.md` - Image prompts
- `/planning/branding_summary.md` - Brand guidelines
- `/planning/website_analysis_findings.md` - Competitive analysis
- `/planning/initial_tasks.md` - **This file**
