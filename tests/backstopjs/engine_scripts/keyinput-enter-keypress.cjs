module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label)
  console.log('Waiting for 1 seconds before pressing keys: 2 x right, 2 x down, left, enter...')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await page.keyboard.press('ArrowRight')
  await page.keyboard.press('ArrowRight')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowLeft')
  await page.keyboard.press('Enter')
  await new Promise((resolve) => setTimeout(resolve, 750))
}
