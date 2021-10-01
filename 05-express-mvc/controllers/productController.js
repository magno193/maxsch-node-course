const products = [];

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
  console.log('💰', req.body);
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getShop = (req, res, next) => {
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

