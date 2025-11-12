# AI Image Generation Guide
## Leap North Agency Website - fal AI Integration

**Last Updated:** 2025-11-11
**Agency Name:** Leap North
**Tagline:** "True North. True Growth."
**Model:** `fal-ai/bytedance/seedream/v4/text-to-image`
**Total Images Required:** 55 images
**Color Scheme:** Electric Blue (#0EA5E9) with cyan accents (#06B6D4)

---

## Table of Contents
1. [Overview](#overview)
2. [fal AI Configuration](#fal-ai-configuration)
3. [Prompt Engineering Guidelines](#prompt-engineering-guidelines)
4. [Image Requirements by Section](#image-requirements-by-section)
5. [Prompt Templates](#prompt-templates)
6. [Image Specifications](#image-specifications)
7. [Optimization Workflow](#optimization-workflow)
8. [Video Placeholder Strategy](#video-placeholder-strategy)

---

## Overview

This guide provides comprehensive instructions for generating all website images for **Leap North** agency using **fal AI MCP** with the `seedream/v4/text-to-image` model. All images will follow a consistent dark theme with **electric blue** color scheme, minimalist aesthetic matching the primary inspiration site (LeftClick AI) plus ThatLot, KOTA, and Bad Marketing.

### Why AI-Generated Images?

1. **Brand Consistency:** Unified visual language across entire site
2. **Cost Effective:** No stock photo licenses or photographer fees
3. **Fast Iteration:** Generate variations quickly
4. **Perfect Fit:** Images exactly match requirements
5. **Dark Theme Optimized:** Generated specifically for dark backgrounds

### Image Generation Principles

- **Dark Theme First:** All images optimized for dark backgrounds
- **Minimalist Aesthetic:** Clean, uncluttered compositions
- **Tech-Focused:** Abstract, modern, technology-inspired
- **High Contrast:** Bold elements that pop against dark backgrounds
- **Professional:** Business-appropriate, sophisticated

---

## fal AI Configuration

### Model Information
- **Model ID:** `fal-ai/bytedance/seedream/v4/text-to-image`
- **Type:** Text-to-image generation
- **Output Format:** PNG (convert to WebP after generation)
- **Quality:** High resolution

### MCP Tool Usage

```typescript
// Example usage with MCP
mcp__fal-ai__generate-image({
  model: "fal-ai/bytedance/seedream/v4/text-to-image",
  prompt: "your detailed prompt here",
  image_size: "landscape_16_9", // or appropriate size
  num_images: 1,
  num_inference_steps: 28,
  guidance_scale: 3.5,
  enable_safety_checker: true
})
```

### Available Image Sizes
- `square` - 1:1 ratio (1024x1024) - Service icons, avatars
- `square_hd` - High-def square (1536x1536) - Featured images
- `portrait_4_3` - 4:3 portrait (768x1024) - Vertical sections
- `portrait_16_9` - 16:9 portrait (576x1024) - Mobile hero images
- `landscape_4_3` - 4:3 landscape (1024x768) - Blog featured images
- `landscape_16_9` - 16:9 landscape (1024x576) - Hero backgrounds

---

## Prompt Engineering Guidelines

### Core Prompt Structure

```
[Subject] + [Style] + [Mood/Atmosphere] + [Technical Details] + [Color Palette] + [Composition]
```

### Essential Keywords for Agency Aesthetic

#### Style Keywords
- minimalist
- clean
- modern
- abstract
- geometric
- gradient
- sleek
- professional
- sophisticated
- contemporary

#### Technical Keywords
- dark background
- high contrast
- black background
- dark theme
- moody lighting
- dramatic lighting
- cinematic
- studio lighting

#### Color Palette Keywords (PRIMARY: Electric Blue Theme)
- **Electric Blue (PRIMARY):** "electric blue (#0EA5E9)", "vibrant blue accent", "neon blue glow"
- **Cyan Accent:** "cyan (#06B6D4)", "turquoise highlights", "teal accent"
- **Supporting Blues:** "deep blue", "sky blue", "cobalt", "azure"
- **Tech Colors:** "futuristic blue", "digital blue", "tech cyan", "holographic blue"
- **Avoid:** "pink", "magenta", "warm colors", "red", "orange", "yellow"

#### Negative Prompts (What to Avoid)
Add to every prompt: `--no bright lighting, white background, cluttered, busy, amateur, low quality, blurry, pixelated, watermark, text, logo, pink, magenta, warm colors, red, orange`

### Example Well-Structured Prompt (Electric Blue Theme)

```
"Abstract geometric shapes floating in space, minimalist composition, deep black background (#0a0a0a), electric blue (#0EA5E9) and cyan (#06B6D4) gradients, high contrast, cinematic lighting, professional 3D render, sleek and modern, technology theme, futuristic aesthetic, depth of field --no bright lighting, white background, cluttered, pink, warm colors"
```

---

## Image Requirements by Section

### 1. HOMEPAGE IMAGES

#### Hero Section Background (Priority: HIGH)
**Quantity:** 1 primary + 2 alternatives
**Size:** `landscape_16_9` (1024x576)
**Purpose:** Main hero background that sets the tone

**Prompt Template:**
```
"[Abstract/geometric/technological subject], minimalist composition, deep black background (#0a0a0a), [vibrant pink/electric blue] accent, dramatic lighting, high contrast, sleek modern design, professional quality, cinematic atmosphere, technology and innovation theme, subtle gradient, depth and dimension --no bright lighting, white background, cluttered, busy, text"
```

**Example Prompts:**

**Option 1: Geometric Abstract**
```
"Floating geometric shapes and wireframe structures, minimalist composition, deep black background, hot pink (#FC0B77) and electric blue gradients, dramatic lighting, high contrast, sleek modern 3D render, professional quality, cinematic atmosphere, technology innovation theme, subtle depth of field --no bright lighting, white background, cluttered, busy, text, watermark"
```

**Option 2: Tech Network**
```
"Abstract network of glowing nodes and connections, minimalist composition, dark black background, neon blue and magenta lines, futuristic technology theme, high contrast, cinematic lighting, professional digital art, clean and modern, data visualization aesthetic --no bright lighting, white background, cluttered, busy, realistic, text"
```

**Option 3: Gradient Flow**
```
"Smooth flowing gradient waves and curves, minimalist abstract composition, pitch black background, vibrant pink to purple gradient flow, modern and sophisticated, high contrast, studio lighting, professional digital art, elegant and clean --no bright lighting, white background, cluttered, detailed, text, logos"
```

---

#### Services Section Backgrounds (Priority: MEDIUM)
**Quantity:** 2 images (Marketing & Automation)
**Size:** `square_hd` (1536x1536) or `landscape_4_3` (1024x768)
**Purpose:** Service card backgrounds or illustrations

**Marketing & Growth Image:**
```
"Abstract growth arrow and upward trending lines, minimalist composition, dark background, vibrant pink (#FC0B77) gradients, modern and professional, data visualization aesthetic, clean geometric shapes, high contrast, cinematic lighting, business growth theme --no bright lighting, white background, cluttered, realistic photos, text"
```

**Business Automation Image:**
```
"Interconnected gears and automated workflow visualization, minimalist abstract composition, dark black background, electric blue and cyan accents, technology and automation theme, geometric shapes, high contrast, professional 3D render, sleek modern design, AI and efficiency concept --no bright lighting, white background, cluttered, mechanical details, text"
```

---

#### Results/Impact Section Background (Priority: MEDIUM)
**Quantity:** 1 image
**Size:** `landscape_16_9` (1024x576)
**Purpose:** Background for statistics and counter section

**Prompt:**
```
"Abstract data visualization with glowing points and connections, minimalist composition, dark black background, vibrant pink and blue gradients, professional dashboard aesthetic, clean and modern, high contrast, cinematic lighting, business analytics theme, sophisticated design --no bright lighting, white background, cluttered, detailed, realistic, text, numbers"
```

---

#### Social Proof Section Background (Priority: LOW)
**Quantity:** 1 image (optional)
**Size:** `landscape_16_9` (1024x576)
**Purpose:** Background for client logo carousel

**Prompt:**
```
"Subtle abstract pattern with soft gradients, minimalist composition, very dark background (#0a0a0a), barely visible texture, professional and clean, non-distracting, elegant design, high contrast --no bright elements, white background, busy patterns, detailed, text"
```

---

### 2. SERVICES PAGE IMAGES

#### Services Hero Images (Priority: HIGH)
**Quantity:** 2 images (1 per service page)
**Size:** `landscape_16_9` (1024x576)

**Marketing Services Hero:**
```
"Abstract megaphone and communication waves radiating outward, minimalist composition, dark black background, hot pink and purple gradients, modern marketing and advertising theme, clean geometric shapes, high contrast, professional 3D render, cinematic lighting, dynamic energy --no bright lighting, white background, realistic, cluttered, text"
```

**Automation Services Hero:**
```
"Abstract robotic arm or automated assembly line visualization, minimalist composition, dark background, electric blue and cyan accents, technology and efficiency theme, sleek modern design, geometric shapes, high contrast, professional 3D art, futuristic and clean --no bright lighting, white background, mechanical details, cluttered, text"
```

---

#### Service Feature Icons (Priority: MEDIUM)
**Quantity:** 10-12 icons (5-6 per service)
**Size:** `square` (1024x1024)
**Purpose:** Individual service feature illustrations

**Icon Prompt Template:**
```
"Single [service icon subject] on dark background, minimalist icon design, [accent color], simple geometric shapes, clean and modern, high contrast, professional quality, centered composition, technology theme --no bright lighting, white background, detailed, realistic, text, multiple objects"
```

**Example Icons:**

**SEO Icon:**
```
"Single magnifying glass with search lines, minimalist icon, electric blue accent, simple geometric shapes, dark black background, clean modern design, high contrast, professional quality, centered --no bright lighting, white background, detailed, text"
```

**Automation Icon:**
```
"Single robotic gear or cog, minimalist icon, hot pink accent, simple geometric design, dark background, modern and clean, high contrast, professional quality, centered composition --no bright lighting, white background, complex details, text"
```

---

### 3. CASE STUDIES PAGE IMAGES

#### Case Study Featured Images (Priority: HIGH)
**Quantity:** 3-5 images (1 per case study)
**Size:** `landscape_4_3` (1024x768)
**Purpose:** Main case study card images

**Prompt Template:**
```
"Abstract visualization of [case study outcome - growth/efficiency/transformation], minimalist composition, dark background, [brand accent colors], professional business theme, clean geometric shapes, data visualization aesthetic, high contrast, modern and sophisticated --no bright lighting, white background, cluttered, realistic photos, text, logos"
```

**Example Case Studies:**

**E-commerce Growth Case Study:**
```
"Abstract upward trending chart with shopping cart visualization, minimalist composition, dark black background, vibrant pink and green gradients, e-commerce and growth theme, clean geometric shapes, professional digital art, high contrast, modern business aesthetic --no bright lighting, white background, cluttered, realistic, text, numbers"
```

**Workflow Automation Case Study:**
```
"Abstract automated pipeline with smooth flowing connections, minimalist composition, dark background, electric blue and cyan colors, efficiency and automation theme, clean geometric design, professional 3D render, high contrast, modern and sleek --no bright lighting, white background, mechanical details, cluttered, text"
```

---

#### Case Study Results Visualizations (Priority: MEDIUM)
**Quantity:** 6-10 images (2 per case study)
**Size:** `square` (1024x1024)
**Purpose:** Before/after or process diagram illustrations

**Before/After Prompt:**
```
"Split composition showing transformation from chaos to order, minimalist abstract design, dark background, left side muted colors, right side vibrant [accent color], clean geometric shapes, professional infographic style, high contrast --no bright lighting, white background, text, detailed, realistic"
```

---

### 4. ABOUT PAGE IMAGES

#### About Hero Image (Priority: MEDIUM)
**Quantity:** 1 image
**Size:** `landscape_16_9` (1024x576)

**Prompt:**
```
"Abstract connected team network or collaboration visualization, minimalist composition, dark background, warm color gradients (pink and purple), human-centric theme, clean geometric shapes, professional and welcoming, high contrast, modern design --no bright lighting, white background, realistic people, cluttered, text"
```

---

#### Values/Principles Section Icons (Priority: LOW)
**Quantity:** 4-6 icons (1 per value)
**Size:** `square` (1024x1024)

**Prompt Template:**
```
"Single abstract icon representing [value - innovation/integrity/results/collaboration], minimalist design, [accent color], simple geometric shapes, dark background, modern and professional, high contrast, centered composition --no bright lighting, white background, detailed, realistic, text"
```

---

### 5. BLOG POST IMAGES

#### Blog Featured Images (Priority: HIGH)
**Quantity:** 5-10 images (for initial blog posts)
**Size:** `landscape_4_3` (1024x768)
**Purpose:** Blog post header images

**Prompt Template:**
```
"Abstract visualization of [blog topic], minimalist composition, dark background, [accent colors], modern editorial style, clean geometric shapes, professional digital art, high contrast, [specific topic keywords] theme --no bright lighting, white background, cluttered, text, realistic photos"
```

**Example Blog Topics:**

**"How to Automate Your Marketing":**
```
"Abstract gears and digital marketing icons merging together, minimalist composition, dark black background, hot pink and blue gradients, automation and marketing theme, clean geometric shapes, professional digital art, high contrast, modern business aesthetic --no bright lighting, white background, cluttered, realistic, text"
```

**"The Future of AI in Business":**
```
"Abstract AI neural network with glowing nodes, minimalist composition, dark background, electric blue and purple gradients, artificial intelligence theme, futuristic design, clean geometric shapes, professional 3D render, high contrast, technology innovation aesthetic --no bright lighting, white background, cluttered, realistic, text"
```

**"ROI Metrics That Matter":**
```
"Abstract dashboard with glowing data points and growth indicators, minimalist composition, dark background, vibrant pink and green accents, analytics and business metrics theme, clean geometric visualization, professional digital art, high contrast --no bright lighting, white background, cluttered, numbers, text"
```

---

### 6. CONTACT PAGE IMAGES

#### Contact Hero Image (Priority: LOW)
**Quantity:** 1 image
**Size:** `landscape_16_9` (1024x576)

**Prompt:**
```
"Abstract communication network with message bubbles and connection lines, minimalist composition, dark background, vibrant blue and pink gradients, communication and connection theme, clean geometric shapes, professional modern design, high contrast, welcoming aesthetic --no bright lighting, white background, cluttered, realistic, text"
```

---

### 7. DECORATIVE & BACKGROUND IMAGES

#### Abstract Pattern Backgrounds (Priority: LOW)
**Quantity:** 5-8 images
**Size:** `landscape_16_9` (1024x576)
**Purpose:** Section backgrounds, decorative elements

**Prompt Template:**
```
"Subtle abstract [pattern type - geometric/gradient/texture], minimalist composition, very dark background, barely visible [accent color] elements, non-distracting, professional and elegant, high contrast, modern design, suitable as website background --no bright elements, white background, busy patterns, detailed, text"
```

**Example Patterns:**

**Gradient Mesh:**
```
"Soft gradient mesh with gentle color transitions, minimalist abstract composition, pitch black background, subtle pink to purple gradients, elegant and modern, non-distracting, professional quality, smooth and clean --no bright colors, white background, patterns, detailed, text"
```

**Geometric Grid:**
```
"Subtle geometric grid lines fading into darkness, minimalist composition, very dark background (#0a0a0a), faint electric blue lines, modern tech aesthetic, non-distracting, professional and clean --no bright elements, white background, busy patterns, text"
```

---

### 8. TEAM / TESTIMONIAL IMAGES

#### Team Member Avatars (Priority: LOW)
**Recommendation:** Use shadcn/ui avatar component with initials fallback instead of AI-generated photos
**Reason:** Maintains authenticity; AI photos can look uncanny

**Alternative:** Abstract avatar backgrounds
**Quantity:** 3-5 backgrounds
**Size:** `square` (1024x1024)

**Prompt:**
```
"Abstract gradient background suitable for profile photo, minimalist composition, dark background with [accent color] gradient, smooth and professional, clean and modern, high contrast, elegant design --no patterns, detailed, text, faces"
```

---

## Image Specifications

### Technical Requirements

| Image Type | Dimensions | Aspect Ratio | File Format | Max File Size |
|------------|-----------|--------------|-------------|---------------|
| Hero Backgrounds | 1024x576 | 16:9 | WebP (PNG source) | 200KB |
| Service Images | 1024x768 | 4:3 | WebP (PNG source) | 150KB |
| Case Study Cards | 1024x768 | 4:3 | WebP (PNG source) | 150KB |
| Blog Featured | 1024x768 | 4:3 | WebP (PNG source) | 150KB |
| Service Icons | 1024x1024 | 1:1 | WebP/SVG | 50KB |
| Patterns | 1024x576 | 16:9 | WebP (PNG source) | 100KB |
| Avatars | 1024x1024 | 1:1 | WebP (PNG source) | 75KB |

### Responsive Image Strategy

Generate images at highest quality, then create responsive versions:

```typescript
// Next.js Image component will handle conversion
<Image
  src="/images/hero-background.png"
  alt="Hero background"
  width={1024}
  height={576}
  priority
  quality={90}
  // Automatically generates WebP and multiple sizes
/>
```

**Recommended Sizes for srcSet:**
- Mobile: 640w, 768w
- Tablet: 1024w, 1280w
- Desktop: 1536w, 1920w

---

## Optimization Workflow

### Step-by-Step Process

#### 1. Generate Image with fal AI
```bash
# Use MCP tool to generate
mcp__fal-ai__generate-image({
  model: "fal-ai/bytedance/seedream/v4/text-to-image",
  prompt: "your optimized prompt here",
  image_size: "landscape_16_9",
  num_images: 3, // Generate multiple options
  guidance_scale: 3.5
})
```

#### 2. Select Best Variation
- Review all generated options
- Choose image with best composition
- Ensure it works on dark background
- Verify high contrast and readability

#### 3. Save to Project
```bash
# Save to public/images directory
/public/images/
  /hero/
  /services/
  /case-studies/
  /blog/
  /backgrounds/
  /icons/
```

#### 4. Optimize Image
Use Next.js Image component for automatic optimization:
- Converts to WebP
- Generates responsive sizes
- Lazy loads below the fold
- Applies blur placeholder

#### 5. Test in Context
- View on dark background
- Test at different screen sizes
- Verify performance impact
- Ensure accessibility (alt text)

---

## Video Placeholder Strategy

### When to Use Video Placeholders
- Hero section animations
- Case study demonstrations
- Service explanations
- Testimonial videos

### Placeholder Design

**Option 1: Image with Play Button**
Generate a still image representing video content:

```
"Cinematic still frame of [video subject], minimalist composition, dark background, professional quality, high contrast, modern and clean, paused video aesthetic --no bright lighting, white background, text, play button"
```

Add play button overlay using shadcn/ui button component:
```tsx
<div className="relative group">
  <Image src="/video-placeholder.png" alt="Video" />
  <Button
    variant="ghost"
    size="lg"
    className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-primary/80 hover:bg-primary"
  >
    <PlayIcon className="w-10 h-10" />
  </Button>
  <Badge className="absolute top-4 right-4">Coming Soon</Badge>
</div>
```

**Option 2: Animated Graphic Instead**
Generate abstract animation-style image:

```
"Abstract motion blur effect suggesting movement and animation, minimalist composition, dark background, vibrant color trails, dynamic energy, modern and professional, high contrast --no bright lighting, white background, static, text"
```

**Option 3: "Video Coming Soon" Card**
Use shadcn/ui card component with badge:
```tsx
<Card className="bg-accent">
  <CardHeader>
    <Badge variant="secondary">Video Coming Soon</Badge>
  </CardHeader>
  <CardContent>
    <p>Dynamic content being prepared...</p>
  </CardContent>
</Card>
```

---

## Quality Control Checklist

Before finalizing any generated image, verify:

### Visual Quality
- [ ] High resolution (no pixelation)
- [ ] Sharp and clear (not blurry)
- [ ] Good composition (balanced, not cluttered)
- [ ] No artifacts or glitches
- [ ] No unwanted text or watermarks

### Brand Consistency
- [ ] Works on dark background
- [ ] Matches color palette (pink/blue accents)
- [ ] Minimalist aesthetic maintained
- [ ] Professional quality
- [ ] Fits agency theme (tech, modern, sophisticated)

### Technical Requirements
- [ ] Correct dimensions
- [ ] Appropriate file size (<200KB after optimization)
- [ ] WebP format ready
- [ ] Descriptive alt text written
- [ ] Proper naming convention (`hero-marketing.png`)

### Accessibility
- [ ] Sufficient contrast for text overlays
- [ ] Not essential for understanding content
- [ ] Meaningful alt text provided
- [ ] Works without color (for colorblind users)

---

## Prompt Optimization Tips

### DO's:
✅ Be specific about composition and style
✅ Always mention "dark background" or "black background"
✅ Specify exact color accents (#FC0B77 for pink)
✅ Use "minimalist" and "clean" consistently
✅ Include "high contrast" for visibility
✅ Add "professional" and "modern" for quality
✅ Mention "no text" to avoid AI-generated text
✅ Generate 2-3 variations per image

### DON'Ts:
❌ Don't leave prompts vague
❌ Don't forget negative prompts
❌ Don't request realistic photos (abstract is better)
❌ Don't include complex scenes (keep it simple)
❌ Don't use white or bright backgrounds
❌ Don't request text or logos (AI struggles with text)
❌ Don't over-complicate compositions

---

## Example Generation Session

### Goal: Generate Homepage Hero Background

**Step 1: Prepare Prompt**
```
"Abstract geometric wireframe structures floating in space, minimalist composition, deep black background (#0a0a0a), hot pink (#FC0B77) and electric blue gradients, dramatic cinematic lighting, high contrast, sleek modern 3D render, professional quality, technology innovation theme, subtle depth of field, elegant and sophisticated --no bright lighting, white background, cluttered, busy, text, watermark, realistic"
```

**Step 2: Generate with fal AI MCP**
```typescript
mcp__fal-ai__generate-image({
  model: "fal-ai/bytedance/seedream/v4/text-to-image",
  prompt: "Abstract geometric wireframe structures floating in space, minimalist composition, deep black background (#0a0a0a), hot pink (#FC0B77) and electric blue gradients, dramatic cinematic lighting, high contrast, sleek modern 3D render, professional quality, technology innovation theme, subtle depth of field, elegant and sophisticated --no bright lighting, white background, cluttered, busy, text, watermark, realistic",
  image_size: "landscape_16_9",
  num_images: 3,
  num_inference_steps: 28,
  guidance_scale: 3.5,
  enable_safety_checker: true
})
```

**Step 3: Review Results**
- Generated 3 variations
- Selected variation with best composition
- Verified it works on dark website background

**Step 4: Save & Optimize**
```bash
# Save to project
/public/images/hero/homepage-hero.png

# Next.js will automatically:
# - Convert to WebP
# - Generate responsive sizes
# - Add lazy loading
```

**Step 5: Implement**
```tsx
<section className="relative min-h-screen bg-black">
  <Image
    src="/images/hero/homepage-hero.png"
    alt="Abstract technology visualization"
    fill
    priority
    quality={90}
    className="object-cover opacity-40"
  />
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</section>
```

---

## Troubleshooting Common Issues

### Issue: Generated image too bright for dark theme
**Solution:** Add "very dark background", "pitch black", "deep black (#0a0a0a)" to prompt

### Issue: Image too busy or cluttered
**Solution:** Emphasize "minimalist", "clean", "simple composition", "negative space"

### Issue: Colors don't match brand
**Solution:** Specify exact hex codes (#FC0B77) and limit color palette in prompt

### Issue: AI generated unwanted text
**Solution:** Add "--no text, letters, words, typography, logos" to negative prompt

### Issue: Low contrast elements
**Solution:** Add "high contrast", "dramatic lighting", "bold colors" to prompt

### Issue: Unrealistic or uncanny results
**Solution:** Use "abstract", "geometric", "visualization" instead of "realistic" or "photographic"

---

## Complete Image Inventory

### Priority 1: MUST-HAVE (Week 3-4)
1. Homepage Hero Background (1)
2. Marketing Service Image (1)
3. Automation Service Image (1)
4. Case Study Featured Images (3)
5. Blog Featured Images (5)

**Total:** 11 images

---

### Priority 2: SHOULD-HAVE (Week 4-5)
6. Results Section Background (1)
7. Services Page Heroes (2)
8. Service Icons (10)
9. Case Study Visualizations (6)
10. About Page Hero (1)
11. Blog Featured Images - Additional (5)

**Total:** 25 images

---

### Priority 3: NICE-TO-HAVE (Week 5+)
12. Abstract Pattern Backgrounds (5)
13. Social Proof Background (1)
14. Contact Page Hero (1)
15. Values/Principles Icons (6)
16. Avatar Backgrounds (3)
17. Video Placeholders (3)

**Total:** 19 images

---

**Grand Total:** 55 images across all priorities

---

## Budget & Time Estimates

### Image Generation Time
- **Per Image:** 30-60 seconds (fal AI generation)
- **Selection & Review:** 2-3 minutes per image
- **Optimization:** 1-2 minutes per image
- **Implementation:** 2-3 minutes per image

**Total Time per Image:** ~10 minutes
**Total Project Time:** 9-10 hours (for all 55 images)

### Cost Considerations
- **fal AI MCP:** Check current API pricing
- **Alternative:** Use free tier if available
- **Optimization:** Free (Next.js built-in)

---

## Next Steps

1. **Review this guide** completely
2. **Set up fal AI MCP** if not already configured
3. **Start with Priority 1 images** (11 must-have images)
4. **Generate 2-3 variations** of each image
5. **Test in dark theme** context
6. **Optimize and implement** with Next.js Image component
7. **Move to Priority 2** once homepage is complete

---

## Additional Resources

### fal AI Documentation
- **Model Info:** https://fal.ai/models/bytedance/seedream/v4
- **API Reference:** https://docs.fal.ai

### Next.js Image Optimization
- **Image Component:** https://nextjs.org/docs/api-reference/next/image
- **Image Optimization:** https://nextjs.org/docs/basic-features/image-optimization

### Prompt Engineering
- **Best Practices:** Focus on composition, lighting, style
- **Negative Prompts:** Always specify what to avoid
- **Iteration:** Generate multiple versions, refine prompts

---

**Document Version:** 1.0
**Last Updated:** 2025-11-11
**Status:** Ready for Implementation

**Happy Generating! 🎨✨**
