import Bolt from '@lightningjs/bolt'
import Letter from '../components/Letter.js'

export default Bolt.Component('Intro', {
  components: {
    Letter,
  },
  template: `
    <Element w="1920" h="1080" :src="$background">
      <Letter letter="l" w="294" />
      <Letter letter="i-1" w="128" x="294" direction="up" delay="50" />
      <Letter letter="g-1" w="205" x="422" delay="100" />
      <Letter letter="h" w="224" x="627" direction="up" delay="150" />
      <Letter letter="t" w="190" x="851" delay="200" />
      <Letter letter="n-1" w="221" x="1041" direction="up" delay="250" />
      <Letter letter="i-2" w="115" x="1262" delay="300" />
      <Letter letter="n-2" w="219" x="1377" direction="up" delay="350" />
      <Letter letter="g-2" w="324" x="1596" direction="up" delay="400" />
    </Element>`,
  state() {
    return {
      background: `${window.location.protocol}//${window.location.host}/assets/background.png`,
    }
  },
})
