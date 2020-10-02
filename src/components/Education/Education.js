import React from 'react';
import './Education.scoped.css';

const Education = () => {
  return (
    <div className="container" id="about">
      <div className="wrapper">
        <h2 className="title">About Me</h2>
        <div className="row">
          <div className="col text-col">
            <p className="text-content">
              Hello, I'm a software engineer based in San Diego. I received a Bachelor's Degree in Computer Science from SDSU in 2017 and since then I have gotten three years of experience. I've primarily worked as a full stack developer, having developed large scale web applications with some of the most modern technologies in the field. I have a passion for Front-end Development and have aspirations of also working as a UI Designer. 
            </p>
          </div>
          <div className="col">
            <div className="skill-block">
              <h2 className="card-header">Skills</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Education;