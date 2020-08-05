const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./db');
const app = express();
const port = 8080 || process.env.PORT;
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/movies', (req, res) => {
  try {
    const data = db.getData('/Items');
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }
});

app.patch('/api/movies/:movieId', (req, res) => {
  const data = db.getData('/Items');
  const newData = data.map((movie) => {
    if (movie.Id === req.body.Id) {
      return req.body;
    }
    return movie;
  });

  db.push('/Items', newData);
  res.status(200).send('OK');
});

app.post('/api/movies', (req, res) => {
  const data = db.getData('/Items');
  data.push({
    ...req.body,
    Id: uuidv4(),
  });
  res.status(200).send('OK');
});

app.delete('/api/movies', (req, res) => {
  const data = db.getData('/Items');
  const newData = data.filter((movie) => movie.Id != req.body.Id);
  db.push('/Items', newData);
  res.status(200).send('OK');
});

app.listen(port, () =>
  console.log(`API server has just started on port ${port}`)
);
