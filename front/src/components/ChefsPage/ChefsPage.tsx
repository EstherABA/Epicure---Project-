import React from 'react';
import NavBar from '../General/NavBar/NavBar';
import ChefPortraitCard from '../General/ChefPortraitCard/ChefPortraitCard';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import Footer from '../General/Footer/Footer';
import {useSelector} from "react-redux";
import { RootState } from '../../store/Store';
import { IChef } from '../../Interfaces';
import axios from 'axios';
import './ChefsPage.css'



const ChefsPage: React.FC = () => {
    const AllChefs = useSelector(
        (state:RootState) => state.chefs.value
    );
    
    const deleteRequest = async (id:number) => {
        try {
            await axios.delete(`api/chefs/${id}`)
            //update the state on redux
        }
        catch (error) {
        // Handle any errors that may occur
        console.log(`Error deleting object with ID ${id}: ${error}`);
      }
        


    }
    const chefsCards = AllChefs.map((chef:IChef) =>{
        return  <ChefPortraitCard 
        src={require(`../../${chef.portrait}`)} 
        alt={`${chef.name}`} 
        name={`${chef.name}`} 
        deleteCardBtn = {"delete chef"}
        idDescription= {"none-description"}
        onClickDelete= {()=>deleteRequest(chef.id)}
        />
    })

    return (
        <div>
        <NavBar />
        <FilterBarByNew />
            <div className='all-chefs'>
                {chefsCards}
            </div>
        <Footer />
        </div> 
    );
}
 
export default ChefsPage;