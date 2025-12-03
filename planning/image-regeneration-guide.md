# Image Regeneration Guide

This document lists all images needed for the Leap North website with dimensions and descriptions for manual regeneration.

**Theme:** Dark background (#0a0a0a) with crimson red (#DC143C) accents
**Style:** Minimalist, professional, modern tech aesthetic

---

## Services Section Images (6 images)

**Directory:** `/public/images/services/`
**Pages:** `/services`, `/` (homepage)

### Main Service Images

| Filename | Dimensions | Description |
|----------|------------|-------------|
| `marketing-services.png` | 1365x1024 | Marketing growth concept, upward trending graphs and charts, crimson red accent lines, dark background, modern business visualization, professional and clean |
| `automation-services.png` | 1365x1024 | Business automation concept, interconnected gears and workflow diagrams, crimson red highlights, dark background, futuristic machinery aesthetic, sleek design |

### Service Icons

| Filename | Dimensions | Description |
|----------|------------|-------------|
| `social-media-icon.png` | 1024x1024 | Social media marketing icon, speech bubbles or social network nodes, crimson red on dark background, minimalist flat design, modern iconography |
| `seo-icon.png` | 1024x1024 | SEO and search concept icon, magnifying glass with graph or ranking arrows, crimson red on dark background, clean minimal style |
| `email-icon.png` | 1024x1024 | Email marketing icon, envelope with notification or automation symbols, crimson red on dark background, modern flat design |
| `ppc-icon.png` | 1024x1024 | Pay-per-click advertising icon, cursor clicking on ad or dollar/target symbol, crimson red on dark background, minimal style |

---

## About Page Images (5 images)

**Directory:** `/public/images/about/`
**Page:** `/about`

| Filename | Dimensions | Description |
|----------|------------|-------------|
| `team-collaboration.png` | 1365x1024 | Abstract team collaboration concept, interconnected human silhouettes or collaborative network, crimson red accents on dark background, professional teamwork visualization |
| `growth-value.png` | 1365x1024 | Strategic growth concept, upward arrows or ascending graph pattern, crimson red on dark background, business success visualization |
| `integrity-value.png` | 1365x1024 | Transparency/integrity concept, clear geometric shapes or handshake silhouette, crimson red accents, dark background, trust visualization |
| `innovation-value.png` | 1365x1024 | Innovation concept, lightbulb with circuit patterns or abstract brain network, crimson red on dark background, creative technology theme |
| `excellence-value.png` | 1365x1024 | Partnership/excellence concept, interlocking shapes or bridge symbol, crimson red accents, dark background, professional collaboration |

---

## Blog Featured Images (5 images)

**Directory:** `/public/images/blog/`
**Pages:** `/blog`, `/blog/[slug]`

| Filename | Dimensions | Description |
|----------|------------|-------------|
| `landing-pages.png` | 1365x1024 | Landing page optimization concept, webpage wireframe with conversion elements, crimson red highlights on dark background, web design visualization |
| `social-media-strategy.png` | 1365x1024 | Social media strategy concept, connected social platform icons or content calendar, crimson red accents, dark background, digital marketing theme |
| `seo-practices.png` | 1365x1024 | SEO best practices concept, search rankings ladder or keyword cloud, crimson red on dark background, search optimization visualization |
| `content-marketing.png` | 1365x1024 | Content marketing concept, document icons with distribution arrows, crimson red highlights, dark background, content strategy visualization |
| `data-analytics.png` | 1365x1024 | Data analytics concept, dashboard with charts and metrics, crimson red accent colors, dark background, business intelligence theme |

---

## Case Studies Images (8 images)

**Directory:** `/public/images/case-studies/`
**Pages:** `/case-studies`, `/case-studies/[slug]`

| Filename | Dimensions | Description |
|----------|------------|-------------|
| `telecom.png` | 1365x1024 | Telecommunications industry concept, network towers or signal waves, crimson red on dark background, connectivity and communication theme |
| `cicd-automation.png` | 1365x1024 | CI/CD automation concept, code deployment pipeline or server infrastructure, crimson red accents, dark background, DevOps visualization |
| `campus-dental.png` | 1365x1024 | Healthcare/dental clinic concept, modern medical facility or patient care symbol, crimson red highlights, dark background, professional healthcare |
| `fintech.png` | 1365x1024 | FinTech concept, digital banking or AI chatbot visualization, crimson red on dark background, financial technology theme |
| `localservice.png` | 1365x1024 | Local services/home services concept, location pin with service icons, crimson red accents, dark background, local business theme |
| `pharma.png` | 1365x1024 | Pharmaceutical industry concept, medical research or pill/molecule visualization, crimson red highlights, dark background, healthcare compliance |
| `automotive.png` | 1365x1024 | Automotive industry concept, car silhouette with digital overlay or app interface, crimson red on dark background, automotive technology |
| `ux-optimization.png` | 1365x1024 | UX design concept, user interface wireframes or user journey visualization, crimson red accents, dark background, design optimization |

---

## Image Specifications Summary

| Category | Count | Dimensions | Aspect Ratio | Directory | Pages |
|----------|-------|------------|--------------|-----------|-------|
| Services (main) | 2 | 1365x1024 | 4:3 | `/public/images/services/` | `/services`, `/` |
| Services (icons) | 4 | 1024x1024 | 1:1 (square) | `/public/images/services/` | `/services`, `/` |
| About values | 5 | 1365x1024 | 4:3 | `/public/images/about/` | `/about` |
| Blog featured | 5 | 1365x1024 | 4:3 | `/public/images/blog/` | `/blog`, `/blog/[slug]` |
| Case studies | 8 | 1365x1024 | 4:3 | `/public/images/case-studies/` | `/case-studies`, `/case-studies/[slug]` |

**Total: 24 images** (excluding team photos and brand logos)

*Note: Hero section uses a custom particle animation system, no background images needed.*

---

## Post-Processing

After generating images:

1. **Convert to WebP** for web optimization:
   ```bash
   convert image.png -quality 85 image.webp
   ```

2. **Optimize PNGs** if keeping PNG format:
   ```bash
   optipng -o5 image.png
   ```

3. Place files in the corresponding `/public/images/` subdirectory

---

## Design Guidelines

- **Background:** Always use deep black (#0a0a0a) or very dark backgrounds
- **Primary accent:** Crimson red (#DC143C)
- **Secondary accents:** Dark crimson (#B01030), light crimson (#E84A5F)
- **Style:** Minimalist, clean, professional, tech-forward
- **Avoid:** Bright backgrounds, cluttered compositions, warm colors (orange, yellow), text in images
