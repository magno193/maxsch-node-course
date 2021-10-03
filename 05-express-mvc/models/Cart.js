const fs = require('fs');
const path = require('path');

const pth = path.join(
  path.dirname(require.main.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(pth, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        const content = fileContent.toJSON();
        if (content.data.length) cart = JSON.parse(fileContent);
      }
      const existingProductIdx = cart.products.findIndex(p => p.id === id)
      const existingProduct = cart.products[existingProductIdx]
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIdx] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 }
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += +productPrice;
      fs.writeFile(pth, JSON.stringify(cart), (err) => {
        if (err) console.log(err);
      });
    });
  };

  static deleteProduct(id, productPrice) {
    fs.readFile(pth, (err, fileContent) => {
      if (err) return;
      const cart = JSON.parse(fileContent);
      const updatedCart = { ...cart };
      const product = updatedCart.products.findIndex(p => p.id === id);
      const productQty = product.qty;

      updatedCart.products = updatedCart.products.filter(p => p.id !== id);
      updatedCart.totalPrice -= (productPrice * productQty);

      fs.writeFile(pth, JSON.stringify(updatedCart), (err) => {
        if (err) console.log(err);
      });
    });
  }
};