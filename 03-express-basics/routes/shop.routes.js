const { Router } = require('express');

const router = Router();

router.get('/add-product', (req, res, next) => {
  console.log('🛒');
  res.send(`
  <form action="/shop/product" method="POST">
    <input type="text" name="title">
    <button type="submit">Adicionar produto</button>
  </form>
  `);
});

router.post('/product', (req, res) => {
  console.log('🛒', req.body);
  res.redirect('/');
});

module.exports = router;