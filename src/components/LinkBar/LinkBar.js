import React, { useState } from 'react';

const LinkBar = (props) => {
  return (
    <nav className="nav">
      <a href="#home">
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Home</p></div> 
      </a>
      <a href="#experience">
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Experience</p></div> 
      </a>
      <a href="#education">
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Education</p></div> 
      </a>
      <a href="#education">
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Contact</p></div>
        <div className="nav-item"></div>
      </a>
    </nav>
  )
};

export default LinkBar;