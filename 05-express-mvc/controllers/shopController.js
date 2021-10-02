const Cart = require("../models/Cart");
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

exports.getProduct = (req, res) => {
  const { id } = req.params;
  Product.fetchById(id, product => {
    console.log('🗳️ ', product);
    res.render('shop/product-detail', {
      product,
      pageTitle: product.title,
      path: '/products'
    })
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    console.log('🛒 ', products);
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

exports.postCart = (req, res, next) => {
  const { id } = req.body;
  Product.fetchById(id, (product) => {
    Cart.addProduct(id, product.price);
  });
  res.redirect('/');
};

exports.getOrders = (req, res) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Ordens'
  });
};

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
