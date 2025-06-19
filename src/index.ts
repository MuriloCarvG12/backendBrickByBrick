// src/index.ts
import express from 'express';
import { initDB } from './db';
import UserRoutes from './routes/users';
import productsRoutes from './routes/products';


const app = express();
const port = 3000;

app.use(express.json());

initDB().then((db) => {
  // Create User
  app.use('/', UserRoutes(db));
  app.use('/', productsRoutes(db))


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
