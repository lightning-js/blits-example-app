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
      <Element x="20" y="850">
        <Element w="980" h="2" color="#334155" />
        <Text y="15" content="Panel Navigation:" size="18" color="#e2e8f0" />
        <Text y="42" content="[Up/Down] Switch pages" size="15" color="#4ade80" />
        <Text y="64" content="[Left] Return to main page" size="15" color="#4ade80" />
        <Text y="100" :content="'Page ' + ($pageIndex + 1) + ' of 3'" size="14" color="#64748b" />
      </Element>
    </Element>
  `,
  routes: [
    { path: '/', component: NowPlaying },
    { path: '/recommendations', component: Recommendations },
    { path: '/trending', component: Trending },
  ],
  state() {
    return {
      active: false,
      pageIndex: 0,
      pages: ['/', '/recommendations', '/trending'],
    }
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
      this.$router.to(this.pages[this.pageIndex], {}, {}, 'sidePanel')
    },
    down() {
      this.pageIndex = (this.pageIndex + 1) % this.pages.length
      this.$router.to(this.pages[this.pageIndex], {}, {}, 'sidePanel')
    },
    left() {
      this.$emit('closePanel')
    },
  },
})
