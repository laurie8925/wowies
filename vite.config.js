import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WOWIES/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
})
