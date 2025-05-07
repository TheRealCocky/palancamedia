import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Certifique-se de que esta importação esteja correta

// Exporte a configuração corretamente com export default
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Multimidea',
        short_name: 'Multimidea',
        description: 'Your multimedia platform',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    historyApiFallback: true, // ✅ Corrige erro de navegação no React Router
  },
});




