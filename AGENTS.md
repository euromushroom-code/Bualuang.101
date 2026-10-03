[Uploading AGENTS.md…]()

# BUALUANG 101

## Architecture

This is a Thai-first contemporary art program website using TanStack Start, React 19, TypeScript, Vite, and Netlify. It is a public informational marketing site, not an application that collects or stores visitor data.

## Key files

- `src/routes/index.tsx`: single-page experience, navigation, schedule, conceptual gallery, news, FAQ, social links, and optional ambient tone.
- `src/routes/__root.tsx`: Thai document language, metadata, fonts, favicon, and application shell. Keep `siteName` and `siteDescription` product-specific. Do not add an Open Graph image; the platform supplies it.
- `src/styles/styles.css`: design tokens, editorial layouts, interactive states, responsive breakpoints, and reduced-motion behavior.
- `public/img/art-sculpture.png`: generated abstract artwork, served through Netlify Image CDN. It is an illustration, not a photograph of a real event or participant.
- `public/favicon.svg`: branded favicon.
- `netlify.toml`: deployment and local development configuration.

## Conventions

Use function components, React hooks, descriptive identifiers, and strict TypeScript. Keep Thai explanatory copy paired with English editorial headings. Use CSS variables for the navy, blue, yellow, and paper palette. Keep keyboard focus, mobile menu focus containment, native details elements, dialog accessibility, and reduced-motion support intact. Never hide essential content until JavaScript or an animation finishes.

## Content decisions

Program dates and social addresses came from the supplied page. Additional text explains the creative journey without inventing selection criteria, prices, participant names, venues, or awards. Gallery entries are explicitly conceptual explorations, not submitted participant work. Changes to confirmed event information should come from the project owner.

Contact uses the supplied email and social accounts. There is no signup form, authentication, or database. If future work requires persistence or form submissions, read and use the relevant Netlify skills.

The original audio file was not supplied. The optional sound control synthesizes a quiet original ambient chord through the Web Audio API, only after a user gesture. Do not add copyrighted audio or autoplay.

## Development

Install with `pnpm install`. Start locally with `netlify dev --port 8889`. The deployment pipeline handles production builds. No build, test, type-check, or dev-server validation commands were run during the initial implementation, as required by the project environment.
