import React from 'react';
import data from '../../epicure.json';
import HomeCard from '../General/HomeCard/HomeCard';
import NavBar from '../NavBar/NavBar';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import FilterBarByPrice from '../General/FilterBarByPrice/FilterBarByPrice'
import {useSelector} from "react-redux";
import './RestaurantsPage.css'

const RestaurantsPage: React.FC= () => {
    const AllRestaurants = useSelector(
        (state:any) => state.restaurants.value
    );

    const restaurantsCards = AllRestaurants.map((restaurant:any) =>{
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
            

        </div>

    )
}

export default RestaurantsPage;