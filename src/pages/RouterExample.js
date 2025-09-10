import Blits from '@lightningjs/blits'

// Import components
import { Movies } from '../components/RouterExample/Movies.js'
import { Details } from '../components/RouterExample/Details.js'
import { Tv } from '../components/RouterExample/Tv.js'
import { TvDetails } from '../components/RouterExample/TvDetails.js'
import { TVSeason } from '../components/RouterExample/TVSeason.js'
import { RouterHome } from '../components/RouterExample/RouterHome.js'

// Router Example Layout
export const RouterExampleLayout = Blits.Component('RouterExampleLayout', {
    template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!-- Sidebar -->
      <Element x="0" y="0" w="400" h="1080" 
               :color="$focusArea === 'sidebar' ? '#2563eb' : '#2d3748'">
        <Text content="Router Examples" x="20" y="40" size="36" font="raleway" color="#fff" />
        
        <Element x="20" y="120" w="360" h="60" 
                 :color="$focusedItem === 0 ? '#4299e1' : 'transparent'"
                 :effects="[{type: 'radius', props: 8}]">
          <Text content="Movies" x="20" y="15" size="28" color="#fff" />
        </Element>
        
        <Element x="20" y="200" w="360" h="60" 
                 :color="$focusedItem === 1 ? '#4299e1' : 'transparent'"
                 :effects="[{type: 'radius', props: 8}]">
          <Text content="TV Shows" x="20" y="15" size="28" color="#fff" />
        </Element>
      </Element>

      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Movies :show="$activeContent === 'movies'" />
        <Details :show="$activeContent === 'movie-details'" />

        <Tv :show="$activeContent === 'tv'" />
        <TvDetails :show="$activeContent === 'tv-details'" :showId="$showId" :key="$showId" />
        <TVSeason :show="$activeContent === 'tv-season'" 
                  :showId="$showId" 
                  :currentSeason="$currentSeason" 
                  :key="$showId + '-' + $currentSeason" />
      </Element>
    </Element>
  `,
    components: { Movies, Details, Tv, TvDetails, TVSeason },

    state() {
        return {
            focusedItem: 0,
            activeContent: 'movies',
            focusArea: 'sidebar',
            currentSeason: 1,
            showId: 'N/A'
        }
    },

    hooks: {
        ready() {
            this.updateFromRoute()
        }
    },

    methods: {
        updateFromRoute() {
            const { path, params } = this.$router.currentRoute

            this.currentSeason = parseInt(String(params.season))
            this.showId = String(params.id || 'N/A')

            if (path.includes('/season/')) {
                this.activeContent = 'tv-season'
                this.focusedItem = 1
            } else if (path.includes('/movies/') && params.id) {
                this.activeContent = 'movie-details'
                this.focusedItem = 0
            } else if (path.includes('/tv/') && params.id) {
                
                this.activeContent = 'tv-details'
                this.focusedItem = 1
            } else if (path.endsWith('/tv')) {
                this.activeContent = 'tv'
                this.focusedItem = 1
            } else if (path.endsWith('/movies')) {
                this.activeContent = 'movies'
                this.focusedItem = 0
            }

            this.focusArea = 'content'
        },

        goToContent() {
            const path = this.focusedItem === 0 ? '/router-example/movies' : '/router-example/tv'
            this.$router.to(path)
        },

        goToDetails() {
            if (this.activeContent === 'movies') {
                this.$router.to('/router-example/movies/1')
            } else if (this.activeContent === 'tv') {
                this.$router.to('/router-example/tv/1')
            }
        },

        goToSeasons() {
            const showId = this.showId || '1'
            this.$router.to(`/router-example/tv/${showId}/season/1`)
        },

        goBackToSidebar() {
            this.focusArea = 'sidebar'
            const basePath = this.activeContent.includes('movie')
                ? '/router-example/movies'
                : '/router-example/tv'
            this.$router.to(basePath)
        }
    },

    input: {
        up() {
            if (this.focusArea === 'sidebar' && this.focusedItem > 0) this.focusedItem--
        },

        down() {
            if (this.focusArea === 'sidebar' && this.focusedItem < 1) this.focusedItem++
        },

        enter() {
            if (this.focusArea === 'sidebar') {
                this.goToContent()
            } else if (this.focusArea === 'content') {
                if (this.activeContent === 'movies' || this.activeContent === 'tv') {
                    this.goToDetails()
                } else if (this.activeContent === 'tv-details') {
                    this.goToSeasons()
                }
            }
        },

        back() {
            if (this.focusArea === 'content') {
                if (this.activeContent === 'tv-season') {
                    this.$router.to(`/router-example/tv/${this.showId}`)
                } else if (this.activeContent.includes('details')) {
                    this.goBackToSidebar()
                } else {
                    this.goBackToSidebar()
                }
            } else if (this.focusArea === 'sidebar') {
                this.$router.to('/router-example')
            }
        },

        left() {
            if (this.activeContent === 'tv-season') {
                const prev = this.currentSeason - 1
                if (prev >= 1) {
                    this.$router.to(`/router-example/tv/${this.showId}/season/${prev}`)
                }
            }
        },

        right() {
            if(this.focusArea === 'sidebar') {
                this.focusArea = 'content'
            }
            if (this.activeContent === 'tv-season') {
                const next = this.currentSeason + 1
                if (next <= 5) {
                    this.$router.to(`/router-example/tv/${this.showId}/season/${next}`)
                }
            }
        }
    }
})

// Router Routes
export const RouterExampleRoutes = [
    {
        path: 'router-example',
        component: RouterHome,
        announce: 'Router Examples',
    },
    {
        path: '/router-example/movies', component: RouterExampleLayout, announce: 'Movies screen',
        hooks: { ready() { this.updateFromRoute() } }
    },
    {
        path: '/router-example/movies/:id', component: RouterExampleLayout, announce: 'Movie details screen',
        hooks: { ready() { this.updateFromRoute() } }
    },
    {
        path: '/router-example/tv', component: RouterExampleLayout, announce: 'TV shows screen',
        hooks: { ready() { this.updateFromRoute() } }
    },
    {
        path: '/router-example/tv/:id/season/:season', component: RouterExampleLayout,
        announce: "TV Season screen",
        hooks: { ready() { this.updateFromRoute() } }
    },
    {
        path: '/router-example/tv/:id', component: RouterExampleLayout, announce: 'TV show details screen',
        hooks: { ready() { this.updateFromRoute() } }
    },
    

]
 