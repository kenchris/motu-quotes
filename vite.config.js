import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/motu-quotes/',
  build: {
    outDir: 'docs/',
    emptyOutDir: true
  },
  plugins: []
})