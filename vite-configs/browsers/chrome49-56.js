import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: 'chrome >= 49 and chrome < 56',
      additionalLegacyPolyfills: ['whatwg-fetch'],
      renderModernChunks: false,
    }),
  ],
  build: {
    outDir: 'dist/legacy/chrome-49/',
  },
})
