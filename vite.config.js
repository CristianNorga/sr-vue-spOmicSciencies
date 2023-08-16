import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias';

export default defineConfig({
  plugins: [
    vue(),
    alias({
      entries: [
        { find: '@bts', replacement: './node_modules/bootstrap/scss' },
      ]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        assetsDir: './',
      },
    },
  },
})
