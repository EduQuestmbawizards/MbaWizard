# MBA Wizards — Next.js Migration: Folder Structure Spec

This document is the **single source of truth** for how this project is organized.
Antigravity must follow this structure exactly for every page and component it
builds. If something in a task isn't covered here, stop and ask before inventing
a new pattern.

---

## 1. Core Rule

Next.js App Router requires `page.tsx` to sit at the exact route path inside
`src/app/`. To keep the "one folder per page, with page.tsx + schema.ts +
<page>.tsx inside it" convention the client wants — **including for the home
page, which lives at `/` and can't be nested under `/home`** — we use a
**Next.js route group**: `(home)`. Route groups (folder name wrapped in
parentheses) do not add a URL segment, so `src/app/(home)/page.tsx` still
serves route `/`.

Every other page folder name IS its URL segment (Next.js default behavior),
so no route group is needed for them.

---

## 2. Page Folder Contents (applies to every page)

Every page folder contains exactly these three files — nothing else:

```
<page-folder>/
  page.tsx        -> Thin route file. Imports metadata from schema.ts,
                      imports the content component, renders it. No JSX
                      logic beyond composition.
  schema.ts        -> Exports: (a) Next.js `Metadata` object (title,
                      description, OG tags) and (b) JSON-LD structured
                      data object(s) for this page (e.g. LocalBusiness,
                      Course, FAQPage, BreadcrumbList as relevant).
  <page-name>.tsx  -> The actual page content component. Composes
                      section components imported from src/components/<page-name>/.
                      Contains no raw markup that belongs to a reusable
                      section — that markup lives in components/.
```

Do not add extra files (no `utils.ts`, no `types.ts`, no `constants.ts`)
inside a page folder unless a page genuinely needs page-specific data that
doesn't fit anywhere else — and if so, ask first.

---

## 3. Component Folder Contents

Components are organized **by the page they belong to**, one subfolder per
component:

```
src/components/<page-name>/<component-name>/
  <ComponentName>.tsx
  <ComponentName>.module.css
```

Rules:
- Component name in PascalCase for the file/function, kebab-case for the folder.
- If a component (e.g. a testimonial card, the WhatsApp float button, the
  "Book a Demo" popup form, Header, Footer) is used on **more than one page**,
  it goes in `src/components/shared/<component-name>/` instead — never
  duplicated per page. Check `shared/` before creating anything new.
- No inline styles, no styled-components, no Tailwind unless the client
  confirms Tailwind — default to CSS Modules per the pattern above.
- A component file should only contain what that one component renders.
  Don't fold multiple sections into one file to save a folder.

---

## 4. Full Route List

### 4.1 Standalone pages (one folder each, following Section 2)

| Route | Folder |
|---|---|
| `/` | `src/app/(home)/` |
| `/about-us` | `src/app/about-us/` |
| `/contact-us` | `src/app/contact-us/` |
| `/gmat-coaching` | `src/app/gmat-coaching/` |
| `/gre-coaching-classes` | `src/app/gre-coaching-classes/` |
| `/gmat-gre-coaching` | `src/app/gmat-gre-coaching/` |
| `/gmat-cat-coaching` | `src/app/gmat-cat-coaching/` |
| `/cat-2025` | `src/app/cat-2025/` |
| `/premium-university-consulting-packages` | `src/app/premium-university-consulting-packages/` |
| `/gmat-toppers` | `src/app/gmat-toppers/` |
| `/mba-wizards-methodology` | `src/app/mba-wizards-methodology/` |
| `/gmat-preparation` | `src/app/gmat-preparation/` |
| `/corporate-training` | `src/app/corporate-training/` |
| `/education-loan` | `src/app/education-loan/` |
| `/research-paper-drafting-publishing-services` | `src/app/research-paper-drafting-publishing-services/` |
| `/privacy-policy` | `src/app/privacy-policy/` |
| `/refund-policy` | `src/app/refund-policy/` |

Each of these follows the exact same internal structure as `(home)` —
`page.tsx`, `schema.ts`, `<page-name>.tsx` — with a matching
`src/components/<page-name>/` folder for its sections.

### 4.2 City / location pages — separate static folder per city (client's explicit choice)

The live WordPress site has near-identical pages per city (Gurgaon, Noida,
Delhi, Chandigarh, Mumbai, Hyderabad, Bangalore, Pune, and Chennai for
GMAT+CAT only) for each of GMAT, GRE, GMAT+GRE, GMAT+CAT, and CAT.

**Decision: each city gets its own real static folder — no dynamic `[city]`
route.** Each city page has its own independent `page.tsx` / `schema.ts` /
`<page-name>.tsx`, exactly like every other standalone page in Section 2.
This is intentional (SEO/content control per city, matching the live site's
existing URLs 1:1), not an oversight — do not "optimize" this into a
dynamic route.

```
src/app/gmat-coaching-in-gurgaon/
  page.tsx / schema.ts / gmat-coaching-in-gurgaon.tsx
src/app/gmat-coaching-in-noida/
  page.tsx / schema.ts / gmat-coaching-in-noida.tsx
src/app/gmat-coaching-in-delhi/          (same pattern)
src/app/gmat-coaching-in-chandigarh/     (same pattern)
src/app/gmat-coaching-in-mumbai/         (same pattern)
src/app/gmat-coaching-in-hyderabad/      (same pattern)
src/app/gmat-coaching-in-bangalore/      (same pattern)
src/app/gmat-coaching-in-pune/           (same pattern)

... repeat the same per-city folder set for:
src/app/gre-coaching-in-<city>/
src/app/gmat-gre-coaching-in-<city>/     (note: live site uses "gmatgre-coaching-in-<city>"
                                           for some cities — match the live URL exactly per city)
src/app/gmat-cat-coaching-in-<city>/     (includes Chennai in addition to the 8 above)
src/app/cat-coaching-in-<city>/
```

**Even with separate folders per city, still avoid duplicating markup:**
each city's `<page-name>.tsx` composes the *same* section components from
`src/components/<program>-coaching-city/` (e.g. `src/components/gmat-coaching-city/`)
— only the text/data passed into those components differs per city. The
components themselves are written once and reused; only the thin per-city
page files and their content data are duplicated. City-specific copy (city
name, local stat, local testimonial) can still live in one small typed data
file per program, e.g. `src/data/gmat-city-copy.ts`, imported by each city's
`<page-name>.tsx` — this keeps the duplication to page-level wiring only, not
component logic.

### 4.3 Blog

```
src/app/blogs/
  page.tsx / schema.ts / blogs.tsx      -> blog index/listing

src/app/blogs/[slug]/
  page.tsx / schema.ts / blog-post.tsx  -> single post, generateStaticParams
                                            from the post data source
```

---

## 5. Shared / Global Files

```
src/app/layout.tsx        -> root layout: <Header/>, <Footer/>, global providers
src/app/globals.css        -> resets + CSS variables (colors, spacing, fonts) only
src/components/shared/
  header/
  footer/
  whatsapp-float-button/
  book-demo-popup/
  faq-accordion/           (used on home + multiple program pages)
  testimonial-card/
  cta-section/
src/data/
  navigation.ts             -> single source for nav links (used by Header)
  site-config.ts             -> phone numbers, social links, addresses (avoid
                                 hardcoding these in multiple components)
```

Anything appearing identically on 2+ pages (WhatsApp button, Book a Demo
popup, phone number, FAQ accordion behavior) must be pulled from `shared/` —
never redefined per page.

---

## 6. Non-negotiable Coding Rules

1. **TypeScript strict mode.** No `any` unless truly unavoidable, and then
   commented why.
2. **No unnecessary abstraction.** Don't build a generic `<Section>` wrapper
   component, a config-driven renderer, or a "flexible" prop system for
   something that's rendered once or twice with fixed content. Plain JSX
   beats a clever abstraction that only saves a few lines.
3. **No unnecessary code.** Before writing any file, check: does this need
   to exist as a separate component, or can it be inline in the parent? Is
   this helper function actually reused, or copy-pasted "just in case"? If a
   task can be done in fewer lines without hurting readability, do that —
   don't pad files to look more thorough.
4. **Reuse over duplication**, especially for the city pages (Section 4.2)
   and shared components (Section 5).
5. **next/image** for all images, next/link for all internal links.
6. **Accessibility**: semantic HTML, alt text, proper heading hierarchy
   (one `h1` per page).
7. **Code should read as human-written**: no AI filler comments
   (`// This component renders the hero section`), no restating the obvious,
   no leftover console.logs, no dead code, no placeholder TODOs left in
   without flagging them explicitly in the build report.
8. **SEO**: every page's `schema.ts` must have a real, page-specific title/
   description (not a generic template) and appropriate JSON-LD.

---

## 7A. Content Requirements (added after first build attempt skipped real site content)

The first build pass produced pages without actually pulling content from the
live site. This must not happen again. Every page's content comes from the
**live URL for that page** — read it, extract it, then write an authentic,
polished, slightly modernized version of it (better phrasing, added
animation/interaction, updated stats where the client provides them) — not
invented copy, and not a stripped-down summary.

Per-page content additions required on top of what's already live:

- **GMAT / GRE / CAT subject pages**: latest exam structure, how MBA Wizards
  helps students at each stage, reference material, prep roadmap, marking
  scheme, exam pattern, and scoring system — for that specific exam.
- **Every page**: a CTA section, a "Why MBA Wizards" section, and a
  testimonials section with real student photos (pull from the live site;
  do not use placeholder avatars) — content specific to that page, not one
  generic block copy-pasted everywhere.
- **Contact Us**: fully detailed — all contact channels, office
  address(es), map if the live site has one, working enquiry form.
- **About Us / Our Story**: check the live site for an existing "our story"
  section or page; if it exists as its own URL, mirror that URL and expand
  it in detail (founding story, mission, team). If it's only a subsection of
  About Us on the live site, expand it in detail within `about-us` rather
  than inventing a new URL — do not create a URL that doesn't exist on the
  live site.
- **SEO**: every page gets a real, page-specific meta title/description and
  correct JSON-LD (per Section 6, point 8) reflecting current (2026) exam
  details — not stale/generic copy.
- **URLs must match the live site's URLs exactly**, page for page — this
  is non-negotiable; do not rename or restructure any route.

## 7B. Recurring Shared Sections (present on every page, content varies per page)

Build these as shared components (per Section 5) that each page feeds
page-specific content into — never hardcode one page's content into the
shared component itself:

- **CTA section** and **Testimonials** — both appear on every page, but
  each page passes its own CTA copy and its own relevant testimonials.
  Testimonials render as a **carousel** (auto or swipeable), each slide
  with student photo, name, score/result, and quote.
- **"Managed by EduQuest" bar** — a slim horizontal bar/strip (header or
  footer area, consistent across all pages) stating MBA Wizards is managed
  by EduQuest. One shared component, no per-page variation needed.
- **Myth vs Fact section** — an accordion/dropdown list of myth/fact pairs,
  relevant to that specific page's subject (e.g. GMAT myths on the GMAT
  page, CAT myths on the CAT page). Shared accordion component, page-specific
  data passed in (e.g. `src/data/gmat-myths.ts`).
- **MBA Wizards logo** — use the exact logo asset from the live WordPress
  site (same file/quality), not a recreation or a placeholder.

## 7. Pre-Build Self-Check (Antigravity must do this before generating each page/component)

- [ ] Does this file already exist as something reusable in `shared/`?
- [ ] Am I duplicating markup that exists on another page? If so, extract it
      to `shared/` instead.
- [ ] Is every prop/state/helper in this file actually used?
- [ ] Could this component be simpler (fewer wrapper divs, fewer props)
      without losing functionality?
- [ ] Does this match Section 2/3's exact file set — no extra files added?

Report back listing exactly which pages/components were built, which shared
components were reused (not recreated), and flag anywhere it deviated from
this spec and why.