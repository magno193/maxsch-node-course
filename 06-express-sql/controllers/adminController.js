const Product = require("../models/Product");

exports.getAddProduct = (req, res) => {
  console.log('💰');
  res.render('admin/edit-product', {
    pageTitle: 'Novos produtos',
    path: '/admin/add-product',
    editing: false,
  });
};

exports.postAddProduct = (req, res) => {
  const { title, description, imageUrl, price } = req.body;
  const product = new Product(null, title, imageUrl, description, price);
  console.log(req.method, req.url);
  product.save().then(() => {
    res.redirect('/admin/products');
  });
};

exports.getEditProduct = (req, res) => {
  const { edit } = req.query;
  if (!edit) return res.redirect('/');

  const { id } = req.params;
  Product.fetchById(id, product => {
    if (!product) return res.redirect('/');

    res.render('admin/edit-product', {
      product,
      pageTitle: 'Novos produtos',
      path: '/admin/edit-product',
      editing: !!edit,
    });
  });
};

exports.postEditProduct = (req, res) => {
  const { id, title, description, imageUrl, price } = req.body;
  const updatedProduct = new Product(id, title, imageUrl, description, price);
  updatedProduct.save();
  res.redirect('/admin/products')
};

exports.getProducts = (req, res) => {
  console.log(req.method, req.url);
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('admin/products', {
      prods: rows,
      pageTitle: 'Lista de produtos - Admin',
      path: '/admin/products',
    });
  });
};

exports.postDeleteProduct = (req, res) => {
  const { id } = req.body;
  Product.deleteById(id);
  res.redirect('/admin/products');
};
