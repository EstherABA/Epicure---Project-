import { configureStore } from "@reduxjs/toolkit"
import { RestaurantsState } from '../Interfaces'
import { ChefsState } from '../Interfaces'
import { DishesState } from '../Interfaces'
import RestaurantsSlice from "./slices/RestaurantsSlice"
import DishesSlice from "./slices/DishesSlice"
import ChefsSlice from "./slices/ChefsSlice"

export interface RootState {
    restaurants: RestaurantsState;
    chefs: ChefsState;
    dishes: DishesState;
  }
  

export default configureStore({
    reducer:{
        restaurants: RestaurantsSlice,
        chefs: ChefsSlice,
        dishes: DishesSlice
    }
});