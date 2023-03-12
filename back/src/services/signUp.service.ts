import { userModel } from "../model/users.model";
import express, { Request, Response } from "express";

interface IUser {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string, 
}

export const getAllUsers = async(dataOfUser:IUser) => {
    console.log("users services connected");
    const oldUser = await userModel.findOne({email: dataOfUser.email});
    
    if (oldUser) {
        return "User Already Exist. Please Login";
      }
    else {
        const _user = new userModel(dataOfUser);
        try {
            await _user.save();
            return _user;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
            
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