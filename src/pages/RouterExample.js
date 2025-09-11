
// Import components
import { Movies } from '../components/RouterExample/Movies.js'
import { Details } from '../components/RouterExample/Details.js'
import { Tv } from '../components/RouterExample/Tv.js'
import { TvDetails } from '../components/RouterExample/TvDetails.js'
import { TVSeason } from '../components/RouterExample/TVSeason.js'


// Router Routes
export const RouterExampleRoutes = [
    {
        path: '/router-example/movies',
        component: Movies,
        keepAlive: true,
        announce: 'Browsing Movies'
    },
    {
        path: '/router-example/movies/:id',
        component: Details,
        reuseComponent: true,
        announce: 'Movie Details'
    },
    {
        path: '/router-example/tv',
        component: Tv,
        keepAlive: true,
        announce: 'Browsing TV Shows'
    },
   
    {
        path: '/router-example/tv/:id/season/:season',
        component: TVSeason,
        announce: 'TV Season Details'
    },
    {
        path: '/router-example/tv/:id',
        component: TvDetails,
        reuseComponent: true,
        announce: 'TV Show Details'
    },
]
 