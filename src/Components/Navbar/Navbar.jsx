import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar({menu,handleClick}) {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div onClick={handleClick} className={`menu ${menu===true?'active':''}`}>
        <div className="icon"></div>
      </div>
    </header>
  );
}

export default Navbar;
