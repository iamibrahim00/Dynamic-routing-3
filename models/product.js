const db = require('../util/database')

module.exports = class Product {
  constructor(id,title, description, price) {
    this.id =id
    this.title = title;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title,price,description) VALUES ( ?, ?, ?)',
    [this.title,this.price,this.description])
}

  static deleteproductbyId(id){
    return db.execute('DELETE  FROM products WHERE products.id =?',[id])
  }

  static fetchAll(cb) {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products where products.id = ?',
    [id]
    )
};
}