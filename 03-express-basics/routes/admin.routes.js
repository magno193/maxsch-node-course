const { Router } = require('express');
const path = require('path');
const router = Router();
const rootDir = require('../helpers/path');

router.get('/add-product', (req, res, next) => {
  console.log('🛒');
  const htmlPath = path.join(rootDir, 'views', 'add-product.html');
  res.sendFile(htmlPath);
});

router.post('/add-product', (req, res) => {
  console.log('🛒', req.body);
  res.redirect('/');
});

module.exports = router;