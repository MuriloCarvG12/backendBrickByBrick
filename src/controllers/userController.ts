import { Database } from 'sqlite'; // optional but useful for typing
import sqlite3 from 'sqlite3';
import { Request, Response } from 'express';
import { user_req_body } from '../interfaces/ReqBodies';

export default class userController {

   constructor(private db: Database) {}

   getUsers= async (req:Request, res:Response) => 
    {
        try 
        {
            const users = await this.db.all('SELECT * FROM users');
            res.status(200).json(users);
        } 
        catch (error) 
        {
            res.status(500).json("Error on fetching all users => " + error);
        }
        
    };  

    registerUser = async (req:Request, res:Response) => 
    {
        const user_info:user_req_body = req.body
        try 
        {
            const result = await this.db.run('INSERT INTO users (email, password) VALUES (?, ?)', [user_info.email, user_info.password]);
            res.status(201).json({ id: result.lastID, email: user_info.email});
        } 
        catch (err) 
        {
            res.status(400).json({ error: 'Failed to insert user', detail: err });
        }
    }
}

