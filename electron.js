require('ts-node').register({
    project:'./tsconfig.electron.json'
})
require('./src/electron/app.ts')
