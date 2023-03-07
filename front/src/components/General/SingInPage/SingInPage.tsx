import  React from 'react';
import './SingInPage.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import orIcon from '../../../assets/icon/orIcon.svg';
import { useNavigate } from 'react-router-dom';


const SingInPage: React.FC = () => {
    const navigate = useNavigate();
    return ( <>
        <NavBar />
        <div className="sing-in-container">
            <div className="sign-in-titles">
                <div className='sign-in-title'>SIGN IN</div>
                <div className='sign-in-sub-title'>To continue the order, please sign in</div>
            </div>
            <form className='form-sign-in'>
                <div className="filed-holder">
                   <input className='input-sign-in' type='email' id='email' required/>
                   <label className='label-sign-in' htmlFor="email">Email Address</label> 
                </div>
                <div className="filed-holder">
                   <input  className='input-sign-in' type='password' id='password' required/>
                   <label className='label-sign-in' htmlFor="password">Password</label> 
                </div>
                <div className="form-bottom">
                    <button className='btn-form-sign-in' type='submit' >LOGIN</button>
                    <button className="forget-password">Forget password?</button>
                    <img src={orIcon} />
                    <button className='btn-form-sign-up' type='submit' onClick={()=>navigate("/sign-up")}>Sign Up</button>
                </div>
            </form>
        </div>

    <Footer />
    </> );
}
 
export default SingInPage;