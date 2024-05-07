import BlitsExampleContent from '../locators/BlitsExample'

export const getScreenShot = () => {
  BlitsExampleContent.getBody.toMatchImageSnapshot({
    imageConfig: {
      threshold: 0.001,
    },
  })
}
export const navigateToNextSection = (count, snapshotName) => {
  cy.wait(2000)
  for (let i = 0; i < count; i++) {
    BlitsExampleContent.getBody.type('{rightarrow}')
  }
  BlitsExampleContent.getBody.type('{enter}')
  cy.wait(2000)
  cy.screenshot(snapshotName)
  // cy.compareSnapshot('Loader')
  cy.wait(2000)
  BlitsExampleContent.getBody.type('{backspace}')
  cy.wait(2000)
  cy.get('[id="282"]').should('exist')
  cy.wait(2000)
}
