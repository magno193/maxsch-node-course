const express = require('express');

const app = express();

app.use('add-product', (req, res, next) => {
  res.send('<h1>Página de adição de produto</h1>')
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express</h1>')
});

app.listen(3000, () =>
  console.log('🔥Iniciado em:', 'http://localhost:3000 🚀')
);
