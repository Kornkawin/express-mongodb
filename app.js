const express = require('express'); // CommonJS (CJS) for Node for backend
// import app from 'app'; // ES Module (ESM) for frontend

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('HOME');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/abc', (req, res) => {
  res.send('def');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

