import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  define: {
    "process.env": {
      VUE_APP_TUNNEL_BASE_API: process.env.VUE_APP_TUNNEL_BASE_API,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@images": fileURLToPath(
        new URL("./src/assets/images/", import.meta.url)
      )
    }
  },
})
