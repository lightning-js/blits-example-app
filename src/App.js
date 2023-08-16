import Bolt from '@lightningjs/bolt'
import Positioning from './pages/Positioning'
import Transitions from './pages/Transitions'

export default Bolt.Application({
  components: {
    Positioning,
    Transitions,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!--Positioning /-->
      <Transitions />

    </Element>
  `,
})
