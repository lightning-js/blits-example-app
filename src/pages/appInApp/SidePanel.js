import Blits from '@lightningjs/blits'

import NowPlaying from './panel/NowPlaying.js'
import Recommendations from './panel/Recommendations.js'
import Trending from './panel/Trending.js'

export default Blits.Component('SidePanel', {
  template: `
    <Element w="900" h="1080" color="#1e293b">
      <Element w="2" h="1080" color="#334155" />
      <Element x="10">
        <RouterView w="980" h="1080" :active="$active" ref="routerView" name="sidePanel" />
      </Element>
      <!-- Navigation instructions at bottom -->
      <Element x="20" y="820">
        <Element w="980" h="2" color="#334155" />
        <Text y="15" content="Panel Navigation:" size="18" color="#e2e8f0" />
        <Text y="42" content="[Up/Down] Switch pages" size="15" color="#4ade80" />
        <Text y="64" content="[Back] Panel history back" size="15" color="#4ade80" />
        <Text y="86" content="[Left] Return to main page" size="15" color="#4ade80" />
        <Text y="120" :content="'Page ' + ($pageIndex + 1) + ' of 3'" size="14" color="#64748b" />
        <Text y="144" :content="'Panel route: ' + $panelRoute" size="14" color="#64748b" />
      </Element>
    </Element>
  `,
  router: {
    routes: [
      { path: '/', component: NowPlaying },
      {
        path: '/recommendations',
        component: Recommendations,
        hooks: {
          before(to) {
            // Example of a secondary RouterView route hook
            to.data.subtitle = 'Loaded via sidePanel before hook'
            return to
          },
        },
      },
      { path: '/trending', component: Trending },
    ],
  },
  state() {
    return {
      active: false,
      pageIndex: 0,
      pages: ['/', '/recommendations', '/trending'],
    }
  },
  computed: {
    panelRoute() {
      const route = this.$router.get('sidePanel').currentRoute
      return (route && route.path) || '/'
    },
  },
  hooks: {
    focus() {
      this.active = true
      this.pageIndex = 0
      this.$select('routerView').$focus()
    },
    unfocus() {
      this.active = false
      this.$emit('closePanel')
    },
  },
  input: {
    up() {
      this.pageIndex = (this.pageIndex - 1 + this.pages.length) % this.pages.length
      this.$router.get('sidePanel').to(this.pages[this.pageIndex])
    },
    down() {
      this.pageIndex = (this.pageIndex + 1) % this.pages.length
      this.$router.get('sidePanel').to(this.pages[this.pageIndex])
    },
    back() {
      // Prefer named RouterView history; close the panel when there is nowhere to go back
      if (this.$router.get('sidePanel').back()) {
        this.pageIndex = Math.max(0, this.pageIndex - 1)
        return
      }
      this.$emit('closePanel')
    },
    left() {
      this.$emit('closePanel')
    },
  },
})
