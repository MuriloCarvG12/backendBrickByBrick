import { Database } from 'sqlite';

export default class UserModel {
  constructor(private db: Database) {}

  async getAllUsers() {
    return this.db.all('SELECT * FROM users');
  }

  async getUserByEmail(email: string) {
    return this.db.get('SELECT id FROM users WHERE email = ? LIMIT 1;', [email]);
  }

  async registerUser(email: string, password: string) {
    return this.db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
  }
}