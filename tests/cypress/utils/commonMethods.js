import BlitsExampleContent from '../locators/BlitsExample'

export const navigateToNextSection = (count, snapshotName, waitTime = 2000, threshold = 0.05) => {
  cy.wait(2000)
  for (let i = 0; i < count; i++) {
    BlitsExampleContent.getBody.type('{rightarrow}')
  }
  BlitsExampleContent.getBody.type('{enter}')
  cy.wait(waitTime)
  cy.compareSnapshot({ name: `${snapshotName}`, testThreshold: threshold })
  cy.wait(2000)
  homePageNavigation()
}

export const homePageNavigation = () => {
  BlitsExampleContent.getBody.type('{backspace}')
  cy.wait(2000)
  cy.get('#250')
       .invoke('text')
       .then(text =>expect(text).to.equal('Example App'))
  cy.wait(2000)
}

export const themingScreenNavigation = (snapShotName, action, action2 = '') => {
    cy.wait(2000)
    BlitsExampleContent.getBody.type('{rightarrow}')
    BlitsExampleContent.getBody.type('{rightarrow}')
    BlitsExampleContent.getBody.type('{enter}')
    cy.wait(2000)
    BlitsExampleContent.getBody.type(`'{${action}}'`)
    BlitsExampleContent.getBody.type(`'{${action2}}'`)
    cy.wait(2000)
    cy.compareSnapshot({ name: snapShotName, testThreshold: 0.05 })
    cy.wait(2000)
    homePageNavigation()
}
