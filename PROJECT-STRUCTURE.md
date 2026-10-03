# BUALUANG 101 — V4 project structure

```text
BUALUANG-101-main/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── assets/
│   │   ├── audio/          # เพลง / ambient audio
│   │   └── images/
│   │       ├── works/      # รูปผลงานที่จะเพิ่มภายหลัง
│   │       └── art-sculpture.svg
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/         # component แยกในอนาคต
│   ├── data/                # content/data แยกในอนาคต
│   ├── routes/
│   │   ├── __root.tsx
│   │   └── index.tsx
│   └── styles/
│       └── styles.css
├── AGENTS.md
├── README.md
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── setup-notes.sh
├── tsconfig.json
└── vite.config.ts
```

## V4 visual direction
- Raw youth editorial / art-zine feel
- Navy-black + dirty white + electric blue + acid yellow
- Hard offset shadows and rough borders instead of glossy effects
- Oversized typography, poster cards and imperfect/printed texture
- No glassmorphism, sparkle, gradient-heavy UI or corporate-card look
- Responsive layout remains compatible with GitHub Pages and Netlify
