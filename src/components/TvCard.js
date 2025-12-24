import Blits from '@lightningjs/blits'

export default Blits.Component('TvCard', {
  template: `
    <Element
      w="300"
      h="200"
      :color="$focused ? '#4299e1' : '#374151'"
      :effects="[{type: 'radius', props: 8}]"
      :scale="$focused ? 1.05 : 1.0"
      alpha="$focused ? 1.0 : 0.8"
    >
      <Text :content="$title" x="20" y="20" size="20" :color="$focused ? '#fff' : '#e2e8f0'" font="raleway" />
      <Text :content="$year" x="20" y="50" size="14" :color="$focused ? '#e2e8f0' : '#a0aec0'" />
      <Text :content="$genre" x="20" y="75" size="14" :color="$focused ? '#e2e8f0' : '#a0aec0'" />
      <Text :content="'Created by ' + $creator" x="20" y="100" size="12" :color="$focused ? '#cbd5e1' : '#9ca3af'" />
      <Text :content="$seasons + ' seasons • ' + $episodes + ' episodes'" x="20" y="125" size="12" :color="$focused ? '#cbd5e1' : '#9ca3af'" />
      <Text :content="$status" x="20" y="150" size="12" :color="$focused ? '#cbd5e1' : '#9ca3af'" />

      <!-- Focus border indicator -->
      <Element
        :show="$focused"
        x="-2"
        y="-2"
        w="304"
        h="204"
        color="transparent"
        :effects="[
          {type: 'radius', props: 10},
          {type: 'border', props: {width: 3, color: '#fbbf24'}}
        ]"
      />
    </Element>
  `,
  props: ['title', 'creator', 'genre', 'year', 'seasons', 'episodes', 'status', 'tvShowId'],
  state() {
    return {
      focused: false,
    }
  },
  hooks: {
    focus() {
      this.focused = true
    },
    unfocus() {
      this.focused = false
    },
  },
})
