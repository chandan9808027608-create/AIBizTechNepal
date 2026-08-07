# PRD — AI Biztech Nepal Landing Page

## Original Problem Statement
Build a clean, modern, single-page landing page for AI Biztech Nepal, an enterprise AI technology & business solutions firm based in Nepal. High-end structural wireframe aesthetic: Tailwind CSS, dark mode (bg-slate-950, text-slate-100, border-slate-800/80), electric cyan/indigo gradients (from-cyan-500 to-blue-600), Lucide React icons, smooth anchor scrolling. Sections: sticky header, hero with stat bar, about split, 3-card services grid, 4-card projects showcase, contact with embedded Google Map (Everest Petrol Station, Chabahil, Kathmandu) + inquiry form, footer.

## Architecture
- Frontend-only React SPA (no backend dependency for current scope)
- /app/frontend/src/App.js — page assembly + sonner Toaster
- /app/frontend/src/components/landing/ — Header, Hero, About, Services, Projects, Contact, Footer
- /app/frontend/src/index.css — Google Fonts (Outfit / IBM Plex Sans / JetBrains Mono), smooth scroll, dark scrollbar, fade-up + pulse-glow animations, dark map filter
- tailwind.config.js — extended fontFamily (heading/body/mono)
- Design source: /app/design_guidelines.json

## User Personas
- Nepalese enterprise decision-makers (CTOs, COOs, founders) evaluating AI vendors
- International partners/clients assessing a Nepal-based AI firm

## Core Requirements (static)
- Sticky glassmorphic header with logo badge, anchor nav, Contact Us CTA
- Hero: Sparkles badge, gradient headline, 2 CTAs, 3-item stat bar
- About: mission statement + highlight card (Secure & Compliant, High Efficiency, Scalable Architecture)
- Services: 3 cards (AI Integration & Automation, Custom Software & Analytics, Strategic Tech Consulting)
- Projects: 4 cards with tags (NLP/RAG, OCR/Vision, ML/Data, Speech-to-Text/Localization) + inquire links
- Contact: address, email/phone placeholders, exact Google Map iframe, inquiry form (Name, Email, Project Brief, Submit)
- Footer: copyright, quick links, social placeholders
- data-testid on all interactive elements

## Implemented
- 2026-08-07: Full landing page per spec — all 7 sections, responsive layout, mobile hamburger menu, smooth anchor scrolling, dark-filtered embedded map, contact form with success toast (UI-only, no backend persistence), staggered fade-up animations, glowing logo badge

## Backlog
- P0: Wire contact form to backend endpoint + email notification (Resend) so inquiries actually reach the team
- P1: Replace placeholder email/phone with real contact details
- P1: Real social media URLs in footer
- P2: Case study detail pages/modals for each project
- P2: Nepali language toggle (localization showcase)

## Next Tasks
1. Backend /api/inquiries endpoint + MongoDB persistence + Resend email on submit
2. Content pass with real company details
3. SEO meta tags + Open Graph image
