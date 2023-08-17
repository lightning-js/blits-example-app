import Bolt from '@lightningjs/bolt'
import Positioning from './pages/Positioning'
import Transitions from './pages/Transitions'
import Colors from './pages/Colors'

export default Bolt.Application({
  components: {
    Positioning,
    Transitions,
    Colors,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!--Positioning /-->
      <!--Transitions /-->
      <Colors />
    </Element>`,
})
