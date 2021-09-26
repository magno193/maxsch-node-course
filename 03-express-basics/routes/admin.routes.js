const { Router } = require('express');
const path = require('path');
const router = Router();

router.get('/add-product', (req, res, next) => {
  console.log('🛒');
  const htmlPath = path.join(__dirname, '..', 'views', 'add-product.html');
  res.sendFile(htmlPath);
});

router.post('/product', (req, res) => {
  console.log('🛒', req.body);
  res.redirect('/');
});

module.exports = router;