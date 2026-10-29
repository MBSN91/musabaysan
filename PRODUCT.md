# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recruiters, hiring managers and design leads at large international companies in the Netherlands (Senior and Lead product or UX design roles). They skim a portfolio in a minute or two between other candidates, often on a laptop, sometimes on a phone from a LinkedIn link, and decide whether to invite Musa to an intro call. Second audience: founders or small businesses looking for a UX designer who can also build.

## Product Purpose
musabaysan.nl is Musa Baysan's portfolio. It must make a stranger say, within seconds, "UX designer who designs apps and builds them, at senior level", show the work, and get them to email him. Success: intro calls for Senior and Lead roles.

## Positioning
Musa designs and builds. He takes apps from research on the shop floor through Figma to working code (ATHLIQ, his own React Native app, is designed and built end to end by him). Most UX portfolios show finished mockups; his can show the same screen as sketch and as shipped product.

## Operating Context
Visitors arrive from CVs, LinkedIn and job applications. adidas can see the site, so it must never signal "available for work". Case study pages are read by hiring managers preparing an interview.

## Capabilities and Constraints
- Astro 3 site on Netlify (repo MBSN91/musabaysan, deploys `master`); Cloudflare in front; Seline analytics in the head.
- GSAP is allowed (Musa, 28 Oct 2026).
- Light and dark theme, following the visitor's system with a manual toggle (Musa, 28 Oct 2026).
- Case pages now: adidas store app, ATHLIQ, Happy Italy.
- adidas work is confidential: no real screens. Rebuilt wireframes and process photos may be public with details blurred here and there (Musa, 28 Oct 2026).
- Copy facts come only from Musa's CV or facts he confirmed. No formal people management; no invented metrics.

## Brand Commitments
- Colours of the live musabaysan.nl: navy `#05192d`, orange `#F46036`, teal `#03B5AA`, paper `#f9f4f0`, dark `#121212` (Musa, 28 Oct 2026: "leaning to use the colors used on the live version").
- His own wordmark logo (`src/icons/logo.svg`).
- No em dashes in any copy.

## Evidence on Hand
- ATHLIQ real screens: `public/img/athliq-*.webp` (from `~/Documents/ATHLIQ/store-assets/play`).
- Happy Italy app comp `public/img/happy-italy.webp`; client websites `public/img/site-barber.webp`, `site-suits.webp`; portrait `public/img/musa.webp`.
- CV facts: 30,000+ store employees use the adidas app; native bulk scanning took about 1.5 minutes instead of 5 to 8 in tests; store journey mapping got broken membership steps fixed within weeks; designing since 2013; own studio from 2014; Happy Italy 2020 to 2021; adidas since Aug 2021 (contractor, Manager UX Design from Jul 2022, now Digital Experience Designer); ATHLIQ in alpha with 20 active users.
- Missing, must not be faked: adidas screens, client quotes, testimonials, press, team size numbers. Photos and video from the shot list (see `~/.hermes/plans/2026-10-28_portfolio-visuals-v2-plan.md`) are still to be made.

## Product Principles
1. Show the work, then say the result. Every project leads with a real artefact.
2. Prove "designs and builds" rather than claiming it.
3. Senior means judgement: say what was decided and why, with the evidence.
4. Truthful over impressive: no number without a source.

## Accessibility & Inclusion
WCAG 2.2 AA. Everything readable without motion or script; reduced motion gets static content.
