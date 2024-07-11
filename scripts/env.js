import os from 'os'

os.platform() === "win32" ? `set NODE_ENV=testing` : `NODE_ENV=testing`
