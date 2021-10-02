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
  constructor(title, imageUrl, desc, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = desc;
    this.price = +price.replace(',', '.');
  };

  save() {
    let date = Date.now();
    this.id = ((Math.random() * date) + date).toString().split('.')[0];
    getProductsFromFile(products => {
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
