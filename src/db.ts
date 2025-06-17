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

  // Create users table if it doesn't exist
  await db.exec(`
    

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `);
    // seeds our users table with three users
    await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, ['alice@example.com', '1234']);
    await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, ['bob@example.com','2414']);
    await db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, ['charlie@example.com', '4142']);

  return db;
};
