import React from 'react';
import './NavBar.css'
import ButtonG from '../ButtonGeneral/ButtonG'
import logoEpicure from '../../../assets/icon/logoEpicure.svg'
import Search from '../../../assets/icon/Search.svg'
import Shop from '../../../assets/icon/Shop.svg'
import User from '../../../assets/icon/User.svg'
import { useNavigate } from 'react-router-dom';


const NavBar: React.FC = () => {
    const navigate = useNavigate();
    return (

        <div className='nav-bar'> 
            <div className='side left'>
                <ButtonG  class='logo' src={logoEpicure} alt="logo" onClick={()=> navigate("/")}/>
                <ButtonG  title='Restaurants' onClick={()=> navigate("/restaurants")}/>
                <ButtonG  title='Chefs' onClick={()=> navigate("/chefs")} />
            </div>

            <div className='side right'>
                <div className='search-bar'>
                    <input className='input' type='text' placeholder='  Search for restaurant cuisine, chef'/>
                    <ButtonG class='search-icon' src={Search} alt="search"/>
                </div>
                    <ButtonG src={User} alt="user"/>
                    <ButtonG src={Shop} alt="shop"/>
            </div>
        </div>

    )
}

export default NavBar;