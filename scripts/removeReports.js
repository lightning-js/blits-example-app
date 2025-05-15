import fs from 'fs'
import path from 'path'

const folderPath = path.join(
  process.cwd(),
  'tests/cypress/reports/cypress-image-diff-screenshots/baseline'
)

// Check if the folder exists before removing
fs.access(folderPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Folder does not exist:', folderPath)
  } else {
    fs.rm(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Error removing folder:', err)
      } else {
        console.log('Folder removed successfully:', folderPath)
      }
    })
  }
})
