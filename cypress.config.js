import { defineConfig } from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin'

export default defineConfig({
  defaultCommandTimeout: 15000,
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: './tests/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: './tests/cypress/e2e/*.{js,jsx,ts,tsx}',
    screenshotsFolder: './tests/cypress/screenshots/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return getCompareSnapshotsPlugin(on, config)
    },
  },
})
