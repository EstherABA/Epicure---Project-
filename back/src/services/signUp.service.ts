import { userModel } from "../model/users.model";
import express, { Request, Response } from "express";


interface IUser {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string,
    token?: string, 
}

export const addUserService = async(dataOfUser:IUser) => {
    console.log("users services connected");
    try{
        const oldUser = await userModel.findOne({email: dataOfUser.email});
        return oldUser
    }
    catch (err) {
        console.log(err);
        throw err;
    }
    // if (oldUser) {
    //     return "User Already Exist. Please Login";
    // }
    // else {
    //     //Encrypt user password
    //     const encryptedPassword = await bcrypt.hash( dataOfUser.password, 10);
    //     // Create user in database
    //     const newUseDocument = {
    //         firstName:dataOfUser.firstName,
    //         lastName:dataOfUser.lastName,
    //         address:dataOfUser.address,
    //         email:dataOfUser.email.toLowerCase(),
    //         password: encryptedPassword,
    //     }
    //     const _user = new userModel(newUseDocument);
    //     // Create token
    //     // const SECRET_KEY = process.env.SECRET_KEY!;
    //     // const token = jwt.sign(
    //     //     { newUseDocument_id: _user._id },
    //     //     SECRET_KEY, 
    //     //     {expiresIn: "2h",});
        
            
    //     try {
    //         await _user.save();
    //         return _user;
    //     } catch (err) {
    //         console.log(err);
    //         throw err;
    //     }
    // };
    
}

export const getUsersService = async () => {
    console.log("get users services connected");
    try {
    const users = await userModel.find();
    return users
    } 
    catch (err) {
    console.log(err);
    throw err;
    }
 };