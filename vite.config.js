import { defineConfig } from 'vite'
// This library is required in order to import TypeScript files with comments
// import tsconfig from './tsconfig.json'

/**
 * Vite Config
 *
 * @remarks
 * Currenly only for tests
 */
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    // root: './tests',
    // esbuild: {
    //   // This setting is the target for the dev build
    //   target: tsconfig.compilerOptions.target,
    // },
    resolve: {
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
      // alias: [{ find: /((\/|^)(src|tests)\/.*)\.js$/, replacement: '$1.ts' }],
    },
    build: {
      // minify: false,
      // This setting is the target for the production build
      // target: tsconfig.compilerOptions.target,
      // lib: {
      //   entry: {
      //     index: './index.html',
      //     // 'workers/renderer': './src/renderer.js',
      //   },
      //   // formats: ['es', 'cjs'],
      // },
    },
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..'],
      },
    },
    worker: {
      format: 'es',
    },
  }
})
