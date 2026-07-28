# Oryva Dark Blue Palette Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the current Oryva website to the approved dark blue reference palette, remove visible dash characters, simplify repeated page elements, and verify every route at desktop and mobile widths.

**Architecture:** Preserve the current App Router pages and component structure. Remap the existing semantic color tokens to the reference palette in `globals.css`, then tune shared components and requested page layouts so the dark palette reads intentionally rather than as a mechanical token swap. Validate visible copy in the rendered browser, then run lint, production build, responsive browser checks, and diff review before committing.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Embla Carousel, Cursor browser tools.

## Global Constraints

- Use the exact palette from commit `2994499639ed65fa08fbc157bf465c5a3829a9b7`.
- Preserve current content hierarchy, responsive structure, carousel autoplay, and reduced motion behavior.
- Change visible `ORYVA-AI` to `ORYVA AI`.
- Change visible and metadata email references to `contact@oryva.com`.
- Remove ASCII hyphens, en dashes, and em dashes from visible text while preserving technical paths and identifiers.
- Do not modify or commit the existing untracked `reference/oryva-ai (1).html`.
- Verify at 375 by 812 and 1440 by 1000 at minimum.

---

### Task 1: Establish failing visual and content checks

**Files:**
- Inspect: `src/app/**/*.tsx`
- Inspect: `src/components/**/*.tsx`

**Interfaces:**
- Consumes: Current rendered route text and current light theme.
- Produces: Recorded failing checks for old branding, dash characters, and old palette.

- [ ] **Step 1: Start the current app**

Run: `npm run dev`

Expected: Next.js reports a local URL and serves all routes.

- [ ] **Step 2: Verify current visible copy fails the new requirement**

Check `document.body.innerText` on `/`, `/about`, `/product`, `/forge`, `/how-it-works`, and `/contact` for:

```javascript
/(ORYVA-AI|contact@oryva-ai\.com|[-–—])/
```

Expected: FAIL because old branding and visible dash characters are present.

- [ ] **Step 3: Capture baseline desktop and mobile screenshots**

Capture `/`, `/product`, and `/how-it-works` at 1440 by 1000 and 375 by 812.

Expected: Screenshots show the current light palette and requested repeated elements.

### Task 2: Migrate the shared color system

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: Existing semantic classes (`paper`, `ink`, `brand`, `signal`, and related tokens) backed by the approved dark palette.

- [ ] **Step 1: Replace root token values**

Set the token mapping to:

```css
--paper: #08090c;
--paper-2: #10131a;
--paper-3: #0c0e13;
--ink: #f2f4f8;
--ink-soft: #d4d9e3;
--muted: #99a1b3;
--muted-2: #6b7383;
--hairline: rgba(255, 255, 255, 0.08);
--hairline-strong: rgba(255, 255, 255, 0.14);
--brand: #3e7bfa;
--brand-bright: #6ea8ff;
--brand-dim: rgba(62, 123, 250, 0.12);
--signal: #6ea8ff;
--signal-bright: #8ebcff;
--signal-soft: rgba(62, 123, 250, 0.16);
```

- [ ] **Step 2: Update global dark behavior**

Add `color-scheme: dark`, use the reference 64-pixel line grid, set selection to accent blue, and preserve focus/reduced-motion rules.

- [ ] **Step 3: Run lint**

Run: `npm run lint`

Expected: Exit code 0.

### Task 3: Tune shared dark components

**Files:**
- Modify: `src/components/ui/button.tsx`
- Modify: `src/components/ui/eyebrow.tsx`
- Modify: `src/components/ui/badge.tsx`
- Modify: `src/components/ui/card.tsx`
- Modify: `src/components/ui/input.tsx`
- Modify: `src/components/ui/select.tsx`
- Modify: `src/components/ui/textarea.tsx`
- Modify: `src/components/ui/product-mockup.tsx`
- Modify: `src/components/ui/carousel.tsx`
- Modify: `src/components/ui/numbered-step.tsx`
- Modify: `src/components/layout/navbar.tsx`
- Modify: `src/components/layout/footer.tsx`

**Interfaces:**
- Consumes: Dark semantic tokens from Task 2.
- Produces: Accessible dark surfaces, actions, focus styles, navigation, forms, and carousel controls.

- [ ] **Step 1: Tune buttons and focus treatment**

Use bright foreground on primary blue, dark text only when contrast is sufficient, and blue focus rings with dark offsets.

- [ ] **Step 2: Tune cards, fields, and borders**

Ensure cards and form fields visibly separate from parent surfaces using `paper-2`, `paper-3`, subtle borders, and restrained shadows.

- [ ] **Step 3: Tune mockups and carousel chrome**

Convert decorative bars, dots, controls, and selected indicators to blue/cool gray. Keep autoplay, hover pause, focus pause, arrows, and dots.

- [ ] **Step 4: Update shared visible branding**

Render `ORYVA AI`, `contact@oryva.com`, and dash-free footer copy.

- [ ] **Step 5: Run lint**

Run: `npm run lint`

Expected: Exit code 0.

### Task 4: Apply requested page layout changes

**Files:**
- Modify: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/product/page.tsx`
- Modify: `src/app/how-it-works/page.tsx`

**Interfaces:**
- Produces: Simplified home carousel and closing band, full-width product hero, and nonrepeating How It Works hero.

- [ ] **Step 1: Remove carousel slide bottom links**

Remove `href` and `cta` from `SlideShell` and remove the rendered bottom link while retaining accessible carousel navigation.

- [ ] **Step 2: Remove home closing buttons**

Keep the closing statement centered and remove both action buttons and their now-unused imports.

- [ ] **Step 3: Rebuild product hero without the mockup**

Remove `ProductMockup` from the product hero. Use a single-column hero with a desktop headline sized and width-constrained to form two balanced lines, followed by body copy and actions.

- [ ] **Step 4: Remove the repeated How It Works summary**

Delete the six-item hero list and let the right column contain only the explanatory paragraph.

- [ ] **Step 5: Run lint**

Run: `npm run lint`

Expected: Exit code 0.

### Task 5: Remove visible dash characters site-wide

**Files:**
- Modify: `src/app/**/*.tsx`
- Modify: `src/components/**/*.tsx`

**Interfaces:**
- Produces: Dash-free rendered text and metadata while preserving route paths and internal identifiers.

- [ ] **Step 1: Replace branding and email**

Replace visible and metadata `ORYVA-AI` with `ORYVA AI`, and `contact@oryva-ai.com` with `contact@oryva.com`.

- [ ] **Step 2: Rewrite punctuation and hyphenated visible words**

Examples:

```text
AI-powered        -> powered by AI
half-formed       -> early stage
follow-up         -> continued
Signal-to-Ship    -> Signal to Ship (display only)
text — text       -> text. Text
```

Preserve `/how-it-works`, `#apply-signal-to-ship`, enum values, package names, CSS classes, and source identifiers.

- [ ] **Step 3: Re-run rendered text checks**

Check all six routes with:

```javascript
/(ORYVA-AI|contact@oryva-ai\.com|[-–—])/
```

Expected: PASS with no matches in `document.body.innerText`.

### Task 6: Responsive browser verification and refinement

**Files:**
- Modify as needed: files from Tasks 2 through 5.

**Interfaces:**
- Produces: Verified desktop and mobile presentation across every route.

- [ ] **Step 1: Verify desktop**

At 1440 by 1000, inspect `/`, `/about`, `/product`, `/forge`, `/how-it-works`, and `/contact`.

Check: contrast, spacing, product headline line count, carousel controls, navigation, forms, footer, and horizontal overflow.

- [ ] **Step 2: Verify mobile**

At 375 by 812, inspect all routes and open the mobile menu.

Check: no clipped headings, no overlap, readable cards, usable form controls, carousel control placement, and no horizontal overflow.

- [ ] **Step 3: Verify interactions**

Check carousel autoplay and manual controls, navigation, mobile menu, form validation, keyboard focus, and reduced-motion behavior.

- [ ] **Step 4: Capture final screenshots**

Capture `/`, `/product`, and `/how-it-works` at desktop and mobile widths.

Expected: The approved palette is consistent and all requested removals are visible.

### Task 7: Final quality gate, review, commit, and push

**Files:**
- Review: all changed files

**Interfaces:**
- Produces: A verified commit on `Suhas-Ramesha/Oryva`.

- [ ] **Step 1: Run full verification**

Run:

```powershell
npm run lint
npm run build
```

Expected: Both commands exit 0.

- [ ] **Step 2: Review diff and request code review**

Inspect `git diff`, confirm the untracked reference HTML remains untouched, and run a focused reviewer against the uncommitted changes.

- [ ] **Step 3: Fix all critical and important findings**

Re-run lint, build, and affected browser checks after fixes.

- [ ] **Step 4: Commit**

Stage only the intended source and documentation files. Use a concise message focused on matching the client-approved visual identity.

- [ ] **Step 5: Push**

Run: `git push origin main`

Expected: The new commit is present on `https://github.com/Suhas-Ramesha/Oryva`.
