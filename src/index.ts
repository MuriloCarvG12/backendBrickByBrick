// src/index.ts
import express from 'express';
import { initDB } from './db';

const app = express();
const port = 3000;

app.use(express.json());

initDB().then((db) => {
  // Create User
  app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
      const result = await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
      res.status(201).json({ id: result.lastID, name, email });
    } catch (err) {
      res.status(400).json({ error: 'Failed to insert user', detail: err });
    }
  });

  // Get All Users
  app.get('/users', async (req, res) => {
    const users = await db.all('SELECT * FROM users');
    res.json(users);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
