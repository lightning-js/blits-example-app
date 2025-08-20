import Blits from '@lightningjs/blits'

const hookPageTemplate = {
  template: `
    <Element
      w="1920"
      h="1080"
      color="#fff"
      radialGradient=""
      shader="{type: 'radialGradient', colors: ['#b43fcb', '#6150cb'], pivot: [0.5, 1.1], width: 2400, height: 800}"
    >
      <Element :show="$up !== false">
        <Element src="assets/arrow.png" w="100" h="44" x="960" y="40" mount="{x: 0.5}" />
        <Text :content="$up && $up.toUpperCase()" x="960" y="100" size="76" mount="{x: 0.5}" />
      </Element>
      <Element :show="$right !== false">
        <Element src="assets/arrow.png" w="100" h="44" x="1900" y="540" mount="{x: 1, y: 0.5}" rotation="90" />
        <Text :content="$right && $right.toUpperCase()" x="1760" y="540" size="76" rotation="90" mount="0.5" />
      </Element>
      <Element :show="$down !== false">
        <Element src="assets/arrow.png" w="100" h="44" x="960" y="1040" mount="{x: 0.5, y: 1}" rotation="180" />
        <Text :content="$down && $down.toUpperCase()" x="960" y="980" size="76" mount="{x: 0.5, y: 1}" />
      </Element>
      <Element :show="$left !== false">
        <Element src="assets/arrow.png" w="100" h="44" x="40" y="540" mount="{ y: 0.5}" rotation="-90" />
        <Text :content="$left && $left.toUpperCase()" x="180" y="540" size="76" mount="0.5" rotation="-90" />
      </Element>
      <Text :content="$pageTitle" font="raleway" x="960" y="540" size="240" mount="0.5" />
    </Element>
  `,
  props: {
    'page': undefined
  },
  computed: {
    pageTitle() {
      //compute page title from page data, if there's no page data use default title
      return (this.page && this.page.title) || this.title
    },
  },
  state() {
    //default state template to indicate which directions will be available if they are defined when "extending"
    return {
      title: 'Start',
      up: 'up',
      right: 'right',
      down: 'down',
      left: 'left',
    }
  },
}

//landing page of the router hook example, contains 2 flow examples
export const RouterHookPage = Blits.Component('RouterHookPage', {
  ...hookPageTemplate,
  state() {
    return {
      title: 'Start',
      down: 'episode flow',
      right: 'movie flow',
      left: false,
      up: false,
    }
  },
  input: {
    right() {
      //trigger router to navigate to movie flow
      this.$router.to('/examples/router-hooks/movie')
    },
    down() {
      //trigger router to navigate to episode flow
      this.$router.to('/examples/router-hooks/episode/1')
    },
  },
})

//movie flow page, with 2 directions left: back, right: rating
const Movie = Blits.Component('RouterHookMovie', {
  ...hookPageTemplate,
  state() {
    return {
      title: 'Movie',
      left: 'Back',
      right: 'Rating',
      up: false,
      down: false,
    }
  },
  input: {
    left() {
      //trigger router back navigation. Leads back to: /examples/router-hooks
      this.$router.back()
    },
    right() {
      //trigger router to navigate to rating page
      this.$router.to('/examples/router-hooks/rating')
    },
  },
})

//movie flow page, with 2 directions left: back, right: Router example page landing
const Rating = Blits.Component('RouterHookRating', {
  ...hookPageTemplate,
  state() {
    return {
      title: 'Rating',
      left: 'Back',
      right: 'TO START',
      up: false,
      down: false,
    }
  },
  input: {
    left() {
      //trigger router back navigation. Leads back to: /examples/router-hooks/movie
      this.$router.back()
    },
    right() {
      //trigger router to navigate to router hook example page landing
      this.$router.to('/examples/router-hooks/')
    },
  },
})

//movie flow page, with 2 directions left: back, right: next episode
const Episode = Blits.Component('RouterHookEpisode', {
  ...hookPageTemplate,
  state() {
    return {
      title: 'Episode',
      left: 'Back',
      right: 'NEXT EPISODE',
      up: false,
      bottom: false,
    }
  },
  input: {
    left() {
      //trigger router back navigation. Leads back to: /examples/router-hooks. Even when episode id > 1
      this.$router.back()
    },
    right() {
      //trigger router to navigate to the next episode, and NOT save current episode page in navigation history
      this.$router.to(`/examples/router-hooks/episode/${this.page.id + 1}`, undefined, {
        inHistory: false,
      })
    },
  },
})

// Episodes overview page
const Episodes = Blits.Component('RouterHookEpisode', {
  ...hookPageTemplate,
  state() {
    return {
      title: 'Episodes \n overview',
      right: 'FIRST EPISODE',
      up: false,
      down: false,
      left: false,
    }
  },
  input: {
    left() {
      //trigger router back navigation. Leads back to: /examples/router-hooks. Even when episode id > 1
      this.$router.back()
    },
    right() {
      //trigger router to navigate to the next episode, and NOT save current episode page in navigation history
      this.$router.to('/examples/router-hooks/episode/1', undefined, {
        inHistory: false,
      })
    },
  },
})

//custom page transitions for when the router navigates to router example pages
const PageTransitions = {
  slideInOutLeft: {
    before: {
      prop: 'x',
      value: '100%',
    },
    in: {
      prop: 'x',
      value: 0,
      duration: 400,
    },
    out: {
      prop: 'x',
      value: '-100%',
      duration: 400,
    },
  },
  slideInOutRight: {
    before: {
      prop: 'x',
      value: '-100%',
    },
    in: {
      prop: 'x',
      value: 0,
      duration: 400,
    },
    out: {
      prop: 'x',
      value: '100%',
      duration: 400,
    },
  },
  slideInOutUp: {
    before: {
      prop: 'y',
      value: '100%',
    },
    in: {
      prop: 'y',
      value: 0,
      duration: 400,
    },
    out: {
      prop: 'y',
      value: '-100%',
      duration: 400,
    },
  },
  slideInOutDown: {
    before: {
      prop: 'y',
      value: '-100%',
    },
    in: {
      prop: 'y',
      value: 0,
      duration: 400,
    },
    out: {
      prop: 'y',
      value: '100%',
      duration: 400,
    },
  },
}

export const RouterHookRoutes = [
  {
    path: '/examples/router-hooks',
    component: RouterHookPage,
    hooks: {
      async before(to, from) {
        //change transition based on 'from' route
        if (from && from.path === 'examples/router-hooks/movie') {
          to.transition = PageTransitions.slideInOutRight
        }
        if (from && from.path === 'examples/router-hooks/rating') {
          to.transition = PageTransitions.slideInOutLeft
        }
        if (from && from.path.indexOf('episode') > -1) {
          to.transition = PageTransitions.slideInOutDown
        }
        return to
      },
    },
  },
  {
    path: '/examples/router-hooks/episode/:id',
    component: Episode,
    hooks: {
      before(to, from) {
        //change transition based on 'from' route
        if (from && from.path.indexOf('episode') > -1) {
          to.transition = PageTransitions.slideInOutLeft
        }
        const { id } = to.params
        //if id > 5 lead route back to router example page landing
        if (id > 5) {
          return '/examples/router-hooks/'
        }
        //set page data based on episode ID
        to.data.page = {
          id: parseInt(id),
          title: `Episode ${id}`,
        }
        return to
      },
    },
    transition: PageTransitions.slideInOutUp,
    options: { backtrack: true },
  },
  {
    path: '/examples/router-hooks/episode',
    component: Episodes,
    transition: PageTransitions.slideInOutUp,
    options: {
      backtrack: true,
    },
  },
  {
    path: '/examples/router-hooks/movie',
    component: Movie,
    hooks: {
      before(to, from) {
        //change transition based on 'from' route
        if (from && from.path === 'examples/router-hooks') {
          to.transition = PageTransitions.slideInOutLeft
        }
        if (from && from.path === 'examples/router-hooks/rating') {
          to.transition = PageTransitions.slideInOutRight
        }
        return to
      },
    },
  },
  {
    path: '/examples/router-hooks/rating',
    component: Rating,
    transition: PageTransitions.slideInOutLeft,
  },
]
