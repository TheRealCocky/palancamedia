import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),

    // Plugin PWA
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Multimídia ISPK',
        short_name: 'ISPK',
        description: 'Plataforma de multimídia para educação',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),

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

