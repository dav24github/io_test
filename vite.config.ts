import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    noDiscovery: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/scss/_variables.scss";`,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      sass: fileURLToPath(new URL('./src/assets/sass', import.meta.url)),
    },
  },
})
