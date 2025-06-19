import { Router } from 'express';
import { Database } from 'sqlite'; // optional but useful for typing
import sqlite3 from 'sqlite3';
import { user_req_body } from '../interfaces/ReqBodies';

function UserRoutes(db: Database<sqlite3.Database, sqlite3.Statement>)
{
    
    const userRouter = Router();

    userRouter.get('/users', async (req, res) => {
        const users = await db.all('SELECT * FROM users');
        res.json(users);
    });  

    userRouter.post('/users', async (req, res) => {
        const user_info:user_req_body = req.body
        try {
        const result = await db.run('INSERT INTO users (email, password) VALUES (?, ?)', [user_info.email, user_info.password]);
        res.status(201).json({ id: result.lastID, email: user_info.email});
        } catch (err) {
        res.status(400).json({ error: 'Failed to insert user', detail: err });
        }
    })

    

    return userRouter
}

export default UserRoutes

