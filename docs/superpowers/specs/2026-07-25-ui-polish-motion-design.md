# Oryva UI Polish + Motion Design

**Date:** 2026-07-25  
**Status:** Approved (balance + richer motion; light copy trim; keep carousel autoplay)

## Goals
- Fill blank text-only bands without cluttering
- One mid spacing rhythm site-wide (`py-14 sm:py-20`)
- Softer, more intentional motion; Magnetic on primary CTAs
- Keep Embla carousel autoplay
- Preserve warm editorial brand (paper / pine / terracotta)

## Non-goals
- Rebrand / palette swap
- Heavy copy rewrite
- Animation spam beyond approved motion set

## Spacing
- Body sections: `py-14 sm:py-20`
- Heroes: `pt-28 pb-12 sm:pt-32 sm:pb-16`
- Closing CTAs: grounded (`border-t` + `bg-paper-2`), `py-16 sm:py-20`

## Layout patterns
- Text bands: 12-col split (eyebrow/h2 left, body right) or full-width when short
- NumberedStep on tinted sections: `bg-paper` surface
- Forge 5-step: readable grid (not awkward 3+2)

## Motion
- Reveal: smaller rise (~12–16px), ~0.55s, optional stagger parent
- Magnetic on primary CTAs site-wide
- Carousel: autoplay + side arrows + dots; pause on hover/focus
- Honor `prefers-reduced-motion`

## Copy
- Light trims only where redundant; keep meaning and length mostly intact

## Deploy
- Source: https://github.com/hiteshr3007-cmd/Oryva
- Target account: https://github.com/Suhas-Ramesha
- Host: Vercel (CLI user: suhas-ramesha)
