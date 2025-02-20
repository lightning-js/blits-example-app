export default {
  name: 'Rhombus',
  props: {
    width: 0,
    height: 0,
  },
  update(node) {
    this.uniform2f(
      'u_size',
      this.props.width > 0 ? this.props.width : node.width,
      this.props.height > 0 ? this.props.height : node.height
    )
  },
  fragment: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    uniform sampler2D u_texture;
    uniform vec2 u_dimensions;

    uniform vec2 u_size;

    varying vec4 v_color;
    varying vec2 v_textureCoords;
    varying vec2 v_nodeCoords;

    float ndot(vec2 a, vec2 b) {
      return a.x * b.x - a.y * b.y;
    }

    float sdRhombus(vec2 p, vec2 b) {
      p = abs(p);
      float h = clamp(ndot(b - 2.0 * p, b) / dot(b, b), -1.0, 1.0);
      float d = length(p - 0.5 * b * vec2(1.0-h, 1.0+h));
      return d * sign(p.x * b.y + p.y * b.x - b.x * b.y);
    }

    void main() {
      vec4 texture = texture2D(u_texture, v_textureCoords) * v_color;
      //get center of the node
      vec2 uv = v_nodeCoords.xy * u_dimensions - (u_dimensions * 0.5);

      //calculate signed distance
      float dist = sdRhombus(uv, u_size * 0.5);
      //calculate alpha value
      float rhombusA = 1.0 - smoothstep(0.0, 1.0, dist);

      vec4 colorOut = mix(vec4(0.0), texture, rhombusA);
      gl_FragColor = colorOut;
    }
  `,
}
