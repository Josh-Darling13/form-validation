import React, { useState } from 'react'

export default function Main() {
    // hooks for handling form data.
const [username, setusername]=useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [cpassword, setcpassword] = useState('');

console.log(username + email + password + cpassword);
/*
console.log('I am here.... Now.')
*/

function validate(){
    console.log(username + email + password + cpassword);
};

  return (
    <div>
       <div className="row justify-content-center">
            <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                <h1>Form Validation</h1>

                <input type="text" 
                placeholder='username' 
                className='form-control' 
                value={username} 
                onChange={(e)=>{setusername(e.target.value)}}
                ></input>
                <p>Mush be more than 8 letters</p>

                <input 
                type="text" 
                placeholder='email' 
                className='form-control'
                value={email} 
                onChange={(e)=>{setemail(e.target.value)}}
                ></input>

                <input 
                type="text" 
                placeholder='password' 
                className='form-control'
                value={password} 
                onChange={(e)=>{setpassword(e.target.value)}}
                ></input>


                <input 
                type="text" 
                placeholder='confirm password' 
                className='form-control'
                value={cpassword} 
                onChange={(e)=>{setcpassword(e.target.value)}}
                ></input>

                <button 
                className='btn btn-success'
                onClick={validate}
                >Submit</button>

            </div>
       </div>
    </div>
  )
}
