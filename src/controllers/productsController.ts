import { Database } from 'sqlite'; // optional but useful for typing
import sqlite3 from 'sqlite3';
import { Request, Response } from 'express';
import { product_req_body } from '../interfaces/ReqBodies';

export default class ProductController {

   constructor(private db: Database) {}
    
   getProducts = async (req:Request, res:Response) => 
    {
        try 
        {
           const products_found = await this.db.all('SELECT * FROM products');
            res.json(products_found);
        } 
        catch (error) 
        {
            res.status(500).json("Error on fetching all products => " + error);
        } 
    }

    registerProduct = async (req:Request, res:Response) => 
    {
        const product_info:product_req_body = req.body
        try 
        {
            const result = await this.db.run('INSERT INTO users (name, email) VALUES (?, ?)', [product_info.name, product_info.price, product_info.amount, product_info.image]);
            res.status(201).json({ id: result.lastID, name: product_info.name, price: product_info.price, amount: product_info.amount, image: product_info.image });
        } 
        catch (err) 
        {
            res.status(400).json({ error: 'Failed to insert user', detail: err });
        }
    }
}