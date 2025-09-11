// Import components
import { Movies, Details, Tv, TvDetails, TvSeason, Loader } from '../components/RouterExample'

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
    keepAlive: true,
    announce: 'Browsing Movies',
  },
  {
    path: '/examples/router/movies/:id',
    component: Details,
    reuseComponent: true,
    announce: 'Movie Details',
  },
  {
    path: '/examples/router/tv',
    component: Tv,
    keepAlive: true,
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
    reuseComponent: true,
    announce: 'TV Show Details',
  },
]
