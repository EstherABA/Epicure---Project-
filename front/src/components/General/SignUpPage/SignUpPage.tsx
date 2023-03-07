import * as React from 'react';
import './SignUpPage.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const SignUpPage:React.FC = () => {
    return ( <>
            <NavBar />
        <div className="sing-up-container">
            <div className="sign-in-titles">
                <div className='sign-in-title'>SIGN UP</div>
                <div className='sign-in-sub-title'>To continue the order, please sign up</div>
            </div>
            <form className='form-sign-in'>
                <div className="filed-holder">
                   <input className='input-sign-in' type='text' id='first-name' required/>
                   <label className='label-sign-in' htmlFor="first-name">First Name</label> 
                </div>
                <div className="filed-holder">
                   <input className='input-sign-in' type='text' id='email' required/>
                   <label className='label-sign-in' htmlFor="last-name">Last Name</label> 
                </div>
                <div className="filed-holder">
                   <input className='input-sign-in' type='text' id='address' required/>
                   <label className='label-sign-in' htmlFor="address">Address</label> 
                </div>
                <div className="filed-holder">
                   <input className='input-sign-in' type='email' id='email' required/>
                   <label className='label-sign-in' htmlFor="email">Email Address</label> 
                </div>
                <div className="filed-holder">
                   <input  className='input-sign-in' type='password' id='password' required/>
                   <label className='label-sign-in' htmlFor="password">Password</label> 
                </div>
                <div className="form-bottom">
                    <button className='btn-form-sign-in' type='submit' >Sign up</button>
                </div>
            </form>
        </div>

    <Footer />
    
    
    </> );
}
 
export default SignUpPage;