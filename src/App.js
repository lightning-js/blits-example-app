import Bolt from '@lightningjs/bolt'
import Positioning from './pages/Positioning'

export default Bolt.Application({
  components: {
    Positioning,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Positioning />
    </Element>
  `,
})
