import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),

    // Plugin de compressão (gzip ou brotli)
    viteCompression()
  ],

  // Otimizações para build final
  build: {
    minify: 'terser',
    target: 'es2015',
    sourcemap: false,
  },

  server: {
    port: 3000,
    open: true
  }
})


