const fs = require('fs');
const path = require('path');
const dirPath = path.join(path.dirname(require.main.filename), 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  };

  save() {
    fs.readFile(dirPath, (err, content) => {
      console.log(dirPath);
      let products = [];
      if (!err) {
        products = JSON.parse(content);
      }
      products.push(this);
      fs.writeFile(dirPath, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  };

  static fetchAll(callback) {
    fs.readFile(dirPath, (err, content) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(content));
    });
  };
};
