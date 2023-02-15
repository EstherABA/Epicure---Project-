// import React from 'react';
import data from '../../epicure.json';
import HomeCard from '../General/HomeCard/HomeCard';
import './PopularDish.css'
import spicy from '../../assets/icon/spicy.svg'
import React, { useState } from 'react'

const PopularDish = () => {
  // const [spicy,setState] = useState(true); 

    
  const dishes = data.dishes.map((dish) => {  
    if (dish.isSignatureDish === true) {
      return <HomeCard
      class='dishP-card' 
      ImgSrc={require(`../../${dish.image}`)}
      ImgAlt={dish.name}
      name={dish.name} 
      ingredients={dish.ingredients}
      currency = {require('../../assets/icon/ils.svg').default}
      price = {dish.price}
      />
    }
    // moreInfoSrc = {dish.properties!.spicy === spicy ? require('../../assets/icon/spicy.svg').default : ''}
  });

  return ( 
    <>
      <div className='popular-title-container'>SIGNATURE DISH OF: </div>
      <div className='popular-container'>
        {dishes}
        
      </div>
    </> 
  );
}
 
export default PopularDish;