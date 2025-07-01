// src/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Function to initialize our databank
export const initDB = async () => {
  const db = await open({
    filename: path.join(__dirname, 'database.sqlite'),
    driver: sqlite3.Database,
  });

  // now that we initialized our databank we can use commands with it starting with create table
  await db.exec(`
    
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      price FLOAT NOT NULL,
      amount INTEGER NOT NULL,
      image TEXT
    )
  `);


    // seeds our users table with three users
    await db.run(`INSERT OR IGNORE INTO users (email, password) VALUES (?, ?)`, ['alice@example.com', '1234']);
    await db.run(`INSERT OR IGNORE INTO users (email, password) VALUES (?, ?)`, ['teste@teste','teste']);
    await db.run(`INSERT OR IGNORE INTO users (email, password) VALUES (?, ?)`, ['charlie@example.com', '4142']);

    await db.run('INSERT OR IGNORE INTO products (name, price, amount, image) VALUES (?, ?, ?, ?)',['Batmobile', 99.99, 4, 'https://legobrasil.vtexassets.com/arquivos/ids/187557/76328.jpg?v=638621859967430000']);
    await db.run('INSERT OR IGNORE INTO products (name, price, amount, image) VALUES (?, ?, ?, ?)',['Teste', 99.99, 4, 'https://legobrasil.vtexassets.com/arquivos/ids/187557/76328.jpg?v=638621859967430000']);
    await db.run('INSERT OR IGNORE INTO products (name, price, amount, image) VALUES (?, ?, ?, ?)',['Teste', 99.99, 4, 'https://legobrasil.vtexassets.com/arquivos/ids/187557/76328.jpg?v=638621859967430000']);

  return db;
};
