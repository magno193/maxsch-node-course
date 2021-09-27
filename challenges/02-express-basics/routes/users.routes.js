const { Router } = require('express');
const path = require('path');
const rootPath = require('../helpers/root.path')

const router = Router();

router.get('/', (req, res) => {
  console.log('😁 Users');
  return res.sendFile(path.join(rootPath, 'views', 'users.html'))
})

module.exports = router;