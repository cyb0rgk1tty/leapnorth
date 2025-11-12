# Leap North - Marketing Agency Website

**True North. True Growth.**

A high-performance marketing agency website built with Next.js 15, featuring interactive particle animations, optimized performance, and a modern dark theme with Canadian crimson red accents.

## 🚀 Live Site

- **Production URL**: [To be added after Vercel deployment]
- **Development Server**: `http://localhost:3002`

## ✨ Features

- **Interactive Particle System**: Custom-built canvas animation with cursor repulsion physics
- **Performance Optimized**: WebP images, lazy loading, code splitting, <2s load time target
- **Dark Theme**: Crimson red (#DC143C) accents on deep black (#0a0a0a) background
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Ready**: Sitemap, robots.txt, JSON-LD structured data
- **Blog System**: MDX-powered blog with 3 articles
- **Case Studies**: 4 detailed client success stories with interactive charts
- **Contact Form**: Integrated with Resend email API
- **Brand Showcase**: 17 major brand partnerships (Intel, Google, BMW, Rogers, etc.)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion + Custom Canvas Particles
- **Charts**: Recharts (lazy-loaded)
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Icons**: @radix-ui/react-icons

## 📦 Installation

```bash
# Clone the repository
git clone [repository-url]
cd leapnorth

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY and other variables

# Run development server
npm run dev
```

## 🔧 Development

```bash
# Development server (port 3002)
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

## 📁 Project Structure

```
/var/www/leapnorth/
├── app/
│   ├── components/
│   │   ├── animated/          # Framer Motion wrappers
│   │   ├── home/              # Homepage components
│   │   │   ├── algorithmic/   # Particle system
│   │   │   └── LogoSlider.tsx
│   │   ├── case-studies/      # Case study components
│   │   ├── ui/                # shadcn/ui components
│   │   └── Footer.tsx, Header.tsx
│   ├── lib/
│   │   ├── animations/        # Framer Motion variants & hooks
│   │   └── mdx.ts             # MDX utilities
│   ├── api/
│   │   └── contact/route.ts   # Contact form API
│   ├── blog/                  # Blog pages
│   ├── case-studies/          # Case study pages
│   ├── about/                 # About page
│   ├── services/              # Services page
│   ├── contact/               # Contact page
│   └── page.tsx               # Homepage
├── public/
│   ├── images/
│   │   ├── hero/              # Hero backgrounds (WebP)
│   │   ├── logos/             # Brand logos (SVG/PNG)
│   │   ├── services/          # Service images
│   │   ├── about/             # About images
│   │   └── blog/              # Blog images
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
├── content/                   # MDX blog posts
└── planning/                  # Project documentation
```

## 🎨 Design System

### Colors
- **Background**: `#0a0a0a` (Deep Black)
- **Primary**: `#DC143C` (Crimson Red)
- **Secondary**: `#B01030` (Dark Crimson)
- **Glow**: `#E84A5F` (Light Crimson)
- **Foreground**: `#f5f5f5` (Off-White)

### Typography
- **Headings**: Inter (Brand font, uppercase tracking)
- **Body**: Inter
- **Code**: JetBrains Mono

### Particle System Configuration
```typescript
Desktop: 100 particles, 450px cursor radius
Tablet: 60 particles, 300px cursor radius
Mobile: 40 particles, 250px cursor radius
Repulsion Strength: 0.65 (30% enhanced)
Friction: 0.86 (smooth drift)
Velocity Multiplier: 1-6x (cursor speed responsive)
```

## 📊 Performance Optimizations (Phase 1 Complete)

- ✅ Hero images converted to WebP (72% size reduction: 3.5 MB → 961 KB)
- ✅ Icon library optimized (lucide-react removed, saved 44 MB)
- ✅ Flag icons inlined (removed 5.6 MB package)
- ✅ Recharts lazy-loaded with dynamic imports
- ✅ Logo images set to `loading="lazy"`
- ✅ Bundle size reduced by ~15-25%

## 🌐 SEO Features

- Sitemap.xml with all pages
- Robots.txt configured
- JSON-LD structured data for organization
- Meta tags optimized for all pages
- Open Graph tags for social sharing
- Blog posts with full metadata

## 📧 Environment Variables

```env
# Resend Email API
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=hello@leapnorth.co

# Next.js
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables on Vercel
1. Go to Project Settings → Environment Variables
2. Add `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO`
3. Redeploy

## 📝 Content

### Blog Posts (3)
1. "The Future of AI in Digital Marketing"
2. "Automation Strategies That Actually Work"
3. "SEO in 2024: What's Changed and What Hasn't"

### Case Studies (4)
1. TechStart Solutions - SEO Success (285% organic traffic increase)
2. GrowthCo Retail - Automation (85% processing time reduction)
3. FinTech Innovations - AI Chatbot (90% lead response time reduction)
4. LocalService Pro - Local SEO (450% local rankings increase)

### Brand Partnerships (17)
Intel, Google, Rogers, Telus, BMW, Ford, IBM, John Deere, Pandora, Indigo, Canadian Cancer Society, Chick-fil-A, Kawai, Merz Pharma, Compeed, Mederma, Vertex Pharmaceuticals

## 🔄 Recent Updates

### Latest Commit
- Enhanced particle cursor repulsion (30% stronger, wider radius)
- Fixed cursor interaction to work with document-wide tracking
- Updated logo sizes (Google, Rogers, BMW, Vertex enlarged)
- Fixed Canadian flag SVG in footer
- Updated documentation with production status

## 📄 License

[Add your license here]

## 🤝 Contributing

[Add contributing guidelines here]

## 📞 Contact

- **Email**: hello@leapnorth.co
- **Phone**: +1 (234) 567-890
- **Location**: Proudly Canadian 🇨🇦

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
