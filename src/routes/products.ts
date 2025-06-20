import { Router } from 'express';
import { Database } from 'sqlite'; // optional but useful for typing
import sqlite3 from 'sqlite3';
import { product_req_body } from '../interfaces/ReqBodies';
import ProductController from '../controllers/productsController';

function productsRoutes(db: Database<sqlite3.Database, sqlite3.Statement>)
{
    //(name, price, amount, image) VALUES (?, ?, ?, ?)',['Batmobile', 99.99, 4, 'https://legobrasil.vtexassets.com/arquivos/ids/187557/76328.jpg?v=638621859967430000']);
    const productRouter = Router();
    const productsController = new ProductController(db)

    productRouter.get('/products', productsController.getProducts)
    productRouter.get('/product/:name', productsController.getProduct)
    productRouter.post('/products', productsController.registerProduct)

    return productRouter
}

export default productsRoutes