import Bolt from '@lightningjs/bolt'
import Square from './Square.js'

export default Bolt.Component('Card', {
  components: {
    Square,
  },
  template: `
    <Element w="$w" h="$h" color="#0891b2">
      <Square x="80" y="80" />
      <Square x="20" y="20" size="40" />
    </Element>`,
  props: ['size'],
  computed: {
    w() {
      return this.size === 'large' ? 400 : 200
    },
    h() {
      return this.size === 'large' ? 500 : 300
    },
  },
})
