import React from 'react';
import {IDivProps} from '../../Interfaces';
import StarFill from '../../assets/icon/Star1.svg'
import StarEmpty from '../../assets/icon/Star5.svg'
import data from '../../../epicure.json';


const RestaurantCard: React.FC<IDivProps> = (props:IDivProps) => {

    // const renderSwitch = ()=> {
    //     switch({props.ratingSrc}) {
    //       case 1:
    //         return <img src={StarFill}/>;
    //       case 2:
    //         return <img src={StarEmpty}/>;
    //     }
    //   };
      
      return (
            <div className= {`${props.class}`}>
                  <img src={props.restaurantImgSrc} alt={props.restaurantImgAlt}/> 
                  <div>{props.restaurantName}</div>
                  <div>{props.chefName}</div>
                  <div>{this.renderSwitch({props.ratingSrc})} </div>
            </div>
      )
}

export default RestaurantCard;