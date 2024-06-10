import BlitsExampleContent from '../locators/BlitsExample'
import { navigateToNextSection } from '../utils/commonMethods'

describe('Demos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.wait(3000)


  })

  it('Home screen', () => {
    cy.wait(3000)
    cy.compareSnapshot({name : 'Home screen',  testThreshold: 0.05})

    cy.get('#294')
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
    cy.get('[id="282"]').should('exist')
    cy.wait(2000)
  })

  it('Intro screen', () => {
    navigateToNextSection(1, 'Intro Screen', 10000)
  })

  it('Theming screen', () => {
    navigateToNextSection(2, 'Theming Screen')
  })

  it('TMDB screen', () => {
    navigateToNextSection(3, 'TMDB Screen')
  })
  it('Sprites screen', () => {
    navigateToNextSection(4, 'Sprites Screen')
  })
  it('Focus screen', () => {
    navigateToNextSection(5, 'Focus Screen')
  })

  it('Memory Game screen', () => {
    navigateToNextSection(6, 'Memory Game Screen')
  })

  it('Video Player screen', () => {
    navigateToNextSection(7, 'Video Player Screen', 3000)
  })
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
    cy.get('[id="282"]').should('exist')
    cy.wait(2000)
  })

  it('Colors Page', () => {
    navigateToNextSection(3, 'ColorsScreen')
  })

  it('Gradients screen', () => {

    navigateToNextSection(2, 'GradientsScreen')
  })

  it('Transitions screen', () => {
    navigateToNextSection(3, 'TransitionsScreen')
  })
  it('Components screen', () => {
    navigateToNextSection(4, 'ComponentsScreen')
  })
  it('Alpha screen', () => {
    navigateToNextSection(5, 'AlphaScreen')
  })

  it('Scaling screen', () => {
    navigateToNextSection(6, 'ScalingScreen')
  })

  it('Rotation screen', () => {
    navigateToNextSection(7, 'RotationsScreen')
  })

  it('Key Input screen', () => {
    navigateToNextSection(8, 'KeyInputScreen')
  })

  it('Forloop screen', () => {
    navigateToNextSection(9, 'ForLoopScreen')
  })

  it('Advanced Loop screen', () => {
    navigateToNextSection(10, 'AdvancedLoopScreen')
  })

  it('Effects screen', () => {
    navigateToNextSection(11, 'EffectsScreen')
  })

  it('Show screen', () => {
    navigateToNextSection(12, 'ShowScreen')
  })

  it('Event screen', () => {
    navigateToNextSection(13, 'EventsScreen')
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
