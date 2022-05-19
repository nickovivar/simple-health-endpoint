const express = require('express');
const dotenv = require('dotenv-safe');

dotenv.config();

async function start() {
  const app = express();
  const port = process.env.PORT;

  app.get('/', (req, res) => {
    res.send('Simple Health Check\n');
  });

  app.get('/health', (req, res) => {
    res.status(200).send('Ok\n');
  });

  app.listen(port, () => {
    console.log(`Health Check Endpoint running on ${port}`);
  });
};

(async () => {
  await start();
})();
