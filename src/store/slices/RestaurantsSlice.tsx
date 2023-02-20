import {createSlice} from "@reduxjs/toolkit"
import data from '../../epicure.json';
import HomeCard from '../../components/General/HomeCard/HomeCard'

export const RestaurantsSlice = createSlice({
    name: "Restaurants",
    initialState: {
        value: data.restaurants
    },
    reducers: {
        filterRestaurants: (state, action) => {
            const filterType = action.payload;
                switch (filterType){
                case "all":
                    state.value = data.restaurants 
                    break;
                case "new":
                    state.value = data.restaurants
                    state.value = state.value.filter(
                        (restaurant) => restaurant.isNew === true); 
                    break;
                case "mostPopular":
                    state.value = data.restaurants
                    state.value = state.value.filter(
                        (restaurant) => restaurant.mostPopular === true); 
                    break;
                case "openNow":
                    state.value = data.restaurants
                    const date = new Date();
                    const showTime = date.getHours()
                    state.value = state.value.filter(
                        (restaurant) => {
                            if(showTime >= restaurant.openHour!  && showTime <= restaurant.closeHour!){
                                return restaurant
                            }
                            return null
                        })
                    break;
                default:
                    state.value = state.value;
                }}
        }
        });

export const {filterRestaurants} = RestaurantsSlice.actions;
export default RestaurantsSlice.reducer;