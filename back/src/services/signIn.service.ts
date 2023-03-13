import { IUser, userModel } from "../model/users.model";
// import express, { Request, Response } from "express";

export const signInService = async (UserLoginInfo:any) => {
    console.log("log in services connected");
    try {
    const userFromDb = await userModel.findOne({email: UserLoginInfo.email});
    console.log(userFromDb, "userFromDb");
    
    return userFromDb
    } 
    catch (err) {
    console.log(err);
    throw err;
    }
 };