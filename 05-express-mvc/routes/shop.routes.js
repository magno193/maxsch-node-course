const { Router } = require('express');
const { getProducts, getIndex, getCart, getOrders, getCheckout } = require('../controllers/shopController');
const router = Router();

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);

module.exports = router;