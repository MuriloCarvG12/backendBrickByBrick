// src/index.ts
import express from 'express';

import { initDB } from './db';
import UserRoutes from './routes/users';
import productsRoutes from './routes/products';
import path from 'path';


const app = express();
const port = 3000;



app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', './src/views');
// sets up the static paths for our project
app.use('/css', express.static(path.join(__dirname, '..', 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, '..', 'public', 'js')));
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

initDB().then((db) => {
  // Create User
  app.use('/', UserRoutes(db));
  app.use('/', productsRoutes(db))
  app.get('/teste', (req, res) => {
    res.render('page_login.ejs');
  });
  app.get('/teste2', (req, res) => {
    res.render('page_home.ejs');
  });
  app.get('/teste3', (req, res) => {
    res.render('page_pagamento.ejs');
  });


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Server running users routes at http://localhost:${port}/users`);
    console.log(`Server running products routes at http://localhost:${port}/products`);
  });
});
