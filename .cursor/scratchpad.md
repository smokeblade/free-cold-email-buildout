Background and Motivation
We are creating a separate, lightweight SSR-only marketing site for a “Free Cold Email Buildout” offer. Prospects get a free cold email infrastructure setup; they cover their software/inbox costs. We monetize via affiliate commissions with inbox providers. The site should mirror the design language from the Onvally project, but only include what’s necessary for this offer (smaller pages, clear CTAs).

Key Challenges and Analysis
- Keep SSR-only rendering to avoid any implied SLAs or static caching. Enforce at layout level.
- Reuse visual language (typography, spacing, simple Tailwind look) without dragging in unnecessary code.
- Provide clear CTAs and an embedded booking page.
- Add transparent affiliate disclaimer.

High-level Task Breakdown (TDD-minded, minimal viable first)
1) Repo bootstrap and SSR baseline
   - Success criteria: New repo created and pushed; SSR enforced globally via layout; dev server runs.
2) Global shell (Header/Footer) and minimal navigation
   - Success criteria: Header with brand + nav links; Footer with affiliate note; visible on all pages.
3) Pages
   - Home: concise hero + primary CTA to Book a free buildout; success: page renders SSR.
   - How it works: 3–5 step explainer and affiliate note; success: page renders SSR.
   - Book a demo: booking embed or placeholder link; success: page renders SSR.
4) Branding/content pass
   - Success criteria: Copy reviewed, basic SEO metadata, favicon present.
5) CI/build and deploy on Vercel
   - Success criteria: Build passes locally; repo connected to Vercel; production deploy succeeds.
6) Nice-to-haves (later)
   - Add analytics, OG images, accessibility checks, and shadcn UI if needed.

Project Status Board
- [x] Create new repo and push initial scaffold
- [x] Enforce SSR globally (dynamic = "force-dynamic", revalidate = 0)
- [x] Add scratchpad for Planner/Executor workflow
- [ ] Add Header/Footer shell
- [ ] Add Home/How-it-works/Book-a-demo pages
- [ ] Clean up unused sample assets
- [ ] Local build green; push
- [ ] Connect and deploy on Vercel

Current Status / Progress Tracking
- Repo initialized and pushed to GitHub.
- SSR enforced in `src/app/layout.tsx`.
- Planning document (this scratchpad) created.

Executor's Feedback or Assistance Requests
- Need booking URL (Calendly/TidyCal) to embed on `/book-a-demo`.
- Confirm brand/domain and any accent color preferences or keep current neutral palette.
- Confirm any specific copy points or legal text for affiliate disclaimer.

Lessons
- Keep SSR enforced at the root layout to avoid accidental static caching.
- Do not modify the Onvally repo; only copy patterns needed here.
- Use non-interactive flags in terminal commands during automation.

