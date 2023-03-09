import {createSlice} from "@reduxjs/toolkit";
import { Chef } from '../../Interfaces';

const presentUsers = async () => { 
    try{
    const response = await fetch('http://localhost:8000/api/chefs',{
        method: 'GET',
    });
    const data = await response.json();
    console.log("data");
    return data   

    } catch (error) {
    console.log('There was an error', error);
    }
  }
  
  const chefs:Chef[] = await presentUsers();
  console.log(chefs, "data chefs");
  
  
export const chefsSlice = createSlice({
    name: "chefs",
    initialState: {
        value: chefs,
    },
    reducers: {
  
    }
});
export default chefsSlice.reducer;









// export const {  chefsReceived, chefsRequestFailed } = chefsSlice.actions;

// export const fetchChefs = () => async (dispatch:any) => {
//     // dispatch(chefsRequested());
//     console.log("hi");
    
//     try {
//       const response = await fetch("http://localhost:8000/api/chefs", {
//         method: "GET",
//       });
//       const data = await response.json();
//       console.log("data", data);
//       dispatch(chefsReceived(data));

//     } catch (error) {
//       dispatch(chefsRequestFailed(error));
//     }
//   };



