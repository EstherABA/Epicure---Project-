import React from 'react';
import ButtonG from '../ButtonGeneral/ButtonG';
import './FilterBarByPrice.css'
import priceRating from '../../../assets/icon/priceRating.svg'
import rating from '../../../assets/icon/rating.svg'
import distance from '../../../assets/icon/distance.svg';


const FilterBarByPrice: React.FC = () => {
    return ( 
        <div className='filter-bar-Price'>
            <ButtonG class='filter-bar-Price-btn' src={priceRating}/>
            <ButtonG class='filter-bar-Price-btn' src={rating}/>
            <ButtonG class='filter-bar-Price-btn' src={distance}/>
          
        </div>

     );
}
 
export default FilterBarByPrice;