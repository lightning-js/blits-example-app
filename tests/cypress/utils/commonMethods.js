import BlitsExampleContent from '../locators/BlitsExample'

export const navigateToNextSection = (count, snapshotName) => {
  cy.wait(2000)
  for (let i = 0; i < count; i++) {
    BlitsExampleContent.getBody.type('{rightarrow}')
  }
  BlitsExampleContent.getBody.type('{enter}')
  cy.wait(2000)
  cy.compareSnapshot({ name: `${snapshotName}`, testThreshold: 0.05 })
  cy.wait(2000)
  BlitsExampleContent.getBody.type('{backspace}')
  cy.wait(2000)
  cy.get('[id="282"]').should('exist')
  cy.wait(2000)
}
