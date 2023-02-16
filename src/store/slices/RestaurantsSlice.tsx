import {createSlice} from "@reduxjs/toolkit"
import data from '../../epicure.json'

export const RestaurantsSlice = createSlice({
    name: "Restaurants",
    initialState: {
        value: data.restaurants
    },
    reducers: {

    }
});

export default RestaurantsSlice.reducer;