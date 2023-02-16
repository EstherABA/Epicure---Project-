import { configureStore } from "@reduxjs/toolkit"
import RestaurantsSlice from "./slices/RestaurantsSlice"
import DishesSlice from "./slices/DishesSlice"
import ChefsSlice from "./slices/ChefsSlice"

export default configureStore({
    reducer:{
        restaurants: RestaurantsSlice,
        chefs: ChefsSlice,
        dishes: DishesSlice
    }
});