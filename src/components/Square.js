import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Square', {
  template: `
    <Element x="$x" y="$y" w="$size" h="$size" color="#86198f">`,
  props: [
    'x',
    'y',
    {
      key: 'size',
      default: 80,
    },
  ],
})
