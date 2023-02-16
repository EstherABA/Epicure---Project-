import {createSlice} from "@reduxjs/toolkit"
import data from '../../epicure.json'

export const DishesSlice = createSlice({
    name: "Dishes",
    initialState: {
        value: data.dishes
    },
    reducers: {

    }
});

export default DishesSlice.reducer;