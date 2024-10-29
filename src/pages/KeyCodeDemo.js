import Blits from '@lightningjs/blits'
import Box from '../components/Box.js'

export default Blits.Application({
  components: {
    Box,
  },
  template: `
    <Element w="1920" h="1080">
      <Element y="250">
        <Text :content="$pageTitle" font="raleway" mount="{x: 0.5}" x="960" size="62" w="800" h="200" contain="width" />
        <Text :content="$value" mount="{x: 0.5}" x="960" y="100" size="32" w="800" h="200" contain="width" />
      </Element>
      <Element x="395">
        <Box y="600" header="$keyheader" :text="$key" />
        <Box x="400" y="600" header="$codeheader" :text="$code" />
        <Box x="800" y="600" header="$keycodeheader" :text="$keyCode" />
      </Element>
      <Text mount="{x: 1}" x="1860" y="1000" :content="$backLabel" :color="$backPressed ? '#fff' : '#667a97'" />
    </Element>
    `,
  state() {
    return {
      backPressed: false,
      backTimer: null,
      goBack: false,
      pageTitle: 'Key Code Finder',
      value:
        'Press any key to get the JavaScript keydown event key, code, which and keyCode properties:',
      keyheader: 'e.key',
      codeheader: 'e.code',
      keycodeheader: 'e.keyCode',
      key: '...',
      code: '...',
      keyCode: '...',
    }
  },
  computed: {
    backLabel() {
      return this.goBack ? 'Release to return' : 'Hold Back'
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
      this.updateLabels(e)
    },
    back(e) {
      this.updateLabels(e)
      this.backPressed = true
      this.backTimer = this.$setTimeout(() => {
        this.goBack = true
      }, 2000)

      return () => {
        this.$clearTimeout(this.backTimer)
        this.backPressed = false
        if (this.goBack) {
          this.$router.back()
        }
      }
    },
  },
})
