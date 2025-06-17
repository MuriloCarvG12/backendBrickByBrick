// src/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Open DB connection
export const initDB = async () => {
  const db = await open({
    filename: path.join(__dirname, 'database.sqlite'),
    driver: sqlite3.Database,
  });

  // Create users table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);

    await db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['Alice', 'alice@example.com']);
    await db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['Bob', 'bob@example.com']);
    await db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, ['Charlie', 'charlie@example.com']);

  return db;
};
