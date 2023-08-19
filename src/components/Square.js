import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Square', {
  template: /*html*/ `
    <Element w="$size" h="$size" color="#86198f">
  `,
  props: [
    {
      key: 'size',
      default: 80,
    },
  ],
})
