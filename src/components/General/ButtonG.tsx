import React from 'react';
import "./ButtonG.css";


interface Iprops{
    name?:string,
    src?: string,
    alt?: string,
    class?: string 
}

const ButtonG: React.FC<Iprops> = (props:Iprops) => {
      return (
            <button className= {`button  ${props.class}`}>
                  <img src={props.src} alt={props.alt}/> 
                  {props.name}
            </button>
      )
}
export default ButtonG;