import React from 'react'
import  { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const CustomerLogin = () => {

const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');

let validUserName = 'rahul';
let validPassword = '123456';

let navigate = useNavigate();

const validation=()=>{
    if(userName==validUserName && password==validPassword){
        navigate('/Customer')
    }
    else{
        alert("Invalid details...")
    }
}

  return (
    <div class = "container-fluid vh-100 mainadmin">
    <img className='oyologo1' src="https://hospitalitybizindia.com/wp-content/uploads/2022/08/OYO_Rooms_logo-992x680-1.webp" alt="" width={150} />
    <div className='login1'>
    <h1>Customer Login</h1> <br />
    <input onChange={(e)=>setUserName(e.target.value)} class="form-control" type="text" placeholder="User Name" aria-label="default input example"></input> <br />
    <input onChange={(e)=>setPassword(e.target.value)} class="form-control" type="text" placeholder="Password" aria-label="default input example"></input> <br />
    <button onClick={()=>validation()} type="button" class="btn btn-primary">Login</button> <br />
    </div>
  </div>
  )
}

export default CustomerLogin
