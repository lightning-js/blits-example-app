import Blits from '@lightningjs/blits'
import Box from '../components/Box.js'

export default Blits.Application({
  components: {
    Box,
  },
  template: `
    <Element w="1920" h="1080">
      <Element>
        <Text :content="$pageTitle" x="750" y="100" size="50" w="500" h="200" />
        <Text :content="$value" x="750" y="200" size="200" w="500" h="200" />
      </Element>
      <Box w="100" size="200" x="300" y="600" header="$header1" :text="$text1" />
      <Box w="100" size="200" x="700" y="600" header="$header2" :text="$text2" />
      <Box w="100" size="200" x="1100" y="600" header="$header3" :text="$text3" />
    </Element>
    `,
  state() {
    return {
      pageTitle: 'KeyCode',
      value: 'keycode',
      header1: 'key  ',
      header2: 'code  ',
      header3: 'keyCode',
      text1: 'text1',
      text2: 'text2',
      text3: 'text3',
    }
  },
  input: {
    any(e) {
      this.pageTitle = 'Key Code is'
      this.value = e.keyCode
      this.text1 = e.key
      this.text2 = e.code
      this.text3 = e.keyCode
    },
    back() {
      this.$router.back()
    },
  },
})
