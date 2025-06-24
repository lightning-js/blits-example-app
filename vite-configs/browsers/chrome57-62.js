import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: 'chrome >= 57 and chrome < 63',
      renderModernChunks: false,
    }),
  ],
  build: {
    outDir: 'dist/legacy/chrome-57/',
  },
})
