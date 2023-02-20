import React from 'react';
// import { RestaurantsState}  from './components/RestaurantsPage/RestaurantsPage'

export interface IButtonProps{
    title?:string,
    src?: string,
    alt?: string,
    class?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export interface IDivProps{
    class?: string,
    ImgSrc?:string,
    ImgAlt?:string,
    name?:string,
    chefName?:string,
    moreInfoSrc?:string ,
    moreInfoAlt?: string,
    ingredients?: string,
    currency?: string,
    price?: number
}

export interface IProperties {
    spicy?: boolean,
    vegan?: boolean,
    vegetarian?: boolean,
}

export interface IChefPortrait {
    src: string,
    alt: string,
    name: string,
    description?: string,
}

export interface RootState {
    restaurants: RestaurantsState;
    chefs: ChefsState;
}

export interface Restaurant {
    id:number,
    name:string,
    image:string,
    chefName:string,
    hours:any,
    address:string ,
    rating: string,
    isPopular: boolean,
    dishes:Array<string>
}

export interface RestaurantsState {
    value: Restaurant[];
}

export interface Chef {
    id:number,
    name:string,
    portrait: string,
    restaurants: Array<string>,
    isChefOfTheWeek:boolean, 
    description: string,
    isNew: boolean,
    viewCount: number,
    mostViewed: boolean,
}

export interface ChefsState {
    value: Chef[];
}
