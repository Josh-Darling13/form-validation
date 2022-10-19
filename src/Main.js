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

const [ucolor, setucolor]=useState('');
const [ecolor, setecolor] = useState('');
const [pcolor, setpcolor] = useState('');
const [cpcolor, setcpcolor] = useState('');


/*
console.log(username + email + password + cpassword);
console.log('I am here.... Now.')
*/
// console.log(password.indexOf('.'));


function validate(){
    if(username.length > 8){
        seteusername('');
        setucolor('#03fc30');
    } else {
        seteusername('User name must be more than 8 letters.');
        setucolor('#fc3503');
    }

    if ((email.indexOf('.') >= 0 && email.indexOf('@') >= 0)===true){
        seteemail('');
        setecolor('#03fc30');

    } else {
        seteemail('Please enter a valid email address.')
        setecolor('#fc3503');
    }

    if ((password.indexOf('.')>=0 && password.length >8)===true){
        setepassword('');
        setpcolor('#03fc30');
    } else {
        setepassword('Passwords must contain a "." and be more than 8 letters.');
        setpcolor('#fc3503');
    }

    if(password === cpassword){
        setecpassword('');
        setcpcolor('#03fc30');
    } else {
        setecpassword('Passwords much match.')
        setcpcolor('#fc3503');
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
                style={{borderColor:ucolor}}
                value={username} 
                onChange={(e)=>{setusername(e.target.value)}}
                ></input>
                <p>{eusername}</p>

                <input 
                type="text" 
                placeholder='email' 
                className='form-control'
                style={{borderColor:ecolor}}
                value={email} 
                onChange={(e)=>{setemail(e.target.value)}}
                ></input>
                <p>{eemail}</p>

                <input 
                type="text" 
                placeholder='password' 
                className='form-control'
                style={{borderColor:pcolor}}
                value={password} 
                onChange={(e)=>{setpassword(e.target.value)}}
                ></input>
                <p>{epassword}</p>


                <input 
                type="text" 
                placeholder='confirm password' 
                className='form-control'
                value={cpassword} 
                style={{borderColor:cpcolor}}
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
