# Repo Admin Checklist

Living task, owner-action, and launch checklist for Neil's Magic Carpets (neils-magic-carpets).

## Current Project State

- [x] Repo-local SOP copied to `docs/operating-procedure.md`.
- [x] AI instruction files added: `CLAUDE.md`, `AGENTS.md`, `AI_INSTRUCTIONS.md`, `.github/copilot-instructions.md`.
- [x] `.env.example` added with safe placeholders.
- [x] Pull request template added at `.github/pull_request_template.md`.
- [x] Production domain confirmed as `https://www.neilsmagiccarpets.co.uk/`.
- [x] Canonical URL, Open Graph URL, and Open Graph image URL use the production domain (confirmed in `index.html`).
- [x] Page title, meta description, and Open Graph tags present in `index.html`.
- [x] Favicon present (`neils_magic_carpets_favicon.svg`).
- [x] `robots.txt` present.
- [x] `sitemap.xml` present.
- [x] Service area confirmed as London and the South East.
- [x] Local branch is `main` and `origin` points at `https://github.com/charishynds/neils-magic-carpets.git`.
- [x] Twitter Card meta tags added to `index.html`.
- [x] `vercel.json` added with security headers and SPA fallback.
- [ ] ESLint not fully set up — `lint` script exists in `package.json` but `eslint` is not in devDependencies and no config file is present. Add `eslint` and a config before relying on `npm run lint`.
- [ ] Local lint, build, and typecheck checks not yet run on this repo. Run and confirm passing before first PR.
- [x] Supabase project confirmed: new project created in your existing Supabase org — see Supabase section for next steps.

## Development Workflow

- [x] React, Vite, TypeScript, Tailwind CSS, Framer Motion, Supabase, npm, and Vercel stack.
- [x] Default local preview command is `npm run dev -- --host 0.0.0.0 --port 5173`.
- [ ] Create a feature/chore branch before the next meaningful change is pushed.
- [x] GitHub repository default branch confirmed and set to `main`.
- [ ] Confirm branch protection or review expectations for `main`.

## Environment Variables

- [x] `.env` and `.env.*` are ignored (confirmed in `.gitignore`).
- [x] `.env.example` is tracked with safe placeholders.
- [x] Frontend Supabase variable names documented: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`.
- [x] Confirm Vercel Preview environment variables are configured.
- [x] Confirm Vercel Production environment variables are configured.
- [ ] Confirm Supabase Edge Function secrets are configured for WhatsApp when that function is deployed (Google Places secrets already set).

## Infrastructure

- [ ] Confirm Vercel account is on Pro plan (required for commercial use — Hobby is personal-only).
- [x] Supabase: Neil's project and Moxify both sit in your Supabase org — free tier covers both (2 active projects max).
- [ ] Supabase keep-alive ping: add a Vercel cron (`api/ping.ts` + `vercel.json` crons) to this project once Supabase is live. Prevents free-tier pausing. A `SELECT 1` every 6 days — read-only, no data written, no notifications triggered.
- [ ] Third client site (future): have that client create their own Supabase org and add you as admin — their free tier is separate from yours. This is standard agency practice, not a ToS workaround.
- [x] Sanity CMS free tier covers both sites that need it (10,000 docs, 100 GB bandwidth, 20 seats per project). No upgrade needed until those limits are approached.

## Supabase

- [x] Create new Supabase project in your org via the dashboard — project ref `fxraygkweckkxkfxfrsh`.
- [x] Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` to Vercel environment variables (Production and Preview).
- [x] Link repo to Supabase project: `supabase link --project-ref fxraygkweckkxkfxfrsh`.
- [ ] Create migrations for the `leads` table (name, email, phone, message, consent, created timestamp) if the contact form stays.
- [ ] Enable RLS and define anonymous insert plus service-role read policies.
- [ ] Confirm the production Supabase database has the expected schema and policies before launch.
- [ ] Confirm database constraints match front-end validation (react-hook-form + zod).
- [x] Google Rating Badge: Google Place ID confirmed — `ChIJxxYBUDOyUGQRPTrKTXzsZls` (verified: 5.0 rating, 9 reviews, phone 07984 147403 matches). Uses Places API (New) — SAB with hidden address, not findable via legacy Places API.
- [x] Google Rating Badge: Google Cloud project created, Places API (New) enabled, API key generated and restricted to Places API (New) only (server-side use, no application restriction needed).
- [x] Google Rating Badge: add `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` (`ChIJxxYBUDOyUGQRPTrKTXzsZls`) as Supabase Edge Function secrets.
- [x] Google Rating Badge: `get-google-rating` edge function written at `supabase/functions/get-google-rating/index.ts` — uses Places API (New), committed to `feature/google-reviews`.
- [x] Google Rating Badge: `get-google-rating` deployed to project `fxraygkweckkxkfxfrsh`.
- [x] Confirm Preview and Production environments use the intended Supabase project (`fxraygkweckkxkfxfrsh`).

## Vercel And Hosting

- [x] `vercel.json` added with security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) and SPA fallback rewrite.
- [x] Confirm the Vercel project is linked to `https://github.com/charishynds/neils-magic-carpets.git`.
- [x] Confirm Vercel Preview Deployments are enabled for branches and pull requests.
- [x] Confirm production deploys come from merges to `main` — production branch set to `main` in Vercel Settings → Git.
- [ ] Confirm the hosting plan permits commercial client use.
- [ ] Confirm deployed response headers on the Vercel preview URL using securityheaders.com.
- [ ] Re-confirm deployed response headers on the live production URL after DNS cutover.

## SEO And Launch Basics

- [x] Page title and meta description present.
- [x] Open Graph and Twitter metadata present (Open Graph only — Twitter Card tags still missing).
- [x] Favicon present (`neils_magic_carpets_favicon.svg`).
- [ ] Favicon review — confirm the current SVG favicon looks correct in browser tabs and bookmarks on both light and dark OS themes. Update if Neil supplies a new brand asset.
- [x] `robots.txt` present.
- [x] `sitemap.xml` present for the confirmed production domain.
- [x] Canonical URL present.
- [x] Twitter Card meta tags added to `index.html`.
- [ ] Confirm HTTPS works on the final domain.
- [ ] Confirm canonical redirects, including www/non-www preference.
- [ ] Confirm Google Search Console property is created and verified.
- [ ] Confirm analytics requirement and provider (Vercel Analytics or GA4 — see Analytics section).
- [x] LocalBusiness structured data (Schema.org JSON-LD) added to `index.html` — name, phone, address (Forest Hill SE23), service area, and opening hours.
- [ ] OG image review — currently `hero.JPG` via production domain URL. Confirm this is the right social share image (ideal 1200×630px). May need a purpose-made card with logo and business name.
- [ ] Google Business Profile — claim and optimise Neil's listing.

## Social Media

- [ ] **Instagram** — update profile photo, bio, and website link to match the new site. Confirm tone and description are consistent with the new copy.
- [ ] **Facebook** — update cover photo, profile photo, about text, and website URL. Check that the page category and services listed are accurate.
- [ ] **Nextdoor** — update business profile photo, description, and website link.
- [ ] **Google Business Profile** — update photos (interior/exterior/work examples), business description, website URL, and confirm opening hours and service area are correct.
- [ ] Cross-check all profiles: phone number, service area (London and South East), and branding are consistent across Instagram, Facebook, Nextdoor, and Google.

## Visual And Functional QA

- [ ] Start local preview and check desktop viewport.
- [ ] Check mobile viewport around 390px wide.
- [ ] Check navigation scroll behaviour (transparent → white), CTAs, gallery lightbox, footer links, and WhatsApp floating button.
- [ ] Check contact form validation states without submitting to external services.
- [ ] After approval, verify a real form submission reaches Supabase and triggers the intended notification.
- [ ] Test Vercel Preview Deployment on real iPhone Safari and Android Chrome before DNS cutover.

## Performance And Security

- [ ] Run `npm audit --omit=dev` after approval.
- [ ] Run Lighthouse or PageSpeed Insights against the Vercel preview URL after approval.
- [ ] Re-run PageSpeed Insights against the live production URL after DNS cutover.
- [ ] Investigate Framer Motion bundle contribution only if lab or field data shows JavaScript is a material bottleneck.
- [ ] Confirm no secrets, private keys, or personal data are committed.

## Analytics

- [ ] Confirm analytics choice with Neil: Vercel Analytics (lightweight, no cookie consent required) or Google Analytics 4 (more detailed, requires cookie consent banner and privacy policy). Both can coexist.
- [ ] If GA4: create a GA4 property, add the gtag script, and gate it behind cookie consent before going live.
- [ ] If Vercel Analytics: enable in Vercel dashboard; no script changes needed.

## Accessibility

- [ ] Colour contrast audit — forest green + dusty rose palette against WCAG AA (4.5:1 for body text, 3:1 for large text). Run axe DevTools or Lighthouse.
- [ ] Gallery alt text — confirm all gallery images have unique, descriptive alt text. Will be resolved naturally when/if Sanity CMS is set up and Neil enters alt text per photo.
- [ ] Keyboard navigation — tab through the full page; confirm focus rings are visible, gallery lightbox can be opened, closed, and navigated by keyboard, and the mobile menu works.
- [ ] Lightbox focus trap — when the lightbox is open, focus must stay inside it.
- [x] Skip navigation link added to `App.tsx` as first focusable element, targeting `#main-content` on the `<main>` in `Index.tsx`.
- [x] `prefers-reduced-motion` support added to `AnimateIn.tsx` via Framer Motion's `useReducedMotion` hook — renders children directly without animation when the user preference is set.

## Legal And Compliance

- [ ] Contact form decision (see Decisions Required) determines whether a privacy policy is needed.
- [ ] Privacy policy page — required under UK GDPR if the contact form stays and personal data is collected. Needs its own page linked from the footer.
- [ ] Cookie consent banner — required before adding GA4 or any tracking cookies.

## Decisions Required (Before Launch)

- [ ] **Contact form** — Neil is undecided. Decision needed before launch. **Remove:** delete form UI from `Contact.tsx`, remove Supabase lead insertion logic, simplify to contact details + WhatsApp CTA only. Reduces GDPR obligations (no privacy policy needed, no `send-whatsapp` setup). **Keep:** requires privacy policy page, `send-whatsapp` Supabase edge function deployed and configured with WhatsApp Cloud API credentials, and end-to-end form test (Supabase insert + WhatsApp notification). Supabase migrations also needed.
- [ ] **Supabase project** — confirm whether to reuse the existing project from the old site or create a new one for this repo.

## Feature Backlog

- [ ] **Sanity CMS integration** — carried forward from old site plan. Phase 1: install packages, create schemas, set up Studio. Phase 2: populate content (testimonials, services, gallery photos, site settings). Phase 3: migrate components one at a time. First question: does Neil have a Sanity account, or does one need to be created?
- [ ] **Wordmark and logo update** — awaiting new asset files from Neil. Drop-in replacement into `Navigation.tsx` (wordmark) and `Footer.tsx`. Current file names: `/neilsmagiccarpets-logo-black.png` and `/neils_magic_carpets_wordmark_black_white.svg`.

## Deferred Improvements

- [x] Hero image preload — `<link rel="preload">` added to `index.html` for `hero.JPG` (LCP element).
- [ ] Image format — convert gallery and hero images from JPG/JPEG to WebP for meaningful load time reduction.
- [x] Lazy loading — `loading="lazy"` already present on all gallery images in `Gallery.tsx`.
- [ ] Consider adding a test runner (Vitest) and at minimum smoke tests for the contact form and key components once the codebase stabilises.
