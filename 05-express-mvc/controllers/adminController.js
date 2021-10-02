const Product = require("../models/Product");

exports.getAddProduct = (req, res) => {
  console.log('💰');
  res.render('admin/add-product', {
    pageTitle: 'Novos produtos',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  console.log('💰', req.body);
  res.redirect('/');
};

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Lista de produtos - Admin',
      path: '/admin/products',
    })
  })
};
