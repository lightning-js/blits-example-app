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
      <Background :src="$background" />
      <Image src="assets/logo.png" x="130" y="80" w="125" h="30"/>
      <Element :x.transition="{v: $x, d: 300, f: 'ease-in-out'}" y="700">
        <Poster :for="(item, index) in $items" index="$index" src="$item.poster" id="$item.identifier"/>
      </Element>
    </Element>`,
  state() {
    return {
      items: [],
      background: '',
      focused: 0,
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
      fetchPopular('movie').then((items) => {
        this.background = items[this.focused].background
        this.items = items
        this.select(this.items[this.focused].identifier).focus()
      })

      this.$listen('posterSelect', (index) => {
        this.background = this.items[index].background
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
