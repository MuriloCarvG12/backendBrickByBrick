// src/index.ts
import express from 'express';

import { initDB } from './db';
import UserRoutes from './routes/users';
import productsRoutes from './routes/products';


const app = express();
const port = 3000;



app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', './src/views');

initDB().then((db) => {
  // Create User
  app.use('/', UserRoutes(db));
  app.use('/', productsRoutes(db))
  app.get('/teste', (req, res) => {
    res.render('page_login.ejs');
  });


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Server running users routes at http://localhost:${port}/users`);
    console.log(`Server running products routes at http://localhost:${port}/products`);
  });
});
