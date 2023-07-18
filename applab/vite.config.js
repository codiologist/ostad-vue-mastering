import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from "node:url";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@images": fileURLToPath(
        new URL("./src/assets/images/", import.meta.url)
      ),
      "@styles": fileURLToPath(new URL("./src/assets/css/", import.meta.url)),
      "@vendors": fileURLToPath(new URL("./src/assets/vendors/", import.meta.url)),
      "@js": fileURLToPath(new URL("./src/assets/js/", import.meta.url)),

    },
  },

})
