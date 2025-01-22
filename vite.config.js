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

import { defineConfig, loadEnv } from 'vite'
import blitsVitePlugins from '@lightningjs/blits/vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig(({ mode }) => {
  const envPrefix = ['npm_config_']
  const env = loadEnv(mode, process.cwd(), envPrefix)

  let plugins = [...blitsVitePlugins]
  const isLegacy = env.npm_config_legacy === 'true'

  if (isLegacy) {
    plugins = [
      // @ts-ignore
      legacy({
        targets: ['chrome >= 38 and chrome < 45'],
        modernPolyfills: true,
        additionalLegacyPolyfills: ['whatwg-fetch'],
      }),
    ]
  }

  return {
    base: '/',
    plugins,
    resolve: {
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
    },
    fs: {
      allow: ['..'],
    },
    worker: {
      format: 'es',
    },
    preview: {
      allowedHosts: true,
    },
    server: {
      allowedHosts: true,
    },
  }
})
