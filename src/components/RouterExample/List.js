import Blits from '@lightningjs/blits'
import { getMovies, getTvShows } from '../../api/routerExampleData'

const SeasonListItem = Blits.Component('SeasonsListItem', {
  template: `
    <Element w="$w" :h="$h" :color="$bColor" :effects="[{type: 'radius', props: {radius: 8}}]">
      <Text :content="$title" :x="$w/2" :y="$h/2" mount="0.5" :color="$focused ? '#fff' : '#e2e8f0'" font="raleway" />
    </Element>
  `,
  state() {
    return {
      w: 400,
      h: 70,
      focused: false,
      bColor: '#374151',
    }
  },
  props: ['title'],
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

const ListItem = Blits.Component('ListItem', {
  template: `
    <Element w="$w" h="$h" :color="$bColor" :effects="[{type: 'radius', props: {radius: 8}}]">
      <Text :content="$title" x="20" y="20" size="20" :color="$focused ? '#fff' : '#e2e8f0'" font="raleway" />
      <Text :content="$genre" x="20" y="55" size="14" :color="$focused ? '#e2e8f0' : '#a0aec0'" />
      <Text :content="$subtitle" x="20" y="80" size="12" :color="$focused ? '#cbd5e1' : '#9ca3af'" />
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
  props: ['title', 'genre', 'subtitle'],
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
    SeasonListItem,
  },
  template: `
    <Element :x.transition="$x" y="$y">
      <Element :show="!$isSeasonsList">
        <ListItem
          :for="(item, index) in $data"
          key="'item' + $item.id"
          title="$item.title"
          genre="$item.genre"
          subtitle="$item.subtitle"
          :x="$index * 440"
          ref="listItem"
        />
      </Element>
      <Element :show="$isSeasonsList">
        <SeasonListItem
          :for="(item, index) in $data"
          key="'seasonItem' + $item.id"
          title="$item.title"
          :x="$index * 440"
          ref="seasonListItem"
        />
      </Element>
    </Element>
  `,
  state() {
    return {
      x: 0,
      y: 800,
      activeIndex: 0,
      data: [],
      isSeasonsList: false,
    }
  },
  props: ['type'],
  watch: {
    activeIndex(v) {
      if (v !== undefined) {
        const el =
          this.isSeasonsList === true
            ? this.$select(`seasonListItem${v}`)
            : this.$select(`listItem${v}`)

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
      } else if (this.type === 'tv') {
        this.$router.to(`/examples/router/tv/${targetItem.id}`)
      } else if (this.type === 'tv-seasons') {
        const activeShowId = this.$appState.activeShowId
        this.$router.to(`/examples/router/tv/${activeShowId}/season/${targetItem.id}`)
      }
    },
    up() {
      this.parent.$focus()
    },
  },
  methods: {
    move(dir) {
      const next = this.activeIndex + dir
      this.x = next > 2 ? -(next - 2) * 440 : 0
      this.activeIndex = next
    },
    async fetchData() {
      let d = []
      if (this.type == 'movies') {
        d = await getMovies()
        // Add subtitle for movies
        d = d.map((item) => ({ ...item, subtitle: `Directed by ${item.director}` }))
      } else if (this.type == 'tv') {
        d = await getTvShows()
        // Add subtitle for TV shows
        d = d.map((item) => ({
          ...item,
          subtitle: `Created by ${item.creator} • ${item.seasons} seasons`,
        }))
      } else if (this.type === 'tv-seasons') {
        this.isSeasonsList = true
        for (let i = 1; i <= this.$appState.activeShowSeasons; i++) {
          d.push({ id: i, title: `Season ${i}` })
        }
      }
      this.data = d
    },
  },
})
