import {createSlice} from "@reduxjs/toolkit";
import {IUsersState} from '../../Interfaces';

const presentUsers = async () => { 
    try{
        const response = await fetch('http://localhost:8000/api/users/',{
            method: 'GET',
    });
        const data = await response.json();
        return data ;  
    } catch (error) {
        console.log('There was an error', error);
    }
}

const usersAllData:IUsersState = await presentUsers();

export const UsersSlice = createSlice({
    name: "Users",
    initialState: {
        value: usersAllData,
    },
    reducers: {
        filterRestaurants: (state, action) => {
            const filterType = action.payload;
                switch (filterType){
                case "all":
                    state.value = usersAllData 
                    break;
                case "openNow":
                    state.value = usersAllData
                    const date = new Date();
                    const showTime = date.getHours()
                    state.value = state.value.filter(
                        (restaurant:IUser) => {
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