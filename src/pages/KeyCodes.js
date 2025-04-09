import Blits from '@lightningjs/blits'
import Box from '../components/Box.js'

export default Blits.Application({
  components: {
    Box,
  },
  template: `
    <Element w="1920" h="1080">
      <Element y="250">
        <Text content="KeyCode Finder" font="raleway" mount="{x: 0.5}" x="960" size="62" w="800" h="200" contain="width" />
        <Text content="Press any key to get find the correct key code mapping" mount="{x: 0.5}" x="960" y="100" size="32" w="800" h="200" contain="width" />
      </Element>
      <Element x="200">
        <Box y="600" header="Key" :text="$key" />
        <Box x="500" y="600" header="Code" :text="$code" />
        <Box x="1000" y="600" header="keyCode" :text="$keyCode" />
      </Element>
      <Text mount="{x: 1}" x="1860" y="1000" size="30" :content="$backLabel" :color="$backPressed ? '#fff' : '#667a97'" />
    </Element>
    `,
  state() {
    return {
      backPressed: false,
      key: '...',
      code: '...',
      keyCode: '...',
    }
  },
  computed: {
    backLabel() {
      return this.backPressed ? 'Press back key again to navigate back' : ''
    },
  },
  methods: {
    updateLabels(e) {
      this.key = e.key
      this.code = e.code
      this.keyCode = e.keyCode + ''
    },
  },
  input: {
    any(e) {
      this.backPressed = false
      this.updateLabels(e)
    },
    back(e) {
      if (this.backPressed === true) {
        this.$router.back()
      } else {
        this.updateLabels(e)
      }

      return () => {
        this.backPressed = true
      }
    },
  },
})
