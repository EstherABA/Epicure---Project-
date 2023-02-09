import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css'

const HomePage: React.FC= () => {
    return (
        <div>
            <NavBar />
            <div className='hero'></div>
            <div className='popular restaurant'></div>
            <div className='popular dish'></div>
        </div>

    )
}

export default HomePage;