import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "/BadmintonTraining/",
  server: {
    historyApiFallback: true, // Redirige toutes les requêtes vers index.html
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    }
  },
  build: {
    // Optimisations de build
    minify: 'terser',
    sourcemap: false, // Désactivé en production
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'tailwind': ['tailwindcss']
        }
      }
    },
    // Compression des assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log en production
        drop_debugger: true
      }
    }
  },
  // Optimisation des images
  optimizeDeps: {
    include: ['vue', 'vue-router']
  }
})