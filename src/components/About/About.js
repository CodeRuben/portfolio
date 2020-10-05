import React from 'react';
import './About.scoped.css';
import angular from '../../assets/angular.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.png';
import typescript from '../../assets/typescript.png';
import javascript from '../../assets/javascript.png';
import css from '../../assets/css.png';
import git from '../../assets/git.png';
import net from '../../assets/net.png';
import linux from '../../assets/linux.png';
import csharp from '../../assets/csharp.png';
import java from '../../assets/java.png';

const Education = (props) => {
  return (
    <div className="container" ref={props.elementRef}>
      <div className="wrapper">
        <h2 className="title">About Me</h2>
        <div className="row">
          <div className="col text-col">
            <p className="text-content">
              Hello, I'm a software engineer based in San Diego. I received a Bachelor's Degree in Computer Science from SDSU in 2017 and since then I have gotten three years of experience. I've primarily worked as a full stack developer, having developed large scale web applications with some of the most modern technologies in the field. I have a passion for Front-end Development and have aspirations of also working as a UI Designer. 
            </p>
          </div>
          <div className="col icon-col">
            <div className="skill-block">
              <div className="skill-container">
                <img src={angular} alt="angular" />
                <img src={react} alt="react" />
                <img src={sql} alt="sql" />
                <img src={typescript} alt="typescript" />
                <img src={javascript} alt="javascript" />
                <img src={git} alt="git" />
                <img src={css} alt="css" />
                <img src={linux} alt="linux" />
                <img src={net} alt="net" />
                <img src={csharp} alt="csharp" />
                <img src={java} alt="java" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Education;