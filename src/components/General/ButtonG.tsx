import React from 'react';
import "./ButtonG.css";
import {IButtonProps} from '../../Interfaces'


const ButtonG: React.FC<IButtonProps> = (props:IButtonProps) => {
      return (
            <button className= {`button  ${props.class}`}>
                  {props.title}
                  <img className={props.imgClass} src={props.src} alt={props.alt}/> 
            </button>
      )
}
export default ButtonG;