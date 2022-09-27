/// <reference types="vitest" />

import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // https://github.com/vitest-dev/vitest/issues/1918
    conditions: process.env.VITEST ? ['node'] : [],
  },

  plugins: [
    vue(),

    Pages({
      dirs: 'src/views',
      exclude: ['**/components/*.vue'],
    }),

    Layouts(),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'vue-router': ['createRouter', 'createWebHistory'],
          'axios': [
            ['default', 'axios'],
          ],
          '@testing-library/vue': [
            'fireEvent',
            'render',
            'waitFor',
            'screen',
          ],
          '@pinia/testing': ['createTestingPinia'],
        },
      ],
      dirs: [
        './src/network/**',
        './src/stores/**',
        './src/utils/**',
      ],
      vueTemplate: true,
    }),

    Components({
      dirs: ['src/components', 'src/views'],
    }),
  ],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: fileURLToPath(new URL('./tests/vitest-setup', import.meta.url)),
    coverage: {
      include: ['src/**/*'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
})
