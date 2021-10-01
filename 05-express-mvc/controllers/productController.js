const Product = require("../models/Product");

exports.getAddProduct = (req, res, next) => {
  console.log('💰');
  res.render('add-product', {
    pageTitle: 'Novos produtos',
    path: '/admin/add-product',
    activeProduct: true,
    productCSS: true,
    formsCSS: true,
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save()
  console.log('💰', req.body);
  res.redirect('/');
};

exports.getShop = (req, res, next) => {
  const products = Product.fetchAll();
  console.log('🛒', products);
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: Boolean(products.length),
    activeShop: true,
    productCSS: true,
  });
};

