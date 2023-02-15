import React from 'react';
import {IDivProps} from '../../../Interfaces';
import "./HomeCard.css";


const RestaurantCard: React.FC<IDivProps> = (props:IDivProps) => {
      
      return (
            <div className= {`card ${props.class}`}>
                  <img className= "card-image" src={props.ImgSrc} alt={props.ImgAlt}/>
                        
                  <div className='name-'>{props.name}</div>
                  <div className='chef-name'>{props.chefName}</div>
                  <img className='star-img' src={props.moreInfoSrc} alt={props.moreInfoAlt} />
                  <div className='ingredients'> {props.ingredients}</div>
                  <div className='price'> 
                        <img src={props.currency}/>
                        {props.price}
                  </div>
                        
            </div>
      )
}

export default RestaurantCard;