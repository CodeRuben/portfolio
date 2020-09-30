import React, { useState } from 'react';
import './LinkBar.scoped.css';

const LinkBar = (props) => {
  return (
    <nav className="nav">
      <a href="#home">
        <div className="nav-item active"></div>
        <div className="nav-item-bar active"><p>Home</p></div> 
      </a>
      <a href="#about">
        <div className="nav-item active"></div>
        <div className="nav-item-bar"><p>About</p></div> 
      </a>
      <a href="#experience">
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Experience</p></div> 
      </a>
      <a href="#contact">
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Contact</p></div>
        <div className="nav-item"></div>
      </a>
    </nav>
  )
};

export default LinkBar;