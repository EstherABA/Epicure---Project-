import React from 'react';
import './NavBar.css'
import ButtonG from '../General/ButtonG'
import logoEpicure from '../../assets/logoEpicure.svg'
import Search from '../../assets/icon/Search.svg'
import Shop from '../../assets/icon/Shop.svg'
import User from '../../assets/icon/User.svg'


const NavBar: React.FC = () => {
    return (
        <div className='nav-bar'> 
            <div className='side left'>
                <ButtonG src={logoEpicure} alt="logo"/>
                <ButtonG name="Restaurants"/>
                <ButtonG name="Chefs" />
            </div>

            <div className='side right'>
                <div className='inputWithButton'>
                    <input type='text' />
                    <ButtonG src={Search} alt="search"/>
                </div>
                    <ButtonG src={Shop} alt="search"/>
                    <ButtonG src={User} alt="search"/>
            </div>
        </div>

    )
}

export default NavBar;