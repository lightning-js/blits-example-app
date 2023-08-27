import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Background', {
  template: /*html*/ `
    <Element>
      <Image
        :src="$backgroundOne" w="1920" h="1080" colorBottom="#000" :alpha.transition="{v: $alphaOne, d: 200}"
      />
    </Element>
    <Element>
      <Image
        :src="$backgroundTwo" w="1920" h="1080" colorBottom="#000" :alpha.transition="{v: $alphaTwo, d: 200}"
      />
    </Element>`,
  props: ['srcOne', 'srcTwo'],
  state() {
    return {
      alphaOne: 0.5,
      alphaTwo: 0,
    }
  },
  computed: {
    backgroundOne() {
      this.alphaOne = 0.5
      this.alphaTwo = 0
      return this.srcOne
    },
    backgroundTwo() {
      this.alphaOne = 0
      this.alphaTwo = 0.5
      return this.srcTwo
    },
  },
})
