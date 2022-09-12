import express from 'express';

const app = express();

app.get('/ads', (_, res) => {
  return res.send('Acessou ADS! de novo???')
})

app.listen(3333)