import { defineConfig } from 'cypress'
import { configureVisualRegression } from 'cypress-visual-regression/dist/plugin.js'

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000,
  e2e: {
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
    },
  },
})
