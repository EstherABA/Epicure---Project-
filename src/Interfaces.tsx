import React from 'react';

export interface IButtonProps{
    name?:string,
    src?: string,
    alt?: string,
    class?: string,
}

export interface IDivProps{
    class?: string,
    restaurantImgSrc?:string,
    restaurantImgAlt:string,
    restaurantName:string,
    chefName:string,
    rating?:string,
}

