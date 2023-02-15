import React from 'react';

export interface IButtonProps{
    title?:string,
    src?: string,
    alt?: string,
    class?: string
    
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

