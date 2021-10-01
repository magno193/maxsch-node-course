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
  constructor(title) {
    this.title = title;
  };

  save() {
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
};
