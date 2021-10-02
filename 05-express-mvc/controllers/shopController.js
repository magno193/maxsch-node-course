const Product = require("../models/Product");

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    console.log('🛒', products);
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Todos produtos',
      path: '/products',
    });
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    console.log('🛒', products);
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Seu carrinho'
  });
};

exports.getCheckout = (req, res) => {
  res.render('/shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
