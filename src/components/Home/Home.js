import React from 'react';
import headshot from '../../assets/person.jpg';

const Home = () => {
  return (
    <section>
      <div className="hero col wrapper">
        <p className="name">Ruben Ramirez</p>
        <h1>Software Developer</h1>
        <img src={headshot} className="headshot" alt="Dev"/>
        <p className="desc"> I'm a full stack developer working in San Diego. I have a passion for front end development and UI design. I have worked on developing multiple commercial scale web applications with Angular and .Net Core. Want to work together? </p>
        <button className="cta">Contact</button> 
      </div>
    </section>
  )
};

export default Home;