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
      <Image src="assets/logo.png" x="130" y="80" w="125" h="30" />
      <Element x="150" y="700">
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
  hooks: {
    init() {
      fetchPopular('movie').then((items) => {
        this.background = items[this.focused].background
        this.items = items
      })
    },
  },
  input: {
    left() {
      this.focused -= 1
      console.log(this.items[this.focused])
      this.select(this.items[this.focused].identifier).focus()
    },
    right() {
      this.focused += 1
      console.log(this.items[this.focused])
      this.select(this.items[this.focused].identifier).focus()
    },
  },
})
