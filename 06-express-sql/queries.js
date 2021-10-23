exports.db_init = 'CREATE TABLE IF NOT EXISTS db.products (' +
  'id INT PRIMARY KEY AUTO_INCREMENT, ' +
  'title VARCHAR(255) NOT NULL, ' +
  'price DOUBLE NOT NULL, ' +
  'description TEXT NOT NULL, ' +
  'imageUrl VARCHAR(255) NOT NULL);';

exports.db_show_tables = 'SHOW TABLES';

exports.db_show_dbs = 'SHOW DATABASES';