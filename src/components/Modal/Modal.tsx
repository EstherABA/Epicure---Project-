import  React from 'react';
import {useState} from 'react';
import './Modal.css'
import {IModalProps} from '../../Interfaces'
import SingleRestaurant from '../SingleRestaurant/SingleRestaurant';
import CardGeneral from '../General/CardGeneral/CardGeneral';
// import ReactModal from 'react-modal';


const Modal: React.FC<IModalProps> = (props:IModalProps) => {
    const [modalState, setModal] =  useState(false)
    // const toggleModal = () => {
    //     setModal(!modalState);
    // }
    if (props.state) {
        document.body.classList.add('active-modal')
    } else {document.body.classList.remove('active-modal')}
    
    let t = props.dish.filter((x:any)=> {
                    return x.id === props.dishId
                })[0];

    console.log(t, "t");

    return ( <>
        {(props.state) &&(
        <div className="modal">
            <div className="overlay" ></div>
            <div className="modal-content">
                <div>{
                        <CardGeneral 
                        class='dish-card'
                        ImgSrc={require(`../../${t.image}`)}
                        ImgAlt={t.name}
                        name={t.name}
                        ingredients= {t.ingredients}
                        currency= {require('../../assets/icon/ils.svg').default}
                        price= {t.price}
                        // priceLine={LineAroundPrice} 
                        />
                    }
                    <form>
                        <p>Choose a side</p>
                        <ul>
                            <li> white Bread</li>
                            <li> Sticky Rice</li>
                        </ul>
                        <p>Changes</p>
                        <ul>
                            <li> without</li>
                            <li> less spicy</li>
                        </ul>
                        <p>Quantity</p>
                        <p>1</p>
                        <button>ADD TO BAG</button>
                    </form>
                   

                </div>
                <button className='close-modal' onClick={()=>setModal(false)}>
                Close</button>
            </div>
        </div>
        
          )} </> );
}
 
export default Modal;
