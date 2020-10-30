import React from 'react';
import arrow from '../../assets/upload.svg';
import envelope from '../../assets/envelope.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import './Contact.scoped.css';

const Contact = (props) => {
  const email = 'ruben1991@protonmail.com';
  const githubUrl = 'https://github.com/CodeRuben';
  const linkedinUrl = '';

  const handleHomeClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="contact" ref={props.elementRef}>
      <div className="top-btn" onClick={() => handleHomeClick(props.homeRef)}>
        <img src={arrow} alt="arrow" className="arrow-icon" />
      </div>
      <div className="wrapper btn-row">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="link-icon" />
        </a>
        <a href={`mailto:${email}`}>
          <img src={envelope} alt="email" className="link-icon" /> 
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className="link-icon" />
        </a>
      </div>
      <p className="copyright">Ruben Ramirez &#169; 2020</p>
    </div>
  )
};

export default Contact;