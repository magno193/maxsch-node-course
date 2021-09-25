const express = require('express');
const bodyParser = require('body-parser')

const shopRoutes = require('./routes/shop.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
  return res.status(404).send('<h1>404 - Página não encontrada</h1>')
});

app.listen(3000, () =>
  console.log('🔥Iniciado em:', 'http://localhost:3000 🚀')
);
