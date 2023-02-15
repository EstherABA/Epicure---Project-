import * as React from 'react';
import './ChefPortraitCard.css';
import { IChefPortrait } from '../../../Interfaces';


const ChefPortraitCard: React.FC <IChefPortrait> = (props:IChefPortrait ) => {
    return ( 
        <div className='chef-container'>
            <div className='chef-img-box'>
            <img className='chef-img' src={props.src} alt={props.alt} />
            <p className='chef-name'> {props.name}</p>
            </div>
            <div className='chef-description'> {props.description} </div>
        </div>
     );
}
 
export default ChefPortraitCard;