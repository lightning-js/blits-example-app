import Bolt from '@lightningjs/bolt'
import fetchPopular from '../api/providers/fetchPopular'
import Poster from '../components/Poster.js'
import Background from '../components/Background.js'

export default Bolt.Component('Home', {
  components: {
    Poster,
    Background,
  },
  template: /*html*/ `
    <Element w="1920" h="1080" color="black">
      <Background :srcOne="$srcOne" :srcTwo="$srcTwo" />
      <Element :alpha.transition="{v: $alphaIn, d: 300, f: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}" :y.transition="{v: $yIn, d: 300, f: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
        <Image src="assets/logo.png" x="130" y="80" w="125" h="30"/>
        <Element :x.transition="{v: $x, d: 300, f: 'ease-in-out'}" y="700">
          <Poster :for="(item, index) in $items" index="$index" src="$item.poster" id="$item.identifier"/>
        </Element>
      </Element>
    </Element>`,
  state() {
    return {
      items: [],
      background: '',
      focused: 0,
      alphaIn: 0.001,
      yIn: 200,
      srcOne: '',
      srcTwo: '',
    }
  },
  computed: {
    x() {
      if (this.focused <= 2) return 150
      return 150 - Math.min(this.focused - 2, this.items.length - 8) * 215
    },
  },
  hooks: {
    render() {
      this.alphaIn = 1
      this.yIn = 0

      fetchPopular('movie').then((items) => {
        this.background = items[this.focused].background
        this.items = items
        this.select(this.items[this.focused].identifier).focus()
      })

      this.$listen('posterSelect', (index) => {
        if (index % 2 === 0) {
          this.srcOne = this.items[index].background
        } else {
          this.srcTwo = this.items[index].background
        }
      })
    },
  },
  input: {
    left() {
      this.focused = Math.max(this.focused - 1, 0)
      this.select(this.items[this.focused].identifier).focus()
    },
    right() {
      this.focused = Math.min(this.focused + 1, this.items.length - 1)
      this.select(this.items[this.focused].identifier).focus()
    },
  },
})
