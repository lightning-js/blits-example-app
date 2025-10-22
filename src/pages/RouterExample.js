// Import components
import { Movies, Details, Tv, TvDetails, TvSeason, Loader } from '../components/RouterExample'
import { getMovies, getTvShows } from '../api/routerExampleData'

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
  zoomIn: {
    before: {
      prop: 'scale',
      value: 0.5,
    },
    in: {
      prop: 'scale',
      value: 1,
      duration: 400,
      easing: 'ease-out',
    },
    out: {
      prop: 'scale',
      value: 0.5,
      duration: 300,
    },
  },
  fadeInOut: {
    before: {
      prop: 'alpha',
      value: 0,
    },
    in: {
      prop: 'alpha',
      value: 1,
      duration: 400,
      easing: 'ease-out',
    },
    out: {
      prop: 'alpha',
      value: 0,
      duration: 250,
      easing: 'ease-in',
    },
  },
}

// Router Routes
export const RouterExampleRoutes = [
  {
    path: '/examples/router/loader',
    component: Loader,
    options: {
      inHistory: false,
    },
  },
  {
    path: '/examples/router/movies',
    component: Movies,
    meta: {
      title: 'Movies',
      category: 'entertainment',
      type: 'browse'
    },
    options: {
      keepAlive: true,
    },
    announce: 'Browsing Movies',
    hooks: {
      before: async (to, from) => {
        to.data.movies = await getMovies()
        if (from.path === '/examples/router/tv') {
          to.transition = PageTransitions.zoomIn
        }
        
        if (to.meta?.category === 'entertainment') {
          to.data.pageTitle = to.meta.title
        }
      },
    },
    transition: PageTransitions.slideInOutLeft,
  },
  {
    path: '/examples/router/movies/:id',
    component: Details,
    meta: {
      title: 'Movie Details',
      category: 'entertainment',
      type: 'detail',
      parentRoute: '/examples/router/movies'
    },
    options: {
      reuseComponent: true,
    },
    hooks: {
      async before(to, from) {
        const id = to.params.id
        const movies = await getMovies()
        const selectedMovie = movies[id - 1]

        // Handle invalid movie ID
        if (!selectedMovie) {
          return '*' // Redirect to 404 page
        }

        this.$appState.selectedMovie = selectedMovie
        to.data.selectedMovie = selectedMovie
        
        if (to.meta?.type === 'detail') {
          to.data.pageType = to.meta.type
        }
        
        to.announce = `${selectedMovie.title} Movie Details`
      },
    },
    announce: 'Movie Details',
    transition: PageTransitions.slideInOutRight,
  },
  {
    path: '/examples/router/tv',
    component: Tv,
    options: {
      keepAlive: true,
    },
    announce: 'Browsing TV Shows',
    hooks: {
      before: async (to, from) => {
        to.data.tvShows = await getTvShows()
      },
    },
    transition: PageTransitions.fadeInOut,
  },
  {
    path: '/examples/router/tv/:id/season/:season',
    component: TvSeason,
    announce: 'TV Season Details',
    options: {
      reuseComponent: true,
    },
    hooks: {
      async before(to, from) {
        const seasonId = to.params.season
        
        const season = parseInt(seasonId)
        if (!season || season < 1 || season > 5) {
          return '*' // Redirect to 404 for invalid season
        }  
        const showTitle = this.$appState.activeShowTitle
        to.announce = `${showTitle} Show Season ${seasonId} Details`
        to.data = {
          showTitle,
        }
      },
    },
    transition: PageTransitions.fadeInOut,
  },
  {
    path: '/examples/router/tv/:id',
    component: TvDetails,
    options: {
      reuseComponent: true,
    },
    announce: 'TV Show Details',
    hooks: {
      async before(to, from) {
        const id = to.params.id
        const tvShows = await getTvShows()

        const targetShow = tvShows[id - 1]

        // Handle invalid TV show ID
        if (!targetShow) {
          return '*' // Redirect to 404 page
        }

        to.data.tvShow = targetShow
        to.announce = `${targetShow.title} Show Details`
      },
    },
    transition: PageTransitions.fadeInOut,
  },
]
