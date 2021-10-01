const { Router } = require('express');

const { getAddProduct, postAddProduct } = require('../controllers/productController');
const router = Router();

router.get('/add-product', getAddProduct);

router.post('/add-product', postAddProduct);

module.exports = router;
