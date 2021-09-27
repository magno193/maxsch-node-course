const express = require('express');
const path = require('path');

const { products, router: adminRoutes } = require('./routes/admin.routes');
const shopRoutes = require('./routes/shop.routes');

const app = express()

app.set('view engine', 'pug'); // Registrando template engine
app.set('views', 'views'); // Onde template engine deve ser compilado

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  return res.status(404).render('404');
});

app.listen(3000, () =>
  console.log('🔥Iniciado em:', 'http://localhost:3000 🚀')
);
