# shadcn/ui Component Selection Guide
## Agency Website Project

**Last Updated:** 2025-11-11
**Project:** Agency Growth & Automation Website
**Total Components Available:** 449 items (58 core components + blocks + examples)

---

## Table of Contents
1. [Overview](#overview)
2. [Component Priority Levels](#component-priority-levels)
3. [Installation Commands](#installation-commands)
4. [Component Details by Category](#component-details-by-category)
5. [PRD Feature Mapping](#prd-feature-mapping)
6. [Dark Theme Configuration](#dark-theme-configuration)
7. [Implementation Timeline](#implementation-timeline)

---

## Overview

The @shadcn registry provides comprehensive UI components built on **Radix UI primitives** and styled with **Tailwind CSS**. All components are:
- ✅ **Dark theme optimized** - Perfect for agency aesthetic
- ✅ **Fully accessible** - WCAG 2.1 AA compliant
- ✅ **Customizable** - Source code in your project
- ✅ **Production-ready** - Battle-tested in real applications
- ✅ **Performance-optimized** - Tree-shakeable, small bundle sizes
- ✅ **TypeScript native** - Full type safety
- ✅ **Framer Motion compatible** - All components can be wrapped with motion components

### Why shadcn/ui for This Project?

1. **Matches PRD Aesthetic:** Dark theme, minimalist design, modern interactions
2. **Accelerates Development:** Pre-built components reduce build time by 40-50%
3. **Maintains Flexibility:** Unlike component libraries, you own the code
4. **No Bundle Bloat:** Copy/paste approach, no massive npm dependencies
5. **Proven Track Record:** Used by Vercel, Supabase, and thousands of production sites
6. **Animation Ready:** Seamless integration with Framer Motion for sophisticated animations

### Framer Motion Integration

All shadcn/ui components can be animated using Framer Motion. See `framer_motion_animations.md` for:
- Complete animation system with 60+ reusable variants
- Animated wrapper components (AnimatedCard, AnimatedButton, AnimatedSection)
- Scroll-triggered animations using useInView hook
- Hover effects and micro-interactions
- Page transitions and route animations
- Number counter animations (replacing CounterUp.js)
- Custom animation hooks and utilities

**Quick Example:**
```typescript
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -8, boxShadow: "0 12px 40px rgba(252, 11, 119, 0.2)" }}
>
  <Card>
    {/* Card content */}
  </Card>
</motion.div>
```

---

## Component Priority Levels

### 🔴 Priority 1: MUST-HAVE (Phase 1-2, Week 1-2)
**Essential for core functionality** - Cannot launch without these

| Component | Purpose | PRD Section |
|-----------|---------|-------------|
| button | CTAs, actions, navigation | Hero, Forms, All pages |
| card | Content containers, case studies, blog posts | Homepage, Portfolio, Blog |
| form | Form wrapper with validation | Contact, Newsletter |
| input | Text fields | Contact form, Search |
| textarea | Long-form text | Contact form |
| select | Dropdown selections | Contact form |
| label | Form labels | All forms |
| badge | Tags, status indicators | Case studies, Blog |
| avatar | Team photos, testimonials | About, Testimonials |
| navigation-menu | Main navigation | Header |
| sheet | Mobile navigation drawer | Mobile menu |
| separator | Visual dividers | Footer, Sections |
| skeleton | Loading placeholders | All pages |
| spinner | Loading indicators | Forms, Data loading |
| sonner | Toast notifications | Form feedback |
| dialog | Modal windows | CTAs, Forms |
| tooltip | Additional info | Throughout |

**Total Must-Have:** 18 components

---

### 🟡 Priority 2: SHOULD-HAVE (Phase 3-4, Week 2-4)
**Enhanced experience** - Significantly improve UX

| Component | Purpose | PRD Section |
|-----------|---------|-------------|
| carousel | Client logos, case studies, testimonials | Homepage, Portfolio |
| chart | Metrics visualization | Results section |
| accordion | Expandable content | FAQ, Services |
| tabs | Content organization | Services, Blog filtering |
| hover-card | Rich hover previews | Team profiles |
| popover | Additional info/actions | Throughout |
| pagination | Blog/case study navigation | Blog, Portfolio |
| table | Data display, comparisons | Case studies results |
| alert | Important messages | Throughout |
| progress | Loading/achievement bars | Case studies |
| breadcrumb | Page hierarchy | Blog, Services |
| collapsible | Show/hide content | FAQ |
| scroll-area | Custom scrollbars | Long content |

**Total Should-Have:** 13 components

---

### 🟢 Priority 3: NICE-TO-HAVE (Phase 4+, Week 4+)
**Advanced features** - Future enhancements

| Component | Purpose | Future Use |
|-----------|---------|------------|
| sidebar | Advanced navigation | Client dashboard |
| command | Search/command palette | Site-wide search |
| calendar | Date selection | Booking system |
| drawer | Alternative to sheet | Mobile interactions |
| toggle | Switch options | Settings |
| toggle-group | Multi-option toggles | Filters |
| menubar | Application menu | Advanced features |
| alert-dialog | Confirmation dialogs | Important actions |
| checkbox | Multi-select | Forms |
| radio-group | Single-select | Forms |
| switch | Toggle settings | Preferences |
| slider | Range selection | Filters |
| resizable | Adjustable panels | Dashboard |
| kbd | Keyboard shortcuts | Power user features |
| empty | Empty states | No results |

**Total Nice-to-Have:** 15 components

---

## Installation Commands

### Quick Start: Essential Kit (Phase 1)
Install all must-have components in one command:

```bash
npx shadcn@latest add button card form input textarea select label badge avatar navigation-menu sheet separator skeleton spinner sonner dialog tooltip
```

**Installs:** 18 components
**Estimated time:** 2-3 minutes
**Bundle size:** ~150KB (gzipped)

---

### By Phase Installation

#### Phase 1: Foundation (Week 1)
```bash
# Core UI components
npx shadcn@latest add button badge separator

# Forms (basic)
npx shadcn@latest add input label

# Feedback
npx shadcn@latest add skeleton spinner sonner tooltip
```

#### Phase 2: Complete Forms & Navigation (Week 1-2)
```bash
# Complete forms
npx shadcn@latest add form textarea select field

# Navigation
npx shadcn@latest add navigation-menu sheet

# Content display
npx shadcn@latest add card avatar

# Overlays
npx shadcn@latest add dialog popover
```

#### Phase 3: Enhanced Content (Week 2-3)
```bash
# Data visualization
npx shadcn@latest add chart table progress

# Content organization
npx shadcn@latest add carousel accordion tabs collapsible

# Enhanced navigation
npx shadcn@latest add pagination breadcrumb

# Additional feedback
npx shadcn@latest add alert hover-card scroll-area
```

#### Phase 4: Advanced Features (Week 4+)
```bash
# Optional advanced components as needed
npx shadcn@latest add calendar command sidebar drawer

# Form enhancements
npx shadcn@latest add checkbox radio-group switch slider

# Power user features
npx shadcn@latest add toggle toggle-group menubar alert-dialog kbd
```

---

## Component Details by Category

### 1. FORMS & INPUT

#### button
**Purpose:** Primary interaction element
**Variants:** default, secondary, destructive, outline, ghost, link
**Sizes:** sm, default, lg
**Features:** Loading states, icon support, disabled states

**Use Cases:**
- Hero CTAs ("Get Started", "Book Consultation")
- Form submissions
- Navigation links
- Card actions
- Footer links

**Dark Theme Notes:** Excellent contrast, multiple color schemes

---

#### form
**Purpose:** Complete form system with validation
**Dependencies:** react-hook-form, zod
**Features:** Field-level validation, error messages, accessibility

**Use Cases:**
- Contact form
- Newsletter signup
- Consultation booking

**Implementation Example:**
```typescript
<Form>
  <FormField name="email" label="Email" />
  <FormField name="message" label="Message" />
  <Button type="submit">Send</Button>
</Form>
```

---

#### input, textarea, select
**Purpose:** Form field components
**Features:** Validation states, disabled, placeholder, icons

**Use Cases:**
- Contact form fields
- Search bars
- Newsletter email
- Service selection dropdowns

---

### 2. NAVIGATION

#### navigation-menu
**Purpose:** Main site navigation with dropdown support
**Features:** Mega menu, nested items, keyboard navigation, mobile responsive

**Use Cases:**
- Main header navigation
- Services dropdown (Marketing, Automation)
- Resources menu (Blog, Case Studies)

**Dark Theme Notes:** Sophisticated hover states, perfect for minimalist design

---

#### sheet
**Purpose:** Mobile navigation drawer
**Positions:** left, right, top, bottom
**Features:** Backdrop, close button, smooth animations

**Use Cases:**
- Mobile menu
- Filter panels
- Quick actions

---

### 3. CONTENT DISPLAY

#### card
**Purpose:** Versatile content container
**Sub-components:** CardHeader, CardTitle, CardDescription, CardContent, CardFooter
**Features:** Hover effects, flexible layout

**Use Cases:**
- Service cards (Marketing & Automation)
- Case study previews
- Blog post grid
- Team member profiles
- Testimonials

**Design Notes:** Perfect for minimalist aesthetic with subtle shadows

---

#### carousel
**Purpose:** Image/content slider
**Features:** Auto-play, infinite scroll, vertical/horizontal, touch support
**Dependencies:** embla-carousel-react

**Use Cases:**
- Client logo carousel (infinite scroll)
- Case study showcase (horizontal scroll like ThatLot)
- Testimonial rotation
- Image galleries

**PRD Alignment:** Directly matches "client logo carousel" requirement

---

#### chart
**Purpose:** Data visualization
**Types:** Area, Bar, Line, Pie, Donut, Radar, Radial
**Dependencies:** recharts
**Features:** Interactive tooltips, legends, custom colors

**Use Cases:**
- Results/Impact section (replaces CounterUp.js)
- Case study metrics visualization
- Revenue growth charts
- ROI displays

**PRD Alignment:** Matches "CounterUp.js number animations showcasing metrics"

---

### 4. FEEDBACK & OVERLAYS

#### dialog
**Purpose:** Modal windows
**Features:** Backdrop, focus trap, accessibility, animations

**Use Cases:**
- Detailed case studies
- Video presentations
- Lead capture forms
- Important announcements

---

#### sonner
**Purpose:** Toast notifications
**Types:** success, error, warning, info
**Features:** Auto-dismiss, action buttons, positioning

**Use Cases:**
- Form submission feedback
- Newsletter signup confirmation
- Error messages
- Success notifications

**Dark Theme Notes:** Beautiful dark mode styling out of the box

---

#### tooltip
**Purpose:** Contextual information on hover
**Features:** Multiple positions, arrow, delay

**Use Cases:**
- Icon explanations
- Additional context
- Truncated text expansion
- Feature highlights

---

#### skeleton
**Purpose:** Loading placeholders
**Features:** Animated shimmer effect, customizable shapes

**Use Cases:**
- Blog post loading
- Case study loading
- Image placeholders
- Content streaming

**Dark Theme Notes:** Perfect shimmer effect for dark backgrounds

---

### 5. VISUAL ENHANCEMENTS

#### badge
**Purpose:** Labels, tags, status indicators
**Variants:** default, secondary, destructive, outline

**Use Cases:**
- Service tags
- Blog categories
- Case study types
- "New" indicators
- Trust badges ("Trusted by X")
- Award badges

---

#### avatar
**Purpose:** Profile images with fallback
**Features:** Initials fallback, image loading states, sizes

**Use Cases:**
- Team member photos
- Testimonial authors
- Blog post authors
- Client logos (alternative to carousel)

---

#### separator
**Purpose:** Visual content dividers
**Orientations:** horizontal, vertical

**Use Cases:**
- Footer section divisions
- Content section breaks
- List item separators
- Card dividers

---

### 6. DATA DISPLAY

#### table
**Purpose:** Structured data display
**Features:** Sortable columns, row selection, pagination

**Use Cases:**
- Pricing comparisons
- Feature matrices
- Case study results (before/after)
- Service breakdowns

---

#### accordion
**Purpose:** Expandable content sections
**Features:** Single/multiple expand, animated transitions

**Use Cases:**
- FAQ sections
- Service details
- Process explanations
- Team bios (expanded details)

---

#### tabs
**Purpose:** Content organization
**Features:** Keyboard navigation, active states, animations

**Use Cases:**
- Services sections (Marketing / Automation)
- Blog filtering (categories)
- About page (Story / Team / Values)
- Portfolio filtering

---

## PRD Feature Mapping

### Homepage Sections

#### Hero Section
**Required Components:**
- button (primary + secondary CTAs)
- badge ("Trusted by X companies")

**Optional:**
- carousel (if using rotating hero content)
- dialog (for video presentation)

**Installation:**
```bash
npx shadcn@latest add button badge
```

---

#### Services Overview
**Required Components:**
- card (service cards)
- separator (between services)

**Optional:**
- hover-card (additional service details)
- accordion (expandable service info)

**Installation:**
```bash
npx shadcn@latest add card separator hover-card
```

---

#### Results/Impact Section
**Required Components:**
- chart (metric visualization - bar or radial)
- card (metric containers)

**Optional:**
- progress (achievement bars)

**Installation:**
```bash
npx shadcn@latest add chart card progress
```

---

#### Case Studies Preview
**Required Components:**
- card (case study cards)
- badge (service tags)
- avatar (client logos)

**Optional:**
- carousel (horizontal scrolling)
- dialog (full case study modal)

**Installation:**
```bash
npx shadcn@latest add card badge avatar carousel
```

---

#### Client Logo Carousel
**Required Components:**
- carousel (infinite scroll configuration)

**Installation:**
```bash
npx shadcn@latest add carousel
```

**Configuration:**
```typescript
<Carousel
  opts={{
    loop: true,
    align: 'start',
  }}
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
>
  {/* Client logos */}
</Carousel>
```

---

#### Final CTA Section
**Required Components:**
- button (primary CTA)
- separator (section divider)
- card (optional - for enhanced CTA)

**Installation:**
```bash
npx shadcn@latest add button separator card
```

---

### Navigation

#### Main Header
**Required Components:**
- navigation-menu (desktop navigation)
- sheet (mobile drawer)
- button (CTA in header)

**Installation:**
```bash
npx shadcn@latest add navigation-menu sheet button
```

---

### Services Pages

**Required Components:**
- card (service cards)
- accordion OR tabs (service breakdown)
- badge (service features)
- button (CTAs)
- separator (section dividers)

**Optional:**
- table (pricing comparison)
- chart (results visualization)

**Installation:**
```bash
npx shadcn@latest add card accordion tabs badge button separator
```

---

### Case Studies / Portfolio

**Required Components:**
- card (case study cards)
- badge (tags)
- avatar (client logos)
- tabs (filtering by category)
- separator (content dividers)

**Optional:**
- table (metrics comparison)
- chart (results visualization)
- dialog (full case study view)
- carousel (related cases)

**Installation:**
```bash
npx shadcn@latest add card badge avatar tabs separator table chart dialog carousel
```

---

### About Page

**Required Components:**
- card (content sections)
- avatar (team photos)
- badge (certifications/awards)
- separator (section dividers)

**Optional:**
- hover-card (team member details)
- accordion (methodology details)
- tabs (content organization)

**Installation:**
```bash
npx shadcn@latest add card avatar badge separator hover-card accordion
```

---

### Blog / Resources

**Required Components:**
- card (blog post cards)
- badge (categories/tags)
- avatar (author photos)
- pagination (post navigation)
- separator (content dividers)

**Optional:**
- tabs (category filtering)
- command (search functionality)
- carousel (related posts)
- skeleton (loading states)

**Installation:**
```bash
npx shadcn@latest add card badge avatar pagination separator tabs skeleton
```

---

### Contact Page

**Required Components:**
- form (form wrapper)
- input (text fields)
- textarea (message field)
- select (service selection)
- label (field labels)
- button (submit button)
- sonner (success/error notifications)

**Optional:**
- calendar (appointment booking)
- dialog (confirmation)

**Installation:**
```bash
npx shadcn@latest add form input textarea select label button sonner
```

---

### Footer

**Required Components:**
- separator (column dividers)
- button (link variant for footer links)

**Optional:**
- input (newsletter signup)
- badge (social icons)

**Installation:**
```bash
npx shadcn@latest add separator button input
```

---

## Dark Theme Configuration

### Recommended Theme Preset
**Choose ONE:**
- `slate` - Neutral, professional (RECOMMENDED)
- `zinc` - Modern, tech-focused
- `neutral` - Balanced, versatile
- `gray` - Classic, timeless
- `stone` - Warm, organic

### Custom Color Palette (Based on PRD Inspiration)

Create or modify `app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 4%; /* #0a0a0a - Deep black */
    --foreground: 0 0% 96%; /* #f5f5f5 - Off-white */

    --primary: 328 97% 52%; /* #FC0B77 - Vibrant pink (ThatLot inspired) */
    --primary-foreground: 0 0% 100%;

    --secondary: 0 0% 10%; /* #1a1a1a - Slightly lighter black */
    --secondary-foreground: 0 0% 96%;

    --accent: 0 0% 16%; /* #2a2a2a - Card backgrounds */
    --accent-foreground: 0 0% 96%;

    --muted: 0 0% 10%;
    --muted-foreground: 0 0% 53%; /* #888888 */

    --card: 0 0% 10%;
    --card-foreground: 0 0% 96%;

    --border: 0 0% 16%; /* #2a2a2a */
    --input: 0 0% 16%;
    --ring: 328 97% 52%; /* Match primary for focus rings */

    --radius: 0.5rem; /* Adjust for more/less rounded corners */
  }
}
```

### Alternative Accent Colors (from PRD inspiration)

**Electric Blue (LeftClick AI inspired):**
```css
--primary: 210 100% 50%; /* #0080ff */
```

**Neon Green:**
```css
--primary: 142 76% 36%; /* #16a34a */
```

**Pastel Accents (KOTA inspired):**
```css
--accent-mint: 135 24% 84%; /* #d7e1d3 */
--accent-blue: 186 62% 80%; /* #a8e1ec */
--accent-lavender: 252 53% 82%; /* #c4b5f3 */
```

---

## Implementation Timeline

### Week 1: Foundation Setup
**Day 1-2:**
```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Choose:
# - Style: Default
# - Base color: Slate
# - CSS variables: Yes
```

**Day 3-4:**
```bash
# Install core components
npx shadcn@latest add button card badge avatar separator skeleton spinner tooltip
```

**Day 5-7:**
- Configure dark theme colors
- Test components in isolation
- Create component documentation

---

### Week 2: Forms & Navigation
**Day 8-10:**
```bash
# Install form components
npx shadcn@latest add form input textarea select label field

# Install navigation
npx shadcn@latest add navigation-menu sheet
```

**Day 11-14:**
- Build contact form
- Implement main navigation
- Test mobile navigation

---

### Week 3: Content Display
**Day 15-17:**
```bash
# Install content components
npx shadcn@latest add carousel chart accordion tabs pagination
```

**Day 18-21:**
- Implement case study cards
- Build blog layout
- Add client logo carousel

---

### Week 4: Polish & Advanced Features
**Day 22-28:**
```bash
# Install feedback components
npx shadcn@latest add dialog sonner popover alert progress

# Optional advanced
npx shadcn@latest add command calendar sidebar
```

- Add toast notifications
- Implement loading states
- Polish animations

---

## Component Dependencies

### Core Dependencies (Auto-installed)
```json
{
  "@radix-ui/react-slot": "^1.0.2",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

### Component-Specific Dependencies

**Forms:**
```json
{
  "react-hook-form": "^7.48.0",
  "@hookform/resolvers": "^3.3.2",
  "zod": "^3.22.4"
}
```

**Carousel:**
```json
{
  "embla-carousel-react": "^8.0.0"
}
```

**Charts:**
```json
{
  "recharts": "^2.10.0"
}
```

**Toast Notifications:**
```json
{
  "sonner": "^1.2.0"
}
```

**Date Pickers:**
```json
{
  "date-fns": "^2.30.0",
  "react-day-picker": "^8.9.1"
}
```

---

## Performance Considerations

### Bundle Size Impact
| Component Category | Estimated Size (gzipped) |
|-------------------|-------------------------|
| Core UI (button, card, badge) | ~15KB |
| Forms (complete) | ~30KB |
| Navigation | ~20KB |
| Carousel | ~25KB |
| Charts | ~45KB |
| All Must-Have Components | ~150KB |

### Optimization Tips
1. **Tree Shaking:** Only import components you use
2. **Code Splitting:** Load heavy components (carousel, charts) lazily
3. **Server Components:** Use React Server Components where possible
4. **Minimize Client JS:** Keep interactive components minimal

---

## Best Practices

### 1. Consistent Styling
Use Tailwind classes consistently across all custom styling:
```tsx
// Good
<Card className="hover:shadow-lg transition-shadow duration-300">

// Avoid
<Card style={{ boxShadow: '...' }}>
```

### 2. Accessibility
shadcn/ui components are accessible by default. Maintain this by:
- Always providing labels for form fields
- Using semantic HTML
- Testing keyboard navigation
- Ensuring sufficient color contrast

### 3. Dark Theme Testing
Test ALL components in dark mode:
```tsx
<html className="dark">
  {/* Your app */}
</html>
```

### 4. Customization
Customize via Tailwind config and CSS variables, not by editing component source:
```css
/* globals.css */
@layer base {
  :root {
    --primary: 328 97% 52%; /* Custom primary color */
  }
}
```

### 5. Component Composition
Build complex UIs by composing simple components:
```tsx
<Card>
  <CardHeader>
    <Avatar />
    <CardTitle />
    <Badge />
  </CardHeader>
  <CardContent>
    <Chart />
  </CardContent>
  <CardFooter>
    <Button />
  </CardFooter>
</Card>
```

---

## Troubleshooting

### Common Issues

**1. Components not styled correctly**
- Ensure Tailwind CSS is configured properly
- Check `tailwind.config.js` includes component paths
- Verify CSS variables are defined in `globals.css`

**2. Dark mode not working**
- Check HTML has `className="dark"`
- Verify dark mode colors in CSS variables
- Test with `<html className="dark">` forced

**3. Form validation not working**
- Ensure `react-hook-form` and `zod` are installed
- Check form schema definition
- Verify `FormField` usage is correct

**4. Carousel not scrolling**
- Check `embla-carousel-react` is installed
- Verify carousel wrapper has defined width
- Test with simpler configuration first

---

## Additional Resources

### Official Documentation
- **shadcn/ui Docs:** https://ui.shadcn.com
- **Radix UI Docs:** https://www.radix-ui.com
- **Tailwind CSS Docs:** https://tailwindcss.com

### Component Examples
- **shadcn/ui Examples:** https://ui.shadcn.com/examples
- **Component Demos:** https://ui.shadcn.com/docs/components

### Community
- **GitHub:** https://github.com/shadcn-ui/ui
- **Discord:** shadcn/ui Discord server
- **Twitter:** @shadcn

---

## Summary

This component selection provides:
- ✅ **Complete PRD Coverage** - Every feature can be built
- ✅ **Dark Theme Optimized** - Perfect for agency aesthetic
- ✅ **Production Ready** - Battle-tested components
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Performant** - Small bundle, tree-shakeable
- ✅ **Flexible** - Full source code customization
- ✅ **Animation Ready** - Full Framer Motion integration

**Recommended Starting Point:**
Install the Essential Kit (18 must-have components) and begin building the homepage. Add should-have and nice-to-have components as needed during development.

**Next Steps:**
1. Initialize shadcn/ui in project (`npx shadcn@latest init`)
2. Configure dark theme (slate or zinc preset)
3. Install Framer Motion (`npm install framer-motion`)
4. Install Essential Kit (18 components)
5. Set up animation system (see `framer_motion_animations.md`)
6. Build homepage hero section with animations
7. Iterate and add components as needed

**Related Guides:**
- `framer_motion_animations.md` - Complete animation system with Framer Motion
- `image_generation_guide.md` - AI image generation with fal AI
- `initial_prd.md` - Full project requirements and specifications

---

**Document Version:** 1.0
**Last Updated:** 2025-11-11
**Status:** Ready for Implementation
