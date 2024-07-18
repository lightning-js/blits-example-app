import BlitsExampleContent from '../locators/BlitsExample'
import { navigateToNextSection, themingScreenNavigation } from '../utils/commonMethods'

describe('Demos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.wait(3000)
  })

  it('HomeScreen', () => {
    cy.wait(4000)
    cy.compareSnapshot({name : 'Home screen',  testThreshold: 0.05})
    cy.get('#166')
       .invoke('text')
       .then(text =>expect(text).to.equal('Example App'))
    cy.wait(2000)
  })

  it('LoaderScreen', () => {
    navigateToNextSection(0, 'LoaderScreen')
  })

  it('IntroScreen', () => {
    navigateToNextSection(1, 'IntroScreen', 8000)
  })

  it('ThemingScreen', () => {
    navigateToNextSection(2, 'ThemingScreen', 1000)
  })

  it('ThemingScreen_1', () => {
    themingScreenNavigation('ThemingScreen_1', 'rightArrow')
  })

  it('ThemingScreen_2', () => {
    themingScreenNavigation('ThemingScreen_2', 'upArrow')
  })

  it('ThemingScreen_3', () => {
    themingScreenNavigation('ThemingScreen_3', 'rightArrow' ,'upArrow')
  })

  it('TMDB_Screen', () => {
    navigateToNextSection(3, 'TMDB_Screen', 4000)
  })

  it('SpritesScreen', () => {
    navigateToNextSection(4, 'SpritesScreen', 1000)
  })

  it('FocusScreen', () => {
    navigateToNextSection(5, 'FocusScreen', 1000)
  })

  it('MemoryGameScreen', () => {
    navigateToNextSection(6, 'MemoryGameScreen', 1000)
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

  it('PositioningScreen', () => {
    navigateToNextSection(0, 'PositioningScreen', 5000, 0.2)
  })

  // it('ColorsScreen', () => {
  //   navigateToNextSection(1, 'ColorsScreen')
  // })

  it('GradientsScreen', () => {
    navigateToNextSection(2, 'GradientsScreen')
  })

  it('TransitionsScreen', () => {
    navigateToNextSection(3, 'TransitionsScreen', 5000)
  })

  it('ComponentsScreen', () => {
    navigateToNextSection(4, 'ComponentsScreen', 1200)
  })

  it('AlphaScreen', () => {
    navigateToNextSection(5, 'AlphaScreen', 1000)
  })

  // it('ScalingScreen', () => {
  //   navigateToNextSection(6, 'ScalingScreen', 3000)
  // })

  it('RotationScreen', () => {
    navigateToNextSection(7, 'RotationsScreen', 2500)
  })

  it('KeyInputScreen', () => {
    navigateToNextSection(8, 'KeyInputScreen', 750)
  })

  it('ForLoopScreen', () => {
    navigateToNextSection(9, 'ForLoopScreen', 6000)
  })

  it('AdvancedLoopScreen', () => {
    navigateToNextSection(10, 'AdvancedLoopScreen')
  })

  it('EffectsScreen', () => {
    navigateToNextSection(11, 'EffectsScreen', 500)
  })

  it('ShowScreen', () => {
    navigateToNextSection(12, 'ShowScreen')
  })

  it('EventScreen', () => {
    navigateToNextSection(13, 'EventsScreen', 500)
  })

  it('ImagesScreen', () => {
    navigateToNextSection(14, 'ImagesScreen')
  })

  it('TextsScreen', () => {
    navigateToNextSection(15, 'TextsScreen')
  })

  it('SlotsScreen', () => {
    navigateToNextSection(16, 'SlotsScreen')
  })

  it('ViewportScreen', () => {
    navigateToNextSection(17, 'ViewportScreen')
  })
})

