import {createSlice} from "@reduxjs/toolkit"
import data from '../../epicure.json'

export const chefsSlice = createSlice({
    name: "chefs",
    initialState: {
        value: data.chefs
    },
    reducers: {

    }
});

export default chefsSlice.reducer;
