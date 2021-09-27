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
  });
});

module.exports = router;