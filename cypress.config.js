import { defineConfig } from 'cypress'
import mochawesome from 'cypress-mochawesome-reporter/plugin.js'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin'

export default defineConfig({
  defaultCommandTimeout: 15000,
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshot/base',
      visualRegressionDiffDirectory: 'cypress/snapshot/diff',
      visualRegressionGenerateDiff: 'always',
      visualRegressionFailSilently: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      mochawesome(on)
      getCompareSnapshotsPlugin(on, config)
    },
  },
})
