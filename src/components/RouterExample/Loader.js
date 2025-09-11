import Blits from '@lightningjs/blits'

export default Blits.Component('Loader', {
  template: `
    <Element w="1920" h="1080" color="black">
      <Element
        src="assets/router-example-1.png"
        w="420"
        h="420"
        x="960"
        mount="{x:0.5, y: 0.5}"
        :y.transition="{value: $y, duration: 1500, easing: 'ease-in-out', end: $finish }"
      />
    </Element>
  `,
  state() {
    return {
      y: 1100,
    }
  },
  hooks: {
    ready() {
      this.$setTimeout(() => {
        this.y = 540
      }, 100)
    },
  },
  methods: {
    finish() {
      this.$router.to('examples/router/movies')
    },
  },
})
