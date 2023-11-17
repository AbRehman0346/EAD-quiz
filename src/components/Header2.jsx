import React from "react";
import Backery_Logo from "./../images/bakery_logo.png";

function Header2() {
  return (
    <div className='d-flex justify-content-between m-5 '>
      <img className='logo' src={Backery_Logo} alt='' />
      <ul className='navbar-list d-flex justify-content-center align-items-center'>
        <li className='ml-3 navbar-text'>Home</li>
        <li className='ml-3 navbar-text'>Menu</li>
        <li className='ml-3 navbar-text'>About Us</li>
        <li className='ml-3 navbar-text'>Contact</li>
      </ul>
    </div>
  );
}

export default Header2;
