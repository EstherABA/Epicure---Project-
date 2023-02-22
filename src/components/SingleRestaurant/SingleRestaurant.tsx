import React from 'react';
import './SingleRestaurant.css';
import CardGeneral from '../General/CardGeneral/CardGeneral';
import { ICard } from '../../Interfaces';
import { useSelector } from "react-redux";
import { RootState } from '../../store/Store';
import { Restaurant, Dish } from '../../Interfaces'
import { useParams } from 'react-router-dom';
import Clock from '../../assets/icon/clock.svg';
import NavBar from '../General/NavBar/NavBar';
import Footer from '../General/Footer/Footer';
import ButtonG from '../General/ButtonGeneral/ButtonG';
import LineAroundPrice from '../../assets/icon/LineAroundPrice.svg'



const SingleRestaurant: React.FC = () => {
    const specificIdForRest = useParams();
    let arrOfDishesOfRest: Array<Dish> = [];

    const allRestaurants = useSelector(
        (state:RootState) => state.restaurants.value
        );
    const allDishes = useSelector(
        (state:RootState) => state.dishes.value
    );
        
    const mapRestaurants = allRestaurants.filter((restaurant:Restaurant) =>{
        return restaurant.id === Number(specificIdForRest.id)
    })[0];
        
    mapRestaurants.dishes.map((dishIdFromArrInRest:number) =>{
        allDishes.filter((dishObject:Dish)=> {
        if(dishObject.id === dishIdFromArrInRest) {
            arrOfDishesOfRest.push(dishObject)
            }
        });
    });

    const date = new Date();
    const showTime = date.getHours();
    const openingHours = () => {
        if(showTime >= mapRestaurants.openHour  && showTime <= mapRestaurants.closeHour!){
            return <div> <p className='open-now'> <img src={Clock}/> Open now</p></div>
            }
        else {return <p>it's Close</p>}}

    const dishesPresentInPage = arrOfDishesOfRest.map((dish:Dish)=>{
        return <CardGeneral 
        class='dish-card'
        ImgSrc={require(`../../${dish.image}`)}
        ImgAlt={dish.name}
        name={dish.name}
        ingredients= {dish.ingredients}
        currency= {require('../../assets/icon/ils.svg').default}
        price= {dish.price}
        priceLine={LineAroundPrice}
        />
    })
        
  
    return (
        <>
            <NavBar />
            <div className='single-restaurant-container'>
                <img src={require(`../../${mapRestaurants.imageHero}`)} className='restaurant-page-image'></img>
                <div className='info-restaurant'>
                    <span className='rest-name'>{mapRestaurants.name}</span>
                    <span>{mapRestaurants.chefName}</span>
                </div>
                    {openingHours()}
                <nav className='nav-container'> 
                    <ButtonG title='Breakfast'/>
                    <ButtonG title='Lunch'/>
                    <ButtonG title='Dinner'/>
                </nav>
                
                <div className='dishes-container'>
                    {dishesPresentInPage}
                </div>
                <Footer />
            </div>
        </>
    )
    
     
}
 
export default SingleRestaurant;