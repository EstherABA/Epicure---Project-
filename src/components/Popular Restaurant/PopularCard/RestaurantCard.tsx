import React from 'react';
import {IDivProps} from '../../../Interfaces';
import "./RestaurantCard.css";
// import data from '../../../epicure.json';


const RestaurantCard: React.FC<IDivProps> = (props:IDivProps) => {
      
      return (
            <div className= {`card ${props.class}`}>
                  <img className= "restaurant-image" src={props.restaurantImgSrc} alt={props.restaurantImgAlt}/>
                  <div className='all-res-data'>
                        <div className='name-restaurant'>{props.restaurantName}</div>
                        <div className='chef-restaurant'>{props.chefName}</div>
                        <img  src={props.rating}  />
                  </div>
            </div>
      )
}

export default RestaurantCard;