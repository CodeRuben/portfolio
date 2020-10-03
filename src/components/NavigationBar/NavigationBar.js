import React from 'react';
import './NavigationBar.scoped.css';
import code from '../../assets/code.svg';

const NavigationBar = () => {
  return (
    <nav id="home" className="nav-links">
      <img src={code} alt="logo" className="logo" />
      <a href="#contact">Contact</a>
    </nav>
  )
};

export default NavigationBar;