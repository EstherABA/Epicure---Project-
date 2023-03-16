import { userModel } from "../model/users.model";
// import express, { Request, Response } from "express";

export const signInService = async (UserLoginInfo:any) => {
    console.log("sign In services connected");
    try {
    const userFromDb = await userModel.findOne({email: UserLoginInfo.email});
    return userFromDb
    } 
    catch (err) {
    console.log(err);
    throw err;
    }
 };