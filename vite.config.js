import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss(),],
  base: "/BadmintonTraining/",
  server: {
    historyApiFallback: true, // Redirige toutes les requêtes vers index.html
  },
})
