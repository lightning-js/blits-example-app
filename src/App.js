import Bolt from '@lightningjs/bolt'
import Positioning from './pages/Positioning'
import Transitions from './pages/Transitions'
import Colors from './pages/Colors'
import ForLoop from './pages/ForLoop'
import Components from './pages/Components'
import Gradients from './pages/Gradients'
import KeyInput from './pages/KeyInput'
import Scaling from './pages/Scaling'
import Effects from './pages/Effects'
import Alpha from './pages/Alpha'
import Intro from './pages/Intro'
import ShowIf from './pages/ShowIf'
import Images from './pages/Images'

export default Bolt.Application({
  components: {
    Positioning,
    Transitions,
    Colors,
    ForLoop,
    Components,
    Gradients,
    KeyInput,
    Scaling,
    Effects,
    Alpha,
    Intro,
    ShowIf,
    Images,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!--Positioning /-->
      <!--Transitions /-->
      <!--Colors /-->
      <!--ForLoop /-->
      <!--Components /-->
      <!--Gradients /-->
      <!--KeyInput id="keyinputPage" /-->
      <!--Scaling /-->
      <!--Effects /-->
      <!--Alpha /-->
      <!--Intro /-->
      <!--ShowIf /-->
      <Images />
    </Element>`,
  // state() {
  //   return {
  //     currentPage: 0,
  //   }
  // },
  hooks: {
    render() {
      const keyinputPage = this.select('keyinputPage')
      if (keyinputPage) keyinputPage.focus()
    },
  },
  // input: {
  //   left() {
  //     this.currentPage--
  //   },
  //   right() {
  //     this.currentPage++
  //   },
  // },
})
