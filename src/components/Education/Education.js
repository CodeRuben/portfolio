import React from 'react';
import sdsu from '../../assets/sdsu.jpg';

const Education = () => {
  return (
    <section id="education">
      <h4>Education</h4>
      <div className="row">
        <div className="col">
          <h3>San Diego State University</h3>
          <p>Bachelors degree in computer science from SDSU in 2017</p>
          Relevant courses: Data Structures and Algorithms, Android Application Development, Operating Systems, Intro to Web Development, Systems Programming
        </div>
        <div className="col">
          <img src={sdsu} className="school-img" />
        </div>
      </div>
    </section>
  )
};

export default Education;