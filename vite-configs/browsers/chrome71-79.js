import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: 'chrome >= 71 and chrome <= 79',
      renderModernChunks: false,
    }),
  ],
  build: {
    outDir: 'dist/legacy/chrome-71/',
  },
})
