# UI/UX Designer Portfolio Design Guidelines for Iraj

## Design Approach
**Reference-Based Approach**: Inspired by Dyniza portfolio aesthetic - minimal, sophisticated, and breathable design with elegant animations and clean typography.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Background: 248 246 243 (warm cream/beige)
- Text Primary: 20 20 20 (near black)
- Text Secondary: 115 115 115 (medium gray)
- Accent: 59 130 246 (sophisticated blue)

**Dark Mode:**
- Background: 12 12 12 (deep black)
- Text Primary: 248 246 243 (warm white)
- Text Secondary: 163 163 163 (light gray)

### B. Typography
**Primary Font:** Inter or Satoshi via Google Fonts
- Hero Name: 3xl-4xl font weight 300 (light)
- Hero Tagline: xl font weight 400 (regular)
- Section Headers: 2xl font weight 500 (medium)
- Body Text: base font weight 400 (regular)
- Navigation: sm font weight 500 (medium)

### C. Layout System
**Spacing Units:** Tailwind spacing of 4, 8, 16, 24, 32 for consistent rhythm
- Container max-width: 7xl with auto margins
- Section padding: py-24 or py-32
- Component gaps: gap-8 or gap-16

### D. Component Library

**Navigation:**
- Fixed header with glass morphism effect
- Smooth scroll navigation with active state indicators
- Mobile hamburger menu with slide-in animation

**Hero Section:**
- Large circular profile image (300px) with subtle shadow
- Elegant name typography with staggered letter animations
- Subtitle with typewriter or fade-in effect
- Scroll indicator with gentle bounce animation

**Portfolio Grid:**
- 2-column grid on desktop, 1-column on mobile
- Project cards with hover lift effect and scale transform
- Overlay on hover with project title and brief description
- Smooth transitions (300ms ease-in-out)

**About Section:**
- Split layout with image and text
- Process steps with animated progress indicators
- Skill badges with subtle hover animations

**Contact Section:**
- Clean form with floating labels
- Social media icons with hover color transitions
- Background pattern or subtle gradient

### E. Animations
**Entrance Animations:**
- Staggered fade-in for text elements
- Slide-up for cards and sections
- Scale animations for interactive elements

**Interaction Animations:**
- Smooth hover states on all clickable elements
- Page transitions with opacity and transform
- Parallax scrolling for background elements
- Magnetic cursor effect for buttons

**Performance Considerations:**
- Use `transform` and `opacity` for GPU acceleration
- Implement intersection observer for scroll-triggered animations
- Prefers-reduced-motion support

## Images
**Hero Profile Image:** Professional headshot, circular crop, high resolution (600x600px minimum)
**Project Thumbnails:** Use provided thumbnails - Al-Khidmat app, Panah project, IKEA redesign
**About Section:** Additional lifestyle or workspace photo showing design process
**Background Elements:** Subtle geometric patterns or gradient overlays for visual interest

## Key Features
- Smooth scroll behavior throughout
- Responsive design with mobile-first approach
- Loading animations on page entry
- Project case study modals or dedicated pages
- Dark/light mode toggle with smooth transition
- Performance optimized with lazy loading for images

## Sophistication Elements
- Generous whitespace for breathability
- Subtle shadows and depth layers
- Professional typography hierarchy
- Consistent interaction feedback
- Elegant color transitions
- Refined micro-interactions