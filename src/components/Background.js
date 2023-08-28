import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Background', {
  template: /*html*/ `
    <Element>
      <Image
        :src="$src" w="1920" h="1080" colorBottom="#000" alpha="0.8"
      />
    </Element>`,
  props: ['src'],
})
