// Import components
import { Movies, Details, Tv, TvDetails, TvSeason, Loader } from '../components/RouterExample'

const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movies = [
        {
          id: 1,
          title: 'Blade Runner 2049',
          director: 'Denis Villeneuve',
          genre: 'Sci-Fi',
          year: 2017,
          colorPalette: ['neon blue', 'orange', 'grey'],
          mood: 'Futuristic, melancholic',
          imageUrl: 'https://example.com/blade-runner.jpg',
        },
        {
          id: 2,
          title: 'The Grand Budapest Hotel',
          director: 'Wes Anderson',
          genre: 'Comedy/Drama',
          year: 2014,
          colorPalette: ['pastel pink', 'lavender', 'gold'],
          mood: 'Whimsical, nostalgic',
          imageUrl: 'https://example.com/grand-budapest.jpg',
        },
        {
          id: 3,
          title: 'Mad Max: Fury Road',
          director: 'George Miller',
          genre: 'Action',
          year: 2015,
          colorPalette: ['desert orange', 'steel blue', 'black'],
          mood: 'Intense, chaotic',
          imageUrl: 'https://example.com/mad-max.jpg',
        },
        {
          id: 4,
          title: 'Moonlight',
          director: 'Barry Jenkins',
          genre: 'Drama',
          year: 2016,
          colorPalette: ['deep blue', 'purple', 'soft pink'],
          mood: 'Emotional, intimate',
          imageUrl: 'https://example.com/moonlight.jpg',
        },
        {
          id: 5,
          title: 'Life of Pi',
          director: 'Ang Lee',
          genre: 'Adventure/Drama',
          year: 2012,
          colorPalette: ['sunset orange', 'ocean blue', 'white'],
          mood: 'Spiritual, surreal',
          imageUrl: 'https://example.com/life-of-pi.jpg',
        },
      ]
      resolve(movies)
    }, 200)
  })
}

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
    // transition: PageTransitions.slideInOutLeft,
  },
  {
    path: '/examples/router/movies/:id',
    component: Details,
    options: {
      keepAlive: true,
    },
    announce: 'Movie Details',
    // transition: PageTransitions.slideInOutRight,
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
