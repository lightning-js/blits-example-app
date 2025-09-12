import Blits from '@lightningjs/blits'

const ListItem = Blits.Component('ListItem', {
  template: `
    <Element w="$w" h="$h" :color="$bColor" :effects="[{type: 'radius', props: {radius: 8}}]">
      <Text content="$title" x="20" y="20" size="20" :color="$focused ? '#fff' : '#e2e8f0'" font="raleway" />
      <Text content="$genre" x="20" y="75" size="14" :color="$focused ? '#e2e8f0' : '#a0aec0'" />
      <Text :content="'Directed by ' + $director" x="20" y="100" size="12" :color="$focused ? '#cbd5e1' : '#9ca3af'" />
    </Element>
  `,
  state() {
    return {
      w: 300,
      h: 150,
      focused: false,
    }
  },
  props: ['title', 'genre', 'director'],
  hooks: {
    focus() {
      this.focused = true
    },
    unfocus() {
      this.focused = false
    },
  },
})

export const List = Blits.Component('List', {
  components: {
    ListItem,
  },
  template: `
    <Element>
      <Element :x.transition="$x">
        <ListItem
          :for="(item, index) in $data"
          key="$item.id"
          title="$item.title"
          genre="$item.genre"
          director="$item.director"
          :x="$index * 350"
          ref="listItem"
        />
      </Element>
    </Element>
  `,
  state() {
    return {
      x: 400,
      y: 700,
      activeIndex: 0,
    }
  },
  props: ['data'],
  watch: {
    activeIndex(v) {
      const el = this.$select(`listItem${v}`)
      el && el.$focus && el.$focus()
    },
  },
  hooks: {
    focus() {
      this.$trigger('activeIndex')
    },
  },
  input: {
    right() {
      if (this.activeIndex < this.data.length - 1) this.move(1)
    },
    left() {
      if (this.activeIndex > 0) this.move(-1)
    },
  },
  methods: {
    move(dir) {
      const next = this.activeIndex + dir
      this.x = next > 3 ? -(next - 3) * 350 - 350 : 400
      this.activeIndex = next
    },
  },
})
