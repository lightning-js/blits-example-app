/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig, mergeConfig, loadEnv } from 'vite'
import blitsVitePlugins from '@lightningjs/blits/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import browserConfigs from './vite-configs/browsers'

// Local FTL checkout (see README "Renderers" section). Blits declares `ftl`
// as an optional peer dep, which makes Vite's dev server treat `ftl` imports
// as external unless aliased — so map them explicitly to the local checkout.
const ftlDir = fileURLToPath(new URL('../ftl/src', import.meta.url))

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), ['npm_config_'])

  const defaultConfig = {
    base: '/', // Set to your base path if you are deploying to a subdirectory (example: /myApp/)
    plugins: [...blitsVitePlugins],
    resolve: {
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
      alias: [
        // Package-export remaps (must come before the generic rule below)
        {
          find: /^ftl\/shaders$/,
          replacement: path.join(ftlDir, 'renderer/webgl/shader/index.js'),
        },
        {
          find: /^ftl\/shaders\/create$/,
          replacement: path.join(ftlDir, 'renderer/webgl/shader.js'),
        },
        { find: /^ftl\/component$/, replacement: path.join(ftlDir, 'component/index.js') },
        { find: /^ftl\/stage$/, replacement: path.join(ftlDir, 'stage/index.js') },
        { find: /^ftl$/, replacement: path.join(ftlDir, 'index.js') },
        { find: /^ftl\/(.+)$/, replacement: path.join(ftlDir, '$1.js') },
      ],
    },
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
      fs: {
        allow: ['..'],
      },
    },
    worker: {
      format: 'es',
    },
  }

  const browserConfig =
    (env.npm_config_browser_version && browserConfigs[env.npm_config_browser_version]) || {}
  return browserConfig ? mergeConfig(defaultConfig, browserConfig, true) : defaultConfig
})
