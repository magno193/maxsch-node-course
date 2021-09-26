const { Router } = require('express');
const path = require('path');
const router = Router();
const rootDir = require('../helpers/path');

router.get('/', (req, res, next) => {
  console.log('🤩');
  const htmlPath = path.join(rootDir, 'views', 'shop.html');
  res.sendFile(htmlPath);
});

module.exports = router;