import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email, password)


    useCallback(() =>{
        
    }, password)


    const signInHandler = (e) =>{
      e.preventDefault()
    }

    const registerHandler = (e) =>{
      e.preventDefault();

      
    }




  return (
    <div className='login'>

        <Link to = "/">

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png " alt="" className='login__logo' />

        </Link>

        <div className="login__container">
                <h1>Sign in</h1>

                <form action="">

                    <h5>Email</h5>
                    <input type="text" onChange={({target : {value}}) => setEmail(value)}/>

                    <h5>Password</h5>
                    <input type="text" onChange={({target : {value}}) => {setPassword(value)}} />

                    <button className='login__signInButton' onClick={signInHandler}>Sign In</button>

                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    <button className='login__registerButton' onClick={registerHandler}>Create Your Amazon Account</button>



                </form>
        </div>

    </div>
  )
}

export default Login