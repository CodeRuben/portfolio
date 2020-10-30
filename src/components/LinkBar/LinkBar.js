import React from 'react';
import './LinkBar.scoped.css';

const isBetween = (current, low, high) => {
  return current >= low && current < high;
}

const Link = (props) => {
  const handleLinkClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div onClick={() => handleLinkClick(props.elementRef)}>
      <div className={`nav-item-bar ${props.isActive ? 'active' : ''}`}>
        <p>{props.linkName}</p>
      </div> 
    </div>
  ) 
}

const LinkBar = (props) => {
  const thresholds = [25, 45, 75];
  return (
    <nav className="nav">
      <Link 
        elementRef={props.homeRef} 
        linkName="Home" 
        isActive={isBetween(props.scrollProgress, 0, thresholds[0])} />
      <Link 
        elementRef={props.aboutRef} 
        linkName="About"
        isActive={isBetween(props.scrollProgress, thresholds[0], thresholds[1])} />
      <Link 
        elementRef={props.experienceRef} 
        linkName="Experience"
        isActive={isBetween(props.scrollProgress, thresholds[1], thresholds[2])} />
      <Link 
        elementRef={props.projectsRef} 
        linkName="Projects"
        isActive={isBetween(props.scrollProgress, thresholds[2], 120)} />
    </nav>
  )
};

export default React.memo(LinkBar);