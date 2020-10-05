import React from 'react';
import './NavigationBar.scoped.css';
import code from '../../assets/code.svg';

const NavigationBar = (props) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="nav-links" ref={props.elementRef}>
      <img src={code} alt="logo" className="logo" />
      <div className="link" onClick={() => handleClick(props.contactRef)}>Contact</div>
    </nav>
  )
};

export default NavigationBar;