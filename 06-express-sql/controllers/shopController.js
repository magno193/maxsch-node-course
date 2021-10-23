const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.getProducts = (req, res) => {
  console.log(req.method, req.url);
  Product.fetchAll().then(([products]) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Produtos',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res) => {
  const { id } = req.params;
  console.log(req.method, req.url);
  Product.fetchById(id).then(([product]) => {
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product[0].title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res) => {
  console.log(req.method, req.url);
  Product.fetchAll().then(([products]) => {
    console.log('🛒 ', products);
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const foundProducts = cart.products.find(p => p.id === product.id)
        if (foundProducts)
          cartProducts.push({ productData: product, qty: foundProducts.qty });
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Seu carrinho',
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const { id } = req.body;
  Product.fetchById(id, (product) => {
    Cart.addProduct(id, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteItem = (req, res) => {
  const { id } = req.body;
  Product.fetchById(id, product => {
    Cart.deleteProduct(id, product.price);
    res.redirect('/cart');
  });
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
