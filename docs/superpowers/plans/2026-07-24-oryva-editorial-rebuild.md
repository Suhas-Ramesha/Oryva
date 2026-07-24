# ORYVA-AI Editorial Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the ORYVA-AI site into a warm, editorial, light-themed product/company landing site (6 pages), removing the login/app-shell feel, with smooth scroll, scroll-reveal motion, a homepage carousel, and full accessibility.

**Architecture:** Next 16 App Router (static routes only). A shared design-system foundation (tokens, fonts, layout, primitives, motion providers) is built first and sequentially; the 6 pages are then built on top, each touching disjoint files. Copy comes **verbatim** from `AGENTS.md` (the brief) per the copy rule; the design decides layout, the brief decides words.

**Tech Stack:** Next 16.2.11, React 19.2.4, TypeScript, Tailwind v4 (`@theme` in `globals.css`), framer-motion 12, Lenis (smooth scroll), Embla (`embla-carousel-react`), react-hook-form + zod, lucide-react, next/font/google (Fraunces + Geist + Space Grotesk).

## Global Constraints

- **Copy rule:** Use brief copy VERBATIM by default. Condense a block only if it visually reads as a dense wall of text once laid out — and only by shortening sentences, never cutting ideas/claims/tone. Judgment is per-section.
- **Next 16:** Turbopack default. No dynamic routes → no async `params`/`searchParams`. Before writing framework-specific code, consult `node_modules/next/dist/docs/` (fonts: `01-app/01-getting-started/13-fonts.md`; metadata/OG: `14-metadata-and-og-images.md`).
- **No phone number** anywhere — page, footer, form field, or structured/schema data.
- **No `href="#"` dead controls.** Social links use placeholder profile URLs: `https://www.linkedin.com/company/oryva-ai`, `https://www.instagram.com/oryva.ai`, `https://github.com/oryva-ai`.
- **Palette:** paper `#F7F4ED`, ink `#17130E`, muted `#6E6559`, hairline `#E6DFD1`, pine (brand) `#12463A`, terracotta (signal) `#D2603A`.
- **Type:** Fraunces (`--font-fraunces`, display) · Geist Sans (`--font-geist-sans`, body) · Space Grotesk (`--font-space-grotesk`, labels/nav/step-markers).
- **Motion:** must no-op under `prefers-reduced-motion`. Subtle, no layout shift.
- **Contact form topic options (exact):** Product · ORYVA FORGE · Partnership · General.
- **Email:** `contact@oryva-ai.com`. **Brand line:** "Real ideas deserve more than a good presentation. They deserve a chance to become useful."
- **Verification note:** No unit-test runner is installed and one is not warranted for a marketing site (YAGNI). Per-task "test" = `npx tsc --noEmit` (types) + `npm run lint` + `npm run build` passing, plus targeted browser-preview assertions in Phase 4. Where a task adds logic (zod schema, redirect), the verification names the exact browser/CLI check.

---

## File Structure

**Config / root**
- `package.json` — add `lenis`, `embla-carousel-react`.
- `next.config.ts` — add `redirects()` (`/products`→`/product`, `/services`→`/how-it-works`).
- `src/app/globals.css` — rewrite tokens to light editorial; keep/extend utilities; add Fraunces var; reduced-motion guard.
- `src/app/layout.tsx` — add Fraunces font; remove `MockAuthProvider`; add `LenisProvider`; Organization JSON-LD; metadata.
- `src/app/sitemap.ts` — ROUTES → `["", /about, /forge, /product, /how-it-works, /contact]`.
- `src/app/not-found.tsx` — new branded 404.
- `src/app/opengraph-image.tsx` — new OG image (edge/node route).

**Providers / lib**
- Create `src/components/providers/lenis-provider.tsx`.
- Delete `src/lib/mock-auth.tsx`.

**Layout**
- `src/components/layout/navbar.tsx` — remove auth UI; links → Home/About/ORYVA FORGE/Product/How It Works/Contact; light restyle.
- `src/components/layout/footer.tsx` — remove phone; real socials; updated links; brand-line.

**UI**
- Restyle light: `button`, `card`, `container`, `eyebrow`, `badge`, `input`, `textarea`, `select`, `label`, `product-mockup`.
- Keep (verify reduced-motion): `reveal`, `magnetic`.
- Replace glyphs → real SVG: `social-icon`.
- Create: `carousel.tsx` (Embla), `pull-quote.tsx`, `numbered-step.tsx`.
- Rework to light or drop: `network-nodes`, `pulse-radar`, `hero-background`.
- Delete: `password-input.tsx`.

**Sections**
- `hero.tsx` — new editorial Home hero w/ carousel.
- `forge-interactive.tsx` — light restyle.
- Delete `account-view.tsx`.

**Forms**
- `contact-form.tsx` — topic options exact, light.
- `waitlist-form.tsx` — light.
- `forge-application-form.tsx` — REMOVE phone (field + zod + label), light.
- Delete `login-form.tsx`, `register-form.tsx`.

**Pages**
- `src/app/page.tsx` (Home), `about/page.tsx`, `forge/page.tsx`.
- Create `src/app/product/page.tsx`; delete `src/app/products/`.
- Create `src/app/how-it-works/page.tsx`; delete `src/app/services/`.
- `contact/page.tsx`.
- Delete `src/app/login/`, `register/`, `account/`.

---

# PHASE 1 — Foundation (sequential; pages depend on all of it)

### Task 1: Dependencies + route redirects

**Files:**
- Modify: `package.json`
- Modify: `next.config.ts`

- [ ] **Step 1: Install deps**

Run: `npm install lenis embla-carousel-react`
Expected: both added to `dependencies`, no peer-dep errors against React 19.

- [ ] **Step 2: Add redirects in `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/product", permanent: true },
      { source: "/services", destination: "/how-it-works", permanent: true },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 3: Verify** — `npx tsc --noEmit` passes. (Redirect behavior is asserted in Phase 4.)

- [ ] **Step 4: Commit** — `chore: add lenis + embla deps and legacy-route redirects`

---

### Task 2: Light design tokens + fonts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx` (fonts + theme font vars only in this task)

**Interfaces produced:** CSS vars/utilities used by every component: `--color-paper`, `--color-ink`, `--color-muted`, `--color-hairline`, `--color-brand`, `--color-signal`, plus font vars `--font-display` (Fraunces), `--font-sans` (Geist), `--font-label` (Space Grotesk). Utilities `.bg-grid`, `.text-balance`, `.reveal-safe`.

- [ ] **Step 1: Rewrite `globals.css` tokens**

Replace the dark `:root` + `@theme` with light editorial tokens. Keep `@import "tailwindcss"`. Remove `color-scheme: dark`.

```css
@import "tailwindcss";

:root {
  --paper: #f7f4ed;
  --paper-2: #fffdf8;
  --ink: #17130e;
  --muted: #6e6559;
  --hairline: #e6dfd1;
  --hairline-strong: rgba(23, 19, 14, 0.14);
  --brand: #12463a;      /* pine */
  --brand-bright: #1c6b57;
  --signal: #d2603a;     /* terracotta */
  --signal-soft: #e8bfa8;
}

@theme inline {
  --color-paper: var(--paper);
  --color-paper-2: var(--paper-2);
  --color-ink: var(--ink);
  --color-muted: var(--muted);
  --color-hairline: var(--hairline);
  --color-hairline-strong: var(--hairline-strong);
  --color-brand: var(--brand);
  --color-brand-bright: var(--brand-bright);
  --color-signal: var(--signal);
  --color-signal-soft: var(--signal-soft);

  --font-display: var(--font-fraunces);
  --font-sans: var(--font-geist-sans);
  --font-label: var(--font-space-grotesk);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* editorial dotted grid used for section backdrops */
.bg-grid {
  background-image: radial-gradient(rgba(23,19,14,0.06) 1px, transparent 1px);
  background-size: 22px 22px;
}
.text-balance { text-wrap: balance; }

@keyframes fade-up { from { opacity: 0; transform: translateY(16px);} to {opacity:1; transform:none;} }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Add Fraunces in `layout.tsx`**

Consult `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` first. Add alongside existing Geist/Space Grotesk imports:

```ts
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});
```

Add `fraunces.variable` to the `<html>`/`<body>` className list next to the existing font variables. (Do NOT touch MockAuthProvider yet — that is Task 3.)

- [ ] **Step 3: Verify** — `npm run build`; then in browser (Phase 4 will formalize) confirm `getComputedStyle(document.body).backgroundColor` ≈ paper and Fraunces loads. For now: `npx tsc --noEmit` + `npm run build` pass.

- [ ] **Step 4: Commit** — `feat: light editorial design tokens + Fraunces display font`

---

### Task 3: Remove auth entirely

**Files:**
- Delete: `src/lib/mock-auth.tsx`
- Delete dirs: `src/app/login/`, `src/app/register/`, `src/app/account/`
- Delete: `src/components/sections/account-view.tsx`, `src/components/forms/login-form.tsx`, `src/components/forms/register-form.tsx`, `src/components/ui/password-input.tsx`
- Modify: `src/app/layout.tsx` (remove `MockAuthProvider` import + wrapper)

- [ ] **Step 1:** Remove `MockAuthProvider` import and unwrap it in `layout.tsx` (children render directly, still inside `LenisProvider` once Task 4 lands — for now render `{children}` directly).
- [ ] **Step 2:** Delete the files/dirs listed above.
- [ ] **Step 3: Verify no dangling imports** — Run: `grep -rn "mock-auth\|useAuth\|MockAuthProvider\|password-input\|account-view\|login-form\|register-form" src` → Expected: **zero hits** (navbar still references `useAuth`; that is fixed in Task 7 — if navbar hits appear, they are expected and cleared in Task 7). Confirm no OTHER file references them.
- [ ] **Step 4: Verify** — `npx tsc --noEmit`. Navbar will error on `useAuth` until Task 7; if executing strictly sequentially, stub navbar's auth usage now or accept the tsc error until Task 7. Prefer: temporarily comment navbar auth block, real fix in Task 7.
- [ ] **Step 5: Commit** — `feat: remove mock auth, login/register/account routes`

---

### Task 4: Lenis smooth-scroll provider

**Files:**
- Create: `src/components/providers/lenis-provider.tsx`
- Modify: `src/app/layout.tsx` (wrap children)

**Interfaces produced:** `<LenisProvider>{children}</LenisProvider>` — client component; no props.

- [ ] **Step 1: Create provider**

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // native scroll under reduced motion

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 2:** In `layout.tsx`, import and wrap: `<LenisProvider>{children}</LenisProvider>` inside `<body>`.
- [ ] **Step 3: Verify** — `npm run build`; browser: scrolling feels eased, and with reduced-motion emulation scrolling is native (assert in Phase 4).
- [ ] **Step 4: Commit** — `feat: add Lenis smooth-scroll provider (reduced-motion safe)`

---

### Task 5: Restyle UI primitives to light

**Files (modify each):** `button.tsx`, `card.tsx`, `container.tsx`, `eyebrow.tsx`, `badge.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`, `label.tsx` (all under `src/components/ui/`).

**Interfaces produced (keep signatures stable):** `Button` (cva variants `primary|secondary|ghost|outline`, sizes `sm|md|lg`, `asChild`), `Card`, `Container`, `Eyebrow`, `Badge`, `Input`/`Textarea`/`Select` (keep `error?: string` prop), `Label`.

- [ ] **Step 1:** Rework each to light tokens. Key mappings:
  - `Button` primary → `bg-signal text-paper-2 hover:brightness-95`; secondary → `bg-ink text-paper`; outline → `border border-hairline-strong text-ink hover:bg-ink/[0.04]`; ghost → `text-brand hover:text-brand-bright`. Keep radius generous (`rounded-full` for primary/secondary), focus ring `focus-visible:ring-2 ring-brand ring-offset-2 ring-offset-paper`.
  - `Card` → `bg-paper-2 border border-hairline rounded-2xl`.
  - `Eyebrow` → Space Grotesk uppercase tracked, `text-brand`, small dot in `signal`.
  - `Badge` → subtle `bg-brand/[0.08] text-brand` pill.
  - Inputs/select/textarea → `bg-paper-2 border border-hairline focus:border-brand`, error → `border-signal`, label ties via `htmlFor`.
- [ ] **Step 2:** Keep `Container` max-width editorial (`max-w-6xl` retained; generous px gutters).
- [ ] **Step 3: Verify** — `npx tsc --noEmit` + `npm run build`. Grep for leftover dark hex (`#08090c`, `#10131a`, `--accent`) in `src/components/ui` → zero.
- [ ] **Step 4: Commit** — `feat: restyle UI primitives to light editorial`

---

### Task 6: New shared components — carousel, pull-quote, numbered-step

**Files:**
- Create: `src/components/ui/carousel.tsx`
- Create: `src/components/ui/pull-quote.tsx`
- Create: `src/components/ui/numbered-step.tsx`

**Interfaces produced:**
- `Carousel({ slides }: { slides: React.ReactNode[] })` — Embla, arrows + dots, keyboard, `aria-roledescription="carousel"`, autoplay optional off by default.
- `PullQuote({ children }: { children: React.ReactNode })` — large Fraunces italic display block for the brand line / emphasis.
- `NumberedStep({ index, title, children }: { index: string; title: string; children: React.ReactNode })` — card with Space Grotesk `index` marker (e.g. "01"), Fraunces title, body.

- [ ] **Step 1: Carousel**

```tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ slides }: { slides: React.ReactNode[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => { embla.off("select", onSelect); };
  }, [embla]);

  return (
    <div className="relative" aria-roledescription="carousel">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div
              className="min-w-0 flex-[0_0_100%]"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button aria-label="Previous slide" onClick={() => embla?.scrollPrev()}
          className="rounded-full border border-hairline-strong p-2 hover:bg-ink/[0.04]">
          <ChevronLeft size={18} aria-hidden />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => scrollTo(i)}
              aria-current={selected === i}
              className={`h-2 w-2 rounded-full ${selected === i ? "bg-signal" : "bg-hairline-strong"}`} />
          ))}
        </div>
        <button aria-label="Next slide" onClick={() => embla?.scrollNext()}
          className="rounded-full border border-hairline-strong p-2 hover:bg-ink/[0.04]">
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: PullQuote**

```tsx
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="font-[family-name:var(--font-display)] text-balance text-2xl italic leading-snug text-ink sm:text-3xl md:text-4xl">
      {children}
    </blockquote>
  );
}
```

- [ ] **Step 3: NumberedStep**

```tsx
export function NumberedStep({
  index, title, children,
}: { index: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-hairline bg-paper-2 p-6 sm:p-8">
      <span className="font-[family-name:var(--font-label)] text-sm tracking-[0.2em] text-signal">{index}</span>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-ink sm:text-2xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{children}</p>
    </div>
  );
}
```

- [ ] **Step 4: Verify** — `npx tsc --noEmit` + `npm run build`.
- [ ] **Step 5: Commit** — `feat: add carousel, pull-quote, numbered-step components`

---

### Task 7: Navbar, footer, social icons

**Files:**
- Modify: `src/components/ui/social-icon.tsx` (real SVG via lucide)
- Modify: `src/components/layout/navbar.tsx`
- Modify: `src/components/layout/footer.tsx`

- [ ] **Step 1: `social-icon.tsx`** — map `platform` to lucide icons (`Linkedin`, `Instagram`, `Github`) with `aria-hidden` on the glyph and an accessible label on the wrapping link (link provided by caller). Export a small map or a `SocialIcon({platform})` returning the icon.
- [ ] **Step 2: `navbar.tsx`** — Remove all `useAuth`/auth-button code. `NAV_LINKS = [{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/forge",label:"ORYVA FORGE"},{href:"/product",label:"Product"},{href:"/how-it-works",label:"How It Works"},{href:"/contact",label:"Contact"}]`. Right side = single primary CTA "Start a conversation" → `/contact` (replaces Log In/Sign Up). Light restyle: transparent→`bg-paper/80 backdrop-blur` on scroll, ink text, Space Grotesk labels, active-link underline in signal. Keep framer-motion mobile menu.
- [ ] **Step 3: `footer.tsx`** — Remove `Phone` import, `tel:` link, phone text. Keep email `contact@oryva-ai.com` (`mailto:`). Quick links: About/ORYVA FORGE/Product/How It Works/Contact. Socials: real icons + placeholder URLs (constraint list), each `target="_blank" rel="noopener noreferrer"` with `aria-label`. Add brand-line tagline. Light restyle. Copyright year (use a constant `2026` — do not call `new Date()` in a Server Component if it would cause hydration drift; a static year string is fine).
- [ ] **Step 4: Verify** — `grep -rn "tel:\|Phone\|href=\"#\"\|useAuth\|/login\|/register" src/components/layout` → zero. `npx tsc --noEmit` + `npm run build` pass.
- [ ] **Step 5: Commit** — `feat: light navbar (no auth) + footer (no phone, real socials)`

---

### Task 8: Editorial Home hero section

**Files:**
- Modify (rewrite): `src/components/sections/hero.tsx`

**Interfaces produced:** `<Hero />` — the Home hero. Uses `Container`, `Eyebrow`, `Button`, `Magnetic`, `Carousel`.

- [ ] **Step 1:** Rebuild as light editorial hero:
  - Left column: Eyebrow ("ORYVA-AI"), Fraunces H1 **"Build what people can actually use."**, hero paragraph + sub-hero paragraph (verbatim from brief Home), two CTAs via `Magnetic`+`Button`: **"Explore Our Product"** → `/product` (primary/signal), **"Discover ORYVA FORGE"** → `/forge` (outline).
  - Right column / below on mobile: `Carousel` with 3 editorial slides (Product / ORYVA FORGE / Approach) — each slide a paper-2 card with a short label + one-line teaser + a light abstract visual (reuse a light-tinted `product-mockup` or simple SVG shapes; no dark network viz).
  - Background: `.bg-grid` subtle, generous whitespace. No mouse-follow dark spotlight.
- [ ] **Step 2: Verify** — `npx tsc --noEmit` + `npm run build`.
- [ ] **Step 3: Commit** — `feat: editorial light Home hero with Embla carousel`

---

### Task 9: Rework decorative visuals to light (or drop)

**Files:**
- Modify: `src/components/ui/product-mockup.tsx` (light restyle — used on Product + hero carousel)
- Modify or delete: `src/components/ui/network-nodes.tsx`, `pulse-radar.tsx`, `hero-background.tsx`

- [ ] **Step 1:** `product-mockup.tsx` → light card, ink/pine bars on paper-2, terracotta accent; keep `aria-hidden`; keep framer-motion but reduced-motion safe (framer respects `useReducedMotion` — add guard).
- [ ] **Step 2:** For `network-nodes`/`pulse-radar`/`hero-background`: if reused anywhere after page tasks, recolor to hairline/brand strokes on paper and keep `aria-hidden`; otherwise delete. Decision made when the page consuming them is built (Forge uses a "cohort" accent → `pulse-radar` may be recolored). Default: delete `hero-background` + `network-nodes` (dark-only), recolor `pulse-radar` if Forge keeps the cohort motif; else delete it too.
- [ ] **Step 3: Verify** — grep for dark hex in `src/components/ui` → zero. `npm run build` passes with no unresolved imports.
- [ ] **Step 4: Commit** — `feat: light decorative visuals; drop dark-only viz`

---

# PHASE 2 — Pages (each touches disjoint files; parallelizable after Phase 1)

> Each page task: pull copy VERBATIM from `AGENTS.md` for that page. Numbered lists → `NumberedStep` cards. Wrap scroll sections in `Reveal`. Use `Container`, `Eyebrow`, `PullQuote`, `Button`, `Card`. Every page ends with its brief CTA(s). Verification for every page task: `npx tsc --noEmit` + `npm run build`, and grep the page for any phone/`tel:`/`href="#"` → zero.

### Task 10: Home page

**Files:** Modify `src/app/page.tsx`.

- [ ] **Step 1:** Compose: `<Hero />` (Task 8) → "A little about us" block → "What we are building" block (offset editorial two-column, copy verbatim) → brand-line `PullQuote` → CTA row ("Explore Our Product" / "Discover ORYVA FORGE"). **Remove the old "Why ORYVA-AI" numbered block and old "What We Do" 4-card grid** (Why moves to About; keep Home lean). Ensure no leftover links to `/services`/`/products`.
- [ ] **Step 2: Verify + Commit** — `feat: rebuild Home page (editorial, no Why block)`

### Task 11: About page

**Files:** Modify `src/app/about/page.tsx`.

- [ ] **Step 1:** H1 **"We are here for the work after the idea."** + intro. Sections in order: Our Story (PullQuote-led), What We Believe, Mission, Vision, What Matters to Us (distinct panels/`Card`s), then **"Why ORYVA-AI"** 4 points as `NumberedStep` 01–04 (relocated from Home, copy verbatim). CTAs "Meet the product" → `/product`, "Join the journey" → `/forge`.
- [ ] **Step 2: Verify + Commit** — `feat: rebuild About page with relocated Why block`

### Task 12: ORYVA FORGE page

**Files:** Modify `src/app/forge/page.tsx`; modify `src/components/sections/forge-interactive.tsx`; modify `src/components/forms/forge-application-form.tsx` (**remove phone**).

- [ ] **Step 1: `forge-application-form.tsx`** — delete `phone` from zod schema, the `<Label>Phone Number</Label>` + `<Input type="tel">` field, and any default value. Light restyle. Keep track-adaptive fields.
- [ ] **Step 2: `forge-interactive.tsx`** — light restyle 3 track cards. NOTE: brief tracks are **Workshops / Mentorship / Fellowships** (3), not the old 4 — align cards to these three; the Hackathon is its own section (Step 3), not a track card.
- [ ] **Step 3: Page** — H1 **"Come with a question. Leave with proof."** + intro → "What FORGE feels like" → three tracks (Workshops/Mentorship/Fellowships) → **"The FORGE Hackathon: Signal-to-Ship"** intro + 5 `NumberedStep` (01–05). CTAs "Enter ORYVA FORGE", "Bring Your Signal" (scroll to application form).
- [ ] **Step 4: Verify** — grep page + form for phone/`tel:` → zero. `npm run build`.
- [ ] **Step 5: Commit** — `feat: rebuild ORYVA FORGE page + Signal-to-Ship; drop phone from application`

### Task 13: Product page (rename products → product)

**Files:** Create `src/app/product/page.tsx`; delete `src/app/products/`; modify `src/components/forms/waitlist-form.tsx` (light).

- [ ] **Step 1: `waitlist-form.tsx`** — light restyle, keep name/email + mock success.
- [ ] **Step 2: Page** — H1 **"A career is not a straight line. Your guidance should not be either."** + intro → "The idea behind the product" → "What it is being built to support" → "The experience in three parts" as 3 `NumberedStep`/steps → "Still taking shape" note → restyled `product-mockup` → CTA "Join the waitlist" (`waitlist-form`).
- [ ] **Step 3:** Delete `src/app/products/` after new page verified.
- [ ] **Step 4: Verify** — `npm run build`; `/products` redirects to `/product` (Phase 4).
- [ ] **Step 5: Commit** — `feat: rebuild Product page at /product`

### Task 14: How It Works page (rename services → how-it-works)

**Files:** Create `src/app/how-it-works/page.tsx`; delete `src/app/services/`.

- [ ] **Step 1: Page** — H1 **"From a real idea to a product people return to."** + intro → "The ORYVA-AI product approach" → **6-step process** as `NumberedStep` 01–06 (big cards) → "What we are building for" + "The promise we make" closers. CTA "Explore what we are building" → `/product`. Nav label stays "How It Works".
- [ ] **Step 2:** Delete `src/app/services/` after new page verified.
- [ ] **Step 3: Verify + Commit** — `feat: rebuild How It Works page at /how-it-works`

### Task 15: Contact page

**Files:** Modify `src/app/contact/page.tsx`; modify `src/components/forms/contact-form.tsx`.

- [ ] **Step 1: `contact-form.tsx`** — topic select options EXACTLY: Product / ORYVA FORGE / Partnership / General. Fields: Your name / Email address / topic / Your message. Keep honeypot + zod + mock success. Light restyle. No phone.
- [ ] **Step 2: Page** — H1 **"Let's start somewhere."** + intro. Split layout: left = intro + email `contact@oryva-ai.com` (`mailto:`) + social links (real icons, placeholder URLs) + closing line "Good things often begin…"; right = `ContactForm`. Form intro copy verbatim. CTA "Start a conversation". **Remove `Phone` import + all phone markup.**
- [ ] **Step 3: Verify** — grep contact page + form for phone/`tel:`/`href="#"` → zero. `npm run build`.
- [ ] **Step 4: Commit** — `feat: rebuild Contact page (no phone, topic select, real socials)`

---

# PHASE 3 — SEO / a11y / polish

### Task 16: Metadata, Organization JSON-LD, sitemap, 404, OG image

**Files:** Modify `src/app/layout.tsx`, `src/app/sitemap.ts`; create `src/app/not-found.tsx`, `src/app/opengraph-image.tsx`.

- [ ] **Step 1: `sitemap.ts`** — ROUTES = `["", "/about", "/forge", "/product", "/how-it-works", "/contact"]`.
- [ ] **Step 2: JSON-LD** — In `layout.tsx`, add a `<script type="application/ld+json">` with Organization: `name`, `url` (`https://www.oryva-ai.com`), `logo`, `email: contact@oryva-ai.com`, `sameAs` = the 3 social URLs. **NO `telephone`.** Inject via `dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}`.
- [ ] **Step 3: `not-found.tsx`** — branded light 404: Fraunces headline, short line, Button back to Home. Metadata title "Not found".
- [ ] **Step 4: `opengraph-image.tsx`** — consult `14-metadata-and-og-images.md`; generate a simple paper/ink/terracotta OG card (title + brand line). Ensure Twitter/OG metadata references it.
- [ ] **Step 5: Verify** — `npm run build`; view-source contains Organization JSON-LD with no `telephone`. `grep -rn "telephone\|\"tel" src` → zero.
- [ ] **Step 6: Commit** — `feat: SEO metadata, Organization JSON-LD (no phone), 404, OG image`

### Task 17: Global phone-removal + dead-link sweep

**Files:** whole `src/`.

- [ ] **Step 1: Verify** — Run:
  - `grep -rn "tel:\|Phone\|+91\|telephone\|XXXXX" src` → **zero**
  - `grep -rn "href=\"#\"" src` → **zero**
  - `grep -rn "/login\|/register\|/account\|/products\|/services" src` → only the two `redirects()` source strings in `next.config.ts`, nothing else.
- [ ] **Step 2:** Fix any stragglers found.
- [ ] **Step 3: Commit** — `chore: verified phone + dead-link removal across site`

---

# PHASE 4 — Testing (webapp-testing skill + browser preview + axe-core)

### Task 18: Build / lint / type gate

- [ ] **Step 1:** Run `npx tsc --noEmit` → no errors.
- [ ] **Step 2:** Run `npm run lint` → no errors (fix warnings that indicate real issues, e.g. missing alt, a11y).
- [ ] **Step 3:** Run `npm run build` → succeeds, all 6 routes + not-found compile as static.
- [ ] **Step 4: Commit** if any fixes — `fix: resolve build/lint/type issues`

### Task 19: Browser + accessibility verification

Use `preview_start {name}` (dev server from `.claude/launch.json`), then per page (`/`, `/about`, `/forge`, `/product`, `/how-it-works`, `/contact`, plus a bogus path for 404 and `/products`,`/services` for redirects):

- [ ] **Step 1:** `read_console_messages` → no errors on any page.
- [ ] **Step 2:** Nav: every `NAV_LINKS` href resolves; `/products`→`/product`, `/services`→`/how-it-works` redirect.
- [ ] **Step 3:** Contact form: submit empty → validation errors shown; fill valid → mock success. Repeat waitlist + forge forms.
- [ ] **Step 4:** Carousel: arrows + dots change slide; swipe works at 375px width.
- [ ] **Step 5:** Scroll reveals fire without jank; re-run with `resize_window {colorScheme}`/reduced-motion emulation → animations disabled, content still visible.
- [ ] **Step 6:** Responsive at 375 / 768 / 1440 — no horizontal overflow, no overlap.
- [ ] **Step 7:** axe-core on every page — inject axe source via `javascript_tool` (or webapp-testing skill helper) and run `axe.run()`; record violations.
- [ ] **Step 8:** Confirm phone absent (visual scan + the Task 17 greps) and no dead links.
- [ ] **Step 9:** Flag any section still reading as text-heavy.
- [ ] **Step 10:** Record all findings (severity + repro) in the final report.

### Task 20: Fix bugs found + finalize

- [ ] **Step 1:** Fix every bug from Task 19 (highest severity first); re-verify the specific check.
- [ ] **Step 2:** Re-run Task 18 gate.
- [ ] **Step 3:** Final commit(s); summarize the bug list + fixes.
- [ ] **Step 4:** Offer merge/PR via finishing-a-development-branch skill.

---

## Self-Review (author checklist — completed)

- **Spec coverage:** auth removal (T3), light tokens+fonts (T2), Lenis (T4), Embla carousel (T6,T8), pull-quote/numbered cards (T6), navbar/footer (T7), 6 pages incl. renames+Why relocation (T10–T15), phone removal (T3/T7/T12/T15/T17), real socials (T7/T15), JSON-LD no phone + sitemap + 404 + OG (T16), testing incl. axe + responsive + carousel + redirects (T18–T20). All spec §1–§13 mapped.
- **Placeholder scan:** none — social URLs are the intentional, spec-approved placeholders; every code step has real code.
- **Type/name consistency:** `LenisProvider`, `Carousel({slides})`, `PullQuote`, `NumberedStep({index,title,children})`, `SocialIcon({platform})`, `NAV_LINKS` used consistently across tasks; route names `/product` + `/how-it-works` consistent in redirects, nav, sitemap, pages.
- **Ordering caveat noted:** navbar `useAuth` error between T3 and T7 — plan instructs to comment it in T3, fix in T7.
