import React from 'react';
import data from '../../epicure.json';
import HomeCard from '../General/HomeCard/HomeCard';
import NavBar from '../NavBar/NavBar';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import FilterBarByPrice from '../General/FilterBarByPrice/FilterBarByPrice'
import {useSelector} from "react-redux";
import './RestaurantsPage.css'
import Footer from '../General/Footer/Footer';
import { RootState } from '../../Interfaces';

export interface Restaurant {
    id:number,
    name: string,
    image: string,
    chefName:string,
    hours:any,
    address:string,
    rating: string,
    isPopular: boolean,
    dishes: Array<string>
  }
  export interface RestaurantsState {
    value: Restaurant[];
  }

const RestaurantsPage: React.FC= () => {
    const AllRestaurants = useSelector(
        (state:RootState) => state.restaurants.value
    );

    const restaurantsCards = AllRestaurants.map((restaurant:Restaurant) =>{
        return <HomeCard 
        class='one-restaurant'
        ImgSrc={require(`../../${restaurant.image}`)} 
        ImgAlt={restaurant.name}  
        name={restaurant.name} 
        chefName={restaurant.chefName} 
        moreInfoSrc={require(`../../assets/icon/star${restaurant.rating}.svg`)}
      />
    })
    

    
   

    return (
        <div>
            <NavBar />
            <FilterBarByNew />
            <FilterBarByPrice />
            <div className='restaurants-container'>
                {restaurantsCards}
            </div>
            <Footer />
            

        </div>

    )
}

export default RestaurantsPage;