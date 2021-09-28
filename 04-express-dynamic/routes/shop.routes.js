const { Router } = require('express');
const path = require('path');
const router = Router();
const rootDir = require('../helpers/path');
const { products } = require('./admin.routes');

router.get('/', (req, res, next) => {
  console.log('🛒', products);
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: Boolean(products.length),
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;