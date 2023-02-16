import React from 'react';
// import './Restaurants.css'
import data from '../../epicure.json';
import HomeCard from '../General/HomeCard/HomeCard';
import NavBar from '../NavBar/NavBar';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import FilterBarByPrice from '../General/FilterBarByPrice/FilterBarByPrice'

const RestaurantsPage: React.FC= () => {

    return (
        <div>
            <NavBar />
            <FilterBarByNew />
            <FilterBarByPrice />
        </div>

    )
}

export default RestaurantsPage;