import { Router } from 'express';
import { Database } from 'sqlite'; // optional but useful for typing
import sqlite3 from 'sqlite3';
import { product_req_body } from '../interfaces/ReqBodies';

function productsRoutes(db: Database<sqlite3.Database, sqlite3.Statement>)
{
    //(name, price, amount, image) VALUES (?, ?, ?, ?)',['Batmobile', 99.99, 4, 'https://legobrasil.vtexassets.com/arquivos/ids/187557/76328.jpg?v=638621859967430000']);
    const productRouter = Router();

    productRouter.get('/products', async (req, res) => {
        const products_found = await db.all('SELECT * FROM products');
        res.json(products_found);
    })
    productRouter.post('/products', async (req, res) => 
    {
        const product_info:product_req_body = req.body
        try {
        const result = await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [product_info.name, product_info.price, product_info.amount, product_info.image]);
        res.status(201).json({ id: result.lastID, name: product_info.name, price: product_info.price, amount: product_info.amount, image: product_info.image });
        } catch (err) {
        res.status(400).json({ error: 'Failed to insert user', detail: err });
        }
    })
    return productRouter
}

export default productsRoutes