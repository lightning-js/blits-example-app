// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// import 'cypress-mochawesome-reporter/register';
// const { addCompareSnapshotCommand } = require('cypress-visual-regression/dist/command')
// addCompareSnapshotCommand()

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
import 'cypress-mochawesome-reporter/register'
addCompareSnapshotCommand({
  clip: {
    width: 1920,
    height: 1080,
    x: 20,
    y: 30,
  },
})
