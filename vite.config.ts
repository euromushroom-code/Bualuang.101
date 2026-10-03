import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

// GitHub Pages serves the site from /BUALUANG-101/ and only hosts static files.
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const config = defineConfig({
  base: isGithubPages ? '/BUALUANG-101/' : '/',
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    // Netlify needs its server adapter; GitHub Pages needs a plain static build.
    ...(isGithubPages ? [] : [netlify()]),
    tanstackStart(
      isGithubPages
        ? { spa: { enabled: true, prerender: { outputPath: '/index' } } }
        : undefined,
    ),
    viteReact(),
  ],
})

export default config

