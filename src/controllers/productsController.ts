import { Database } from 'sqlite'; // optional but useful for typing
import sqlite3 from 'sqlite3';
import { Request, Response } from 'express';
import { product_req_body } from '../interfaces/ReqBodies';
import ProductModel from '../models/productModel';

export default class ProductController {

     private productModel: ProductModel;

    constructor(db: Database) {
        this.productModel = new ProductModel(db);
    }
   getProducts = async (req:Request, res:Response) => 
    {
        try 
        {
           const products = await this.productModel.getAllProducts();
            res.json(products);
        } 
        catch (error) 
        {
            res.status(500).json("Error on fetching all products => " + error);
        } 
    }

    getProduct = async (req:Request, res:Response) => 
    {
        const product_name:string = req.params.name
        try 
        {
            const product = await this.productModel.getProductByName(req.params.name);
            if(!product)
                {
                    res.status(404).json({error: 'Failed to find this product'});
                }
            res.status(200).json(product)

        }
        catch (err) 
        {
            res.status(500).json("Error on fetching user => " + err);
        }
    }

    registerProduct = async (req:Request, res:Response) => 
    {
        const product_info:product_req_body = req.body
        try 
        {
            const result = await this.productModel.registerProduct(product_info.name, product_info.price, product_info.amount, product_info.image);
            res.status(201).json({ id: result.lastID, name: product_info.name, price: product_info.price, amount: product_info.amount, image: product_info.image });
        } 
        catch (err) 
        {
            res.status(400).json({ error: 'Failed to insert user', detail: err });
        }
    }
}