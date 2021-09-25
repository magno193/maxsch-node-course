const express = require('express');
const bodyParser = require('body-parser')

const app = express();

let step = 0;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/add-product', (req, res, next) => {
  console.log('🛒', step++);
  res.send(`
  <form action="product" method="POST">
    <input type="text" name="title">
    <button type="submit">Adicionar produto</button>
  </form>
  `);
});

app.post('/product', (req, res) => {
  console.log('🛒', step++, req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('🤩', step++);
  res.send('<h1>Hello from express</h1>')
});

app.listen(3000, () =>
  console.log('🔥Iniciado em:', 'http://localhost:3000 🚀')
);
