import * as React from 'react';
import './SignUpPage.css'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useState, useEffect } from 'react';

const SignUpPage:React.FC = () => {
  const [infoFromUser, setUerData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "", 
  })
  
  useEffect(() => {
    console.log(infoFromUser, "infoFromUser state");
    fetch('http://localhost:8000/api/users/register', {
      method: 'POST',
      headers: {'Content-type': 'application/json; charset=utf-8'},
      body: JSON.stringify(infoFromUser)
    })
    .then((response)=> response.json())
    .then((data) => {
      console.log(data, ",data after post");
    })
    .catch((err) => {
      console.log(err.message,"error");
    });
  },[infoFromUser]);

  const handleSubmit = (evt:any)=> {
    evt.preventDefault();
    setUerData({
      firstName: evt.target[0].value,
      lastName: evt.target[1].value,
      address: evt.target[2].value,
      email: evt.target[3].value,
      password: evt.target[4].value 
    })
 
  }


    return ( <>
            <NavBar />
        <div className="sing-up-container">
            <div className="sign-in-titles">
                <div className='sign-in-title'>SIGN UP</div>
                <div className='sign-in-sub-title'>To continue the order, please sign up</div>
            </div>

            <form className='form-sign-in' onSubmit={handleSubmit}>
                <div className="filed-holder">
                   <input className='input-sign-in' name='first-name' type='text' id='first-name'  required/>
                   <label className='label-sign-in' htmlFor="first-name">First Name</label> 
                </div>
                <div className="filed-holder">
                   <input className='input-sign-in'  type='text' id='last-name' required/>
                   <label className='label-sign-in' htmlFor="last-name">Last Name</label> 
                </div>
                <div className="filed-holder">
                   <input className='input-sign-in'  type='text' id='address' required/>
                   <label className='label-sign-in' htmlFor="address">Address</label> 
                </div>
                <div className="filed-holder">
                   <input className='input-sign-in' type='email' id='email' required/>
                   <label className='label-sign-in' htmlFor="email">Email Address</label> 
                </div>
                <div className="filed-holder">
                   <input  className='input-sign-in'  type='password' id='password' required/>
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