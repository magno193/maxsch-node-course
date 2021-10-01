const { Router } = require('express');
const { getShop } = require('../controllers/productController');
const router = Router();

router.get('/', getShop);

module.exports = router;