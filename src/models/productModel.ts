import { Database } from 'sqlite';

export default class ProductModel {
  constructor(private db: Database) {}

  async getAllProducts() {
    return this.db.all('SELECT * FROM products');
  }

  async getProductByName(name: string) {
    return this.db.get('SELECT * FROM products WHERE name = ? LIMIT 1;', [name]);
  }

  async registerProduct(name: string, price: number, amount: number, image: string) {
    return this.db.run(
      'INSERT INTO products (name, price, amount, image) VALUES (?, ?, ?, ?)',
      [name, price, amount, image]
    );
  }
}