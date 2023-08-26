import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Background', {
  template: /*html*/ `
    <Image
      :src="$src" w="1920" h="1080" colorBottom="#000" alpha="0.5"
    />`,
  props: ['src'],
})
