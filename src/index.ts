// src/index.ts
import express from 'express';
import { initDB } from './db';
import UserRoutes from './routes/users';
import productsRoutes from './routes/products';
import path from 'path';
import cors from "cors";

const app = express();

const port = 3000;



app.use(express.json());
app.use(cors());

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

  app.get('/login', (req, res) => {
    res.render('page_login.ejs');
  });

  app.get('/register', (req,res) => {
    res.render('page_register.ejs');
  });

  app.get('/home', async (req, res) => {
    const product_fetch = await fetch("http://localhost:3000/products")
    if(product_fetch)
        {
            
            const products =  await product_fetch.json()
            
            res.render('page_home.ejs', {products: products});
            
        }
    
  });

  app.get('/payment', (req, res) => {
    res.render('page_pagamento.ejs');
  });

  


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Server running users routes at http://localhost:${port}/users`);
    console.log(`Server running products routes at http://localhost:${port}/products`);
  });
});


