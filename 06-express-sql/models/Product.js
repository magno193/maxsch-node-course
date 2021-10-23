const db = require('../helpers/database');

const Cart = require('./Cart');
module.exports = class Product {
  constructor(id = null, title, imageUrl, desc, price) {
    this.id = id;
    this.title = title.trim();
    this.imageUrl = 'https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2019/04/C512_parcel.jpg';
    this.description = desc.trim();
    this.price = +price;
  };

  save() {
    return db.execute(
      'INSERT INTO db.products (title, imageUrl, description, price) VALUES (?, ?, ?, ?)', [this.title, this.imageUrl, this.description, this.price]
    );
  };

  static deleteById(id) {

  };

  static fetchAll() {
    return db.execute('SELECT * FROM db.products');
  };

  static fetchById(id) {
    return db.execute('SELECT * FROM db.products WHERE id = ?', [id]);
  };
};
