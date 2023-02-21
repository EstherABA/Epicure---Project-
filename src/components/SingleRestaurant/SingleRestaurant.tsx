import React from 'react';
import './SingleRestaurant.css';
import CardGeneral from '../General/CardGeneral/CardGeneral';
import { ICard } from '../../Interfaces';
import { useSelector } from "react-redux";
import { RootState } from '../../store/Store';
import { Restaurant, Dish } from '../../Interfaces'
import { useParams } from 'react-router-dom';
import Clock from '../../assets/icon/clock.svg';
import NavBar from '../NavBar/NavBar';
import Footer from '../General/Footer/Footer';


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
        })
        console.log(arrOfDishesOfRest, "ccc");

    const date = new Date();
    const showTime = date.getHours();

    const openingHours = () => {
        if(showTime >= mapRestaurants.openHour  && showTime <= mapRestaurants.closeHour!){
            return <span> <img src={Clock}/> Open Now</span>
        }
        else{return <span>it's Close</span>}}

        console.log(mapRestaurants);
        
  
    return (
        <>
        <NavBar />
    <div className='single-restaurant-container'>
        <img src={require(`../../${mapRestaurants.imageHero}`)} className='restaurant-page-image'></img>
        <div className='info-restaurant-container'>
            <span className='name-'>{mapRestaurants.name}</span>
            <span>{mapRestaurants.chefName}</span>
            {
            
            openingHours()}
        </div>
        <nav className='nav-container'> 
                <span>Break Fast</span>
                <span>Lunch</span>
                <span>Dinner</span>
        </nav>
        
        <div className='dishes-container'>
            {
                arrOfDishesOfRest.map((dish:Dish)=>{
                    return <CardGeneral 
                    class='dish-card'
                    ImgSrc={require(`../../${dish.image}`)}
                    ImgAlt={dish.name}
                    name={dish.name}
                    ingredients= {dish.ingredients}
                    currency= {require('../../assets/icon/ils.svg').default}
                    price= {dish.price}
                    />
                })
            }
        </div>
        <Footer />
        
        
    </div>
    </>
    )
    
     
}
 
export default SingleRestaurant;