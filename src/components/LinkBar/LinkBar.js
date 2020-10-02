import React from 'react';
import './LinkBar.scoped.css';

const Link = (props) => {
  return (
    <a href={props.elementId}>
      <div className={`nav-item-bar ${props.isActive ? 'active' : ''}`}>
        <p>{props.linkName}</p>
      </div> 
    </a>
  ) 
}

const LinkBar = (props) => {
  return (
    <nav className="nav">
      <Link elementId="#home" linkName="Home" isActive={true} />
      <Link elementId="#about" linkName="About" />
      <Link elementId="#experience" linkName="Experience" />
      <Link elementId="#contact" linkName="Contact" />
    </nav>
  )
};

export default LinkBar;