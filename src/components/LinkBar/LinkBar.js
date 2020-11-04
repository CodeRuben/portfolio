import React from 'react';
import './LinkBar.scoped.css';
import { pages } from '../../enums';

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
  return (
    <nav className="nav">
      <Link 
        elementRef={props.homeRef} 
        linkName="Home" 
        isActive={props.activeLink === pages.HOME} />
      <Link 
        elementRef={props.aboutRef} 
        linkName="About"
        isActive={props.activeLink === pages.ABOUT} />
      <Link 
        elementRef={props.experienceRef} 
        linkName="Experience"
        isActive={props.activeLink === pages.EXPERIENCE} />
      <Link 
        elementRef={props.projectsRef} 
        linkName="Projects"
        isActive={props.activeLink === pages.PROJECTS} />
    </nav>
  )
};

export default React.memo(LinkBar);