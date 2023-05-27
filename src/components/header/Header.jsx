import { NavLink } from 'react-router-dom';
import './header.css';

import React, { useState } from 'react'
const Header = () => {
  const [showNav, setShowNav]= useState(false);
  return (
    <div>
      <header>
        <h1>Activator</h1>
        <button className='nav-btn' onClick={()=>setShowNav(!showNav)}><i className="fa-solid fa-bars"></i></button>

{/* this is for small screen  */}
        <ul style={{display:showNav?'block':'none'}}>
          <div className="close-box">
          <button className='nav-btn close-btn' onClick={()=>setShowNav(!showNav)}><i className="fa-solid fa-xmark"></i></button>
          </div>
          <li><NavLink to={'/'}><i className="fa-solid fa-house"></i> Home</NavLink></li>
          <li><NavLink to={'/quotes'}><i className="fa-solid fa-wand-magic-sparkles"></i> Quotes</NavLink></li>
          <li><NavLink to={'/goals'}><i className="fa-solid fa-bolt"></i> Goals</NavLink></li>
          <li><NavLink to={'/my_account'}><i className="fa-solid fa-user"></i> My Account</NavLink></li>
        </ul>


{/* this is for big screen  */}
        <ul>
        <li><NavLink to={'/'}><i className="fa-solid fa-house"></i> Home</NavLink></li>
          <li><NavLink to={'/quotes'}><i className="fa-solid fa-wand-magic-sparkles"></i> Quotes</NavLink></li>
          <li><NavLink to={'/goals'}><i className="fa-solid fa-bolt"></i> Goals</NavLink></li>
          <li><NavLink to={'/my_account'}><i className="fa-solid fa-user"></i> My Account</NavLink></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
