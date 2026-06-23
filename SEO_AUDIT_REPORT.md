# Don of Detail — SEO / AEO / Local Search Audit

**Site:** https://donofdetail.com
**Audited:** 2026-06-22
**Method:** Live production HTML pulled with `curl` (what crawlers actually receive), source code review, competitor HTML comparison, and Google primary-source documentation (Search Essentials, Helpful Content guidance, Quality Rater Guidelines Sept 2025, LocalBusiness structured-data docs, AI features guidance).

> **Scope note:** This is a report only. No site code or content has been changed. An action plan is at the end — nothing gets implemented until you approve.

---

## TL;DR — Why you're ranking low (plain language)

**Your website looks empty to Google.** Everything that matters for SEO — your headlines, your service copy, your FAQs, your reviews, your per-page titles and descriptions, your schema — only appears *after* JavaScript runs in the browser. The HTML your server actually sends to Google (and to ChatGPT, Perplexity, and Google's AI Overviews) is a blank shell:

- Every single URL returns the **exact same 24 KB empty page** — same fallback `<title>`, **zero `<h1>`**, **zero `<h2>`**, **no body text**.
- I confirmed this on the homepage *and* a service page: byte-for-byte identical empty shells.
- Your three named competitors all serve **real, complete HTML** (1,300–7,600 words, proper headings) on first load.

You have done a *lot* of good SEO work in the code — strong per-page titles, FAQ schema, service schema, alt text, clean headings, a real owner bio. **None of it is reaching search engines in production** because the prerendering step that's supposed to bake it into the HTML is silently failing during your Vercel build. So Google sees ~12 identical blank pages instead of a rich local-service site.

This single issue explains the bulk of the ranking problem. A 5.0-star business with ~80 reviews should not be invisible — it's invisible because the content is invisible. Fix the rendering and most of the other work you've already done suddenly "turns on."

Two secondary issues compound it:
1. **Self-serving review markup** in your schema violates Google's structured-data policy and is likely being ignored (and could draw a manual penalty).
2. **No crawlable contact path** — your "Get a Quote" is a JavaScript popup, so there's no contact page or linkable booking URL for Google or AI engines to point people to.

---

## Phase 0 — What Google actually rewards right now (and how this site measures up)

Pulled from primary sources (links at bottom). These are the factors most relevant to *this* site, not a generic list:

1. **Content must be indexable and renderable.** Google's AI-features guidance is explicit: to appear in Search or AI Overviews a page must be "indexed and eligible to be shown… with a snippet," and JS-framework sites must follow JavaScript SEO best practices. ❌ **This is the site's #1 failure** — production ships an un-rendered SPA shell.
2. **Helpful, people-first, experience-backed content.** Google rewards first-hand experience and a unique point of view (E-E-A-T, "Trust" being most important). ✅ Your *content* is strong (real owner voice, specific high-desert/Tahoe expertise). The problem is delivery, not quality.
3. **Trustworthiness signals** (clear ownership, contact info, real address/phone). ⚠️ Partial — owner bio exists, phone exists, but no contact page and only city-level location.
4. **Structured data must follow the rules.** Self-serving `review`/`aggregateRating` is **not permitted** for your own business — Google's LocalBusiness docs state review markup is only for sites reviewing *other* businesses. ❌ Violated.
5. **No spammy structured markup / no doorway pages.** ⚠️ Reno-vs-Sparks pages must be genuinely distinct, not templated near-duplicates, or they risk doorway classification.
6. **Page experience / Core Web Vitals** as a tiebreaker among helpful content. ⚠️ Can't be measured properly because nothing renders server-side; client-only rendering hurts LCP.
7. **Unique value over commodity content** (AI Overviews guidance). ✅ Your blog has genuine, non-commodity depth.
8. **Crawlable links define site structure.** ⚠️ Your primary CTA (booking) is a button/modal, not a link — a dead end for crawlers.
9. **Reviews/reputation matter for local** — but must live where Google reads them (Google Business Profile, on-page visible text), not as self-referential schema.
10. **Freshness where relevant.** ✅ Blog posts carry visible dates and `dateModified`.

**Net:** Factors #1 and #4 are actively suppressing you. #3, #5, #8 are drag. The rest you're already doing well — they just can't help while #1 is broken.

---

## Target geography (you asked me to define it)

Centering on the Reno–Sparks core, here's the realistic ~20-mile service/SEO radius:

- **Primary (core):** Reno, Sparks
- **Secondary, within ~20 mi (already in your schema):** Spanish Springs, Sun Valley, Lemmon Valley, Cold Springs, Golden Valley, Hidden Valley, Verdi, Mogul
- **Within ~20 mi but NOT yet targeted:** Washoe Valley (~15 mi S), Steamboat (~12 mi S), Pleasant Valley, Virginia City (~22 mi, borderline)
- **Outside 20 mi — do not treat as primary** (mention only if you genuinely serve them): Carson City (~30 mi), Fernley (~33 mi), Dayton (~35 mi), Truckee CA (~32 mi)

Your `areaServed` schema and footer already cover the core well. If you want to expand, add Washoe Valley + Steamboat. Don't stuff Carson City/Fernley unless you actually drive there — over-claiming geography is a doorway-page risk.

---

## Phase 1 — Technical SEO

### 🔴 CRITICAL

**1.1 Production serves an empty SPA shell on every URL (prerendering not running in build).**
Evidence (live `curl`, 2026-06-22):
- `GET /` → 23,978 bytes, `<title>Don of Detail | Mobile Detailing Reno NV</title>` (the static fallback, **not** the Home page's Helmet title), `<h1>` count **0**, `<h2>` count **0**, hero text "Obsessive" **not present**.
- `GET /ceramic-coating-reno-nv` → **identical** 23,978-byte shell, same fallback title, `<h1>` count 0, "Paint Preservation" not present.
- Only the 4 static JSON-LD blocks hard-coded in `index.html` are present; none of the per-page React-Helmet titles/descriptions/schema render.

Root cause: `package.json` runs `postbuild: node scripts/prerender.mjs`, but `scripts/prerender.mjs:140-144` catches **any** failure and `process.exit(0)` — "Falling back to standard SPA build." Puppeteer needs a Chrome binary that isn't reliably present in Vercel's build container, so the prerender almost certainly throws, is swallowed, and the deploy ships the raw shell. (Confirmed Vercel serves filesystem before rewrites, so the catch-all rewrite is *not* the cause — the prerendered files simply never get created.)
Consequences: every page has a duplicate identical title, no headings, no meta description, no body content, no per-page schema in the HTML Google first sees. This is the dominant ranking blocker.
**Effort:** Larger task (the highest-impact one).

### 🟠 HIGH

**1.2 Duplicate `<title>` and missing meta descriptions across all pages (in delivered HTML).**
A direct symptom of 1.1 — until rendering is fixed, every URL reports the same fallback title and the same fallback description. Google deduplicates and devalues this. Resolved automatically once 1.1 is fixed (your source already has unique Helmet tags per page). **Effort:** Quick (once 1.1 done).

**1.3 Build fails silently.** `prerender.mjs` swallowing errors means you've likely been shipping broken SEO without any signal. Even after fixing rendering, the build should **fail loudly** if prerender breaks, so this never silently regresses. **Effort:** Quick.

### 🟡 MEDIUM

**1.4 Booking CTA is not a crawlable link.** The primary conversion action (`openBooking`) is a `<button>` opening a modal. Crawlers and AI engines have no URL to follow or cite for "book/contact." **Effort:** Medium (tie to the Contact page, 2.4).

**1.5 Reno vs. Sparks pages risk near-duplication.** `SparksCeramicCoating.tsx` closely mirrors `CeramicCoating.tsx`. Distinct city pages are fine and good for local SEO **only if** the body content is genuinely differentiated (local landmarks, neighborhoods, distances, specifics). Templated near-duplicates can be classified as doorway pages. **Effort:** Medium (content differentiation).

**1.6 `priceRange: "$$"`** in `index.html` schema undersells a premium/high-ticket brand whose own pages say "From $800." Consider `"$$$"` for consistency with positioning. **Effort:** Quick.

### 🟢 LOW / GOOD (verified, no action)
- ✅ Single `<h1>` per page with logical H2/H3 nesting (source).
- ✅ Canonicals present and self-referencing on every page (source).
- ✅ `robots.txt` valid, correctly disallows only `/packages`, AI crawlers explicitly allowed, sitemap referenced.
- ✅ `sitemap.xml` well-formed, all public routes, sensible priorities, recent `lastmod`; `/packages` correctly excluded (and `noindex` on the page).
- ✅ HTTPS enforced; no mixed content observed.
- ✅ Mobile viewport set; responsive Tailwind layout.
- ✅ Fonts loaded non-render-blocking (preconnect + print-media swap + `<noscript>`).
- ✅ Images: descriptive, locally-keyworded `alt`, `loading="lazy"`, `fetchpriority` + dimensions on LCP image.
- ⚠️ Consider self-hosting fonts later for CWV/privacy (Low).

---

## Phase 2 — Content depth & E-E-A-T

### 🟠 HIGH

**2.1 No Contact page exists.** Routes are `/`, `/about`, `/terms`, `/privacy`, `/blog`, the service pages, and `/packages` (private). There is **no `/contact`**. For a local service business this is both an E-E-A-T/trust gap and a missed ranking/area page. NAP currently lives only in the footer (`Footer.tsx:20-24`: "Don of Detail LLC · Mobile Service | Reno, NV · (775) 230-7035"). **Effort:** Medium.

**2.2 Blog authorship is an Organization, not a person.** Posts are attributed to `"Don of Detail"` and `About` schema lists `founder name: "Logan"` (no surname, no bio link). For advice content, person-level experience signals (named author, credentials, link to bio) strengthen E-E-A-T. **Effort:** Medium.

### 🟡 MEDIUM

**2.3 City pages need unique depth** (see 1.5) — give Sparks pages real local specificity rather than find-replace of the Reno copy.

**2.4 No linkable quote/booking destination** (see 1.4) — a `/contact` or `/quote` page doubles as the crawlable conversion endpoint.

### 🟢 GOOD (verified)
- ✅ Service pages are well above the thin-content threshold: each has a 40–60 word "Briefing" answer block, a "What is…" section, a methodology/process list, and a 4-question FAQ.
- ✅ Blog posts are genuine long-form (5–6 min reads) with first-hand, location-specific expertise (high-desert UV, Tahoe salt, alkaline dust) — not commodity filler. This is real E-E-A-T content; it just isn't reaching crawlers (Phase 1).
- ✅ About page has a credible owner narrative (Logan, owner/operator).
- ✅ Privacy + Terms present. Visible dates on posts (freshness).
- ✅ No keyword-stuffed or low-effort AI filler detected; copy is on-brand and human.

---

## Phase 3 — AEO (Answer Engine Optimization)

The irony: your content is **well-structured for AI answers**, but AEO builds on standard indexing, and Phase 1 blocks that. Fix rendering first; then this is a genuine strength.

### Findings
- ✅ Direct ~40–60 word answers right after headings ("Briefing" blocks on service pages). Good.
- ✅ Question-style headings used naturally ("What is Ceramic Coating?", "How Much Does Car Detailing Cost in Reno?").
- ✅ Clear Q&A FAQ pairs on home + every service page + blog posts.
- ✅ Schema coverage in source: `AutomotiveBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`, `HowTo`, `WebSite`, `AboutPage`. (Note: Google says schema isn't *required* for AI features, but it helps other engines and rich results — keep it.)
- ✅ Extractable chunking: short paragraphs, lists, labeled sections.

### 🟡 MEDIUM
**3.1 None of the above is in the server HTML** (Phase 1). AI crawlers that don't execute JS (and many don't, or do so inconsistently) currently see nothing. This is the same root cause — flagged so it's not mistaken for "AEO is done."

**3.2 Claims could cite sources.** Stats like "reduce nighttime output by up to 80%" or UV-at-altitude figures would be stronger with a visible authoritative citation. Don't fabricate — cite real sources or soften to experiential phrasing. **Effort:** Quick-Medium.

---

## Phase 4 — Google policy compliance

### 🟠 HIGH
**4.1 Self-serving review & aggregateRating markup.** `index.html:211-389` embeds `aggregateRating` (5.0 / 80) plus a large `review[]` array **inside your own `AutomotiveBusiness` entity**. Google's LocalBusiness/review-snippet policy: review & aggregateRating markup is only for sites reviewing *other* businesses — marking up your own reviews is disallowed, gets ignored for rich results, and can trigger a "spammy structured markup" manual action. The reviews appear genuine (they match your on-site testimonials), so this is a **markup-placement** problem, not fabrication. **Fix:** remove `review[]` and `aggregateRating` from the self-referential schema; keep the testimonials as visible on-page content and drive rating signals through your Google Business Profile. **Effort:** Quick.

### 🟡 MEDIUM
**4.2 Doorway-page risk** on near-duplicate city pages (see 1.5) — differentiate content.

### 🟢 CLEAR / GOOD
- ✅ No cloaking, hidden text, or hidden links. (Prerendering the *same* content crawlers/users see is **not** cloaking — it's encouraged.)
- ✅ No keyword stuffing; density is natural.
- ✅ No sneaky redirects; no obvious link-scheme participation.
- ✅ Accessibility basics solid: semantic `<header>/<main>/<nav>/<section>/<article>/<address>`, `aria-label`s, alt text, oversized decorative hero text correctly `aria-hidden` with a real screen-reader `<h1>`.
- ⚠️ **Verify:** if you run analytics/pixels, confirm your Privacy Policy discloses them (CCPA). No consent banner is likely fine for a US local SAB with no EU audience, but confirm. **Effort:** Quick to verify.

---

## Prioritized action plan (impact ÷ effort)

| # | Action | Priority | Effort | Why it's ranked here |
|---|--------|----------|--------|----------------------|
| 1 | **Make prerendering actually run in the Vercel build** (e.g. `puppeteer-core` + `@sparticuz/chromium`, or switch to a build-time SSG like `react-snap`/`vite-react-ssg`/Vercel prerender) **and make the build fail loudly if it doesn't.** Verify live HTML contains real `<h1>`, per-page `<title>`, body copy, and schema. | 🔴 Critical | Larger | Unblocks ~everything else; single biggest ranking lever. |
| 2 | **Remove self-serving `review[]` + `aggregateRating`** from `index.html` schema; keep visible testimonials. | 🟠 High | Quick | Stops a policy violation / manual-action risk; immediate. |
| 3 | **Add a real `/contact` page** with NAP, hours, service-area list, embedded Google Map, and a crawlable quote form/booking link; link it in header + footer. | 🟠 High | Medium | Trust/E-E-A-T + crawlable conversion endpoint + a new local page. |
| 4 | **Make the booking CTA a linkable URL** (not modal-only) — fold into #3. | 🟡 Medium | Medium | Gives crawlers/AI a destination to cite. |
| 5 | **Add person-level authorship** (Logan, with `/about` bio link) to blog `Article` schema + visible bylines; give founder a full name. | 🟠 High | Medium | Strengthens E-E-A-T on advice content. |
| 6 | **Differentiate Sparks pages** from Reno pages with genuine local specifics. | 🟡 Medium | Medium | Removes doorway risk; wins Sparks queries. |
| 7 | **`priceRange` → `$$$`**, add Washoe Valley + Steamboat to `areaServed`. | 🟡 Medium | Quick | Aligns positioning + extends radius. |
| 8 | **Add citations** to statistical claims in blog posts. | 🟢 Low | Quick-Med | Marginal AEO/E-E-A-T gain. |
| 9 | **Verify** og/logo images exist at correct dimensions; confirm analytics disclosed in Privacy Policy; consider self-hosting fonts. | 🟢 Low | Quick | Housekeeping. |

**Sequencing:** Do #1 first (everything depends on it), then #2 (quick + policy), then #3/#4/#5 together (the trust + conversion + E-E-A-T block), then #6, then the #7–9 polish.

---

## What I'll need from you before implementing (no guessing)

- **#1 rendering fix:** confirmation I can add a build dependency (`@sparticuz/chromium` + `puppeteer-core`) or switch the SSG approach, and that you can redeploy to verify live HTML.
- **#3 Contact page:** exact business hours (schema says 7 days 08:00–19:00 — confirm), preferred contact email (`contact@donofdetail.com` is in schema — confirm it's live), and whether to embed your Google Business Profile map / link.
- **#5 authorship:** Logan's full name and 1–2 sentence credential/bio line you're comfortable publishing.
- **#2 reviews:** confirm your real current Google rating + review count (so visible on-page text stays truthful after we drop the schema).
- **#8 citations:** I won't invent sources — either you provide them or I'll soften claims to experiential phrasing.

---

## Sources (Google primary documentation)

- [Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Search Quality Rater Guidelines (Sept 11, 2025 PDF)](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf)
- [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google's guidance on AI features in Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google Search & AI-generated content](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content)
- [Vercel routing: filesystem precedes rewrites](https://vercel.com/docs/project-configuration/vercel-json)
