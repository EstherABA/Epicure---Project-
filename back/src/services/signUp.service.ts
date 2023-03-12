import { userModel } from "../model/users.model";
import express, { Request, Response } from "express";

interface IUser {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string, 
}

export const getAllUsers = async(dataOfUser:IUser ) => {
    console.log("users services connected");
    console.log(dataOfUser, "data of user");
    
    try {
        const users = await userModel.find();
        return users
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
// export const postUser = async(user:any) =>{
//     getAllUsers();
//     console.log("  get all users services connected");
//     try {
//         const users = await userModel.create(x);
//         return users
//     }
//     catch(err){
//         console.log(err);
//         throw err;
//     }
  
    
// }