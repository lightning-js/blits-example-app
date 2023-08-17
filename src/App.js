import Bolt from '@lightningjs/bolt'
import Positioning from './pages/Positioning'
import Transitions from './pages/Transitions'
import Colors from './pages/Colors'
import ForLoop from './pages/ForLoop'
import Components from './pages/Components'

export default Bolt.Application({
  components: {
    Positioning,
    Transitions,
    Colors,
    ForLoop,
    Components,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!--Positioning /-->
      <!--Transitions /-->
      <!--Colors /-->
      <!--ForLoop /-->
      <Components />
    </Element>`,
})
