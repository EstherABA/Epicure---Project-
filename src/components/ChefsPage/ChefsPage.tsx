import React from 'react';
import NavBar from '../NavBar/NavBar';
import ChefPortraitCard from '../General/ChefPortraitCard/ChefPortraitCard';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import {useSelector} from "react-redux";
import { RootState } from '../../store/Store';
import './ChefsPage.css'

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

const ChefsPage: React.FC = () => {
    const AllChefs = useSelector(
        (state:RootState) => state.chefs.value
    );

    const chefsCards = AllChefs.map((chef:Chef) =>{
        return  <ChefPortraitCard 
        src={require(`../../${chef.portrait}`)} 
        alt={`${chef.name}`} 
        name={`${chef.name}`} 
        />
    })

    return (
        <div>
        <NavBar />
        <FilterBarByNew />
            <div className='all-chefs'>
                {chefsCards}
            </div>
        </div> 
    );
}
 
export default ChefsPage;