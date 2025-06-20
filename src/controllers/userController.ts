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

    getUser =  async (req:Request, res:Response) => 
    {
        const user_email:string = req.params.email
        try 
        {
            const user = await this.db.get(' SELECT id FROM users WHERE email = ? LIMIT 1;', [user_email]);
            if(!user)
                {
                    res.status(404).json({error: 'Failed to find this user'});
                }
            res.status(200).json(user)

        }
        catch (err) 
        {
            res.status(500).json("Error on fetching user => " + err);
        }
    }


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
            res.status(500).json({ error: 'Failed to insert user', detail: err });
        }
    }
}

