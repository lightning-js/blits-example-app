export default {
  props: {
    amount: 0,
    direction: 'horizontal',
  },
  update() {
    this.uniform1f('u_amount', this.props.amount)
    this.uniform1i('u_direction', this.props.direction !== 'horizontal' ? 1 : 0)
  },
  vertex: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    attribute vec2 a_position;
    attribute vec2 a_textureCoords;
    attribute vec4 a_color;

    uniform vec2 u_resolution;
    uniform float u_pixelRatio;

    uniform int u_direction;
    uniform float u_amount;

    varying vec4 v_color;
    varying vec2 v_textureCoords;

    varying vec2 v_texel1;
    varying vec2 v_texel2;
    varying vec2 v_texel3;
    varying vec2 v_texel4;

    void main() {
      vec2 normalized = a_position * u_pixelRatio;
      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);

      v_color = a_color;
      v_textureCoords = a_textureCoords;

      if(u_direction == 1) {
        float shift = u_amount / u_resolution.y;
        v_texel1 = vec2(0.0, shift * 1.0);
        v_texel2 = vec2(0.0, shift * 2.0);
        v_texel3 = vec2(0.0, shift * 3.0);
        v_texel4 = vec2(0.0, shift * 4.0);
      }
      else {
        float shift = u_amount / u_resolution.x;
        v_texel1 = vec2(shift * 1.0, 0.0);
        v_texel2 = vec2(shift * 2.0, 0.0);
        v_texel3 = vec2(shift * 3.0, 0.0);
        v_texel4 = vec2(shift * 4.0, 0.0);
      }

      gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);
      gl_Position.y = -sign(screenSpace.y) * gl_Position.y;
    }
  `,
  fragment: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    uniform vec2 u_resolution;
    uniform float u_amount;
    uniform sampler2D u_texture;

    varying vec4 v_color;
    varying vec2 v_textureCoords;

    const float weight0 = 0.227027;
    const float weight1 = 0.1945946;
    const float weight2 = 0.1216216;
    const float weight3 = 0.054054;
    const float weight4 = 0.016216;

    varying vec2 v_texel1;
    varying vec2 v_texel2;
    varying vec2 v_texel3;
    varying vec2 v_texel4;

    void main() {
      vec2 texelSize = u_amount / u_resolution; // Size of one pixel in texture coordinates
      vec4 color = texture2D(u_texture, v_textureCoords) * weight0; // Center pixel

      // Horizontal blur
      color += texture2D(u_texture, v_textureCoords + v_texel1) * weight1;
      color += texture2D(u_texture, v_textureCoords - v_texel1) * weight1;

      color += texture2D(u_texture, v_textureCoords + v_texel2) * weight2;
      color += texture2D(u_texture, v_textureCoords - v_texel2) * weight2;

      color += texture2D(u_texture, v_textureCoords + v_texel3) * weight3;
      color += texture2D(u_texture, v_textureCoords - v_texel3) * weight3;

      color += texture2D(u_texture, v_textureCoords + v_texel4) * weight4;
      color += texture2D(u_texture, v_textureCoords - v_texel4) * weight4;

      gl_FragColor = color;
    }
  `,
}
