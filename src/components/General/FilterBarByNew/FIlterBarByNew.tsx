import React from 'react';
import ButtonG from '../ButtonGeneral/ButtonG';
import './FilterBarByNew.css'

const FilterBarByNew: React.FC = () => {

    return ( 
        <div className='filter-bar-new'>
            <ButtonG title='All' />
            <ButtonG title='New'/>
            <ButtonG title='Most Popular'/>
            <ButtonG title='Open Now'/>
            <ButtonG title='Map View'/>
        </div>

     );
}
 
export default FilterBarByNew;