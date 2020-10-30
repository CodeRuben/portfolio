import React from 'react';
import './Projects.scoped.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = (props) => {
  return (
    <div className="container" ref={props.elementRef}>
      <div className="wrapper">
        <h2 className="title">Recent Work</h2>
        <div className="-top-decorator"></div>
        <div className="center">
          <ProjectCard /> 
        </div>
        <div className="-bottom-decorator"></div>
      </div>
    </div>
  )
};

export default React.memo(Projects);