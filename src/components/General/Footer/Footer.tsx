import React from 'react';
import ButtonG from '../ButtonGeneral/ButtonG';
import './Footer.css'

const Footer: React.FC = () => {
    return ( 
        <div className='footer-container'>
            <ButtonG title='Contact Us'/>
            <ButtonG title='Term Of Use'/>
            <ButtonG title='Privacy Policy'/>
        </div>
     );
}
 
export default Footer;