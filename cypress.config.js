import { defineConfig } from 'cypress'
import { configureVisualRegression } from 'cypress-visual-regression/dist/plugin.js'
import mochawesome from 'cypress-mochawesome-reporter/plugin.js'

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
      configureVisualRegression(on)
      mochawesome(on)
    },
  },
})
