

import React from 'react'
import './Login.css';
export default function Login() {
  return (
    <>
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" name="" id="" placeholder='Username'required />
                    <i class='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" name="" id="" placeholder='Password'required />
                    <i class='bx bx-lock'></i>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" name="" id="" />Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className='btn'>Login</button>
                <div className="register-link">
                    <p>Dont have an account? <a href="#">Register</a></p>
                </div>

            </form>
        </div>
    </>
  )
}
