import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // '/' locally and on Netlify, '/BUALUANG-101/' on GitHub Pages
    basepath: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
  })

  return router
}

