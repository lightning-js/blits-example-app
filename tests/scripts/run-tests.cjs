const { execSync } = require('child_process')

function isDockerInstalled() {
  try {
    execSync('docker --version', { stdio: 'ignore' })
    return true
  } catch (error) {
    return false
  }
}

function isDockerRunning() {
  try {
    execSync('docker info', { stdio: 'ignore' })
    return true
  } catch (error) {
    return false
  }
}

function installChromium() {
  console.log('Ensuring Chromium is installed via Playwright...')
  execSync('npx playwright install chromium', { stdio: 'inherit' })
}

function runTests() {
  console.log('Running test command...')
  execSync('backstop --config=backstop.cjs --docker test', { stdio: 'inherit' })
}

try {
  if (!isDockerInstalled()) {
    throw new Error('Docker must be installed on the system before running tests.')
  }

  if (!isDockerRunning()) {
    throw new Error('Docker must be running on the system before running tests.')
  }
  installChromium()
  runTests()
} catch (error) {
  console.error(`Error: ${error.message}`)
  process.exit(1)
}
