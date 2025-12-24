import Blits from '@lightningjs/blits'

export default Blits.Component('NotFound', {
  template: `
    <Element w="1920" h="1080" color="#1f2937">
      <Element x="960" y="400" mount="0.5">
        <Text content="404" x="0" y="0" size="120" color="#ef4444" font="raleway" mount="{x: 0.5}" />
        <Text content="Page Not Found" x="0" y="-50" size="48" color="#fff" font="lato" mount="{x: 0.5}" />
        <Text content="The page you're looking for doesn't exist" x="0" y="200" size="24" color="#9ca3af" mount="{x: 0.5}" />
        <Text content="Press Back or Escape to return" x="0" y="240" size="20" color="#6b7280" mount="{x: 0.5}" />
      </Element>
    </Element>
  `,
  hooks: {
    ready() {
      // Hide menu when on 404 page
      if (this.$appState) {
        this.$appState.showMenu = false
      }
    }
  },
  input: {
    back() {
      this.$router.back()
    },
  }
})
