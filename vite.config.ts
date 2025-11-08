import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment configuration
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set to '/' if using custom domain, or '/repo-name/' for GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
