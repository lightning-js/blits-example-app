import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Toggle', {
  template: `
    <Element w="100" h="50" y="5" :color="$bgColor" :effects="[$shader('radius', {radius:25})]">
      <Circle :x.transition="$on ? 0 : 50" size="50" :color="$primaryColor" />
    </Element>
  `,
  props: ['bgColor', 'primaryColor', 'on'],
})
