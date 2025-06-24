import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: 'chrome >= 63 and chrome < 71',
      renderModernChunks: false,
    }),
  ],
  build: {
    outDir: 'dist/legacy/chrome-63/',
  },
})
