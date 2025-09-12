// Import components
import { Movies, Details, Tv, TvDetails, TvSeason, Loader } from '../components/RouterExample'
import { getMovies } from '../api/routerExampleData'

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
  },
  {
    path: '/examples/router/tv/:id/season/:season',
    component: TvSeason,
    announce: 'TV Season Details',
  },
  {
    path: '/examples/router/tv/:id',
    component: TvDetails,
    options: {
      reuseComponent: true,
    },
    announce: 'TV Show Details',
  },
]
