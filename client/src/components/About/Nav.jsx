import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'



function Nav() {

  const open=()=>{
    let first=document.getElementsByClassName("ls")[0];
    let bars=document.getElementById("bars");
    let cross=document.getElementById("cross");
    first.style.display="flex";
    bars.style.display="none";
    cross.style.display="block";

  }

  const close=()=>{
    let first=document.getElementsByClassName("ls")[0];
    let bars=document.getElementById("bars");
    let cross=document.getElementById("cross");
    bars.style.display="block";
    cross.style.display="none";
    first.style.display="none";
  }
  return (
    <nav className='NavBar'>
      <div className="logo"><img src="./manit.png" alt="error" /><span>MANIT</span></div>
      <div className="About">Student Companion</div>
      <div className='ls'>
        <div  className="Login"><a href="">Login</a></div>
        <div className="SignUp"><a href=""> Sign Up<i className="fa-solid fa-arrow-right" id="arrow"></i></a></div>
      </div>
      <div className="ham">
      <i onClick={open} className="fa-solid fa-bars" id="bars"></i> 
      <i onClick={close} className="fa-solid fa-xmark" id="cross"></i>   
      </div>
    </nav>
  );
}

export default Nav;
