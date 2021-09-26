const { Router } = require('express');
const path = require('path');

const router = Router();

router.get('/', (req, res, next) => {
  console.log('🤩');
  const htmlPath = path.join(__dirname, '..', 'views', 'shop.html');
  res.sendFile(htmlPath);
});

module.exports = router;