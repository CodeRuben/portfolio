import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkBar = (props) => {
  return (
    <div>
      <nav className="nav">
      <Link to={'/'}>
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Home</p></div> 
      </Link>
      <Link to={'/experience'}>
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Experience</p></div> 
      </Link>
      <Link to={'/education'}>
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Education</p></div> 
      </Link>
      <Link to={'/education'}>
        <div className="nav-item"></div>
        <div className="nav-item-bar"><p>Contact</p></div>
        <div className="nav-item"></div>
      </Link>
      </nav>
    </div>
  )
};

export default LinkBar;