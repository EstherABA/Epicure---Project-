import  React from 'react';
import {useState} from 'react';
import ReactModal from 'react-modal';


const Modal: React.FC = () => {
    const [modal, setModal] =  useState(false)
    const toggleModal = () => {
        setModal(!modal);
    }

return ( <>

    </> );
}
 
export default Modal;