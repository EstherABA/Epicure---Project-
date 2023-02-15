import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css'
import Hero from '../Hero/Hero';
import PopularRestaurant from '../Popular Restaurant/PopularRestaurant'
import PopularDish from '../PopularDish/PopularDish';
import MeaningOfIcon from '../Meaning of icon/MeaningOfIcon';
import ChefOfWeek from '../ChefOfWeek/ChefOfWeek';
import AboutUs from '../AboutUs/AboutUs'

const HomePage: React.FC= () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <PopularRestaurant />
            <PopularDish />
            < MeaningOfIcon />
            <ChefOfWeek />
            <AboutUs />
        </div>

    )
}

export default HomePage;