import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const outDir = join(__dirname, 'electron-dist/render')
const renderDir = join(__dirname, 'src')
const publicDir = '../common/public'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir,
  base: './',
  plugins: [vue()],
  build: {
    outDir,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': renderDir,
    }
  },
})
