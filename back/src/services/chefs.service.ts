import * as fs from "fs";
import path from "path";
import { chefModel } from "../model/chefs.model";
// import data from './students.json';

export const getChefs = async() => {
    console.log(" chefs services connected");
    
    try {
      const chefs = await chefModel.find();
      return chefs
    }
    catch(err){
      console.log(err);
      throw err;
    }
  };