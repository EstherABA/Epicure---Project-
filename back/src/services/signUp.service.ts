import { userModel } from "../model/users.model";
import express, { Request, Response } from "express";

interface IUser {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string, 
}

export const addUserService = async(dataOfUser:IUser) => {
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

export const getUsersService = async () => {
try {
    const chefs = await userModel.find();
    return chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
 };