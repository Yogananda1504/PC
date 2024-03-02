import React from 'react'
import './Nav.css';
function Nav() {
  return (

    <nav className='NavBar'>
      <div className="logo">logo</div>
      <div className="About">About</div>
      <div className='ls' >
        <div className="Login">Login</div>
        <div className="SignUp">SignUp</div>
      </div>


    </nav>

  )
}

export default Nav