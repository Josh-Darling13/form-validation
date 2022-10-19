import React, { useState } from 'react'

export default function Main() {
    // hooks for handling form data.
const [username, setusername]=useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [cpassword, setcpassword] = useState('');

    //hooks for handling errors 
const [eusername, seteusername]=useState('');
const [eemail, seteemail] = useState('');
const [epassword, setepassword] = useState('');
const [ecpassword, setecpassword] = useState('');

console.log(username + email + password + cpassword);
/*
console.log('I am here.... Now.')
*/
// console.log(password.indexOf('.'));
console.log(password.indexOf('.'));

console.log(password.indexOf('.')>=0 && password.length >8);

function validate(){
    if(username.length > 8){
        seteusername('');
    } else {
        seteusername('User name must be more than 8 letters.');
    }

    if ((email.indexOf('.') >= 0 && email.indexOf('@') >= 0)===true){
        seteemail('');
    } else {
        seteemail('Please enter a valid email address.')
    }

    if ((password.indexOf('.')>=0 && password.length >8)===true){
        setepassword('');
    } else {
        setepassword('Passwords must contain a "." and be more than 8 letters.')
    }

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
                <p>{eusername}</p>

                <input 
                type="text" 
                placeholder='email' 
                className='form-control'
                value={email} 
                onChange={(e)=>{setemail(e.target.value)}}
                ></input>
                <p>{eemail}</p>

                <input 
                type="text" 
                placeholder='password' 
                className='form-control'
                value={password} 
                onChange={(e)=>{setpassword(e.target.value)}}
                ></input>
                <p>{epassword}</p>


                <input 
                type="text" 
                placeholder='confirm password' 
                className='form-control'
                value={cpassword} 
                onChange={(e)=>{setcpassword(e.target.value)}}
                ></input>
                <p>{ecpassword}</p>

                <button 
                className='btn btn-success'
                onClick={validate}
                >Submit</button>

            </div>
       </div>
    </div>
  )
}
