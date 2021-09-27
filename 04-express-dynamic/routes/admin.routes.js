const { Router } = require('express');
const path = require('path');
const router = Router();
const rootDir = require('../helpers/path');

const products = [];

router.get('/add-product', (req, res, next) => {
  console.log('💰');
  const htmlPath = path.join(rootDir, 'views', 'add-product.html');
  res.sendFile(htmlPath);
});

router.post('/add-product', (req, res) => {
  console.log('💰', req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = {
  router,
  products,
};