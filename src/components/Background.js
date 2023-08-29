import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Background', {
  template: `
    <Element>
      <Image
        :src="$bg1" w="1920" h="1080" colorBottom="#000" :alpha.transition="{v: $alpha1, d: 400, f: 'ease-in'}"
      />
      <Image
        :src="$bg2" w="1920" h="1080" colorBottom="#000" :alpha.transition="{v: $alpha2, d: 400, f: 'ease-in'}"
      />
    </Element>`,
  props: ['src'],
  state() {
    return {
      counter: 0,
      alpha1: 0,
      alpha2: 0,
      bg1: false,
      bg2: false,
    }
  },
  watch: {
    src(v) {
      this.counter = (this.counter + 1) % 2
      if (this.counter === 0) {
        this.bg1 = v
        this.alpha1 = 0.8
        this.alpha2 = 0
      } else {
        this.bg2 = v
        this.alpha1 = 0
        this.alpha2 = 0.8
      }
    },
  },
})
