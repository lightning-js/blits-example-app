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
export default {
  props: {
    color: 0x00ff00ff,
  },
  update() {
    this.uniformRGBA('u_color', this.props.color)
  },
  fragment: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    uniform vec2 u_resolution;
    uniform vec4 u_color;
    uniform sampler2D u_texture;

    varying vec4 v_color;
    varying vec2 v_textureCoords;

    void main() {
      vec4 texture = texture2D(u_texture, v_textureCoords) * v_color;

      gl_FragColor = 1.0 - (1.0 - texture) / u_color;
    }
  `,
}
