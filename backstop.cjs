const host = process.env.TEST_HOST || 'localhost'
const port = process.env.TEST_PORT || '5173'

module.exports = {
  id: 'blits_example_app',
  viewports: [
    {
      label: 'tv',
      width: 1920,
      height: 1080,
    },
  ],
  scenarios: [
    {
      label: 'Blits - Main Page',
      url: `http://${host}:${port}/#/`,
      delay: 4000,
    },
    {
      label: 'Blits - Loading',
      url: `http://${host}:${port}/#/demos/loading`,
      readyEvent: 'backstopjs:ready',
    },
    {
      label: 'Blits - Intro',
      url: `http://${host}:${port}/#/demos/intro`,
      delay: 8000,
    },
    {
      label: 'Blits - Theming',
      url: `http://${host}:${port}/#/demos/theming`,
      delay: 1000,
    },
    {
      label: 'Blits - Theming - Arrow Right Keypress',
      url: `http://${host}:${port}/#/demos/theming`,
      onReadyScript: 'theming-arrow-right-keypress.cjs',
    },
    {
      label: 'Blits - Theming - Arrow Up Keypress',
      url: `http://${host}:${port}/#/demos/theming`,
      onReadyScript: 'theming-arrow-up-keypress.cjs',
    },
    {
      label: 'Blits - Tmdb',
      url: `http://${host}:${port}/#/demos/tmdb`,
      delay: 4000,
    },
    {
      label: 'Blits - Sprites',
      url: `http://${host}:${port}/#/demos/sprites`,
      delay: 1000,
    },
    {
      label: 'Blits - Focushandling',
      url: `http://${host}:${port}/#/demos/focushandling`,
      delay: 1000,
    },
    {
      label: 'Blits - Focushandling - Arrow Right Keypress x 3',
      url: `http://${host}:${port}/#/demos/focushandling`,
      onReadyScript: 'focushandling-arrow-right-keypress.cjs',
    },
    {
      label: 'Blits - Focushandling - Enter Keypress',
      url: `http://${host}:${port}/#/demos/focushandling`,
      onReadyScript: 'focushandling-enter-keypress.cjs',
    },
    {
      label: 'Blits - Memory Game',
      url: `http://${host}:${port}/#/demos/memory-game`,
      delay: 1000,
    },
    {
      label: 'Blits - Memory Game - Arrow Right Keypress x 2',
      url: `http://${host}:${port}/#/demos/memory-game`,
      onReadyScript: 'memory-game-arrow-right-keypress.cjs',
    },
    {
      label: 'Blits - Positioning',
      url: `http://${host}:${port}/#/examples/positioning`,
      readyEvent: 'backstopjs:ready',
    },
    {
      label: 'Blits - Colors',
      url: `http://${host}:${port}/#/examples/colors`,
      readyEvent: 'backstopjs:ready',
    },
    {
      label: 'Blits - Colors - Enter Keypress',
      url: `http://${host}:${port}/#/examples/colors`,
      onReadyScript: 'colors-enter-keypress.cjs',
    },
    {
      label: 'Blits - Gradients',
      url: `http://${host}:${port}/#/examples/gradients`,
      delay: 500,
    },
    {
      label: 'Blits - Transitions',
      url: `http://${host}:${port}/#/examples/transitions`,
      delay: 5000,
    },
    {
      label: 'Blits - Components',
      url: `http://${host}:${port}/#/examples/components`,
      delay: 1200,
    },
    {
      label: 'Blits - Alpha',
      url: `http://${host}:${port}/#/examples/alpha`,
      readyEvent: 'backstopjs:ready',
      delay: 1000,
    },
    {
      label: 'Blits - Scaling',
      url: `http://${host}:${port}/#/examples/scaling`,
      delay: 3000,
    },
    {
      label: 'Blits - Rotation',
      url: `http://${host}:${port}/#/examples/rotation`,
      delay: 2500,
    },
    {
      label: 'Blits - Keyinput',
      url: `http://${host}:${port}/#/examples/keyinput`,
      delay: 750,
    },
    {
      label: 'Blits - Keyinput - Arrow Right + Down Keypress',
      url: `http://${host}:${port}/#/examples/keyinput`,
      onReadyScript: 'keyinput-arrow-right-down-keypress.cjs',
    },
    {
      label: 'Blits - Keyinput - Enter Keypress',
      url: `http://${host}:${port}/#/examples/keyinput`,
      onReadyScript: 'keyinput-enter-keypress.cjs',
    },
    {
      label: 'Blits - Forloop',
      url: `http://${host}:${port}/#/examples/forloop`,
      delay: 6000,
    },
    {
      label: 'Blits - Effects',
      url: `http://${host}:${port}/#/examples/effects`,
      delay: 500,
    },
    {
      label: 'Blits - Showif',
      url: `http://${host}:${port}/#/examples/showif`,
      readyEvent: 'backstopjs:ready',
    },
    {
      label: 'Blits - Events',
      url: `http://${host}:${port}/#/examples/events`,
      delay: 500,
    },
    {
      label: 'Blits - Events - Arrow Right Keypress x 2',
      url: `http://${host}:${port}/#/examples/events`,
      onReadyScript: 'events-arrow-right-keypress.cjs',
    },
    {
      label: 'Blits - Images',
      url: `http://${host}:${port}/#/examples/images`,
      readyEvent: 'backstopjs:ready',
    },
    {
      label: 'Blits - Texts',
      url: `http://${host}:${port}/#/examples/texts`,
      delay: 100,
      readyEvent: 'backstopjs:ready',
    },
    {
      label: 'Blits - Slots',
      url: `http://${host}:${port}/#/examples/slots`,
      readyEvent: 'backstopjs:ready',
    },
  ],
  paths: {
    bitmaps_reference: 'tests/backstopjs/bitmaps_reference',
    bitmaps_test: 'tests/backstopjs/bitmaps_test',
    engine_scripts: 'tests/backstopjs/engine_scripts',
    html_report: 'tests/backstopjs/html_report',
    ci_report: 'tests/backstopjs/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  headless: true,
  asyncCaptureLimit: 1,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  misMatchThreshold: 0.1,
}
