import React from 'react'
import './test.css';

const TestLogin = () => {
  return (
    <div class="container-fluid vh-100 testmaindiv1">

        <div className='testmaindiv'>
        <h1>Login</h1> <br />
        <input class="form-control form-control-lg" type="text" placeholder="Username" aria-label=".form-control-lg example"></input><br />
        <input class="form-control form-control-lg" type="text" placeholder="Password" aria-label=".form-control-lg example"></input> <br />
        <button type="button" class="btn btn-primary">Login</button> <br />
        </div>

    </div>
  )
}

export default TestLogin
