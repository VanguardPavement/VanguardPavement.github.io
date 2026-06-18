# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this site is

Static HTML website for **Vanguard Pavement Solutions** — a commercial parking lot striping and seal coating company in Tampa Bay, FL. Hosted on GitHub Pages at `https://vanguardpavement.github.io/`. No build step, no package manager, no framework.

## Local preview

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Push to the `main` branch. GitHub Pages auto-deploys within ~1 minute.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Main landing page — hero, services, why us, process, areas, FAQ, contact form |
| `about.html` | Company story, values, stats |
| `quote.html` | Dedicated lead-capture page with Formspree form |
| `404.html` | Custom not-found page |
| `sitemap.xml` | SEO sitemap (update `<lastmod>` dates when content changes) |

## Architecture

**All CSS and JS is inline** inside each HTML file — there is no shared stylesheet or JS bundle. Every page is self-contained. This means:
- Design system changes (colors, fonts, shared components) must be replicated across all HTML files
- The nav, footer, hazard stripe, and reveal animation JS are copy-pasted in each file

## Design system

CSS custom properties defined in `:root` on every page:

```css
--yellow: #F5C400       /* primary accent */
--yellow-bright: #FFD700
--yellow-dim: #c49a00
--black: #080808        /* page background */
--dark: #101010         /* section alt background */
--panel: #161616        /* card backgrounds */
--text: #E0E0E0
--muted: ~#666-#777     /* secondary text */
```

**Fonts (Google Fonts CDN):**
- `Bebas Neue` — large display headings, watermarks
- `Oswald` — nav, labels, buttons, stat numbers
- `Inter` — body copy

**Shared UI patterns (repeated per page):**
- `.hazard` — yellow/black repeating-gradient stripe divider
- `.reveal` / `.reveal-d1` / `.reveal-d2` — scroll-triggered fade-in via `IntersectionObserver` (threshold 0.12); add `in-view` class to activate
- `clip-path: polygon(Npx 0%, 100% 0%, calc(100% - Npx) 100%, 0% 100%)` — parallelogram shape used on all buttons and icon containers
- Hamburger mobile nav toggled by adding `.open` class to `#hamburger` and `#mobileNav`
- Mobile sticky CTA bar (`.mobile-cta-bar`) — fixed bottom `tel:` link, shown only on small screens
- Back-to-top button (`.back-top`) — visible class toggled at `scrollY > 500`

## External dependencies

- **Font Awesome 6.5.0** — icon library, loaded from cdnjs CDN
- **Formspree** — quote form endpoint: `https://formspree.io/f/xnjolrnv` (in `quote.html`)
- The `index.html` contact section also posts to Formspree (same or similar endpoint — verify in the JS at the bottom of that file)

## SEO / structured data

Each page has:
- `<meta name="robots">`, canonical `<link>`, Open Graph tags
- Schema.org JSON-LD in a `<script type="application/ld+json">` block — `index.html` has `LocalBusiness`, `WebSite`, and `FAQPage` graphs; other pages have their own types

When adding new pages, include a canonical URL, update `sitemap.xml`, and add appropriate Schema.org markup.

## Business info (used throughout)

- **Phone:** (863) 528-4936 / `tel:8635284936`
- **Email:** brigido.baltazar@gmail.com
- **Service area:** Tampa Bay & Central Florida (Tampa, St. Pete, Clearwater, Brandon, Lakeland, Sarasota, Wesley Chapel, Plant City, Riverview, New Port Richey, Bradenton)
- **Hours:** Mon–Sat 7am–6pm

---

## Coding standards

### HTML / CSS
- Use 2-space indentation throughout
- Maximum line length: 100 characters where practical (long inline styles are acceptable)
- Class names: `kebab-case` (e.g. `.mobile-cta-bar`, `.back-top`)
- IDs: `camelCase` for JS hooks (e.g. `#mobileNav`, `#hamburger`); `kebab-case` for anchor targets
- Keep inline `<style>` blocks organized: custom properties → resets → layout → components → utilities → media queries
- No dead CSS — remove rules that apply to nothing on the page

### JavaScript (inline `<script>`)
- Use `const` over `let`; never use `var`
- Use `camelCase` for variables and functions
- Use `SCREAMING_SNAKE_CASE` for true constants (e.g. `const SCROLL_THRESHOLD = 500`)
- Boolean variables prefixed with `is`, `has`, `should`, or `can` (e.g. `isOpen`, `hasScrolled`)
- Avoid deep nesting — max 3 levels
- No `console.log` left in committed code
- Remove unused variables and dead code

### Accessibility
- All `<img>` tags must have descriptive `alt` text
- Interactive elements need keyboard focus styles
- Color contrast must meet WCAG AA minimums
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`, etc.)

## Code quality

- Write self-documenting code; add a comment only when the *why* is non-obvious
- Handle errors explicitly in fetch/form submissions — never silently swallow failures
- Validate and sanitize all user inputs before submission
- Prefer simple, readable solutions over clever ones

## Git standards

Use **conventional commits**:

```
type(scope): description
```

| Type | When to use |
|------|-------------|
| `feat` | New page, section, or feature |
| `fix` | Bug fix |
| `content` | Copy, business info, or SEO text change |
| `style` | CSS-only visual change |
| `refactor` | Code restructure with no behavior change |
| `chore` | Sitemap update, dependency bump, config change |
| `docs` | CLAUDE.md or README updates |

- Keep commits small and focused on one change
- Write the description in imperative mood: "add hero CTA button" not "added hero CTA button"

## Security

- Never commit API keys, Formspree endpoints not already public, or any credentials
- Validate and sanitize all form inputs client-side before submission
- Keep CDN dependency versions pinned (Font Awesome, Google Fonts)
- Follow OWASP guidelines — no inline event handlers that accept untrusted input

## Claude behavior

- Be proactive — flag inconsistencies across pages (e.g. mismatched phone numbers, outdated copyright year)
- Replicate any design or copy change across **all** affected HTML files; never patch just one page when all pages share a pattern
- Prioritize quality and correctness over speed
- Act as a senior web developer and trusted teammate
- When adding new pages or sections, update `sitemap.xml` and Schema.org markup without being asked
