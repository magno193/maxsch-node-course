const { Router } = require('express');

const { getAddProduct, postAddProduct, getProducts } = require('../controllers/adminController');
const router = Router();

router.get('/add-product', getAddProduct);
router.get('/products', getProducts);
router.post('/add-product', postAddProduct);

module.exports = router;
