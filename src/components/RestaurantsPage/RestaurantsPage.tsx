import React from 'react';
// import './Restaurants.css'
import data from '../../epicure.json';
import HomeCard from '../General/HomeCard/HomeCard';
import NavBar from '../NavBar/NavBar';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import FilterBarByPrice from '../General/FilterBarByPrice/FilterBarByPrice'
// import onza from '../../assets/images/onza.png'

const RestaurantsPage: React.FC= () => {
//     const allRestaurant = data.restaurants.map((restaurant)=>{
        
//         return <HomeCard 
//         // class='restaurantP-card'
//         ImgSrc={require(`../../assets/images/${restaurant.image}`).default} 
//         ImgAlt={restaurant.name}  
//         name={restaurant.name} 
//         chefName={restaurant.chefName} 
//         moreInfoSrc={require(`../../assets/icon/star${restaurant.rating}.svg`)}
//       />}
//   );


    return (
        <div>
            <NavBar />
            <FilterBarByNew />
            <FilterBarByPrice />
         </div>

    )
}

export default RestaurantsPage;