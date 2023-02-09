import React from "react";
import "./Hero.css";
import ButtonG from '../General/ButtonG'
import Search from '../../assets/icon/Search.svg'


const Hero: React.FC = () => {
      return (
        <>
        <div className="hero-container">
            <div className="hero-text-box">
                Epicure works with the top
                chef restaurants in Tel Aviv

                <div className="search-input">
                    <ButtonG src={Search} alt="search"/>
                    <input placeholder=" Search for restaurant cuisine, chef"/> 
                </div>
            </div>
        </div>
        </>
      )
    }

export default Hero;