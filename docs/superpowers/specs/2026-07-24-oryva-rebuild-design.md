# ORYVA-AI Website Rebuild — Design Spec

**Date:** 2026-07-24
**Status:** Approved (blueprint) — pending written-spec review
**Source of truth for copy:** `AGENTS.md` / `reference/ORYVA-AI_Website_Copy_Alternative_Revised.docx` (the TASK brief). Copy is used **verbatim** by default; a block may be condensed only if it visually reads as a dense wall of text once laid out, and only by shortening sentences — never cutting ideas, claims, or changing tone. This judgment is made per-section during build.

---

## 1. Goal

Rebuild the current ORYVA-AI site (a dark "AI-lab" app shell with a wired login/register/account flow) into a **real product/company landing site** — warm, editorial, human, calm. No login-page / app-shell feel anywhere. 6 marketing pages, smooth scroll, subtle scroll-reveal motion, a homepage carousel, distinctive typography + color, responsive, accessible, bug-free.

Brand line (recurring tagline / footer): *"Real ideas deserve more than a good presentation. They deserve a chance to become useful."*

## 2. Locked decisions

| Decision | Choice |
|---|---|
| Auth flow | **Remove entirely** — delete `/login`, `/register`, `/account`, `mock-auth.tsx`, login/register forms, account-view, password-input; remove `MockAuthProvider` from layout; strip auth buttons from navbar. |
| Aesthetic | **Warm editorial light.** |
| Motion / carousel libs | **framer-motion** (already installed) + **Lenis** (smooth scroll) + **Embla** (carousel). |
| Social links | Placeholder profile URLs (dead is acceptable per user): `https://www.linkedin.com/company/oryva-ai`, `https://www.instagram.com/oryva.ai`, `https://github.com/oryva-ai`. No `href="#"`. Real SVG icons (lucide). |
| Testing | TestSprite MCP is **not connected** this session → use webapp-testing skill + in-app browser preview + axe-core injection. |

## 3. Stack (unchanged base)

Next **16.2.11** (App Router, Turbopack default), React **19.2.4**, Tailwind **v4** (`@theme` in `globals.css`), TypeScript. Path alias `@/* → ./src/*`. No dynamic routes → Next 16 async-request-API breaking changes do not apply. Add deps: `lenis`, `embla-carousel-react`. Keep: `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`, `@radix-ui/react-slot`.

## 4. Design system

**Palette (light) — final tuning happens in the frontend-design pass; this is the intent:**
- Paper `#F7F4ED` · ink `#17130E` · muted `#6E6559` · hairline `#E6DFD1`
- Brand accent (pine) `#12463A` — links, emphasis, section markers
- Signal (terracotta) `#D2603A` — primary CTAs + key highlights, used sparingly

Define all as CSS vars in `globals.css` under `@theme`. Remove dark-only `color-scheme: dark`. (A later dark-mode variant is out of scope for v1.)

**Typography:**
- **Display:** Fraunces (variable serif via `next/font/google`) — H1/H2 headlines, pull-quotes.
- **Body / UI:** Geist Sans (already loaded).
- **Labels / eyebrows / nav / `01 02` markers:** Space Grotesk (already loaded), uppercase + letter-spaced.

**Motion:**
- Lenis smooth-scroll provider at app root; **must** disable / no-op under `prefers-reduced-motion`.
- framer-motion: staggered `whileInView` reveals (fade + small translate), subtle parallax, magnetic buttons (reuse `magnetic.tsx`).
- Embla carousel on the homepage hero — autoplay-optional, swipeable, keyboard + `aria` accessible, dots/arrows.
- Keep motion subtle; never block content or cause layout shift.

**Layout primitives:** editorial `Container` (generous gutters), consistent section vertical rhythm, `Eyebrow`, numbered `StepCard`, `PullQuote` for the brand line.

## 5. Structure / routing

**Nav (final):** Home `/` · About `/about` · ORYVA FORGE `/forge` · Product `/product` · How It Works `/how-it-works` · Contact `/contact`

- Rename routes: `/products` → `/product`, `/services` → `/how-it-works`.
- Add `redirects()` in `next.config.ts` for the old paths (`/products`, `/services`) → new, permanent, to avoid dead links.
- Delete `/login`, `/register`, `/account`.
- `sitemap.ts` ROUTES = `["", /about, /forge, /product, /how-it-works, /contact]`.

## 6. Page blueprints

Copy = brief verbatim (per §Copy rule). Layout intent below; numbered lists render as **visually distinct cards/steps**, full text preserved.

- **Home** — Editorial hero: Fraunces H1 "Build what people can actually use.", hero + sub-hero copy, two CTAs ("Explore Our Product" → `/product`, "Discover ORYVA FORGE" → `/forge`). Embla carousel as the dynamic hero visual (panels: Product / ORYVA FORGE / the approach). "A little about us" + "What we are building" as offset editorial blocks. **No "Why ORYVA-AI" block** (moved to About). Brand-line pull-quote near footer.
- **About** — H1 "We are here for the work after the idea." + intro. Sections in order: Our Story (pull-quote-led column), What We Believe, Mission, Vision, What Matters to Us (distinct panels), then relocated **"Why ORYVA-AI"** 4 points as numbered cards (01–04). CTAs "Meet the product" → `/product`, "Join the journey" → `/forge`.
- **ORYVA FORGE** — H1 "Come with a question. Leave with proof." + intro. "What FORGE feels like". Three tracks (Workshops / Mentorship / Fellowships) as cards. **"The FORGE Hackathon: Signal-to-Ship"** — intro + 5 numbered steps (01–05) as a numbered flow. CTAs "Enter ORYVA FORGE", "Bring Your Signal". (Reuse/adapt `forge-interactive` + `forge-application-form`; **remove the phone input field** from the form.)
- **Product** — H1 "A career is not a straight line. Your guidance should not be either." + intro. "The idea behind the product". "What it is being built to support". "The experience in three parts" as a 3-step visual. "Still taking shape" note. Restyled `product-mockup` (light). CTA "Join the waitlist" (`waitlist-form`).
- **How It Works** (route `/how-it-works`, nav label "How It Works") — H1 "From a real idea to a product people return to." + intro. "The ORYVA-AI product approach". **6-step process** (01–06) as big numbered cards. "What we are building for" + "The promise we make" closers. CTA "Explore what we are building".
- **Contact** — H1 "Let's start somewhere." + intro. Split layout: left = intro + email `contact@oryva-ai.com` + social links + closing line; right = form (Your name / Email address / "What would you like to talk about?" select [Product · ORYVA FORGE · Partnership · General] / Your message). Form intro + closing line verbatim. CTA "Start a conversation". **No phone anywhere.**

## 7. Component plan

- **New:** `lenis-provider.tsx`, `carousel.tsx` (Embla), `pull-quote.tsx`, `numbered-step.tsx` (or `step-card`), editorial light `hero.tsx`, real SVG social icons (replace text-glyph `social-icon`).
- **Reuse, restyle to light:** button, card, container, eyebrow, badge, reveal, magnetic, input, textarea, select, label, navbar, footer, product-mockup, contact-form, waitlist-form, forge-application-form (minus phone), forge-interactive.
- **Rework/replace:** dark AI-lab visuals — `network-nodes`, `pulse-radar`, `hero-background` → light editorial accents or dropped where they don't fit.
- **Delete:** `login-form`, `register-form`, `account-view`, `password-input`, `mock-auth.tsx`.

## 8. SEO / accessibility

- Add JSON-LD **Organization** schema — name, url, logo, sameAs (social), email. **No `telephone` field.**
- Add `not-found.tsx` (branded 404).
- OG image (static asset or `opengraph-image`), referenced correctly.
- All decorative SVG `aria-hidden`; all real controls labeled; visible focus states; color contrast AA against paper.
- Update `layout.tsx` metadata; keep `metadataBase`.

## 9. Phone-number removal (hard requirement)

Remove every phone occurrence: `contact/page.tsx` (import `Phone`, `tel:` link, display text), `footer.tsx` (import `Phone`, `tel:` link, display text), and the `phone` input in `forge-application-form.tsx` (field + zod schema + label). Final test confirms phone absent from every page, footer, and any structured/schema data.

## 10. Forms

Remain mock (client-side validate with zod + react-hook-form, `setTimeout` → success state). No backend. Contact form topic options must be exactly: Product / ORYVA FORGE / Partnership / General. Honeypot kept.

## 11. Testing (post-build, before "done")

Per brief, using webapp-testing skill + browser preview + axe-core:
- Every page loads with **no console errors**.
- All nav links resolve (incl. redirects from old paths).
- Contact form validates + submits (mock success).
- Scroll animations trigger, no jank; verify with reduced-motion.
- Carousel works + swipeable (test at mobile width).
- Responsive at **375 / 768 / 1440**.
- axe-core accessibility check on **every** page.
- Confirm phone genuinely absent from every page, footer, structured data.
- Flag any section still reading as text-heavy.
- Report every bug (severity + repro), fix before calling done.

## 12. Assumptions / open items

- Social URLs are placeholders (user accepted dead links) — replace with real profiles when available.
- No real product backend — forms are mock by design.
- Dark mode deferred (v1 is light-only editorial).
- Fraunces + Geist + Space Grotesk exact weights/axes finalized in the frontend-design pass.

## 13. Out of scope (YAGNI)

Real auth, real form submission/backend, CMS, i18n, blog, dark mode, analytics.
