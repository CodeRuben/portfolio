import React from 'react';
import headshot from '../../assets/ruben.png';
import resume from '../../assets/resume.pdf';
import './Home.scoped.css';

const Home = () => {
  return (
    <section>
      <div className="hero col wrapper">
        <p className="name">Ruben Ramirez</p>
        <h1 className="title">Software Developer</h1>
        <img src={headshot} className="headshot" alt="Dev"/>
        <p className="desc">
          I'm a full stack developer working in San Diego. I have a passion for front end development and UI design. I have worked on developing multiple commercial scale web applications with Angular and .Net Core. Want to work together? 
        </p>
        <a href={resume} target='_blank'rel="noopener noreferrer" className="cta">Resume</a> 
      </div>
    </section>
  )
};

export default Home;