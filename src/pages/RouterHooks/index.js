/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import RouterHookPage from './RouterHookPage.blits'
import Movie from './Movie.blits'
import Rating from './Rating.blits'
import Episode from './Episode.blits'
import Episodes from './Episodes.blits'

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

// Export the main component as well for backwards compatibility
export { RouterHookPage }
