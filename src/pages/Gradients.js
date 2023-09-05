import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Gradients', {
  template: /*html*/ `
    <Element>
      <Element :w="1920/4" h="1080" colorTop="#0891b2" colorBottom="#a5f3fc" />
      <Element :w="1920/4" h="1080" :x="1920/4" colorLeft="#dc2626" colorRight="#f87171" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 2" colorTop="#0891b2" colorRight="#f87171" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 3" colorRight="green" colorBottom="gold" />
    </Element>`,
})
