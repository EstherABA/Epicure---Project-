import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css'
import Hero from '../Hero/Hero'

const HomePage: React.FC= () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <div className='hero'></div>
            <div className='popular restaurant'></div>
            <div className='popular dish'></div>
        </div>

    )
}

export default HomePage;