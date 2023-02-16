import data from '../../epicure.json';
import HomeCard from '../General/HomeCard/HomeCard';
import './PopularDish.css'
import spicy from '../../assets/icon/spicy.svg'
import React, { useState } from 'react'

const PopularDish: React.FC = () => {
 const x = data.dishes.map((dish)=>{
        
      // moreInfoSrc = {require(`../../assets/icon/${dish.properties}.svg`)}

        })
    
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