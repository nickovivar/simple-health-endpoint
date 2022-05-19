const express = require('express')

async function start() {
  const app = express()
  const port = 3000

  app.get('/', (req, res) => {
    res.send('Simple Health Check\n')
  })

  app.get('/health', (req, res) => {
    res.status(200).send('Ok\n')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

(async () => {
  await start()
})()
