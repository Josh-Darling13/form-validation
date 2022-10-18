import React from 'react'


export default function Main() {


    // hooks for handling state data.
const [username, setusername] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [cpassword, setcpassword] = useState('');



  return (
    <div>
       <div className="row justify-content-center">
            <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                <h1>Form Validation</h1>

                <input 
                type="text" 
                placeholder='username' 
                className='form-control'
                value={username} 
                onChange={(e)=>{e.target.value}}
                ></input>
                
                <input 
                type="text" 
                placeholder='email' 
                className='form-control'
                value={email} 
                onChange={(e)=>{e.target.value}}
                ></input>
                
                <input 
                type="text" 
                placeholder='password' 
                className='form-control'
                value={password} 
                onChange={(e)=>{e.target.value}}
                ></input>
                
                <input 
                type="text" 
                placeholder='confirm password' 
                className='form-control'
                value={cpassword} 
                onChange={(e)=>{e.target.value}}
                ></input>
                
                <button className='btn btn-success'>Submit</button>
            </div>
       </div>
    </div>
  )
}
