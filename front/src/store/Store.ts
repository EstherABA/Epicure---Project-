import { configureStore } from "@reduxjs/toolkit"
import { IRestaurantsState } from '../Interfaces'
import { IChefsState } from '../Interfaces'
import { DishesState } from '../Interfaces'
import RestaurantsSlice from "./slices/RestaurantsSlice"
import DishesSlice from "./slices/DishesSlice"
import ChefsSlice from "./slices/ChefsSlice"

export interface RootState {
    restaurants: IRestaurantsState;
    chefs: IChefsState;
    dishes: DishesState;
  }
  

export default configureStore({
    reducer:{
        restaurants: RestaurantsSlice,
        chefs: ChefsSlice,
        dishes: DishesSlice
    }
});