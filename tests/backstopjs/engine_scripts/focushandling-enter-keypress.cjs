module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label)
  console.log('Waiting for 1 seconds before pressing the enter key...')
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await page.keyboard.press('Enter')
  await new Promise((resolve) => setTimeout(resolve, 750))
}
