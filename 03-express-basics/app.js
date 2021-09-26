const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const adminRoutes = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const htmlPath = path.join(__dirname, 'views', '404.html');
  return res.status(404).sendFile(htmlPath)
});

app.listen(3000, () =>
  console.log('🔥Iniciado em:', 'http://localhost:3000 🚀')
);
