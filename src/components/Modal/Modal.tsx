import  React from 'react';
import {useState} from 'react';
import './Modal.css'
import {IModalProps} from '../../Interfaces'
import SingleRestaurant from '../SingleRestaurant/SingleRestaurant';
import CardGeneral from '../General/CardGeneral/CardGeneral';
import LineAroundPrice from '../../assets/icon/LineAroundPrice.svg'

const Modal: React.FC<IModalProps> = (props:IModalProps) => {
    const [modalState, setModal] =  useState(false)
    
    if (props.state) {
        document.body.classList.add('active-modal')
    } else {document.body.classList.remove('active-modal')}
    
    let chosenDish = props.dish.filter((x:any)=> {
                    return x.id === props.dishId
                })[0];

    return ( <>
        {(props.state) &&(
        <div className="modal">
            <div className="overlay" ></div>
            <div className="modal-content">
                <div>{
                        <CardGeneral 
                        class='dish-modal'
                        ImgSrc={require(`../../${chosenDish.image}`)}
                        ImgAlt={chosenDish.name}
                        name={chosenDish.name}
                        ingredients= {chosenDish.ingredients}
                        currency= {require('../../assets/icon/ils.svg').default}
                        price= {chosenDish.price}
                        priceLine={LineAroundPrice} 
                        />
                    }
                    <form className='dish-modal-form'>
                        <div className='form-part'>
                            <p>Choose a side</p>
                             <input type="radio" value="white Bread"></input>
                             <label>White Bread</label>
                            <input type="radio" value="Sticky Rice"></input>
                            <label>Sticky Rice</label>
                        </div>    
                        <div>
                            <p>Changes</p>
                            <input type="checkbox" value="without"></input>
                            <label>without</label>
                            <input type="checkbox" value="less spicy"></input>
                            <label>less spicy</label>
                        </div>    
                        <div>
                            <p>Quantity</p>
                            <p>1</p>
                            <button className='add-to-bag'>ADD TO BAG</button>
                        </div>    
                    </form>
                   

                </div>
                <button className='close-modal' onClick={()=>setModal(false)}>
                Close</button>
            </div>
        </div>
        
          )} </> );
}
 
export default Modal;
