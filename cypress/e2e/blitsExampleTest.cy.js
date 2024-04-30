import BlitsExampleContent from '../locators/BlitsExample'
import { getScreenShot } from '../utils/commonMethods'

describe.only('First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    // cy.screenshot('Home Screen')
    cy.wait(3000)
  })

  it('Loader screen', () => {
    cy.compareSnapshot('Home Screen')
    cy.get('[id="282"]').should('exist')
    BlitsExampleContent.getBody.type('{enter}')
    cy.wait(3000)
    cy.compareSnapshot('Loader')
    cy.wait(2000)
    BlitsExampleContent.getBody.type('{backspace}')
    cy.wait(2000)
    cy.compareSnapshot('Home Screen')
    // getScreenShot()

    cy.wait(2000)
    BlitsExampleContent.getBody.type('{rightarrow}{enter}')
    cy.compareSnapshot('Intro Screen')
    cy.wait(2000)

    BlitsExampleContent.getBody.type('{backspace}')
    cy.compareSnapshot('Home Screen')

    cy.wait(2000)

    cy.visit('http://localhost:5173')
  })
})
