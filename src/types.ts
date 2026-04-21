export interface CaseStudySection {
  id: string;
  label: string;
  title: string;
  body: string;
  items?: { title: string; desc: string; icon?: string; law?: string; badge?: string }[];
  metrics?: { value: string; label: string }[];
  steps?: { title: string; desc: string; subItems?: string[] }[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  challenge: string;
  solution: string;
  role: string;
  images: string[];
  caseStudy?: {
    heroSub: string;
    sections: CaseStudySection[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: "nevada-pick-a-part",
    title: "Redesigning the Auto Parts Yard Check-In Experience",
    category: "Autoparts marketplace custom tablet design",
    year: "2026",
    thumbnail: "/assets/nevada/maxresdefault.jpg",
    description: "How a tablet-first self-service system replaced slow, fixed kiosks and transformed customer flow at Nevada Pic-A-Part's busy yards.",
    challenge: "Fixed kiosks that couldn't flex under pressure. When sales hit or weekends arrived, single-point stations turned into traffic jams.",
    solution: "Move the kiosk to the customer. A flexible tablet system that supports both self-service and employee-assisted modes, unlocking throughput and reducing friction.",
    role: "Full UX + UI Design",
    images: ["/assets/nevada/maxresdefault.jpg", "/assets/nevada/hero.png", "/assets/nevada/yardmap.png", "/assets/nevada/guidelines.png", "/assets/nevada/loading.png", "/assets/nevada/login.png", "/assets/nevada/login_landscape.png", "/assets/nevada/validation.png", "/assets/nevada/login_config.png"],
    caseStudy: {
      heroSub: "How a tablet-first self-service system replaced slow, fixed kiosks and transformed customer flow at Nevada Pic-A-Part's busy yards.",
      sections: [
        {
          id: "overview",
          label: "01 — Overview",
          title: "Nevada's #1 used auto parts yard had a congestion problem",
          body: "Nevada Pic-A-Part operates busy pick-a-part yards where customers walk in, pull their own parts, and pay. Every visit starts with a mandatory check-in — but the existing fixed kiosk stations were creating a serious bottleneck, especially during sales days and peak hours. The goal was to rethink this experience from the ground up."
        },
        {
          id: "problem",
          label: "02 — The Problem",
          title: "Fixed kiosks that couldn't flex under pressure",
          body: "When a sale was announced or weekends hit, the single-point kiosk stations turned into traffic jams. The system had no room to breathe — neither physically nor operationally.",
          items: [
            { title: "Queue Buildup", desc: "During promotions and weekends, lines at fixed kiosks stretched long. No way to add capacity without expensive hardware." },
            { title: "Staff Can't Assist", desc: "Employees couldn't bring the check-in to the customer. The kiosk was the only way in, and it was always in one spot." },
            { title: "Language Friction", desc: "A significant Spanish-speaking customer base had to navigate English-first kiosk flows with no easy language toggle." },
            { title: "Rigid Identity Verification", desc: "A single verification method didn't accommodate all customer comfort levels, slowing down the process for everyone." }
          ]
        },
        {
          id: "opportunity",
          label: "03 — The Opportunity",
          title: "Move the kiosk to the customer, not the other way around",
          body: "The insight was simple: instead of one fixed station everyone must go to, create a system that could live on multiple tablets — mounted on stands, or handed to customers by staff. The hardware flexibility would unlock the flow flexibility."
        },
        {
          id: "flows",
          label: "04 — User Flows",
          title: "Two modes, one cohesive system",
          body: "The entire system branches at the configuration level, not in the UI. Customers always see the same clean interface — only the internal routing differs.",
          steps: [
            { title: "Welcome screen — Phone number + Language", desc: "Customer enters phone number and optional name. Chooses 'Continue in English' or 'Continuar en Español.' Phone number acts as the identity anchor for returning customers." },
            { 
              title: "Waiver Agreement", 
              desc: "Full scrollable waiver with SMS/liability terms. Buttons stay greyed out until the user has scrolled through the content — enforcing genuine informed consent.",
              subItems: ["Agree and take a sign — faster for returning customers", "Agree and take selfie — triggers camera flow with AI-guided photo capture"]
            },
            { title: "Photo Capture (selfie path only)", desc: "Camera opens with a live face-detection overlay. AI-powered guidelines panel appears listing what to fix (lighting, centering, etc.)." },
            { title: "Check-in Confirmation", desc: "A clear success screen appears: 'Check-in Successful — Please proceed to counter 3 for entry fee payment.' Screen auto-resets in 3 seconds." },
            { title: "Yard Exploration (post check-in)", desc: "Customers access full vehicle search, part prices with full cost breakdowns, yard map, and personal garage." }
          ]
        },
        {
          id: "analysis",
          label: "05 — Screen Analysis",
          title: "Every screen had a job to do",
          body: "A deep dive into the functional design of critical touchpoints within the check-in journey.",
          items: [
            { title: "Login screen", desc: "Secret 3-tap gesture entry for employees. Handles host config without hardware changes." },
            { title: "Welcome / Check-in", desc: "Language selection at the first touch. Barcode scanning for loyalty members." },
            { title: "Waiver Agreement", desc: "Deliberate friction ensuring informed consent. Dual CTA architecture (sign vs selfie)." },
            { title: "Photo Guidelines", desc: "Real-time AI framing brackets and actionable feedback overlays." },
            { title: "Vehicle Search", desc: "Contextual cascades with transparent pricing breakdowns and location data." },
            { title: "Yard Map", desc: "Schematic wayfinding landmarks to reduce floor staff interruptions." }
          ]
        },
        {
          id: "laws",
          label: "06 — UX Laws Applied",
          title: "Design decisions rooted in cognitive principles",
          body: "Strategic application of psychological principles to minimize friction and maximize efficiency.",
          items: [
            { badge: "Hick's Law", title: "Language selection at step one", desc: "Reducing early decisions makes the first screen feel fast. Two equal choices prevent bias." },
            { badge: "Jakob's Law", title: "Familiar camera UI patterns", desc: "Mirrors native iOS conventions for photo and QR flows, reducing learning curve to zero." },
            { badge: "Fitts's Law", title: "Oversized tap targets", desc: "Full-width primary buttons positioned for thumb accessibility on kiosks." },
            { badge: "Error Prevention", title: "Pre-emptive guidelines", desc: "Guidelines appear before the error occurs, helping users succeed on the first try." },
            { badge: "Progressive Disclosure", title: "Complexity when needed", desc: "Details like part pricing appear at the right moment, keeping initial screens clean." }
          ]
        },
        {
          id: "impact",
          label: "07 — Business Impact",
          title: "Designed for throughput, not just aesthetics",
          body: "The operational outcomes the design directly enables through architectural changes.",
          image: "/assets/nevada/metrics.png",
          metrics: [
            { value: "∞", label: "Tablets deployed" },
            { value: "2", label: "Languages supported" },
            { value: "2", label: "Service modes" },
            { value: "0", label: "Extra hardware cost" }
          ]
        },
        {
          id: "learnings",
          label: "08 — Key Learnings",
          title: "What this project taught",
          body: "Reflections on hardware, hidden modes, and service design integration.",
          items: [
            { title: "Hardware is a UX problem", desc: "The immobility was the bottleneck. Re-framing as 'portable' changed everything." },
            { title: "Hidden modes save space", desc: "Secret 3-tap employee login keeps customer UI clean while retaining power." },
            { title: "Legal UX is still UX", desc: "Graceful waiver scrolling pattern enforces compliance without frustration." }
          ]
        }
      ]
    }
  },
  {
    id: "byot-app-revamp",
    title: "Redesigning the BYOT Mobile Experience for Simplicity & Engagement",
    category: "Auto Parts Marketplace Mobile App",
    year: "2026",
    thumbnail: "/assets/byot/unnamed.png",
    description: "How we restructured BYOT’s mobile app to reduce friction, improve onboarding clarity, and create a smoother end-to-end user journey.",
    challenge: "A growing product with strong functionality but a cluttered user journey that hindered onboarding and exploration.",
    solution: "Re-established hierarchy through progressive disclosure and a unified design system, reducing cognitive load.",
    role: "UI/UX Designer Intern (Elevance Labs)",
    images: [],
    caseStudy: {
      heroSub: "How we restructured BYOT’s mobile app to reduce friction, improve onboarding clarity, and create a smoother end-to-end user journey.",
      sections: [
        {
          id: "overview",
          label: "01 — Overview",
          title: "A growing product with a cluttered user journey",
          body: "BYOT mobile app had strong functionality but lacked clarity in structure. Users struggled with onboarding, navigation inconsistency, and unclear CTAs across key flows. The goal of the revamp was to simplify, streamline, and re-establish hierarchy across the entire experience."
        },
        {
          id: "problem",
          label: "02 — The Problem",
          title: "Too many actions, not enough direction",
          body: "The app suffered from decision fatigue caused by a fragmented navigation and a lack of visual hierarchy.",
          items: [
            { title: "Confusing onboarding", desc: "Users didn’t understand the value proposition within the first 10 seconds of app launch." },
            { title: "Navigation overload", desc: "Too many tabs created decision fatigue and reduced exploration of core features." },
            { title: "Weak hierarchy", desc: "Primary actions were visually similar to secondary ones, leading to accidental clicks or missed goals." },
            { title: "Inconsistent patterns", desc: "Different screens followed different layouts, forcing users to re-learn interactions constantly." }
          ]
        },
        {
          id: "opportunity",
          label: "03 — Opportunity",
          title: "Rebuild clarity before adding features",
          body: "“A better interface isn’t more features — it’s fewer decisions per screen.” — This design principle drove our strategy.",
          items: [
            { title: "Simplified onboarding", desc: "Reduced from multi-step confusion to a guided 3-step introduction flow focusing on value." },
            { title: "Unified design system", desc: "Standardized buttons, spacing, and navigation patterns across all screens for instinctual use." }
          ]
        },
        {
          id: "flows",
          label: "04 — UX Flow Improvements",
          title: "From fragmented journey → structured flow",
          body: "The redesigned flow focuses on progressive disclosure, reducing cognitive load and guiding users step-by-step.",
          steps: [
            { title: "Simplified onboarding", desc: "Clear value introduction before account creation ensures users know why they are signing up." },
            { title: "Unified dashboard", desc: "All core actions (Search, Favorites, Garage) centralized in one clean, scannable home screen." },
            { title: "Context-based navigation", desc: "Navigation adapts based on user stage, hiding advanced tools until the user is ready for them." }
          ]
        },
        {
          id: "impact",
          label: "05 — Impact",
          title: "Designing for clarity improved usability instantly",
          body: "The revamp focused on measurable UX improvements rather than just visual polish.",
          metrics: [
            { value: "↓", label: "Reduced cognitive load" },
            { value: "↑", label: "Improved completion" },
            { value: "✔", label: "Consistent UI" }
          ]
        },
        {
          id: "learnings",
          label: "06 — Key Learnings",
          title: "What this revamp taught",
          body: "Reflecting on the balance between functionality and simplicity in mobile marketplace design.",
          items: [
            { title: "Clarity beats complexity", desc: "Users always prefer fewer but clearer choices over a feature-packed but messy interface." },
            { title: "Consistency is a feature", desc: "Standardized patterns reduce mental friction and build much-needed user trust." },
            { title: "Remove thinking", desc: "Good UX removes the need for thinking; if you have to add instructions, the design isn't finished." }
          ]
        }
      ]
    }
  },
  {
    id: "al-khidmat-job-portal",
    title: "Al-Khidmat Job Portal: Connecting Talent with Impact",
    category: "Job Platform Redesign",
    year: "2025",
    thumbnail: "/assets/al-khidmat/thumbnail.png",
    description: "Architectured and designed a centralized job portal ecosystem to connect humanitarian talent with mission-driven career opportunities.",
    challenge: "Al-Khidmat lacked a dedicated platform, forcing applicants to rely on third-party boards which created a gap in accessibility and direct connection.",
    solution: "A centralized portal that streamlines the hiring lifecycle, from job discovery to application tracking and recruitment analytics.",
    role: "UX/UI Designer, Researcher, Front-end Developer",
    images: ["/assets/al-khidmat/thumbnail.png", "/assets/al-khidmat/dashboard.png", "/assets/al-khidmat/status.png", "/assets/al-khidmat/details.png"],
    caseStudy: {
      heroSub: "Connecting humanitarian talent with mission-driven career opportunities through a centralized recruitment ecosystem.",
      sections: [
        {
          id: "overview",
          label: "01 — Overview",
          title: "A centralized recruitment ecosystem",
          body: "Al-Khidmat previously lacked a dedicated platform to manage job openings, forcing candidates to rely on fragmented third-party boards. This created a significant gap in accessibility. The unified job portal was designed as a centralized hub for Al-Khidmat to publish openings and for applicants to discover, apply, and track their journey seamlessly."
        },
        {
          id: "problem",
          label: "02 — The Problem",
          title: "Gap in sector-specific accessibility",
          body: "The reliance on external platforms led to several operational and user-experience frictions.",
          items: [
            { title: "Limited Sector-Specific Platforms", desc: "General-purpose boards failed to highlight the unique mission-driven nature of humanitarian roles." },
            { title: "Talent-Opportunity Mismatch", desc: "Inefficient discovery meant highly skilled humanitarian professionals often missed critical postings." },
            { title: "Trust & Reliability Issues", desc: "Lack of a branded platform made it difficult to verify the authenticity of humanitarian job listings." }
          ]
        },
        {
          id: "audience",
          label: "03 — Target Audience",
          title: "Defining the core users",
          body: "The platform was designed to serve two primary pillars of the humanitarian ecosystem.",
          items: [
            { title: "Job Seekers", desc: "Humanitarian sector professionals, recent graduates seeking mission-driven careers, and career changers." },
            { title: "Employers", desc: "NGOs, non-profit organizations, social enterprises, and international aid organizations." }
          ]
        },
        {
          id: "research",
          label: "04 — Research & Insights",
          title: "Analyzing the local landscape",
          body: "Conducted a comprehensive analysis of existing job portals in Pakistan, such as Rozee and Mustakbil, to identify systemic gaps in the humanitarian sector.",
          items: [
            { title: "Key Finding", desc: "Most existing portals are general-purpose and not focused on humanitarian careers, creating a severe visibility gap for mission-driven job seekers." },
            { title: "Market Need", desc: "The research revealed a critical need for a trustworthy, mission-driven platform that understands the unique requirements of the humanitarian sector." }
          ]
        },
        {
          id: "process",
          label: "05 — UX Process",
          title: "From analysis to execution",
          body: "A structured methodology focusing on clarity and information hierarchy.",
          steps: [
            { title: "Competitor Analysis", desc: "Analyzed existing job portals to identify gaps and opportunities." },
            { title: "Information Architecture", desc: "Designed the site structure optimized for humanitarian job searching patterns." },
            { title: "Wireframes to High-Fidelity", desc: "Iterative design process from low-fidelity layouts to high-fidelity interactive prototypes." }
          ]
        },
        {
          id: "features",
          label: "06 — Key Features",
          title: "Functional touchpoints for transparency",
          body: "Every feature was built to foster trust and reduce cognitive load during the application process.",
          items: [
            { title: "Mission-Focused Profile", desc: "Branded organizational mission, work culture, and benefits designed to attract passionate candidates." },
            { title: "Streamlined Application Form", desc: "Comprehensive yet user-friendly form capturing personal info, professional data, and document uploads." },
            { title: "Transparent Tracking", desc: "Clear status tracking system (Accepted, Rejected, Under Review) with real-time updates." },
            { title: "Admin Dashboard", desc: "Metric-driven interface for candidate management, CV previews, and recruitment growth analytics." },
            { title: "Candidate Profiles", desc: "Detailed management system for personal info, history, CV previews, and interview scheduling." }
          ]
        },
        {
          id: "highlights",
          label: "07 — Design Strategy",
          title: "Visualizing trust and empathy",
          body: "The visual language was crafted to resonate with humanitarian values while maintaining a professional digital standards.",
          items: [
            { title: "Professional Clear UI", desc: "A clean interface that builds trust and credibility for applicants and partners." },
            { title: "Empathy Palette", desc: "Soft blue and white color scheme conveying trust, reliability, and mission-focused branding." },
            { title: "Intuitive Navigation", desc: "Designed for efficient job discovery with clear job cards and prominent calls-to-action." }
          ]
        },
        {
          id: "impact",
          label: "08 — Outcome & Impact",
          title: "Measurable Impact Potential",
          body: "The platform positions Al-Khidmat as a leader in humanitarian talent acquisition, enhancing their operational capacity.",
          metrics: [
            { value: "✔", label: "Sector Gap Addressed" },
            { value: "✔", label: "Aligned Mission" },
            { value: "✔", label: "Validated Path" },
            { value: "↑", label: "Talent Potential" }
          ]
        },
        {
          id: "nextsteps",
          label: "09 — Next Steps",
          title: "Scaling the ecosystem",
          body: "Future roadmap focused on scaling for broader NGO integration and AI-driven features.",
          steps: [
            { title: "Phase 1: MVP Launch", desc: "User testing with humanitarian professionals and partnership with major Pakistani NGOs." },
            { title: "Phase 2: Enhanced Features", desc: "Implementation of AI-powered job matching and skills assessment tools." },
            { title: "Phase 3: Integration", desc: "Volunteer opportunity integration to broaden the social impact footprint." }
          ]
        },
        {
          id: "learnings",
          label: "10 — Key Learnings",
          title: "Industry Nuances Matter",
          body: "Reflections on designing for mission-driven organizations.",
          items: [
            { title: "Sector Specific Design", desc: "Understanding industry nuances significantly improves user experience for specialized fields." },
            { title: "Trust is Fundamental", desc: "Trust is paramount in job platforms, especially for mission-driven organizations." },
            { title: "IA Hierarchy", desc: "Clear information architecture reduces cognitive load in high-complexity job searching." }
          ]
        }
      ]
    }
  },
  {
    id: "panah-relief-app",
    title: "Panah: Connecting Communities for Emergency Relief",
    category: "Personal Project · Disaster Response",
    year: "2024",
    thumbnail: "/assets/panah/thumbnail.png",
    description: "Connecting flood victims with life-saving resources during urban crises through community-driven support networks.",
    challenge: "During intense monsoons, thousands were stranded without a centralized platform to connect affected citizens with immediate shelters, volunteers, or donors.",
    solution: "A rapid-response digital hub designed for high-stress situations, facilitating shelter discovery, SOS alerts, and transparent humanitarian funding.",
    role: "UX/UI Designer, Researcher",
    images: ["/assets/panah/hero.png", "/assets/panah/main.png", "/assets/panah/shelters.png", "/assets/panah/alerts.png", "/assets/panah/donate.png", "/assets/panah/impact.png"],
    caseStudy: {
      heroSub: "Connecting flood victims with life-saving resources through community-driven support networks during urban crises.",
      sections: [
        {
          id: "overview",
          label: "01 — Overview",
          title: "An emergency response gap in urban crises",
          body: "During the recent Karachi monsoons, the lack of a centralized coordination tool left thousands stranded. While citizens were eager to help by offering shelter and resources, there was no digital bridge to connect those in need with available volunteers and safe zones."
        },
        {
          id: "problem",
          label: "02 — The Problem",
          title: "Community disconnection under pressure",
          body: "Government resources were stretched thin, and citizens had no reliable way to verify or find community-offered assistance.",
          items: [
            { title: "Emergency Response Gap", desc: "No single portal existed to provide shelter, donation, and emergency updates concurrently." },
            { title: "Limited Resource Visibility", desc: "Available community shelters remained unknown to those stranded in flooded areas." },
            { title: "Trust Barriers", desc: "Difficulty in verifying safety and legitimacy of individual volunteer efforts during chaos." }
          ]
        },
        {
          id: "research",
          label: "03 — Research & Insights",
          title: "Simplicity as a survival tool",
          body: "Conducted rapid interviews with flood-affected survivors to understand their primary friction points during the crisis.",
          items: [
            { title: "Key Insight", desc: "Survivors emphasized that simplicity is critical; complex interfaces are unusable during panic." },
            { title: "Market Need", desc: "A desperate requirement for a trustworthy, community-driven tool that prioritizes speed over aesthetics." }
          ]
        },
        {
          id: "design-strategy",
          label: "04 — Design Strategy",
          title: "Emergency-first principles",
          body: "The project bypassed traditional iterations to move straight into high-fidelity emergency-first designs, prioritizing intuitive color associations and high readability.",
          items: [
            { title: "Visual Hierarchy", desc: "Large touch targets and minimal cognitive load for stressful environments." },
            { title: "Contextual Accents", desc: "Utilizing recognized color cues (Danger, Alert, Safe) to guide users without requiring deep analysis." }
          ]
        },
        {
          id: "features",
          label: "05 — Key Features",
          title: "Critical touchpoints for relief",
          body: "Every tool in the Panah ecosystem was built for rapid action and community verification.",
          items: [
            { title: "Smart Shelter Finder", desc: "Real-time availability and capacity tracking for community-driven safe houses." },
            { title: "Emergency Alert System", desc: "Weather-gated alerts and immediate evacuation guidance for high-risk zones." },
            { title: "SOS Broadcast", desc: "One-tap emergency signal to notify nearby volunteers and rescue teams." },
            { title: "Donation Hub", desc: "Transparent funding system showing real-time impact and progress of relief efforts." }
          ]
        },
        {
          id: "impact",
          label: "06 — Outcome & Impact",
          title: "Positive resonance and feedback",
          body: "The concept successfully addressed the core need for a simple, trustworthy emergency response tool, receiving high validation from directly affected test users.",
          metrics: [
            { value: "✔", label: "Crisis-First Verified UI" },
            { value: "✔", label: "Trustworthy Branding" },
            { value: "↑", label: "Relief Coordination Speed" }
          ]
        },
        {
          id: "learnings",
          label: "07 — Key Learnings",
          title: "Designing for high-stress environments",
          body: "Lessons learned from rapid prototyping during a real-world humanitarian crisis.",
          items: [
            { title: "Speed Over Polish", desc: "In emergency design, speed and clarity must always override aesthetic trends." },
            { title: "Color Psychology", desc: "Leveraging instinctive color recognition is crucial for navigation during panic." },
            { title: "Community Power", desc: "Decentralized, community-led solutions can bridge the gap where top-down systems fail." }
          ]
        }
      ]
    }
  }
];
