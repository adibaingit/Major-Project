import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
  server: {
    host: true,       
    port: 5173,       // Force it to stay on this port
    strictPort: true,
    watch: {
      usePolling: true, // This forces Vite to check for changes more aggressively
    },
    hmr: {
      overlay: true, // This shows errors directly on your screen
    },
  },
})
