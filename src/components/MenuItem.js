import Blits from '@lightningjs/blits'

export default Blits.Component('MenuItem', {
  template: `
    <Element x="20" y="$y" w="360" h="60" 
             :color="$focused ? '#4299e1' : '#374151'"
             :effects="[{type: 'radius', props: 8}]">
      <Text :content="$title" x="20" y="15" size="28" color="#fff" />
    </Element>
  `,
  
  props: ['title', 'focused', 'y']
})
