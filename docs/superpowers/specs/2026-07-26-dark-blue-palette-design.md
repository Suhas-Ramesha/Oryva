# Oryva Dark Blue Palette Design

**Date:** 2026-07-26
**Status:** Approved
**Reference:** Upstream commit `2994499639ed65fa08fbc157bf465c5a3829a9b7`

## Goal

Apply the reference commit's dark blue visual identity to the current, improved website without reverting its layout, content hierarchy, responsive behavior, carousel, or motion polish.

## Palette

- Background: `#08090c`
- Elevated background: `#0c0e13`
- Surface: `#10131a`
- Secondary surface: `#151924`
- Foreground: `#f2f4f8`
- Muted text: `#99a1b3`
- Secondary muted text: `#6b7383`
- Accent: `#3e7bfa`
- Bright accent: `#6ea8ff`
- Subtle border: `rgba(255, 255, 255, 0.08)`
- Strong border: `rgba(255, 255, 255, 0.14)`
- Accent wash: `rgba(62, 123, 250, 0.12)`

The current semantic token names may remain to limit unnecessary component churn, but every token must resolve to the reference palette. Component-specific tuning must preserve readable hierarchy and WCAG-aware contrast.

## Typography and Content

- Preserve the current type pairing and content hierarchy.
- Change all visible `ORYVA-AI` branding to `ORYVA AI`.
- Change visible and metadata email references from `contact@oryva-ai.com` to `contact@oryva.com`.
- Remove hyphens, en dashes, and em dashes from visible prose and metadata.
- Rephrase hyphenated words naturally instead of joining them incorrectly.
- Keep technical route paths, CSS syntax, package names, identifiers, and source-only comments unchanged where required.

## Component Treatment

- Use dark surfaces for cards, forms, mobile navigation, carousel slides, mockups, and footer sections.
- Use bright blue for active navigation, eyebrow dots, primary actions, progress indicators, focus rings, and selected carousel dots.
- Keep secondary text cool gray and ensure it remains readable on every surface.
- Replace light-theme shadows with restrained blue or black depth appropriate to the dark palette.
- Use a 64-pixel grid pattern with subtle white lines, matching the reference commit.
- Keep reduced motion behavior and visible keyboard focus.

## Requested Structural Changes

### Home

- Remove the final home page action buttons:
  - `Explore Our Product`
  - `Discover ORYVA FORGE`
- Keep the closing statement as a clean, centered brand line without actions.
- Remove the bottom call-to-action link from every carousel slide.
- Keep carousel autoplay, side arrows, and dots.

### Product

- Remove the hero mockup image.
- Expand the bold hero headline across the page.
- Constrain the headline to a deliberate two-line desktop composition while allowing natural wrapping on smaller screens.
- Keep the supporting paragraph and actions below the headline.

### How It Works

- Remove the six-item process summary from the right side of the hero.
- Keep the explanatory paragraph.
- Preserve the full six-step process farther down the page.

## Responsive Requirements

- No horizontal overflow at 320, 375, 768, 1024, or 1440 pixel widths.
- Product hero must remain readable and avoid clipped text at all widths.
- Navigation must remain usable on mobile and desktop.
- Carousel controls must not cover essential slide content.
- Cards and forms must retain visible boundaries against their parent sections.
- Footer columns must stack cleanly on small screens.

## Verification

- Add a visible-copy verification script that rejects old branding, the old email, and visible dash characters in rendered route text.
- Run the copy verifier before and after implementation to demonstrate failure then success.
- Run ESLint and a production Next.js build.
- Test all routes in a browser at desktop and mobile widths.
- Check navigation, mobile menu, carousel autoplay and controls, forms, focus states, contrast, and overflow.
- Review the final diff before committing.
- Commit and push to `Suhas-Ramesha/Oryva` only after verification succeeds.
