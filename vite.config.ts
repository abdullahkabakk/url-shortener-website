import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import IstanbulPlugin from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    process.env.CYPRESS === "true" ? IstanbulPlugin({
      include: 'src/*',
      exclude: ['node_modules', 'test/', "**/*.cy.js", "dist"],
      extension: ['.js', '.ts', '.vue'],
      requireEnv: false,
    }): undefined,
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
