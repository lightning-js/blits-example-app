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
    options: {
      keepAlive: true,
    },
    announce: 'Browsing Movies',
    hooks: {
      before: async (to, from) => {
        to.data.movies = await getMovies()
      },
    },
    transition: PageTransitions.slideInOutLeft,
  },
  {
    path: '/examples/router/movies/:id',
    component: Details,
    options: {
      reuseComponent: true,
    },
    hooks: {
      async before(to, from) {
        const id = to.params.id
        const movies = await getMovies()
        this.$appState.selectedMovie = movies[id - 1]
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
    transition: PageTransitions.zoomIn,
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
        const id = to.params.id
        const tvShows = await getTvShows()
        this.$appState.selectedTvShow = tvShows[id - 1]
      },
    },
    transition: PageTransitions.zoomIn,
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
        this.$appState.selectedTvShow = tvShows[id - 1]
      },
    },
    transition: PageTransitions.zoomIn,
  },
]
