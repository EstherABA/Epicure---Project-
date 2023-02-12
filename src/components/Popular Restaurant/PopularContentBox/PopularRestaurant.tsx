import React from 'react';
import RestaurantCard from '../PopularCard/RestaurantCard';
import data from '../../../epicure.json';
import "./PopularRestaurant.css"
import ButtonG from '../../General/ButtonG';



const PopularRestaurant: React.FC = () => {

  const items = data.restaurants.map((item:any) => {
    if (item.isPopular === true) {
      return <RestaurantCard 
      restaurantImgSrc={require(`../../../assets/images/${item.image}`)} 
      restaurantName={item.name} 
      restaurantImgAlt={item.name}  
      chefName={item.chefId} 
      rating={require(`../../../assets/icon/star${item.rating}.svg`)}
     />
    }
      return null;
  }
  );


  return (
    <>
      <div className='popular-text-container'>POPULAR RESTAURANT IN EPICURE:</div>
      <div className='popular-res'>
        {items}
      </div>
      {/* <ButtonG name= "All restaurants" src=''/> */}
    </>
  )

}
export default PopularRestaurant;

