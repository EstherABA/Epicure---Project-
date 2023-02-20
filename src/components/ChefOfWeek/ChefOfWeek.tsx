import React from 'react';
import HomeCard from '../General/HomeCard/HomeCard';
import './ChefOfWeek.css';
import ChefPortraitCard from '../General/ChefPortraitCard/ChefPortraitCard';
import data from '../../epicure.json';
import { Chef, RootState } from '../../Interfaces'; 
import { useSelector } from 'react-redux';



const ChefOfWeek: React.FC = () => {
    const allChefs = useSelector(
        (state:RootState) => state.chefs.value
    );
    const chefs = allChefs.map((chef:Chef) => { 
        return ( 
           chef.isChefOfTheWeek ? (
            <div className='chefs-data-container'>
                <ChefPortraitCard 
                    src={require(`../../${chef.portrait}`)} 
                    alt={`${chef.name}`} 
                    name={`${chef.name}`} 
                    description={`${chef.description}`} 
                    />
                <p className=' title-of-the-week'>{`${chef.name} Restaurants:` } </p>
                <div className='chef-restaurants'>
                    { 
                        chef.restaurants.map((restaurant:any)=> <HomeCard ImgSrc={require(`../../${data.restaurants[6].image}`)} ImgAlt={restaurant} name={restaurant} />)
                    }
                </div>
            </div>) : (null)) });
                                
           

    return (  
        <div>
            <p className='popular-title-container'>CHEF OF THE WEEK:</p>
            <div>
                {chefs}
            </div>
        </div>
    );
}
 
export default ChefOfWeek;