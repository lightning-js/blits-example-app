import BlitsExampleContent from '../locators/BlitsExample'
import { navigateToNextSection } from '../utils/commonMethods'

describe('Demos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.wait(3000)


  })

  it.only('Home screen', () => {
    cy.wait(4000)
    cy.compareSnapshot({name : 'Home screen',  testThreshold: 0.05})
    cy.get('#250')
       .invoke('text')
       .then(text =>expect(text).to.equal('Example App'))
    cy.wait(2000)
  })

  it('Loader screen', () => {
    cy.wait(2000)
    BlitsExampleContent.getBody.type('{enter}')
    cy.wait(2000)
    cy.compareSnapshot({name : 'Loader screen',  testThreshold: 0.05})
    cy.wait(2000)
    BlitsExampleContent.getBody.type('{backspace}')
    cy.wait(2000)
    cy.get('[id="252"]').should('exist')
    cy.wait(2000)
  })

  it('Intro screen', () => {
    navigateToNextSection(1, 'Intro Screen', 8000)
  })

  it('Theming screen', () => {
    navigateToNextSection(2, 'Theming Screen', 1000)
  })

  it('TMDB screen', () => {
    navigateToNextSection(3, 'TMDB Screen', 4000)
  })

  it('Sprites screen', () => {
    navigateToNextSection(4, 'Sprites Screen', 1000)
  })

  it('Focus screen', () => {
    navigateToNextSection(5, 'Focus Screen', 1000)
  })

  it('Memory Game screen', () => {
    navigateToNextSection(6, 'Memory Game Screen', 1000)
  })
  // TODO
  // it('Video Player screen', () => {
  //   navigateToNextSection(7, 'Video Player Screen', 3000)
  // })
})

describe('Examples and Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.wait(3000)

    BlitsExampleContent.getBody.type('{downArrow}')
  })

  it('Positioning screen', () => {
    cy.wait(2000)
    BlitsExampleContent.getBody.type('{enter}')
    cy.wait(5000)
    cy.compareSnapshot({name : 'Positioning screen',  testThreshold: 0.1})
    cy.wait(2000)
    BlitsExampleContent.getBody.type('{backspace}')
    cy.wait(2000)
    cy.get('[id="252"]').should('exist')
    cy.wait(2000)
  })
  // TODO
  // it('Colors Page', () => {
  //   navigateToNextSection(3, 'ColorsScreen', 3000)
  // })

  it('Gradients screen', () => {

    navigateToNextSection(2, 'GradientsScreen')
  })

  it('Transitions screen', () => {
    navigateToNextSection(3, 'TransitionsScreen', 5000)
  })

  it('Components screen', () => {
    navigateToNextSection(4, 'ComponentsScreen', 1200)
  })

  it('Alpha screen', () => {
    navigateToNextSection(5, 'AlphaScreen', 1000)
  })

  it('Scaling screen', () => {
    navigateToNextSection(6, 'ScalingScreen', 3000)
  })

  it('Rotation screen', () => {
    navigateToNextSection(7, 'RotationsScreen', 2500)
  })

  it('Key Input screen', () => {
    navigateToNextSection(8, 'KeyInputScreen', 750)
  })

  it('Forloop screen', () => {
    navigateToNextSection(9, 'ForLoopScreen', 6000)
  })

  it('Advanced Loop screen', () => {
    navigateToNextSection(10, 'AdvancedLoopScreen')
  })

  it('Effects screen', () => {
    navigateToNextSection(11, 'EffectsScreen', 500)
  })

  it('Show screen', () => {
    navigateToNextSection(12, 'ShowScreen')
  })

  it('Event screen', () => {
    navigateToNextSection(13, 'EventsScreen', 500)
  })

  it('Images screen', () => {
    navigateToNextSection(14, 'ImagesScreen')
  })

  it('Texts screen', () => {
    navigateToNextSection(15, 'TextsScreen')
  })

  it('Slots screen', () => {
    navigateToNextSection(16, 'SlotsScreen')
  })

  it('Viewport screen', () => {
    navigateToNextSection(17, 'ViewPortScreen')
  })
})
