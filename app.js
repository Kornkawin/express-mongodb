const fs = require('fs');
const express = require('express'); // CommonJS (CJS) for Node for backend
// import app from 'app'; // ES Module (ESM) for frontend

const port = 3000;
const app = express();


app.get('/', (req, res) => {
  res.format({
    'text/html': () => {
      res.send('<h1>Hello world!</h1>');
    },
    'text/plain': () => {
      res.set('Content-Type', 'text/plain'); // set Header (Content-Type)
      res.send('Hello world!');
    },
    'application/json': () => {
      res.send({
        text: 'Hello world!'
      });
    },
    default: () => {
      res.status(400).send('Content-Type not allowed');
    }
  })
});

app.get('/cat', async (req, res) => {
  const buff = await fs.promises.readFile('./img/cat.jpeg');
  res.send(buff); // send img buffer via http response
});

app.get('/image', (req, res) => {
  // res.download('./img/cat.jpeg'); // more appropriate for file download
  res.download('./img/cat.jpeg', 'cat.jpg'); // able to change image name
});

app.get('/google', (req, res) => {
  res.redirect(301, 'https://www.google.com');
});

app.get('/notfound', (req, res) => {
  res.status(404).send('not found!');
});

app.get('/notallow', (req, res) => {
  res.status(403).send('not allowed!');
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

