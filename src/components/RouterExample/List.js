import Blits from '@lightningjs/blits'
import { getMovies } from '../../api/routerExampleData'

const ListItem = Blits.Component('ListItem', {
  template: `
    <Element w="$w" h="$h" :color="$bColor" :effects="[{type: 'radius', props: {radius: 8}}]">
      <Text content="$title" x="20" y="20" size="20" :color="$focused ? '#fff' : '#e2e8f0'" font="raleway" />
      <Text content="$genre" x="20" y="55" size="14" :color="$focused ? '#e2e8f0' : '#a0aec0'" />
      <Text :content="'Directed by ' + $director" x="20" y="80" size="12" :color="$focused ? '#cbd5e1' : '#9ca3af'" />
    </Element>
  `,
  state() {
    return {
      w: 400,
      h: 130,
      focused: false,
      bColor: '#374151',
    }
  },
  props: ['title', 'genre', 'director'],
  hooks: {
    focus() {
      this.focused = true
      this.bColor = '#3741ff'
    },
    unfocus() {
      this.focused = false
      this.bColor = '#374151'
    },
  },
})

export const List = Blits.Component('List', {
  components: {
    ListItem,
  },
  template: `
    <Element :x.transition="$x" y="$y">
      <ListItem
        :for="(item, index) in $data"
        key="$item.id"
        title="$item.title"
        genre="$item.genre"
        director="$item.director"
        :x="$index * 450"
        ref="listItem"
      />
    </Element>
  `,
  state() {
    return {
      x: 0,
      y: 800,
      activeIndex: 0,
      data: [],
    }
  },
  props: ['type', 'currentIndex'],
  watch: {
    activeIndex(v) {
      if (v !== undefined) {
        const el = this.$select(`listItem${v}`)
        if (el && el.$focus) {
          el.$focus()
        }
      }
    },
  },
  hooks: {
    ready() {
      this.fetchData()
    },
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
    enter() {
      const targetItem = this.data[this.activeIndex]
      if (this.type === 'movies') {
        this.$appState.selectedMovie = targetItem
        this.$router.to(`/examples/router/movies/${targetItem.id}`)
      }
    },
    up() {
      this.parent.$focus()
    },
  },
  methods: {
    move(dir) {
      const next = this.activeIndex + dir
      this.x = next > 2 ? -(next - 2) * 450 : 0
      this.activeIndex = next
    },
    async fetchData() {
      let d
      if (this.type == 'movies') {
        d = await getMovies()
      } else if (this.type == 'tv') {
        // d = await getTv()
      }
      this.data = d
    },
  },
})
