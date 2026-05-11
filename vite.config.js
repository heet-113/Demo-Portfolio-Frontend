import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo-based base path on GitHub Pages project sites, root on user/org sites.
  base: (() => {
    // Try to get repo name from GitHub Actions environment variable first
    const repoFromEnv = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
    if (repoFromEnv && !repoFromEnv.endsWith('.github.io')) {
      return `/${repoFromEnv}/`
    }
    
    // Fallback: extract repo name from homepage URL in package.json
    const homepage = pkg.homepage || ''
    const match = homepage.match(/github\.io\/([^/]+)/)
    if (match && match[1]) {
      return `/${match[1]}/`
    }
    
    return '/'
  })(),
})
