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
        <Box w="100" size="200" y="600" header="$header1" :text="$text1" />
        <Box w="100" size="200" x="400" y="600" header="$header2" :text="$text2" />
        <Box w="100" size="200" x="800" y="600" header="$header3" :text="$text3" />
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
      header1: 'e.key',
      header2: 'e.code',
      header3: 'e.keyCode',
      text1: '...',
      text2: '...',
      text3: '...',
    }
  },
  computed: {
    backLabel() {
      return this.goBack ? 'Release to return' : 'Hold Back'
    },
  },
  methods: {
    updateLabels(e) {
      this.text1 = e.key
      this.text2 = e.code
      this.text3 = e.keyCode + ''
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
