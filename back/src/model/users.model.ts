import { Schema, model} from "mongoose";
import mongoose from "mongoose";

export interface IUser {
    firstName:string,
    lastName:string,
    address:string,
    email:string,
    password: string
}

export const userSchema  = new Schema<IUser>({
    firstName:{type:String, required: true},
    lastName:{type:String, required: true},
    address:{type:String, required: true},
    email:{type:String, required: true},
    password: {type:String, required: true}
});

export const userModel = mongoose.model<IUser>('users', userSchema)