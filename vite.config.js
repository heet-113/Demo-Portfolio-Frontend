import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo-based base path on GitHub Pages project sites, root on user/org sites.
  base: (() => {
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
    if (!repoName || repoName.endsWith('.github.io')) {
      return '/'
    }
    return `/${repoName}/`
  })(),
})
