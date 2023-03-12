import express, { Request, Response } from "express";
import {addUserService, getUsersService} from '../services/signUp.service';

export const addUserController = async ( req: Request, res: Response) => {
    console.log("users controller connected");
    try {
        const dataOfUser = req.body
        const _users = await addUserService(dataOfUser);
        return res
        .status(200)
        .json(_users)
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const getAllUsersController = async () => {
    try {
      const users = await getUsersService;
      return users;
    } catch (err) {
      console.log(err);
      throw err;
    }
   };
   