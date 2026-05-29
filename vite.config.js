import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages (project site) uses a sub-folder: /<repo>/
  // Setting base to ./ makes asset paths work correctly after build.
  base: './',
  plugins: [react(), tailwindcss()],
})
