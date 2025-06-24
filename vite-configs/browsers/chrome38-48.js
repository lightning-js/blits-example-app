import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import injectScriptPlugin from '../helpers/injectScript'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['chrome >= 38 and chrome < 45'],
      modernPolyfills: true,
      additionalLegacyPolyfills: ['whatwg-fetch'],
    }),
    injectScriptPlugin(
      '<script type="text/javascript">delete Symbol.prototype[Symbol.toPrimitive];</script>'
    ),
  ],
  build: {
    outDir: 'dist/legacy/chrome-38/',
  },
})
