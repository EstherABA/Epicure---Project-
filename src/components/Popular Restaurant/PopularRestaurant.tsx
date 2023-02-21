import React from 'react';
import HomeCard from '../General/CardGeneral/CardGeneral';
import data from '../../epicure.json'
import "./PopularRestaurant.css"
import ButtonG from '../General/ButtonGeneral/ButtonG';



const PopularRestaurant: React.FC = () => {

  const items = data.restaurants.map((item:any) => {
    if (item.isPopular === true) {
      return <HomeCard 
        class='restaurantP-card'
        ImgSrc={require(`../../${item.image}`)} 
        name={item.name} 
        ImgAlt={item.name}  
        chefName={item.chefId} 
        moreInfoSrc={require(`../../assets/icon/star${item.rating}.svg`)}
      />
    }
      return null;
  }
  );


  return (
    <>
      <div className='popular-title-container'>POPULAR RESTAURANT IN EPICURE:</div>
      <div className='popular-container'>
        {items}
      </div>
      <ButtonG  class='all-restaurant-btn' src={require(`../../assets/AllRestaurant.svg`).default}/>
    </>
  )

}
export default PopularRestaurant;
