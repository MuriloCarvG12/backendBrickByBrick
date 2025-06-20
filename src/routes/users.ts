import { Router } from 'express';
import { Database } from 'sqlite';
import sqlite3 from 'sqlite3';

import userController from '../controllers/userController';

function UserRoutes(db: Database<sqlite3.Database, sqlite3.Statement>)
{
    
    const userRouter = Router();
    const users = new userController(db)
    
    userRouter.get('/users', users.getUsers);  

    userRouter.get('/user/:email', users.getUser)

    userRouter.post('/users', users.registerUser)

    

    return userRouter
}

export default UserRoutes

