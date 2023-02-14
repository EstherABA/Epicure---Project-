import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css'
import Hero from '../Hero/Hero';
import PopularRestaurant from '../Popular Restaurant/PopularBlock/PopularRestaurant';

const HomePage: React.FC= () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <PopularRestaurant/>
            <div className='popular restaurant'></div>
            <div className='popular dish'></div>
        </div>

    )
}

export default HomePage;