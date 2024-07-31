import Blits from '@lightningjs/blits'

export default Blits.Component('FitRow', {
  template: `
    <Element>
      <Text x="100" :y="$item.y" :content="'Image dimensions: ' + $item.dimensions" />
      <Text x="100" :y="$item.y+50" content="$item.title" />
      <Element :y="$item.y+120">
        <Element
          :for="(pos, index) in $config"
          :x="$item.x + $item.w * $index + 50 * $index"
          w="$item.w"
          h="$item.h"
          src="$item.img"
          fit="$pos.fit"
          key="$pos.id"
        />
      </Element>
    </Element>
  `,
  props: ['item', 'config'],
})
