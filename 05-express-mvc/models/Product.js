const fs = require('fs');
const path = require('path');
const dirPath = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = callback => {
  fs.readFile(dirPath, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(id = null, title, imageUrl, desc, price) {
    this.id = id;
    this.title = title.trim();
    this.imageUrl = imageUrl;
    this.description = desc.trim();
    this.price = +price;
  };

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIdx = products.findIndex(p => p.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIdx] = this;
        fs.writeFile(dirPath, JSON.stringify(updatedProducts), (err) => {
          console.error(err);
        });
        return;
      }
      let date = Date.now();
      this.id = ((Math.random() * date) + date).toString().split('.')[0];
      products.push(this);
      fs.writeFile(dirPath, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  };

  static fetchAll(callback) {
    getProductsFromFile(callback);
  };

  static fetchById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  };
};
