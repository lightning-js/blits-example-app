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
