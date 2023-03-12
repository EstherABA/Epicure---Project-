import express, { Request, Response } from "express";
import {getAllUsers} from '../services/signUp.service';

interface IUser {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string, 
}
export const addUsers = async ( req: Request, res: Response) => {
    console.log("users controller connected");
    
    try {
        const dataOfUser = req.body
        console.log( dataOfUser, "data from the user");
        
        const _users = await getAllUsers(dataOfUser);
        return res
        .status(200)
        .json(_users)
    } catch (err) {
        console.log(err);
        throw err;
    }
}