# Vanguard Pavement — Optimized Claude Code Prompts
*Generated with Prompt Master v1.6.0*

---

## Prompt 1 — SEO Audit & Improvements

```
## Objective
Audit and improve SEO across all 4 HTML pages and sitemap.xml so every page ranks for Tampa Bay commercial paving keywords on the first crawl after deploy.

## Context
Static HTML site (no build system, no framework, no package manager). Pages: index.html, about.html, quote.html, 404.html, sitemap.xml. Schema.org JSON-LD, canonical links, and basic meta tags already exist. External CDN deps: Google Fonts, Font Awesome 6.5.0 from cdnjs. Today's date for lastmod: 2026-06-10.

Business details carried forward:
- Company: Vanguard Pavement Solutions
- Service: Commercial parking lot striping & seal coating
- Location: Tampa Bay & Central Florida
- Phone: (863) 528-4936 | Email: brigido.baltazar@gmail.com
- Service cities: Tampa, St. Pete, Clearwater, Brandon, Lakeland, Sarasota, Wesley Chapel, Plant City, Riverview, New Port Richey, Bradenton

## Target State
Every HTML page has:
- Unique <title> tag, 50–60 chars, format: "[Page Topic] | Vanguard Pavement Solutions"
- Unique <meta name="description"> 150–160 chars with a CTA verb (Get, Call, Request)
- Full Open Graph block: og:title, og:description, og:image, og:url, og:type, og:locale, og:site_name
- Twitter Card block: twitter:card summary_large_image, twitter:title, twitter:description, twitter:image
- One H1 per page, matching the page's primary keyword
- Descriptive alt text on every <img> tag — no empty alt="" except purely decorative images
- Schema.org JSON-LD verified: LocalBusiness on index.html includes address, geo, areaServed array, priceRange, and openingHours; other pages have WebPage schema with breadcrumb
- sitemap.xml: <lastmod> set to 2026-06-10 for all URLs
- <link rel="preconnect"> for fonts.googleapis.com, fonts.gstatic.com, and cdnjs.cloudflare.com added to every page's <head>
- Google Fonts URL updated to include &display=swap if not already present

## Scope
- Work only in: index.html, about.html, quote.html, 404.html, sitemap.xml
- Do NOT touch: CSS, JavaScript, layout structure, colors, body content text, Formspree endpoints, form fields

## Constraints
- All changes are within <head> tags or JSON-LD <script> blocks only — no body HTML edits
- Do not add new external scripts or stylesheets
- Only make changes directly requested. Do not add features or refactor beyond what was asked.

## Acceptance Criteria
- [ ] Every page has a unique title 50–60 chars
- [ ] Every page has a unique meta description 150–160 chars containing a CTA verb
- [ ] Every page has a full OG block and Twitter Card block
- [ ] Every <img> in the document has a non-empty descriptive alt attribute
- [ ] index.html Schema.org LocalBusiness includes areaServed array with all 11 service cities
- [ ] sitemap.xml lastmod is 2026-06-10 on all entries
- [ ] preconnect hints present in every page's <head>

## Stop Conditions
Stop and ask before:
- Editing any body content, hero text, or service descriptions
- Removing or replacing existing Schema.org blocks (improve them, don't delete)
- Touching any JavaScript or CSS

## Progress
After each file: ✅ [filename] — [what changed]
Final output: list of all files modified and a summary of every change made.
```

🎯 **Target:** Claude Code · 💡 Front-loads all business data and acceptance criteria so Claude doesn't guess on city names, schema fields, or char counts — zero re-prompts needed.

> **Before pasting:** This prompt is for an agentic tool with real system access. Review the scope locks and stop conditions. Confirm the file paths exist at the repo root.

---

## Prompt 2 — Performance Improvements

```
## Objective
Improve page load performance on all 4 HTML pages without changing any visual output or layout.

## Context
Static HTML site. All CSS and JS inline per page. External resources: Google Fonts via CDN link tag, Font Awesome 6.5.0 from cdnjs.cloudflare.com. No build step. Deployed on GitHub Pages.

## Target State
All 4 pages (index.html, about.html, quote.html, 404.html) have:
1. Resource hints in <head> — add these in order immediately after <meta charset>:
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
2. Google Fonts URL — append &display=swap to the href if not already present
3. All <img> tags below the hero section have loading="lazy" added
4. All <img> tags that are missing explicit width and height attributes — add them to prevent CLS (use the actual pixel dimensions from the src, or add a comment "// TODO: add dimensions" if unknown)
5. All <script> blocks that contain only event listeners or DOM logic (not inline calculations) are moved to immediately before </body> if not already there

## Scope
- Work only in: index.html, about.html, quote.html, 404.html
- Do NOT touch: CSS rules, JS logic, Formspree endpoints, Schema.org blocks, meta tags, layout HTML

## Constraints
- No new external scripts or stylesheets
- Do not rewrite or minify any existing CSS or JS
- Do not change any class names, IDs, or DOM structure
- Only make changes directly requested. Do not add features or refactor beyond what was asked.

## Acceptance Criteria
- [ ] preconnect hints present in every page's <head>
- [ ] &display=swap present in Google Fonts URL on every page
- [ ] All below-fold <img> tags have loading="lazy"
- [ ] No <script> block with DOM logic appears before </head>
- [ ] Zero visual changes — layout, colors, and animations identical before and after

## Stop Conditions
Stop and ask before:
- Moving a <script> block that initializes a variable used by another script higher on the page
- Removing any existing <link> or <script> tags
- Editing any CSS property or JS function body

## Progress
After each file: ✅ [filename] — [list of specific changes made]
```

🎯 **Target:** Claude Code · 💡 Scopes changes to additive-only attributes (preconnect, loading="lazy", display=swap) — no risk of layout regression or script execution-order bugs.

> **Before pasting:** This prompt is for an agentic tool with real system access. Review the scope locks and stop conditions before pasting.

---

## Prompt 3 — New Gallery Page

```
## Objective
Build gallery.html — a before/after photo gallery page that matches the existing site design exactly and is linked from the main nav on all pages.

## Context
Static HTML site. All CSS and JS are inline per page — no shared stylesheet. The nav, footer, hazard stripe divider, and reveal animations are copy-pasted into each page. Pages to reference for patterns: index.html (copy nav, footer, hazard stripe, reveal JS, CSS variables), about.html (copy card/grid pattern).

Design system (must match exactly):
- CSS vars: --yellow: #F5C400; --yellow-bright: #FFD700; --yellow-dim: #c49a00; --black: #080808; --dark: #101010; --panel: #161616; --text: #E0E0E0
- Fonts: Bebas Neue (display headings), Oswald (nav/labels/buttons), Inter (body copy) — all via Google Fonts CDN
- Button/icon shape: clip-path parallelogram — clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)
- Reveal animation: IntersectionObserver threshold 0.12, adds .in-view class, fade-in + translateY(20px → 0)
- Hazard divider: .hazard class, repeating-gradient yellow/black stripes
- Mobile nav: hamburger toggled by .open class on #hamburger and #mobileNav
- Mobile sticky CTA: .mobile-cta-bar fixed bottom tel: link, visible only on small screens
- Back-to-top: .back-top, visible class toggled at scrollY > 500

Sections to build:
1. Hero — "OUR WORK" in Bebas Neue, sub-headline "Before & After Results", hazard stripe below
2. Gallery grid — 12 placeholder cards (3 cols desktop, 2 cols tablet, 1 col mobile). Each card:
   - Top half: gray placeholder div labeled "BEFORE" (font: Oswald, color: --muted)
   - Bottom half: gray placeholder div labeled "AFTER" with --yellow accent border-bottom 3px
   - Card background: --panel, border-radius: 4px, clip-path parallelogram on the AFTER label badge
   - Hover: translateY(-4px), box-shadow 0 8px 24px rgba(245,196,0,0.15), transition 200ms ease
3. CTA section — "Ready for results like these?" heading, yellow "GET A FREE QUOTE" button linking to quote.html
4. Hazard stripe divider before footer
5. Footer — identical to index.html footer

Nav update: add "Gallery" link to the desktop nav and mobile nav in ALL existing pages (index.html, about.html, quote.html) pointing to gallery.html. Keep 404.html nav unchanged.

SEO for gallery.html:
- <title>Before & After Gallery | Vanguard Pavement Solutions</title>
- <meta name="description" content="See real before & after results from Vanguard Pavement Solutions — Tampa Bay's trusted parking lot striping and seal coating contractor. Request a free quote today.">
- Full OG block, Twitter Card, canonical URL https://vanguardpavement.github.io/gallery.html
- WebPage Schema.org JSON-LD
- Add gallery.html to sitemap.xml with <lastmod>2026-06-10</lastmod>

## Scope
- Create: gallery.html
- Modify: index.html, about.html, quote.html (nav only — add Gallery link)
- Modify: sitemap.xml (add gallery.html entry)
- Do NOT touch: 404.html body/nav, any JS logic, any CSS beyond what's new in gallery.html

## Constraints
- Single self-contained HTML file — all CSS and JS inline, no external files beyond CDNs already used
- No new external dependencies
- Must match existing pages pixel-for-pixel on shared elements (nav height, footer layout, font weights, color values)
- Placeholder images are styled <div> elements — no <img> tags with broken src paths
- Only make changes directly requested. Do not add features, pages, or sections beyond what was asked.

## Acceptance Criteria
- [ ] gallery.html renders with correct nav, hero, 12-card before/after grid, CTA, and footer
- [ ] Cards have hover state (translateY + yellow shadow)
- [ ] Reveal animations fire on scroll (same IntersectionObserver pattern as other pages)
- [ ] Gallery link appears in nav on index.html, about.html, and quote.html
- [ ] gallery.html added to sitemap.xml
- [ ] Zero console errors when opened in browser
- [ ] Layout correct at 375px mobile and 1440px desktop

## Stop Conditions
Stop and ask before:
- Adding any new external CDN beyond Google Fonts and Font Awesome already in use
- Changing any existing page's layout, colors, or JS outside the nav addition
- Deleting any existing nav link

## Progress
After each file: ✅ [filename] — [what was created or changed]
Final output: list every file touched and a summary of changes.
```

🎯 **Target:** Claude Code · 💡 All design tokens, component patterns, and SEO values spelled out exactly — Claude Code cannot guess wrong on hex values, clip-path syntax, or schema fields. Nav update scoped to additive-only so existing pages can't regress.

> **Before pasting:** This prompt is for an agentic tool with real system access. Review the scope locks, forbidden actions, and stop conditions before pasting. Confirm file paths match the actual repo root.
