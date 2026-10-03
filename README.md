
# BUALUANG 101 — ดาวเด่นบัวหลวง

A Thai-first website for BUALUANG 101, a space for a new generation to learn, create, and grow through contemporary art and shared experiences.

The site includes an editorial landing page, expandable program schedule, filterable conceptual art gallery with detail dialogs, news notes, frequently asked questions, and direct contact and social links. It adapts to mobile screens, supports keyboard navigation and reduced motion, and includes an optional original ambient tone without autoplay.

## Technologies

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Vite and Tailwind CSS 4 with custom CSS
- Lucide icons
- Netlify deployment and Image CDN
- Google Fonts: Manrope, DM Sans, and Noto Sans Thai

## Local development

Use Node.js 22 or newer and pnpm.

```bash
pnpm install
netlify dev --port 8889
```

Netlify starts the Vite development process using the settings in `netlify.toml`. The production build is managed by the deployment pipeline.

## Updating content

Edit `src/routes/index.tsx` for program details, news, FAQ answers, and social links. Update metadata in `src/routes/__root.tsx`. Visual styles and breakpoints live in `src/styles.css`.

The supplied October–November 2026 schedule is retained; confirm any additional venue, eligibility, application, or presentation information before publishing it. The gallery uses conceptual artwork and does not represent real participant submissions.

The hero artwork is a static generated illustration in `public/img`, optimized through Netlify Image CDN. No AI inference occurs when visitors use the site. The original music file was not included, so the sound control instead generates an optional quiet ambient chord in the browser. Contact links use the supplied project email; there is no data collection or database.
