module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label)
  console.log('Waiting for 1 seconds before pressing the right arrow key...')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await page.keyboard.press('ArrowRight')
  await page.keyboard.press('ArrowRight')
  await new Promise((resolve) => setTimeout(resolve, 750))
}
