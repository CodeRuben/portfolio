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

const isBetween = (current, low, high) => {
  return current >= low && current < high;
}

const LinkBar = (props) => {
  const thresholds = [25, 50, 90];
  return (
    <nav className="nav">
      <Link elementId="#home" linkName="Home" 
        isActive={isBetween(props.scrollProgress, 0, thresholds[0])} />
      <Link elementId="#about" linkName="About"
        isActive={isBetween(props.scrollProgress, thresholds[0], thresholds[1])} />
      <Link elementId="#experience" linkName="Experience"
        isActive={isBetween(props.scrollProgress, thresholds[1], thresholds[2])} />
      <Link elementId="#contact" linkName="Contact"
        isActive={isBetween(props.scrollProgress, thresholds[2], 120)} />
    </nav>
  )
};

export default React.memo(LinkBar);