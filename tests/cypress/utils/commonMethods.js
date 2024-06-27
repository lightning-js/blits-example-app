import BlitsExampleContent from '../locators/BlitsExample'

export const navigateToNextSection = (count, snapshotName, waitTime = 2000) => {
  cy.wait(2000)
  for (let i = 0; i < count; i++) {
    BlitsExampleContent.getBody.type('{rightarrow}')
  }
  BlitsExampleContent.getBody.type('{enter}')
  cy.wait(waitTime)
  cy.compareSnapshot({ name: `${snapshotName}`, testThreshold: 0.05 })
  cy.wait(2000)
  BlitsExampleContent.getBody.type('{backspace}')
  cy.wait(2000)
  cy.get('[id="252"]').should('exist')
  cy.wait(2000)
}
