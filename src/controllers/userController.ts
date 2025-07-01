import { Database } from 'sqlite'; // optional but useful for typing

import { Request, Response } from 'express';
import { user_req_body } from '../interfaces/ReqBodies';
import UserModel from '../models/userModel';

export default class userController {

   private userModel: UserModel;

  constructor(db: Database) {
    this.userModel = new UserModel(db);
  }


   getUsers= async (req:Request, res:Response) => 
    {
        try 
        {
            const users = await this.userModel.getAllUsers();
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
            const user = await this.userModel.getUserByEmail(req.params.email);
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
            const result = await this.userModel.registerUser(user_info.email, user_info.password);
            res.status(201).json({ id: result.lastID, email: user_info.email});
        } 
        catch (err) 
        {
            res.status(500).json({ error: 'Failed to insert user', detail: err });
        }
    }
}

