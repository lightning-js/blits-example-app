class BlitsExampleContent {
  get getLogo() {
    return cy.get('[id="282"]')
  }

  get getBody() {
    return cy.get('body')
  }
}
export default new BlitsExampleContent()
