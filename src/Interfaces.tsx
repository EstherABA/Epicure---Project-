import React from 'react';

export interface IButtonProps{
    title?:string,
    src?: string,
    alt?: string,
    class?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export interface ICard{
    class?: string,
    ImgSrc?:string,
    ImgAlt?:string,
    name?:string,
    chefName?:string,
    moreInfoSrc?:string ,
    moreInfoAlt?: string,
    ingredients?: string,
    currency?: string,
    price?: number,
    priceLine?:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IProperties{
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
    imageHero?:string,
    chefName:string,
    hours:any,
    address:string ,
    rating: string,
    isPopular: boolean,
    dishes:Array<number>,
    openHour: number,
    closeHour: number,
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

export interface Dish {
    id:number,
    name:string,
    image: string,
    price: number,
    isSignatureDish:boolean, 
    chefId: string,
    restaurant: string,
    ingredients: string,
    properties: Array<string>,
    optionalSides: Array<string>,
    optionalChanges: Array<string>,
}
export interface DishesState {
    value: Dish[];
}
