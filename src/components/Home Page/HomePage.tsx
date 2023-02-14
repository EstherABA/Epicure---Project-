import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css'
import Hero from '../Hero/Hero';
import PopularRestaurant from '../Popular Restaurant/PopularRestaurant'
import PopularDish from '../PopularDish/PopularDish';

const HomePage: React.FC= () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <PopularRestaurant/>
            <PopularDish />
            <div className='popular dish'></div>
        </div>

    )
}

export default HomePage;