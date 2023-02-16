import React from 'react';
import HomeCard from '../General/HomeCard/HomeCard';
import './ChefOfWeek.css';
import ChefPortraitCard from '../General/ChefPortraitCard/ChefPortraitCard';
import data from '../../epicure.json'
// import Restaurants from '../Restaurant/Resturant';
import { forEachChild } from 'typescript';

const ChefOfWeek: React.FC = () => {
    const chefs = data.chefs.map((chef) => { 
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
                        chef.restaurants.map((restaurant)=> <HomeCard ImgSrc={require(`../../${data.restaurants[3].image}`)} ImgAlt={restaurant} name={restaurant} />)
                    }
                </div>
            </div>) : (<></>)
        )
    });

    return (  
        <div>
            <p className='popular-title-container'>CHEF OF THE WEEK:</p>
            <div>
                {chefs}
            </div>
        </div>
    );
}
 
export default ChefOfWeek ;