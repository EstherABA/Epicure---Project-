import React from 'react';
import data from '../../epicure.json';
import HomeCard from '../General/HomeCard/HomeCard';
import './PopularDish.css'

const PopularDish = () => {
    
  const dishes = data.dishes.map((dish:any) => {
      // let isSpicy: boolean= dish.isSpicy
      // isSpicy === true ? '../../assets/icon/.png' : null ;
      // let isVegan: boolean= dish.isVegan
      // isVegan === true ? '../../assets/icon/.png' : null ;
      // let isVegetarian: boolean= dish.isVegetarian
      // isVegetarian === true ? '../../assets/icon/.png' : null ;

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
    // dish.isSpicy === true ?  <HomeCard moreInfoSrc={require('../../assets/icon/spicy.png')}/> : null ;
    // dish.isVegan === true  ?  <HomeCard moreInfoSrc={require('../../assets/icon/vegan.png')}/> : null ;
    // dish.isVegetarian === true ?  <HomeCard moreInfoSrc={require('../../assets/icon/vegetarian.png')}/> : null ;
      
    return null;
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