const { Router } = require('express');
const path = require('path');
const router = Router();
const rootDir = require('../helpers/path');

const products = [];

router.get('/add-product', (req, res, next) => {
  console.log('💰');
  res.render('add-product', {
    pageTitle: 'Novos produtos',
    path: '/admin/add-product',
  });
});

router.post('/add-product', (req, res) => {
  console.log('💰', req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = {
  router,
  products,
};