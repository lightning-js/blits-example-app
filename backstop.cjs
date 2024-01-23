const host = process.env.TEST_HOST || 'host.docker.internal'
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
      delay: 500,
    },
    {
      label: 'Blits - Loading',
      url: `http://${host}:${port}/#/demos/loading`,
      delay: 3000,
    },
    {
      label: 'Blits - Intro',
      url: `http://${host}:${port}/#/demos/intro`,
      delay: 2000,
    },
    {
      label: 'Blits - Theming',
      url: `http://${host}:${port}/#/demos/theming`,
      delay: 420,
    },
    {
      label: 'Blits - Tmdb',
      url: `http://${host}:${port}/#/demos/tmdb`,
      delay: 300,
    },
    {
      label: 'Blits - Focushandling',
      url: `http://${host}:${port}/#/demos/focushandling`,
      delay: 300,
    },
    {
      label: 'Blits - Memory Game',
      url: `http://${host}:${port}/#/demos/memory-game`,
      delay: 300,
    },
    {
      label: 'Blits - Positioning',
      url: `http://${host}:${port}/#/examples/positioning`,
      delay: 50,
    },
    {
      label: 'Blits - Colors',
      url: `http://${host}:${port}/#/examples/colors`,
      delay: 300,
    },
    {
      label: 'Blits - Gradients',
      url: `http://${host}:${port}/#/examples/gradients`,
      delay: 500,
    },
    {
      label: 'Blits - Transitions',
      url: `http://${host}:${port}/#/examples/transitions`,
      readyEvent: 'TRANSITIONS_READY',
    },
    {
      label: 'Blits - Components',
      url: `http://${host}:${port}/#/examples/components`,
      delay: 300,
    },
    {
      label: 'Blits - Alpha',
      url: `http://${host}:${port}/#/examples/alpha`,
      delay: 300,
    },
    {
      label: 'Blits - Scaling',
      url: `http://${host}:${port}/#/examples/scaling`,
      delay: 800,
    },
    {
      label: 'Blits - Rotation',
      url: `http://${host}:${port}/#/examples/rotation`,
      delay: 120,
    },
    {
      label: 'Blits - Keyinput',
      url: `http://${host}:${port}/#/examples/keyinput`,
      delay: 300,
    },
    {
      label: 'Blits - Forloop',
      url: `http://${host}:${port}/#/examples/forloop`,
      delay: 50,
    },
    {
      label: 'Blits - Effects',
      url: `http://${host}:${port}/#/examples/effects`,
      delay: 300,
    },
    {
      label: 'Blits - Showif',
      url: `http://${host}:${port}/#/examples/showif`,
      delay: 300,
    },
    {
      label: 'Blits - Events',
      url: `http://${host}:${port}/#/examples/events`,
      delay: 120,
    },
    {
      label: 'Blits - Images',
      url: `http://${host}:${port}/#/examples/images`,
      delay: 50,
    },
    {
      label: 'Blits - Texts',
      url: `http://${host}:${port}/#/examples/texts`,
      delay: 300,
    },
    {
      label: 'Blits - Slots',
      url: `http://${host}:${port}/#/examples/slots`,
      delay: 100,
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
  engine: 'playwright',
  engineOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    browser: 'chromium',
  },
  headless: true,
  asyncCaptureLimit: 1,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  misMatchThreshold: 0.12,
}
