import React from 'react';
import {ICard} from '../../../Interfaces';
import "./CardGeneral.css";


const RestaurantCard: React.FC<ICard> = (props:ICard) => {
      
      return (
            <button className= {`card ${props.class}`} onClick={props.onClick}>
                  <img className= "card-image" src={props.ImgSrc} alt={props.ImgAlt}/>
                        
                  <div className='name-'>{props.name}</div>
                  <div>{props.chefName}</div>
                  <img className='star-img' src={props.moreInfoSrc} alt={props.moreInfoAlt} />
                  <div className='ingredients'> {props.ingredients}</div>
                  <div className='price'> 
                  <img src={props.currency}/>
                        {props.price}
                  </div>
                        
            </button>
      )
}

export default RestaurantCard;